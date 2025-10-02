
import { Card, CardContent } from "@/components/ui/card";
import { Users2, Target, Zap, Mountain, Star, Shield } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Build a Thriving Business",
    description: "That doesn't rely solely on you to function"
  },
  {
    icon: Users2,
    title: "Transform Your Staff",
    description: "Into vision-driven co-creators"
  },
  {
    icon: Mountain,
    title: "Reclaim Focus & Peace",
    description: "Long-term strategy without stress"
  },
  {
    icon: Zap,
    title: "Strengthen Internal Systems",
    description: "For sustainable scale"
  },
  {
    icon: Star,
    title: "Create Lasting Culture",
    description: "Alignment and leadership across your organization"
  },
  {
    icon: Shield,
    title: "Reset & Refocus",
    description: "Whether solo or with your team for alignment and skill-upgrade"
  }
];

const WhyAttend = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Why You Should Attend
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            This retreat is for business leaders and high-growth teams who want to transform 
            how they lead, scale, and create lasting impact.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl font-semibold mb-4">
              This isn't your regular retreat.
            </p>
            <p className="text-lg">
              This is a transformational leadership immersion designed to elevate your business, 
              align your team, and reset your vision in one of Africa's most breathtaking destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
