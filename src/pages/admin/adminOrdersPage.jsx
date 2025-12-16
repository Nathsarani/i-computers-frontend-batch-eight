import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!loaded) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/orders", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setOrders(response.data);
                    setLoaded(true);
                });
        }
    }, [loaded]);

    return (
        <div className="w-full min-h-screen px-10 py-14 bg-primary flex justify-center items-start relative">
            {loaded ? (
                <div className="w-full max-w-7xl bg-white/70 shadow-xl rounded-2xl p-8 border border-secondary/10">
                    <h1 className="text-3xl font-bold text-secondary mb-8">
                        Orders Management
                    </h1>

                    <div className="overflow-x-auto rounded-xl shadow-lg border border-secondary/10">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4">Order ID</th>
                                    <th className="p-4">Customer Email</th>
                                    <th className="p-4">Customer Name</th>
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Status</th>
                                    <th className="p-4">Total Amount</th>
                                    <th className="p-4">Actions</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-secondary/10">
                                {orders.map((order, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-primary/60 transition-all"
                                    >
                                        <td className="p-3 font-medium text-secondary">
                                            {order.orderId}
                                        </td>
                                        <td className="p-3">{order.email}</td>
                                        <td className="p-3">{order.name}</td>
                                        <td className="p-3">
                                            {new Date(order.date).toLocaleDateString()}
                                        </td>
                                        <td className="p-3">{order.status}</td>
                                        <td className="p-3 text-accent font-semibold">
                                            LKR. {order.total.toFixed(2)}
                                        </td>
                                        <td className="p-3">
                                            {/* Future action buttons can go here */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}
