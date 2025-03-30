"use client"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

export default function Action() {
  return (
    <div className="min-h-screen  flex flex-col items-center justify-center  overflow-hidden bg-[#f8f5e6] pb-12">
        <div className="flex flex-col items-center justify-center px-4 py-16 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-[#4a7c59] md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight text-center">
            🌱 Choose Health. Choose Bloom
            </h1>
            <p className="text-center text-lg text-[#4a7c59] md:leading-tight lg:text-xl font-light">At Bloom, we believe that what you eat shapes how you feel, live, and thrive. That’s why we bring you 100% organic, farm-fresh vegetables—delivered straight to your doorstep.</p>
        </div>

        <div className="max-w-7xl mx-auto">
       

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-auto md:px-6">
          {/* Card 1 - Grown Without Chemicals */}
          <Card className="col-span-1 md:col-span-2 min-h-[500px] row-span-1 relative overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 px-6 ">
            
              <h1 className="text-5xl font-semibold font-sans text-emerald-800">Grown Without <br />Chemicals</h1>

            <div className="flex items-center gap-4 pt-0 ">
              <div className="flex-1">
                <p className="text-emerald-700 text-lg z-10 w-2/3">
                  Say goodbye to pesticides, harmful fertilizers, and GMO produce. Our vegetables are cultivated
                  naturally, using eco-friendly methods that protect your health and the planet.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 flex-shrink-0 ">
                <Image
                  src="/Bento1.png"
                  alt="Safe for you and the earth"
                  width={400}
                  height={400}
                  className="object-contain md:w-[340px]   lg:w-full lg:h-full "
                />
              </div>
            </div>
          </Card>

          {/* Card 2 - Fresh From Local Farms */}
          <Card className="col-span-1 md:col-span-1 row-span-1 relative overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 px-6 " >

              <h1 className="text-2xl lg:text-3xl font-bold font-sans text-emerald-800">Fresh From Local Farms</h1>

            <div className="flex flex-col items-center py-0">
              <p className="text-emerald-700 text-base lg:text-lg">
                We partner with local farmers who harvest your veggies just hours before delivery—so you get unmatched
                freshness, flavor, and nutrition.
              </p>
              <div className="absolute -bottom-24 -right-24 flex-shrink-0 ">
                <Image
                  src="/Bento2.png"
                  alt="Local farm illustration"
                  width={400}
                  height={400}
                  className="object-contain mt-auto"
                />
              </div>
            </div>
          </Card>

          {/* Card 3 - Nutrient-Rich Goodness */}
          <Card className=" col-span-1 row-span-1 relative overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300  px-6">
              <h1 className="text-2xl lg:text-3xl font-bold font-sans text-emerald-800">Nutrient-Rich Goodness</h1>
        
            <div className="flex flex-col items-center ">
              <h1 className="text-emerald-700 text-base lg:text-lg ">
                Organic vegetables retain more vitamins, minerals, and antioxidants. Eating clean means a stronger
                immune system, better energy, glowing skin, and a healthier gut.
              </h1>
              <div className="hidden lg:block absolute -bottom-14 flex-shrink-0 ">
                <Image
                  src="/Bento5.png"
                  alt="Vitamins, minerals and antioxidants"
                  width={350}
                  height={350}
                  className="object-contain w-full h-full  "
                />
              </div>
            </div>
          </Card>

          {/* Card 4 - Safe for You, Safe for the Earth */}
          <Card className="min-h-[300px] col-span-1 md:col-span-2 row-span-1 relative overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 px-6 ">
         
              <h1 className="text-5xl font-bold font-sans text-emerald-800">Safe for You, Safe for the Earth</h1>

            <div className="flex items-center gap-4 pt-0">
              <div className="flex-1">
                <p className="text-emerald-700 text-lg w-1/2">
                <span className="font-bold">Our organic methods</span> enrich the soil, conserve water, and reduce pollution. Every purchase supports
                  sustainable agriculture and a greener tomorrow. 
                </p>
              </div>
              <div className="absolute  -bottom-4 -right-36 flex-shrink-0">
                <Image
                  src="/Bento3.png"
                  alt="Fresh organic lettuce"
                  width={400}
                  height={400}
                  className="object-contain rounded-full w-2/3"
                />
              </div>
            </div>
          </Card>

          {/* Card 5 - Taste the Difference */}
          <Card className=" col-span-1 md:col-span-3 lg:col-span-2 md:min-h-[300px]   row-span-1 relative overflow-hidden hover:scale-105 hover:shadow-lg transition-all duration-300 px-6">
              <h1 className="text-5xl font-bold font-sans text-emerald-800">Taste the Difference</h1>
            <div className="flex items-center gap-4 pt-0">
              <div className="flex-1">
                <p className="text-emerald-700 text-lg w-2/3">
                  Crave the crunch. Relish the flavor. Our veggies aren't just good for you—they're absolutely
                  delicious.
                </p>
              </div>
              <div className="absolute -bottom-20 -right-20 flex-shrink-0">
                <Image
                  src="/Bento4.png"
                  alt="Child enjoying broccoli"
                  width={350}
                  height={350}
                  className="object-contain"
                />
              </div>
            </div>
          </Card>
        </div> 
        </div>
    </div>
  )
}

