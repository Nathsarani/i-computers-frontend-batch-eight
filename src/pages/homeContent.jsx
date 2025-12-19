import React from "react";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/home.jpg"
        alt="Home Background"
        className="absolute w-full h-full object-cover brightness-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fadeInDown">
          Welcome to I-Computers
        </h1>
        <p className="text-lg sm:text-2xl mb-8 animate-fadeInUp">
          Your One-Stop Shop for High-Performance PCs & Accessories
        </p>

        {/* Animated slogans */}
        <div className="space-y-2 sm:space-y-4">
          <p className="text-xl sm:text-3xl font-semibold animate-pulse">
            Upgrade Your Tech, Upgrade Your Life
          </p>
          <p className="text-xl sm:text-3xl font-semibold animate-bounce">
            Best Deals on Gaming & Workstation PCs
          </p>
          <p className="text-xl sm:text-3xl font-semibold animate-ping">
            Quality Components, Reliable Service
          </p>
        </div>

        {/* Call to Action */}
        <a
          href="/products"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
