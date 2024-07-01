import Link from "next/link";

export default function Pricing(){
    return (
        <>
    <div className="bg-white py-6 sm:py-8 lg:py-12" id="plans">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
        Temos um plano para você
      </h2>

      <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
        {/* <!-- plano 1 - início --> */}
        <div className="flex flex-col rounded-lg border p-4 pt-6">
          <div className="mb-12">
            <div className="mb-2 text-center text-2xl font-bold text-gray-800">
              Starter
            </div>

            <p className="mx-auto mb-8 px-8 text-center text-gray-500">
              Para quem está começando no marketing digital
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Vira uma cobra</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">
                  Can you hear the music, Robert?
                </span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">
                  Construindo para o bem de todos
                </span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">
                  Tyger tyger, burning bright
                </span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">
                  In the forests of the night
                </span>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-8">
            <div className="flex items-end justify-center gap-1">
              <span className="self-start text-gray-600">R$</span>
              <span className="text-4xl font-bold text-gray-800">67</span>
              <span className="text-gray-500">por mês</span>
            </div>

            <button
              onClick={() => {}}
              className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
            >
              Começar com Starter
            </button>
          </div>
        </div>
        {/* <!-- plano 1 - fim --> */}

        {/* <!-- plano 2 - início --> */}
        <div className="relative flex flex-col rounded-lg border-2 border-indigo-500 p-4 pt-6">
          <div className="mb-12">
            <div className="absolute inset-x-0 -top-3 flex justify-center">
              <span className="flex h-6 items-center justify-center rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                mais popular
              </span>
            </div>

            <div className="mb-2 text-center text-2xl font-bold text-gray-800">
              Premium
            </div>

            <p className="mx-auto mb-8 px-8 text-center text-gray-500">
              Para quem já tem um negócio e escalar as vendas ao máximo
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Benefício super legal</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">To be or not to be</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">This is the question</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Suporte Premium</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Dias de glória</span>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-8">
            <div className="flex items-end justify-center gap-1">
              <span className="self-start text-gray-600">R$</span>
              <span className="text-4xl font-bold text-gray-800">97</span>
              <span className="text-gray-500">por mês</span>
            </div>

            <button
              onClick={() => {}}
              className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Quero ser Premium
            </button>
          </div>
        </div>
        {/* <!-- plano 2 - fim --> */}

        {/* <!-- plano 3 - início --> */}
        <div className="flex flex-col rounded-lg border p-4 pt-6">
          <div className="mb-12">
            <div className="mb-2 text-center text-2xl font-bold text-gray-800">
              Enterprise
            </div>

            <p className="mx-auto mb-8 px-8 text-center text-gray-500">
              Para quem já tem escala e quer sempre a máxima performance
            </p>

            <div className="space-y-2">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Benefício super legal</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Quem sabe faz ao vivo</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Por causa de esnobro</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Oloco, meu!</span>
              </div>

              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span className="text-gray-600">Olha essa fera aí </span>
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col gap-8">
            <div className="flex items-end justify-center gap-1">
              <span className="self-start text-gray-600">R$</span>
              <span className="text-4xl font-bold text-gray-800">297</span>
              <span className="text-gray-500">por mês</span>
            </div>

            <button
              onClick={() => {}}
              className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
            >
              Quero ser Enterprise
            </button>
          </div>
        </div>
        {/* <!-- plano 3 - fim --> */}
      </div>

      <div className="text-center text-sm text-gray-500 sm:text-base">
        Ficou com alguma dúvida{" "}
        <Link
          href="https://wa.me/"
          className="text-gray-500 underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
        >
          Fale com nossa equipe
        </Link>
        .
      </div>
    </div>
  </div>   
</> 
    )
}