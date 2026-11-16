import cloudinary from "../config/cloudinary.js"

const uploadToCloudinary = async (req, res, next) => {
    console.log("file path:", req.file.path);

    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "click_mart"
        })
        req.imageUrl = result.secure_url
        console.log(result);
        next()
    } catch (error) {
        console.log(error);

    }
}
export default uploadToCloudinary;