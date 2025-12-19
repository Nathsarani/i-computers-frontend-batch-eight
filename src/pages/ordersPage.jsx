import axios from "axios";
import { useEffect, useState } from "react";


import Loader from "../components/loader";
import ViewOrderInfoCustomer from "../components/veiwOrderInfoCustomer";

export default function OrdersPage() {
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
        <div
            className="w-full flex justify-center p-10 relative
            bg-gradient-to-b from-primary to-white text-secondary"
        >
            {loaded ? (
                <div className="w-full max-w-7xl overflow-x-auto rounded-2xl shadow-xl bg-white/70 border border-secondary/10">
                    <table className="w-full table-auto border-separate border-spacing-0 rounded-2xl overflow-hidden">
                        <thead className="sticky top-0 bg-secondary text-primary/95">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Order ID
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Customer Email
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Customer Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Total Amount
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary/10">
                            {orders.map((order, index) => (
                                <tr
                                    key={index}
                                    className={`transition-colors ${
                                        index % 2 === 0
                                            ? "bg-white"
                                            : "bg-primary/60"
                                    } hover:bg-primary/90`}
                                >
                                    <td className="px-4 py-3 text-sm font-medium text-secondary/90">
                                        {order.orderId}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-secondary/90">
                                        {order.email}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-secondary/90">
                                        {order.name}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-secondary/90">
                                        {new Date(order.date).toLocaleDateString()}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-secondary/90">
                                        {order.status}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-accent font-semibold">
                                        LKR. {order.total.toFixed(2)}
                                    </td>
                                    <td className="px-4 py-3 text-sm font-medium text-secondary/90">
                                        <ViewOrderInfoCustomer order={order} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}
