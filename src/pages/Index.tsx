
import React, { useState } from 'react';
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
  };

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
