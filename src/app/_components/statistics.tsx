import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Statistics() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // Ajuste conforme necessário
    });

    return (
        <div className="max-w-[300px] sm:max-w-full h-full bg-gray-100 w-full sm:h-[200px] flex items-center flex-col justify-center rounded-lg gap-6 sm:absolute sm:bottom-[-40px] py-8" ref={ref}>
            <span className="font-semibold text-[16px] text-gray-600 gap-2 flex items-center">
                <span>🏆</span>  <span>Veja nossos números</span>
            </span>
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-8 md:grid-cols-3 md:gap-0 divide-y sm:divide-y-0 md:divide-x">
                <div className="pt-2 sm:pt-0 flex flex-col items-center md:p-4">
                    <div className="text-4xl font-bold text-indigo-500 sm:text-4xl md:text-5xl">
                        {inView && <CountUp end={200} duration={3.5} prefix="+" />}
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                        Aplicativos entregues
                    </div>
                </div>

                <div className="pt-6 sm:pt-0  flex flex-col items-center md:p-4">
                    <div className="text-4xl font-bold text-indigo-500 sm:text-4xl md:text-5xl">
                        {inView && <CountUp end={500} duration={3.5} prefix="+" />}
                    </div>
                    <div className="text-sm font-semibold sm:text-base">
                        Salas de Sinais Ativas
                    </div>
                </div>

                <div className="pt-6 sm:pt-0  flex flex-col items-center md:p-4">
                    <div className="text-4xl font-bold text-indigo-500 sm:text-4xl md:text-5xl">
                        {inView && <CountUp end={250000} duration={3.5} prefix="+" />}
                    </div>
                    <div className="text-sm font-semibold sm:text-base">Jogadores lucrando</div>
                </div>
            </div>
        </div>
    );
}
