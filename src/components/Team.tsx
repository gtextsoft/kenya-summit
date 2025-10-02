import { Card, CardContent } from "@/components/ui/card";
import { Users, Star, Award, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Leadership Team",
    role: "Kenya Summit Organizers",
    image: "/images/KTeam.jpg",
    description: "Our dedicated team of professionals committed to delivering an exceptional retreat experience"
  }
];

const Team = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Meet Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            The passionate professionals behind the Kenya Summit experience, 
            dedicated to creating transformative moments for business leaders.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-2/5">
                  <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 sm:px-4 sm:py-2">
                        <span className="text-white font-semibold text-xs sm:text-sm">Leadership Team</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="w-full md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-500" />
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                      </div>
                      <p className="text-lg sm:text-xl text-amber-600 font-semibold">
                        {member.role}
                      </p>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
                      <div className="text-center p-3 sm:p-4 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                        <Star className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-500 mx-auto mb-2" />
                        <span className="text-gray-700 font-semibold text-sm sm:text-base">Experienced</span>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                        <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-500 mx-auto mb-2" />
                        <span className="text-gray-700 font-semibold text-sm sm:text-base">Professional</span>
                      </div>
                      <div className="text-center p-3 sm:p-4 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                        <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-amber-500 mx-auto mb-2" />
                        <span className="text-gray-700 font-semibold text-sm sm:text-base">Passionate</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold mb-4">
              Ready to experience Kenya with our expert team?
            </p>
            <p className="text-lg">
              Our team is committed to ensuring your retreat is not just memorable, 
              but truly transformational for your business and personal growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
