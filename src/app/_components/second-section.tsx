import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function SecondSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorrerá apenas uma vez
    threshold: 0.1, // Ajusta o valor conforme necessário
  });

  return (
    <motion.div
      className="bg-foreground pb-6 sm:pb-8 lg:pb-12"
      initial={{ opacity: 0.2 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 2 }}
      ref={ref}
    >
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col items-center justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          {/* <!-- conteúdo - início --> */}
          <div className="flex flex-col justify-between xl:w-5/12">
            <div></div>

            <div className="sm:text-center lg:py-12 lg:text-left xl:py-24 py-6">
              <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
                Sua estrutura com a sua cara!
              </p>

              <h1 className="mb-4 text-4xl leading-[1.2] sm:md:leading-[1.2] font-bold text-white sm:text-5xl md:mb-4 md:text-6xl md:leading-[1.2]">
                Escolha os jogos e condições de análise
              </h1>

              <p className="mb-8 text-md leading-[1.2] font-regular text-white sm:text-md md:mb-12 md:text-md">
                Selecione os jogos que deseja em seu aplicativo e as condições de análise e enviaremos as melhores entradas ao longo do dia.
              </p>

              <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                <button
                  onClick={() => {}}
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Assine agora
                </button>
              </div>
            </div>
          </div>
          {/* <!-- conteúdo - fim --> */}

          {/* <!-- imagem - início --> */}
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12 flex items-center justify-center flex-col h-full">
            <img
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="h-full w-full object-cover object-center max-h-[600px]"
            />
          </div>
          {/* <!-- imagem - fim --> */}
        </section>
      </div>
    </motion.div>
  );
}
