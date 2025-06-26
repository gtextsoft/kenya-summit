
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Corporate Leadership
              <span className="block text-amber-400">Retreat: Kenya Edition</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xl">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-amber-400" />
                <span>September 24-29, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-amber-400" />
                <span>Kenya, Africa</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-gray-200">
            A space for CEOs, Executives, Founders & Visionary Teams to rest, build powerful networks, 
            and scale across nations while touring the most iconic and soul-stirring landscapes in Kenya.
          </p>
          
          <div className="space-y-6">
            <div className="text-lg italic text-amber-200">
              What if you could take a break from the noise of the daily grind 
              without pausing the growth of your business?
            </div>
            
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold transition-all transform hover:scale-105"
            >
              Reserve Your Spot
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <p className="text-amber-200 font-medium">
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
