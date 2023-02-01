// // const cloudinary = require("cloudinary").v2;
// import cloudinary from "cloudinary";

// // cloudinary.config({
// //   cloud_name: "dfmyeez0x",
// //   api_key: "829712165743122",
// //   api_secret: "SBBzbgGvGXwmPJVQjzbXwAaqUvo",
// // });
// cloudinary.v2.config({
//     cloud_name: "dfmyeez0x",
//     api_key: "829712165743122",
//     api_secret: "SBBzbgGvGXwmPJVQjzbXwAaqUvo",
// })

// export const uploadImage = (image) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(image, function (error, result) {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result.url);
//       }
//     });
//   });
// };
