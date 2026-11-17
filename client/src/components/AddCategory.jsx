import axios from "axios"
import { useState } from "react"

const AddCategory = () => {
    const [formData, setFormData] = useState({
        CName: "",
        CDesc: ""
    })
    const token = localStorage.getItem("token")
    console.log(token);

    const [preview, setPreview] = useState();
    const [imageUrl, setImageUrl] = useState()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0]
        setImageUrl(file)
        setPreview(URL.createObjectURL(file))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData()
            data.append("CName", formData.CName)
            data.append("CDesc", formData.CDesc)
            data.append("category_image", imageUrl)
            const res = await axios.post("http://localhost:3000/admin/add-category", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">
                <div className="w-1/2 bg-orange-50 flex items-center justify-center">
                    <img
                        src={preview}
                        alt="Category preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-1/2 p-8">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        New Category
                    </h2>

                    <form className="space-y-3" onSubmit={handleSubmit} >
                        <input
                            name="CName"
                            onChange={handleChange}
                            value={formData.CName}
                            placeholder="Category Name"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />

                        <textarea
                            name="CDesc"
                            onChange={handleChange}
                            value={formData.CDesc}
                            placeholder="Category Description"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />

                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 disabled:opacity-50"
                        >
                            Save Category
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddCategory