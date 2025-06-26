
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topics = [
  {
    title: "Scaling Without Breaking",
    description: "Build a business that grows and breathes — without burning out.",
    badge: "Growth"
  },
  {
    title: "The Art of Building Ownership in Teams",
    description: "Move your team from salary earners to mission-minded leaders.",
    badge: "Leadership"
  },
  {
    title: "How to Sell With Confidence, Clarity, and Integrity",
    description: "Learn to sell with impact — and without sleaze.",
    badge: "Sales"
  },
  {
    title: "Leading When You're Tired",
    description: "For the visionary who's poured into everyone but now needs a refill.",
    badge: "Wellness"
  },
  {
    title: "The 7 Business Systems Every Company Needs",
    description: "Streamline operations, boost profits, and run a company that works without you.",
    badge: "Systems"
  },
  {
    title: "Unlearn to Relearn",
    description: "Break old success limits and embrace new paradigms.",
    badge: "Mindset"
  },
  {
    title: "The Business of You",
    description: "Elevate your personal brand to power your business growth.",
    badge: "Branding"
  },
  {
    title: "Work Hard, Rest Smart",
    description: "Tools and habits for sustainable performance and wellness.",
    badge: "Balance"
  },
  {
    title: "Team Alignment Intensive",
    description: "Bring everyone into one vision, one direction, one heartbeat.",
    badge: "Alignment"
  },
  {
    title: "The Kenya Reset",
    description: "A powerful, guided moment to reflect, realign, and map the next level.",
    badge: "Transformation"
  }
];

const badgeColors = {
  Growth: "bg-green-100 text-green-800",
  Leadership: "bg-blue-100 text-blue-800",
  Sales: "bg-purple-100 text-purple-800",
  Wellness: "bg-pink-100 text-pink-800",
  Systems: "bg-gray-100 text-gray-800",
  Mindset: "bg-yellow-100 text-yellow-800",
  Branding: "bg-indigo-100 text-indigo-800",
  Balance: "bg-teal-100 text-teal-800",
  Alignment: "bg-orange-100 text-orange-800",
  Transformation: "bg-red-100 text-red-800"
};

const Topics = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Topics We'll Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each session is designed to be practical, engaging, and radically transformative. 
            You won't just learn, you'll evolve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight">
                    {topic.title}
                  </CardTitle>
                  <Badge className={`${badgeColors[topic.badge as keyof typeof badgeColors]} font-medium whitespace-nowrap`}>
                    {topic.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {topic.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
