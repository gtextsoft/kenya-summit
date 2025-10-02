import { Card, CardContent } from "@/components/ui/card";
import { Flag, Heart, Star } from "lucide-react";

const KenyaFlag = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
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
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Flag Display Section */}
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <div className="relative">
                <div className="w-full h-48 sm:h-64 md:h-80 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Flag className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 mx-auto mb-3 sm:mb-4 animate-pulse" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">🇰🇪 Kenya</h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg">Proudly representing our host nation</p>
                  </div>
                </div>
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2">
                    <Flag className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    <span className="text-white font-semibold text-xs sm:text-sm">Kenya Flag</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-6 sm:space-y-8 order-1 md:order-2">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Proudly Kenyan
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                  Experience the warmth, hospitality, and entrepreneurial spirit that defines Kenya. 
                  Our retreat celebrates the rich culture and vibrant business ecosystem of this incredible nation.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6 text-center">
                      <Heart className="h-8 w-8 text-white mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">Warm Hospitality</h3>
                      <p className="text-white/80 text-sm">Experience authentic Kenyan welcome</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6 text-center">
                      <Star className="h-8 w-8 text-white mx-auto mb-3" />
                      <h3 className="font-bold text-lg mb-2">Rich Culture</h3>
                      <p className="text-white/80 text-sm">Immerse in diverse traditions</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-3">Why Kenya?</h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Gateway to East African markets</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Thriving tech and innovation ecosystem</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Stable business environment</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>Breathtaking natural beauty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KenyaFlag;
