export default function Statistics(){
    return (
        <div className="bg-gray-100 w-full h-[200px] flex items-center flex-col justify-center rounded-lg gap-6 absolute bottom-[-40px]">
            <span className="font-semibold text-[16px] text-gray-600 gap-2 flex items-center">
                <span>🏆</span>  <span>Veja nossos números</span>
            </span>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                <div className="flex flex-col items-center md:p-4">
                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                    200
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                    Alguma coisa
                    </div>
                </div>

                <div className="flex flex-col items-center md:p-4">
                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                    500+
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                    Outra coisa
                    </div>
                </div>

                <div className="flex flex-col items-center md:p-4">
                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                    1000+
                    </div>
                    <div className="text-sm font-semibold sm:text-base">Clientes felizes</div>
                </div>

                <div className="flex flex-col items-center md:p-4">
                    <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
                    Alguns
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                    Coffee breaks
                    </div>
                </div>
            </div>
        </div>
    )
}



    