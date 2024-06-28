
import React from "react";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Embaixador",
      company: "Influencer",
      text: "Atendimento perfeito, me atendem a qualquer hora do dia. Meus seguidores também estão super satisfeitos com as análises.",
      image:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112",
    },
    {
      name: "Mineiro",
      company: "Apostador Profissional",
      text: "Coloque aqui o texto do depoimento do seu cliente amado e satisfeito.",
      image:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
    },
    {
      name: "Joaquim Pereira",
      company: "Empresário",
      text: "Meus afiliados estão amando a estrutura. 100% pronta e com suporte ótimo pra eles rodarem tranquilos.",
      image:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500",
    },
  ];

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
          O que nossos clientes dizem
        </h2>

        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8"
            >
              <div className="text-center text-gray-600">
                "{testimonial.text}"
              </div>

              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src={testimonial.image}
                    loading="lazy"
                    alt="Photo by Radu Florin"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    {testimonial.name}
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

    