// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import QrCode from "qrcode";
import absoluteUrl from "next-absolute-url/index";

export default async function handler(req, res) {
  const { id, width } = req.query;
  const { origin } = absoluteUrl(req);
  const url = `${origin}/dates/${id}`;
  const qr = await QrCode.toBuffer(url, {
    type: "png",
    width,
    margin: 2,
    errorCorrectionLevel: "L",
  });
  res.setHeader("Content-disposition", `attachment; filename=${id}.png`);
  res.status(200).send(qr);
}
