"use client"


const services = [
  {
    id: "01",
    title: "Development of adaptive sites",
    description:
      "Creating modern, rapidly loaded and adaptive websites that look great on any devices.",
  },
  {
    id: "02",
    title: "Integration with external API",
    description:
      "Implementation of third -party services and API to expand the functionality of your site or application.",
  },
  {
    id: "03",
    title: "Optimization of performance",
    description:
      "Analysis and acceleration of site download, optimization of code and images for maximum speed.",
  },
  {
    id: "04",
    title: "Development of online stores",
    description:
      "Creating convenient and safe E-commerce solutions with the integration of payment systems.",
  },
  {
    id: "05",
    title: "Technical support and support",
    description:
      "Ensuring stable operation of the site, regular updates and elimination of possible problems.",
  },
];

export default function Services() {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
        </div>
        <div className="md:w-3/4">
          {
            services.map((service) => (
              <div className="mb-16 flex items-center" key={service.id}>
                <div className="text-gray-300 font-bold text-5xl mr-6">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{ service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}
