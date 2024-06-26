import { Button } from "@/components/ui/button"

const DietComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Siga sua dieta com a ajuda da I.A e a simplicidade do Whatsapp
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Nunca foi tão fácil contar as calorias, macro e micronutrientes de sua dieta.
        </p>
      </div>
      <Button className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-full">Assinar agora</Button>
      <div className="relative mt-12">
        <img src="/assets/download.gif" alt="iPhone frame" className="w-[300px] h-[700px] object-contain" />
        <img
          src="/assets/download.gif"
          alt="Inner content"
          className="absolute top-[15%] left-[10%] w-[80%] h-[70%] object-cover"
        />
      </div>
    </div>
  )
}

export default DietComponent;
