import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col  relative overflow-hidden">
      {/* Navigation */}
      <header className="absolute top-4 left-0 right-0 z-50 max-w-3xl mx-auto">
        <nav className="flex justify-around items-center p-4">
          <Link href="/" className="text-base font-light">Home</Link>
          <Link href="/" className="text-base font-light">About</Link>
          <Link href="/" className="text-base font-light">Contact</Link>
          <Link href="/" className="text-base font-light">Why Us</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-[#2a4734] text-7xl md:text-8xl font-serif">Bloom</h1>
          <h2 className="text-[#2a4734] text-xl md:text-2xl tracking-widest uppercase font-base mb-4">
            Organic Vegetables
          </h2>

          <p className="text-[#2a4734] text-lg md:text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            Experience the freshness of our sustainably grown, organic produce.
            <br />
            We bring you the best nature has to offer, straight from our farm to your table.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-20">
            <Link
              href="/signup"
              className="bg-[#2a4734] text-[#f5f0e5] px-10 py-3 rounded-full text-lg font-medium"
            >
              Get Started
            </Link>
            <Link
              href="/signup"
              className="border-2 border-[#2a4734] text-[#2a4734] px-10 py-3 rounded-full text-lg font-medium"
            >
              Know More
            </Link>
          </div>
        </div>
      </main>

      {/* Vegetables Image */}
      <div className="w-full h-full absolute top-0 left-0 right-0 z-0">
        <Image
          src="/Hero.png"
          alt="Fresh organic vegetables"
          width={1400}
          height={90}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#f8f5e6] z-20" />
    </div>
  )
}
