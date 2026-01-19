
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe } from "lucide-react";


const Pricing = () => {
  const handlePaymentClick = () => {
    window.open('https://app.mailingboss.com/lists/685bc4caa031e/subscribe', '_blank');
  };

  const packages = [
    {
      title: "Corporate Leadership Retreat, Kenya",
      price: "$6,000",
      billing: "All expenses included",
      description: "20th-26th of April, 2026",
      icon: Globe,
      features: [
        "Visa processing",
        "Flight ticket",
        "Accommodation",
        "Tourism & sightseeing",
        "Full Training Program",
        "All meals included"
      ],
      buttonText: "Reserve Your Spot",
      popular: true
    }
  ];

  return (
    <section id="investment-options" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Investment Options
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Corporate Leadership Retreat, Kenya - 20th-26th of April, 2026. 
            All-inclusive package covering visa, flight ticket, accommodation, and tourism.
          </p>
          
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 mb-16 md:grid-cols-1 max-w-2xl mx-auto">
          {packages.map((pkg, index) => (
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
              What's Included in Your Package
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Visa processing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Flight ticket</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Full retreat program access</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Accommodation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Tourism & sightseeing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">All meals included</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              All expenses covered. Payment plans available. Contact us for corporate group discounts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
