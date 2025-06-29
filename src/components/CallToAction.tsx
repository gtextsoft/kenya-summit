
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ArrowRight, Clock } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-xl md:text-2xl text-amber-100 leading-relaxed">
              Join us in Kenya for an unprecedented blend of business growth, 
              team alignment, and soul-stirring adventure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
              <Calendar className="h-8 w-8 text-amber-300 mx-auto" />
              <h3 className="font-bold text-lg">When</h3>
              <p className="text-amber-100">September 24-29, 2025</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
              <MapPin className="h-8 w-8 text-amber-300 mx-auto" />
              <h3 className="font-bold text-lg">Where</h3>
              <p className="text-amber-100">Kenya, Africa</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 space-y-3">
              <Users className="h-8 w-8 text-amber-300 mx-auto" />
              <h3 className="font-bold text-lg">Spots</h3>
              <p className="text-amber-100">Only 50 Available</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2 text-amber-200">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Early Bird Pricing Available</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
            >
              Secure Your Spot Now
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-amber-200 text-sm">
              Limited spaces available • Investment details provided upon inquiry
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-lg text-amber-100">
              Questions? Ready to discuss bringing your team?
            </p>
            <p className="text-xl font-semibold mt-2">
              Contact us today to learn more about this transformational experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
