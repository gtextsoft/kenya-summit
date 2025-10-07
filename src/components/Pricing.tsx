
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Home, Users, Building2, ArrowRight, Sparkles, Timer, Crown, Globe } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";


const Pricing = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [billingFrequency, setBillingFrequency] = useState<'single' | 'group'>('single');
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

  const packages = {
    single: [
      {
        title: "Local Package",
        price: "KSh 1,000",
        billing: "Training only, no accommodation",
        description: "For Kenyans in Kenya",
        icon: Home,
        features: [
          "Event & Tour Access",
          "Full Training Program",
          "Meals During Events"
        ],
        buttonText: "Get started",
        popular: false
      },
      {
        title: "International Package",
        price: "₦3,500,000",
        billing: "Single person, all inclusive",
        description: "Perfect for individuals",
        icon: Globe,
        features: [
          "Visa and Ticket",
          "Event & Tour",
          "Accommodation",
          "Full Training Program"
        ],
        buttonText: "Reserve Your Spot",
        popular: true
      },
      {
        title: "Local Full Package",
        price: "KSh 1,500",
        billing: "With accommodation included",
        description: "Complete local experience",
        icon: Building2,
        features: [
          "Event & Tour Access",
          "Accommodation Included",
          "Full Training Program",
          "All Meals Covered"
        ],
        buttonText: "Get started",
        popular: false
      }
    ],
    group: [
      {
        title: "VIP Group Package",
        price: "₦15,000,000",
        billing: "Group of 5 people",
        description: "Perfect for leadership teams",
        icon: Users,
        features: [
          "Visa and Ticket for 5",
          "Event & Tour Access",
          "Shared Apartment",
          "Team Building Activities"
        ],
        buttonText: "Book VIP Group",
        popular: true
      },
      {
        title: "Corporate Package",
        price: "Custom",
        billing: "Tailored for your organization",
        description: "For multiple teams",
        icon: Crown,
        features: [
          "Everything in VIP Package",
          "Up to 20 team members",
          "Custom accommodation",
          "Dedicated support",
          "Branding opportunities"
        ],
        buttonText: "Contact Sales",
        popular: false
      }
    ]
  };

  return (
    <section id="investment-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Investment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the package that best fits your needs. All packages include visa processing, 
            tickets, full event access, and guided tours of Kenya's most iconic destinations.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg flex">
              <button
                onClick={() => setBillingFrequency('single')}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  billingFrequency === 'single'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setBillingFrequency('group')}
                className={`px-6 py-3 rounded-md font-medium transition-all relative ${
                  billingFrequency === 'group'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Group & Corporate
                {billingFrequency === 'group' && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 25%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className={`grid gap-8 mb-16 ${
          billingFrequency === 'single' 
            ? 'md:grid-cols-2 lg:grid-cols-3' 
            : 'md:grid-cols-2 max-w-4xl mx-auto'
        }`}>
          {packages[billingFrequency].map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? 'border-orange-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 text-sm font-bold">
                  Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4 pt-8 px-6">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  pkg.popular ? 'bg-orange-500' : 'bg-gray-100'
                }`}>
                  <pkg.icon className={`h-6 w-6 ${
                    pkg.popular ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                  {pkg.title}
                </CardTitle>
                
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {pkg.price}
                </div>
                
                <p className="text-sm text-gray-500 mb-4">
                  {pkg.billing}
                </p>
                
                <p className="text-gray-600">
                  {pkg.description}
                </p>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-3 font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-300'
                  }`}
                  onClick={handlePaymentClick}
                >
                  {pkg.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What's Included in Every Package
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Complete visa processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Round-trip tickets</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Full retreat program access</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Guided Kenya tours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Meals during events</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Accommodation as specified</span>
                </div>
              </div>
            </div>
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
