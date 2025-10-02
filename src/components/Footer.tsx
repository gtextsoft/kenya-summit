import { useState, useEffect } from "react";
import { Heart, Calendar, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Foundation Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <img 
                src="/images/SAL.png" 
                alt="Stephen Akintayo Consulting" 
                className="h-10 sm:h-12 w-auto"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400">
                Stephen Akintayo Foundation
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Empowering business leaders and entrepreneurs across Africa through 
              transformative experiences and strategic partnerships.
            </p>
            <div className="flex items-center gap-2 text-amber-400">
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
              <span className="font-semibold text-sm sm:text-base">Made with Love</span>
            </div>
          </div>

          {/* Event Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-amber-400">Event Details</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                <div>
                  <p className="font-medium text-sm sm:text-base">November 23-28, 2025</p>
                  <p className="text-xs sm:text-sm text-gray-400">Corporate Leadership Retreat</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Kenya, Africa</p>
                  <p className="text-xs sm:text-sm text-gray-400">East African Hub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Live Date Tracker */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-amber-400">Live Time</h4>
            <div className="bg-gray-800 rounded-lg p-3 sm:p-4 border border-gray-700">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">Current Time</span>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-mono text-white">
                {formatDate(currentDate)}
              </p>
              <div className="mt-2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-400">Live</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-amber-400">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                <span className="text-gray-300 text-sm sm:text-base break-all">products@stephenakintayo.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                <div className="flex flex-col">
                  <span className="text-gray-300 text-sm sm:text-base">+234 (909) 033 2466</span>
                  <span className="text-gray-300 text-sm sm:text-base">+1 (832) 682-6159</span>
                </div>
              </div>
            </div>
            <div className="pt-3 sm:pt-4">
              <p className="text-xs sm:text-sm text-gray-400">
                Follow us for updates and inspiration
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-center sm:text-left">
                © 2025 Stephen Akintayo Foundation. All rights reserved.
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
