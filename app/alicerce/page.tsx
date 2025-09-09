"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AlicercePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <header className="bg-white py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left side - Alicerce and Olhar de Bia logos */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="text-[#92239B] text-2xl font-bold">✦Alicerce</div>
              <div className="text-gray-400 text-2xl">|</div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#92239B] rounded-full flex items-center justify-center">
                  <div className="text-white text-sm font-bold">👁</div>
                </div>
                <span className="text-[#92239B] text-xl font-semibold">Olhar de Bia</span>
              </div>
            </div>
          </div>

          {/* Right side - Register button */}
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full text-lg"
          >
            Inscrever agora
          </Button>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative h-[500px] overflow-hidden rounded-3xl mx-6 mt-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/alicerce-hero.png"
            alt="Programa Alicerce - Jovens em treinamento na Microsoft"
            fill
            className="object-cover"
          />
          {/* Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#92239B]/90 via-[#7B1FA2]/80 to-[#92239B]/70"></div>
        </div>

        {/* Complete Hero Image */}
        <div className="relative z-10 h-full w-full">
          <Image
            src="/alicerce-complete-hero.png"
            alt="Programa Alicerce - Banner completo com texto"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20"></div>
    </div>
  )
}
