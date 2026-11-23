import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"

const AddProduct = () => {
    const [formData, setFormData] = useState({
        CID: "",
        PName: "",
        PDesc: "",
        price: "",
        Qty: "",
        MRP: ""
    })
    const token = localStorage.getItem("token")
    // console.log(token);
    const navigate = useNavigate()
    const [categories, serCategories] = useState([])
    const [preview, setPreview] = useState("");
    const [imageUrl, setImageUrl] = useState(null)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleImageChange = (e) => {
        // console.log(e.target.files[0]);
        const file = e.target.files[0]
        setPreview(URL.createObjectURL(file))
        setImageUrl(file)
    }
    const fetchCategory = async () => {
        try {
            const res = await axios.get("http://localhost:3000/admin/get-all-category", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(res.data.data);
            serCategories(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCategory()
    }, [token])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = new FormData()
            data.append("CID", formData.CID)
            data.append("PName", formData.PName)
            data.append("PDesc", formData.PDesc)
            data.append("Qty", formData.Qty)
            data.append("price", formData.price)
            data.append("MRP", formData.MRP)
            data.append("product_image", imageUrl)
            const res = await axios.post("http://localhost:3000/admin/add-product", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(res.data);
            toast.success(res.data.message)
            setFormData({
                CID: "",
                PName: "",
                PDesc: "",
                price: "",
                Qty: "",
                MRP: ""
            })
            setImageUrl(null)
            setPreview("")
            navigate("/products")

        } catch (error) {
            console.log(error);
            toast.error(error.response.message)
        }
    }
    return (
        <div className="flex w-full bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">

            <div className="w-1/2 bg-orange-50 flex flex-col items-center justify-center p-8">
                <div className="w-full h-80 border-2 border-dashed border-orange-300 rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                        src={preview || null}
                        alt="Category preview"
                        className="w-full h-full object-cover"
                    />
                </div>

                <label className="mt-4 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl">
                    Select Images
                    <input
                        onChange={handleImageChange}
                        type="file"
                        accept="image/*"
                        className="hidden"
                    />
                </label>
            </div>

            <div className="w-1/2 p-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    New Product
                </h2>

                <form className="space-y-3" onSubmit={handleSubmit}>

                    <input
                        name="PName"
                        value={formData.PName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Product Name"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        name="MRP"
                        value={formData.MRP}
                        onChange={handleChange}
                        type="number"
                        placeholder="MRP"
                        min="0"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        type="number"
                        placeholder="Selling Price"
                        min="0"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <textarea
                        name="PDesc"
                        value={formData.PDesc}
                        onChange={handleChange}
                        placeholder="Description"
                        rows="3"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <input
                        name="Qty"
                        value={formData.Qty}
                        onChange={handleChange}
                        type="number"
                        placeholder="Stock Quantity"
                        min="0"
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    />

                    <select
                        name='CID'
                        onChange={handleChange}
                        value={formData.CID}
                        className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        <option value="">Select Category</option>
                        {
                            categories.map((item) => {
                                return (
                                    <option key={item._id} value={item._id} >{item.CName}</option>
                                )
                            })
                        }
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300"
                    >
                        Save Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct