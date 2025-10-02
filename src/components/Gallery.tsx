import { Card, CardContent } from "@/components/ui/card";
import { Camera, MapPin, Heart, Users } from "lucide-react";

const galleryImages = [
  {
    src: "/images/pexels.jpg",
    title: "Kenya's Natural Beauty",
    description: "Experience the breathtaking landscapes that make Kenya a world-class destination",
    icon: Heart
  },
  {
    src: "/images/nairobi.avif",
    title: "Nairobi Innovation",
    description: "Discover the vibrant energy of Kenya's capital city and its thriving business ecosystem",
    icon: MapPin
  },
  {
    src: "/images/video.mp4",
    title: "Wildlife Safari",
    description: "Encounter the Big Five and other magnificent wildlife in their natural habitat",
    icon: Camera,
    isVideo: true
  },
  {
    src: "/images/youngafrikanna.jpg",
    title: "Cultural Connection",
    description: "Connect with local communities and experience authentic Kenyan culture",
    icon: Users
  }
];

const Gallery = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Discover Kenya
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Immerse yourself in the beauty, culture, and energy of Kenya through our curated gallery 
            of experiences and destinations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <div className="relative h-64 sm:h-80 overflow-hidden">
                {image.isVideo ? (
                  <video 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={image.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <image.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {image.title}
                    </h3>
                  </div>
                  <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
                    {image.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Kenya Firsthand?
            </h3>
            <p className="text-lg text-amber-100">
              Join us for an unforgettable journey through Kenya's most iconic destinations, 
              where business growth meets breathtaking adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
