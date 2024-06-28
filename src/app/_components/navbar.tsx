"use client"

import { Button as UIButton } from "@/components/ui/button";
import { Button as NextUIButton } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md z-40 mb-[0px]">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold">Reeve Games</span>
      </div>
      <div className="flex items-center space-x-6">
        <a href="#" className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition duration-300 transform hover:scale-105">
          <span role="img" aria-label="camera">📸</span>
          <span>Funcionalidades</span>
        </a>
        <a href="#" className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition duration-300 transform hover:scale-105">
          <span role="img" aria-label="price tag">🏷️</span>
          <span>Preço</span>
        </a>
        <a href="#" className="hidden sm:flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition duration-300 transform hover:scale-105">
          <span role="img" aria-label="health professional">👩‍⚕️</span>
          <span>Quem Somos</span>
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <UIButton className="bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105">
          Assinar agora
        </UIButton>
        <NextUIButton
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full transition duration-300 transform hover:scale-105 hover:bg-blue-600 hover:text-white"
          // auto
        >
          Login
        </NextUIButton>
      </div>
    </nav>
  );
}
