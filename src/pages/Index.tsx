
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star, ArrowRight, Mountain, Users2, Target, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import WhyAttend from "@/components/WhyAttend";
import Topics from "@/components/Topics";
import Experience from "@/components/Experience";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Hero />
      <WhyAttend />
      <Topics />
      <Experience />
      <Pricing />
      <CallToAction />
    </div>
  );
};

export default Index;
