import React from "react";

export default function Event() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Event */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Tech Expo 2025</h3>
            <p className="text-gray-600 mb-4">
              Join us for a day of innovation, tech demos, and networking!
            </p>
            <p className="text-sm text-gray-500">Date: May 15, 2025</p>
            <p className="text-sm text-gray-500">Location: Ujjain, MP</p>
          </div>
          {/* Add more events as needed */}
        </div>
      </div>
    </section>
  );
}
