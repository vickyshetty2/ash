'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-center">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/uo-MmU6jN7qEylEEHq8F1lbd3CWRLORwH.png"
            alt="ASH Logo"
            width={60}
            height={30}
            className="h-6 w-auto"
          />
        </div>
      </header>

      {/* Main Product Video */}
      <section className="pt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[400px] mx-auto">
            <video 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sm%20tee0001-0250-4Hw1Ala43W7SLLzcEA3BeT0wZpxC3G.mp4"
              className="w-full h-[80vh] rounded-lg object-cover"
              controls
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Lunch Break T-shirt</h1>
            <p className="text-base md:text-lg text-gray-400">240 GSM</p>
            <p className="text-2xl md:text-3xl font-semibold">₹899</p>
            <Link href="/shipping">
              <Button className="w-full sm:w-auto px-8 py-6 text-lg bg-white text-black hover:bg-gray-200">
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/NmdEsHzO-5M"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[300px] md:h-[600px] rounded-lg"
              style={{ background: 'black' }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-3">
            <div className="flex items-center gap-4">
              <Link 
                href="https://youtu.be/NmdEsHzO-5M?si=h-fQtDX7kTUDvbh7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link 
                href="/coming-soon"
                className="w-2 h-2 rounded-full bg-white animate-pulse"
                style={{
                  boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff',
                }}
              />
            </div>
            <p className="text-[8px] md:text-[10px] text-gray-500">Made by Vicky Shetty</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

