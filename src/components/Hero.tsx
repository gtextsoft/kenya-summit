
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToInvestmentOptions = () => {
    const element = document.getElementById('investment-options');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          className="w-full h-full object-cover"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/images/kenyaflag.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <img 
              src="/images/SAL.png" 
              alt="Stephen Akintayo Consulting" 
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
          </div>
          
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight px-2">
              Corporate Leadership
              <span className="block text-amber-400">Retreat: Kenya Edition</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                <span className="text-sm sm:text-base">November 23-28, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400" />
                <span className="text-sm sm:text-base">Kenya, Africa</span>
              </div>
            </div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-200 px-2">
            A space for CEOs, Executives, Founders & Visionary Teams to rest, build powerful networks, 
            and scale across nations while touring the most iconic and soul-stirring landscapes in Kenya.
          </p>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="text-sm sm:text-base md:text-lg italic text-amber-200 px-2">
              What if you could take a break from the noise of the daily grind 
              without pausing the growth of your business?
            </div>
            
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all transform hover:scale-105 w-full sm:w-auto"
              onClick={scrollToInvestmentOptions}
            >
              Reserve Your Spot
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <p className="text-amber-200 font-medium text-sm sm:text-base">
              Only 50 Slots Available
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
