import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Services() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/service.json");
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching services data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSeeDetails = (title_id) => {
    navigate(`/details/${title_id}/`);
  };

  return (
    <section className="bg-white lg:mt-5">
      <div className="container px-6 py-10 mx-auto">
        <div>
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold">
            Services
          </h2>
        </div>

        <hr className="my-8 border-gray-200" />

        {loading ? (
          <p className="text-center font-semibold text-xl">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 xl:grid-cols-3 mt-8 md:mt-10">
            {servicesData.map((service) => (
              <div key={service.id}>
                <img
                  className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                  src={service.image}
                  alt={service.title}
                />

                <div className="mt-8">
                  <span className="text-blue-500 uppercase font-medium">
                    {service.category}
                  </span>

                  <h1 className="mt-4 text-xl font-semibold text-gray-800">
                    {service.title}
                  </h1>

                  <p className="mt-2 text-gray-500 h-24 lg:h-20">
                    {service.description.length > 30
                      ? `${service.description.substring(0, 120)}[...]`
                      : service.description}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <a
                        href="#"
                        className="text-lg lg:text-xl font-medium text-gray-700 hover:underline hover:text-gray-500"
                      >
                        {service.price}
                      </a>
                    </div>
                    <button
                      onClick={() => handleSeeDetails(service.title_id)}
                      className="px-6 py-3 text-sm lg:text-base font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
