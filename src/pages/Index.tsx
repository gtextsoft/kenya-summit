
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Star, ArrowRight, Mountain, Users2, Target, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import WhyAttend from "@/components/WhyAttend";
import Topics from "@/components/Topics";
import Experience from "@/components/Experience";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import KenyaFlag from "@/components/KenyaFlag";
import Pricing from "@/components/Pricing";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Hero />
      <WhyAttend />
      <Topics />
      <Experience />
      <Team />
      <Gallery />
      <KenyaFlag />
      <Pricing />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
