
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Camera, Users, Heart } from "lucide-react";

const experiences = [
  {
    icon: MapPin,
    title: "Nairobi's Innovation Hubs",
    description: "Explore the vibrant cultural spots and innovation centers of Kenya's capital",
    image: "/images/video.mp4",
    isVideo: true
  },
  {
    icon: Camera,
    title: "Maasai Mara Game Reserve",
    description: "Home to the Big Five and some of the most scenic wildlife experiences on the continent",
    image: "/images/ken.avif"
  },
  {
    icon: Users,
    title: "Safari Adventures",
    description: "Immersive wildlife experiences and cultural connections with local communities",
    image: "/images/youngafrikanna.jpg"
  },
  {
    icon: Heart,
    title: "Nature Reset Experiences",
    description: "Guided moments of reflection and renewal in Africa's most breathtaking landscapes",
    image: "/images/pexels.jpg"
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Yes, You'll Grow. But You'll Also Unwind.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore the beauty of Kenya with curated tours and experiences designed to inspire and rejuvenate.
          </p>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-6 rounded-xl max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              Because great ideas aren't born in burnout, they come alive in inspiration.
            </p>
          </div>
        </div>
        
        {/* Experience Cards */}
        {/* <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="relative h-48 overflow-hidden">
                {experience.isVideo ? (
                  <video 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src={experience.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <experience.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {experience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div> */}
        
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Come Alone or With Your Team
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Bring your top performers. Your managers. Your inner circle. 
              Let them grow with you, align with your vision, and return more empowered than ever.
            </p>
            <div className="bg-gray-100 p-8 rounded-2xl">
              <p className="text-2xl font-bold text-gray-900 mb-2">
                Join business leaders from across Africa
              </p>
              <p className="text-lg text-gray-600">
                for this life-giving, business-elevating, team-aligning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
