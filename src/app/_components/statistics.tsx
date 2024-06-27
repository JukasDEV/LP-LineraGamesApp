export default function Statistics(){
    return (
        <div className="max-w-[300px] sm:max-w-full h-full bg-gray-100 w-full sm:h-[200px] flex items-center flex-col justify-center rounded-lg gap-6 sm:absolute sm:bottom-[-40px] py-8">
            <span className="font-semibold text-[16px] text-gray-600 gap-2 flex items-center">
                <span>🏆</span>  <span>Veja nossos números</span>
            </span>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 md:grid-cols-3 md:gap-0 divide-y sm:divide-y-0 md:divide-x">
                <div className="pt-2 sm:pt-0 flex flex-col items-center md:p-4">
                    <div className="text-4xl font-bold text-indigo-500 sm:text-4xl md:text-5xl">
                    200
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                    Aplicativos entregues
                    </div>
                </div>

                <div className="pt-6 sm:pt-0  flex flex-col items-center md:p-4">
                    <div className="text-4xl font-bold text-indigo-500 sm:text-4xl md:text-5xl">
                    500+
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                    Afiliados
                    </div>
                </div>

                <div className="pt-6 sm:pt-0  flex flex-col items-center md:p-4">
                    <div className="text-4xl font-bold text-indigo-500 sm:text-4xl md:text-5xl">
                    250.000+
                    </div>
                    <div className="text-sm font-semibold sm:text-base">Jogadores lucrando</div>
                </div>
            </div>
        </div>
    )
}



    