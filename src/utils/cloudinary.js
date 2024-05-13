import cloudinary from 'cloudinary'
import dotenv from "dotenv"

dotenv.config()

cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})

// export const uploads = (image,folder)=>{
//     return new Promise (resolve=>{
//      cloudinary.uploader.upload(image,(result)=>{
//           resolve({
//             recipename,
//             authorname,
//             ingredients,
//             procedure,
//             recipeimage:result.url,
//             authorimage:result.url,
//             id:req.user._id,

//           })
//       },{
//         resource_type:"auto",
//         folder:folder
//       })
    
//     })
// }
export default cloudinary