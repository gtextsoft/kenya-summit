
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Users, Building2, ArrowRight, Sparkles, Timer } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const individualPackages = [
  {
    title: "Premium Studio",
    price: "₦5,500,000",
    accommodation: "Studio apartment accommodation",
    icon: Building2,
    popular: false,
    features: [
      "Visa and Ticket",
      "Event & Tour",
      "Studio apartment accommodation"
    ]
  },
  {
    title: "Single Comfort",
    price: "₦4,500,000", 
    accommodation: "Single accommodation",
    icon: Home,
    popular: true,
    features: [
      "Visa and Ticket",
      "Event & Tour", 
      "Single accommodation"
    ]
  },
  {
    title: "Shared Value",
    price: "₦4,000,000",
    accommodation: "Shared apartment (2) accommodation", 
    icon: Users,
    popular: false,
    features: [
      "Visa and Ticket",
      "Event & Tour",
      "Shared apartment (2) accommodation"
    ]
  }
];

const Pricing = () => {
  const [isCopied, setIsCopied] = useState(false);
  const couponCode = "SAVE50";

  const handlePaymentClick = () => {
    window.open('https://app.mailingboss.com/lists/685bc4caa031e/subscribe', '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setIsCopied(true);
      toast({
        title: "Copied!",
        description: `Coupon code ${couponCode} copied to clipboard`,
        duration: 2000,
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the code manually",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Investment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the package that best fits your needs. All packages include visa processing, 
            tickets, full event access, and guided tours of Kenya's most iconic destinations.
          </p>
        </div>

        {/* Special Offer Section */}
        <div className="max-w-4xl mx-auto mb-16 transform hover:scale-105 transition-transform duration-300">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 p-1 rounded-2xl animate-pulse">
            <div className="bg-white rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Sparkles className="h-8 w-8 text-amber-500 animate-bounce" />
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      🔥 Flash Sale!
                    </h3>
                    <div className="mt-2 space-y-1">
                      <p className="text-lg md:text-xl text-gray-700 flex items-center gap-2">
                        <span className="line-through text-gray-400">Original Price</span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-sm font-semibold">-50% OFF</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        Discount automatically applied at checkout
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-center md:text-right flex items-center gap-3">
                  <Timer className="h-5 w-5 text-amber-600 animate-pulse" />
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-amber-600">
                      Limited Time Only
                    </div>
                    <p className="text-gray-600 mt-1">
                      Book now before prices increase!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Packages */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Economy Class for Individuals
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {individualPackages.map((pkg, index) => (
              <Card key={index} className={`relative group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 ${pkg.popular ? 'ring-2 ring-amber-500' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {pkg.title}
                  </CardTitle>
                  <div className="text-3xl font-bold text-amber-600 mt-2">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-6"
                    onClick={handlePaymentClick}
                  >
                    Select Package
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Group Package */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Group Package
          </h3>
          <Card className="bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-2xl border-0">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                <div className="space-y-4">
                  <Badge className="bg-white/20 text-white px-4 py-2 text-lg font-semibold">
                    Best Value for Teams
                  </Badge>
                  <h4 className="text-3xl md:text-4xl font-bold">
                    Group of 5
                  </h4>
                  <div className="text-5xl md:text-6xl font-bold">
                    ₦19,000,000
                  </div>
                  <p className="text-xl text-amber-100">
                    Perfect for leadership teams and small organizations
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle className="h-6 w-6 text-amber-200 flex-shrink-0" />
                    <span className="text-lg">Visa & Ticket</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle className="h-6 w-6 text-amber-200 flex-shrink-0" />
                    <span className="text-lg">Event & Tour</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center md:justify-start">
                    <CheckCircle className="h-6 w-6 text-amber-200 flex-shrink-0" />
                    <span className="text-lg">Shared room apartment</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-orange-600 hover:bg-gray-100 px-12 py-4 text-xl font-bold transition-all transform hover:scale-105"
                    onClick={handlePaymentClick}
                  >
                    Book Group Package
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                  <p className="text-amber-200">
                    Save significantly when you bring your team together
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <strong>All packages include:</strong> Complete visa processing, round-trip tickets, 
              full retreat program access, guided Kenya tours, meals during events, and accommodation as specified.
            </p>
            <p className="text-gray-600">
              Payment plans available. Contact us for corporate group discounts and custom arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
