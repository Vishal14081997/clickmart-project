import cloudinary from "../config/cloudinary.js"

const uploadToCloudinary = async (req, res, next) => {
    if (!req.file) {
        return next()
    }
    // console.log("file path:", req.file.path);
    try {
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "click_mart"
        })
        req.imageUrl = result.secure_url
        console.log(result);
        next()
    } catch (error) {
        next(error)
    }
}
export default uploadToCloudinary;