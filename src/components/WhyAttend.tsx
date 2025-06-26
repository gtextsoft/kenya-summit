
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why You Should Attend
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This retreat is for business leaders and high-growth teams who want to transform 
            how they lead, scale, and create lasting impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
