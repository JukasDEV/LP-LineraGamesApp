import { Button } from "@/components/ui/button";
import Statistics from "./statistics";

const IphoneComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col items-center py-8 min-h-screen bg-transparent max-w-[720px]">
        <div className="text-center max-w-[720px]">
          <h1 className="text-4xl font-bold text-gray-900 backdrop-blur-lg rounded-lg p-2">
            Tenha seu próprio APP de análise jogos com I.A 
          </h1>
          <p className="mt-4 text-md max-w-[720px] text-gray-600 backdrop-blur-lg rounded-lg p-2">
            Nunca foi tão fácil colocar dinheiro no bolso de seus usuários.
          </p>
        </div>
        <Button className="mt-8 bg-blue-600 text-white p-6 font-bold rounded-full">Assinar agora</Button>
        <div className="relative mt-12 flex w-full flex-col items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center">
              <img src="/assets/app.gif" alt="iPhone frame app" className="w-[350px] object-contain" />
              <Statistics/>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/sinais.gif" alt="iPhone frame sinais" className="w-[350px] object-contain" />
              <Statistics/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IphoneComponent;
