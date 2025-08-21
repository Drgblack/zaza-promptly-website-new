 import { OptimizedImage } from "@/components/optimized-image"

  export default function Hero() {
    return (
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-amber-500 py-20 sm:py-28 lg:py-32 text-center px-4 
  overflow-hidden">
        {/* Background gradient and accents */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full" />
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-amber-400/10 rounded-full" />
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-purple-400/10 rounded-full" />

        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
            AI Comments. <span className="text-amber-300">Done in Seconds.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Zaza Promptly helps teachers write parent messages without stress, saving hours every week.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="#pricing"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-4 
  text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Start Free Trial
            </a>
            <a
              href="#how"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg 
  transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          <OptimizedImage
            src="/phone-mockup.png"
            alt="Zaza Promptly App Preview"
            className="mx-auto mt-12 w-64 sm:w-80 opacity-90"
            width={320}
            height={320}
            priority={true}
          />
        </div>

        {/* Modern Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg 
            className="relative block w-full h-[80px] sm:h-[120px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,
  138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              opacity=".25" 
              className="fill-white"
            />
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,
  84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-
  43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              opacity=".5" 
              className="fill-white"
            />
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.
  22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              className="fill-white"
            />
          </svg>
        </div>
      </section>
    )
  }