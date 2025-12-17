import { BiPlus } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loader from "../../components/loader";
import ProductDeleteButton from "../../components/productDeleteButton";


export default function AdminProductPage() {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

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

            {loaded ?<div className="w-full max-w-7xl bg-white/70 shadow-xl rounded-2xl p-8 border border-secondary/10">

                <h1 className="text-3xl font-bold text-secondary mb-8">
                    Product Management
                </h1>

                <div className="overflow-x-auto rounded-xl shadow-lg border border-secondary/10">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-secondary text-white ">
                            <tr>

                                <th className="p-4 uppercase">Image</th>
                                <th className="p-4 uppercase">Product ID</th>
                                <th className="p-4 uppercase">Name</th>
                                <th className="p-4 uppercase">Price</th>
                                <th className="p-4 uppercase">Labelled Price</th>
                                <th className="p-4 uppercase">Category</th>
                                <th className="p-4 uppercase">Brand</th>
                                <th className="p-4 uppercase">Model</th>
                                <th className="p-4 uppercase">Stock</th>
                                <th className="p-4 uppercase">Availability</th>
                                <th className="p-4 uppercase">Action</th>

                            </tr>
                        </thead>

                        <tbody className="divide-y divide-secondary/10">
                            {products.map((item,index) => {
                                return (
                                    <tr
                                        key={index}
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
                                           {item.isAvailable ? "Available" : "Unavailable"}
                                        </td>
                                        <td className="p-3">
                                            <div className="inline-flex items-center gap-2 ">

                                                {/* <Link
                                                to="/admin/update-product"
                                                className="px-3 py-1 rounded-md w-[70px] text-center  bg-accent/20 text-accent"
                                                state={item}>
                                                Edit</Link>
                                                 */}

                                                <button
                                                    onClick={() => {
                                                        navigate("/admin/update-product", { state: item });
                                                    }}
                                                    className="px-3 py-1 rounded-md w-[70px] text-center bg-accent/20 text-accent hover:bg-accent/30 transition"
                                                >
                                                    Edit
                                                </button>
                                                <ProductDeleteButton productId={item.productID} reload={() => { setLoaded(false) }} />  {/*reload kiyla function ekk pass kra gnnwa productdelete ekt , props vithark newi pass kra gnn puluwn*/}
                                            </div>
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
                // className="fixed right-[20px] bottom-[20px] w-[56px] h-[56px]
                // flex justify-center items-center text-4xl rounded-full
                //  bg-accent text-primary shadow-2xl ring-2 ring-accent/30
                // hover:scale-105 hover:shadow
                // active:scale-90 transition-all "
                className="absolute right-10 bottom-10 w-[55px] h-[55px] flex justify-center items-center 
                rounded-full bg-accent text-white shadow-lg hover:scale-110
                transition-all duration-300"
            >
                <BiPlus size={28} />
            </Link>
        </div>
    );
}
