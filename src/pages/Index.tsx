
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import SignupForms from '@/components/SignupForms';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [userType, setUserType] = useState<'activator' | 'brand' | null>(null);

  const handleUserTypeSelect = (type: 'activator' | 'brand') => {
    setUserType(type);
    toast({
      title: `You selected ${type === 'activator' ? 'Activator' : 'Brand'} platform`,
      description: "Complete the form below to join",
    });
    
    // Scroll to the form section
    setTimeout(() => {
      const element = document.getElementById(`join-${type}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle URL hash for direct navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        // Set user type if hash is for a specific form
        if (hash === '#join-activator') {
          setUserType('activator');
        } else if (hash === '#join-brand') {
          setUserType('brand');
        }
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <HowItWorks onUserTypeSelect={handleUserTypeSelect} />
        <SignupForms selectedType={userType} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
