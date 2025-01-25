'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'

export default function ShippingPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Link href="/" className="text-gray-400 hover:text-white mb-6 block">
            ← Back to product
          </Link>
          
          {!formSubmitted ? (
            <>
              <h1 className="text-2xl md:text-3xl font-bold mb-6">Shipping Details</h1>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    required 
                    className="bg-gray-900 border-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    required 
                    className="bg-gray-900 border-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    required 
                    className="bg-gray-900 border-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    required 
                    className="bg-gray-900 border-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    required 
                    className="bg-gray-900 border-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="pincode">PIN Code</Label>
                  <Input 
                    id="pincode" 
                    required 
                    className="bg-gray-900 border-gray-800"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg bg-white text-black hover:bg-gray-200"
                >
                  Place Order
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4">Order Placed Successfully!</h2>
              <p className="text-gray-400 mb-6">Thank you for your purchase. We'll send you an email with tracking details soon.</p>
              <Link href="/">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Return to Home
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

