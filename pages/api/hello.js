// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudinary = require("cloudinary").v2;

export default function handler(qqqqqqq, ressssssss) {
  cloudinary.config({
    cloud_name: "dfmyeez0x",
    api_key: "829712165743122",
    api_secret: "SBBzbgGvGXwmPJVQjzbXwAaqUvo",
  });

  // Upload

  const res = cloudinary.uploader.upload(
    "C:\fakepath\s_7CDCEC7CCF4E7B8C9150FAFAE3290B95519DC442CDAEA595728964F90DEB97B1_1675165267550_image.png",
    { public_id: "olympic_flag1" }
  );

  res
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
    })
    .catch((err) => {
      console.log(err);
    });

  // Generate
  const url = cloudinary.url("olympic_flag1", {
    width: 100,
    height: 150,
    Crop: "fill",
  });

  // The output url
  console.log(url);
  // https://res.cloudinary.com/<cloud_name>/image/upload/h_150,w_100/olympic_flag1
  ressssssss.status(200).json({ name: "John Doe" });
}
