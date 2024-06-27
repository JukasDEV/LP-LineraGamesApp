import { Button } from "@/components/ui/button"

const IphoneComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-8 min-h-screen bg-transparent">
      <div className="text-center max-w-[720px]">
        <h1 className="text-4xl font-bold text-gray-900 backdrop-blur-lg rounded-lg p-2">
          Tenha seu próprio APP de análise jogos com I.A 
        </h1>
        <p className="mt-4 text-md max-w-[720px] text-gray-600 backdrop-blur-lg rounded-lg p">
          Nunca foi tão facil colocar dinheiro no bolso de seus usuários.
        </p>
      </div>
      <Button className="mt-8 bg-blue-600 text-white p-6 font-bold rounded-full">Assinar agora</Button>
      <div className="relative mt-12 flex w-full items-center justify-center">
        <img src="/assets/download.gif" alt="iPhone frame" className="w-[350px] object-contain" />
      </div>
    </div>
  )
}

export default IphoneComponent;
