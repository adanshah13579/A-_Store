import cloudinary from "cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: "dzclypj97",
  api_key: "955756829328738",
  api_secret: "mp7t8197M51sRX_vfHpfxC9pGSk",
});

// Just to verify, you can log the cloud name to check if it's configured correctly
// console.log("Cloudinary Configured with Cloud Name:", cloudinary.v2.config().cloud_name);
// console.log("Cloudinary API Key:", cloudinary.v2.config().api_key);
// console.log("Cloudinary API Secret:", cloudinary.v2.config().api_secret);

const storage = multer.memoryStorage();

export async function imageUploadUtil(file) {
  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      resource_type: "auto",
    });
    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
}

export const upload = multer({ storage });
