import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/loader";

export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {  //backend data notload
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/products")
                .then((response) => {
                    console.log(response.data);
                    setProducts(response.data);
                    setLoaded(true)   //when load value true
                });
        }

    }, [loaded]);

    return (
        <div className="w-full min-h-screen px-10 py-14 bg-primary flex justify-center items-start relative">

            {loaded ?<div className="w-full max-w-7xl bg-white/70 backdrop-blur-xl shadow-xl rounded-2xl p-8 border border-secondary/10">

                <h1 className="text-3xl font-bold text-secondary mb-8">
                    Product Management
                </h1>

                <div className="overflow-x-auto rounded-xl shadow-lg border border-secondary/10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-secondary text-white">
                            <tr>
                                <th className="p-4">Image</th>
                                <th className="p-4">Product ID</th>
                                <th className="p-4">Name</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Labelled Price</th>
                                <th className="p-4">Category</th>
                                <th className="p-4">Brand</th>
                                <th className="p-4">Model</th>
                                <th className="p-4">Stock</th>
                                <th className="p-4">Availability</th>
                                <th className="p-4">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-secondary/10">
                            {products.map((item) => {
                                return (
                                    <tr
                                        key={item.productID}
                                        className="hover:bg-primary/60 transition-all"
                                    >
                                        <td className="p-3">
                                            <img
                                                src={item.images[0]}
                                                className="w-16 h-16 object-cover rounded-lg shadow"
                                            />
                                        </td>

                                        <td className="p-3 font-medium text-secondary">{item.productID}</td>
                                        <td className="p-3">{item.name}</td>
                                        <td className="p-3 text-accent font-semibold">Rs. {item.price}</td>
                                        <td className="p-3 line-through text-gray-500">{item.labelledPrice}</td>

                                        <td className="p-3">{item.category}</td>
                                        <td className="p-3">{item.brand}</td>
                                        <td className="p-3">{item.model}</td>

                                        <td className="p-3">{item.stock}</td>

                                        <td className="p-3">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm font-semibold ${item.isAvailable
                                                        ? "bg-green-200 text-green-800"
                                                        : "bg-red-200 text-red-800"
                                                    }`}
                                            >
                                                {item.isAvailable ? "Available" : "Out of Stock"}
                                            </span>
                                        </td>
                                        <td className="p-3 ">
                                            <button onClick={
                                                () => {
                                                    const token = localStorage.getItem("token");
                                                    axios.delete(import.meta.env.VITE_BACKEND_URL + "/products/" + item.productID, {
                                                        headers: {
                                                            Authorization: `Bearer ${token}`

                                                        }
                                                    }).then(
                                                        () => {

                                                            toast.success("Product deleted successfully")
                                                            setLoaded(false);
                                                        }
                                                    )
                                                }
                                            } className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition cursor-p">
                                                Delete
                                            </button>

                                        </td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>:<Loader/>}

            <Link
                to="/admin/add-product"
                className="absolute right-10 bottom-10 w-[55px] h-[55px] flex justify-center items-center 
                   rounded-full bg-accent text-white shadow-lg hover:scale-110
                   transition-all duration-300"
            >
                <BiPlus size={28} />
            </Link>
        </div>
    );
}
