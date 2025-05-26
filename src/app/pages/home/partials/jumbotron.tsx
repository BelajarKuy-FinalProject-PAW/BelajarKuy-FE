import React from 'react'
import Image from 'next/image'
import Button from '@/app/components/button/button'
import JumbotronImage from '@/app/assets/JumbotronImg.png'

const Jumbotron = () => {
  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="relative z-10 py-16 lg:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Learn with expert <span className="block">anytime anywhere</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Our mission is to help people to find the best course online and learn with expert anytime, anywhere.
              </p>

              <a href='/pages/register'><Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-colors duration-200"
              >
                Create Account
              </Button></a>
            </div>
          </div>

          {/* Right Image with Diagonal Overlay */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
            {/* Image Container */}
            <div className="relative h-96 lg:h-full">
              <Image
                src= {JumbotronImage}
                alt="Woman with glasses holding books in a learning environment"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Jumbotron
