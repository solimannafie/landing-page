
import React from 'react';
import { Check, MapPin, HandshakeIcon, Users, Zap } from 'lucide-react';

interface HowItWorksProps {
  onUserTypeSelect: (type: 'activator' | 'brand') => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onUserTypeSelect }) => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
        
        <div className="text-center mb-12">
          <p className="text-xl mb-8">
            Are you a Brand or an Activator (a geosocial influencer who promotes brands through real-world social interactions)?
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
            <button 
              onClick={() => onUserTypeSelect('brand')}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              I'm a Brand
            </button>
            <button 
              onClick={() => onUserTypeSelect('activator')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              I'm an Activator
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Check className="text-blue-700 w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 1: Define Your Values</h3>
            <p className="text-gray-600">
              Choose the values that guide your brand or personal mission—this shapes your marketing and social impact.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <MapPin className="text-blue-700 w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 2: Set Your Location</h3>
            <p className="text-gray-600">
              Pick the ZIP codes where you want to activate and influence.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <HandshakeIcon className="text-blue-700 w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 3: Get Matched</h3>
            <p className="text-gray-600">
              Joybraid connects Brands and Activators based on shared values and locations.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
              <Zap className="text-blue-700 w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Step 4: Activate IRL</h3>
            <p className="text-gray-600">
              Activators spark real-world conversations and earn by getting people to scan branded QR codes minted by paying partner businesses.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Benefits for Everyone</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span>Brands fund Activation Pools at $0.50 per scan</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span>Brands gain exposure, loyalty, and viral buzz</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                <Check className="h-4 w-4 text-green-600" />
              </div>
              <span>Activators unlock financial freedom with unlimited earning potential</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
