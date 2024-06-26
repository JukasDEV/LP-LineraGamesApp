/**
 * v0 by Vercel.
 * @see https://v0.dev/t/domrY5ADh98
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold">dieta.ai</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-1 text-gray-700">
              <span role="img" aria-label="camera">📸</span>
              <span>Funcionalidades</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-700">
              <span role="img" aria-label="price tag">🏷️</span>
              <span>Preço</span>
            </a>
            <a href="#" className="flex items-center space-x-1 text-gray-700">
              <span role="img" aria-label="health professional">👩‍⚕️</span>
              <span>Profissionais de saúde</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 text-white px-4 py-2 rounded-full">Assinar agora</Button>
            <a href="#" className="text-gray-700">Login</a>
          </div>
        </nav>
      );
    };
    