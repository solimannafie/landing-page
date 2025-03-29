
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface SignupFormsProps {
  selectedType: 'activator' | 'brand' | null;
}

const VALUES = [
  "Community", "Sustainability", "Innovation", "Diversity", 
  "Quality", "Authenticity", "Empowerment", "Wellness"
];

const SignupForms: React.FC<SignupFormsProps> = ({ selectedType }) => {
  const { toast } = useToast();
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [activationCount, setActivationCount] = useState<number>(100);
  
  const handleValueToggle = (value: string) => {
    if (selectedValues.includes(value)) {
      setSelectedValues(selectedValues.filter(v => v !== value));
    } else {
      if (selectedValues.length < 3) {
        setSelectedValues([...selectedValues, value]);
      } else {
        toast({
          title: "Maximum values selected",
          description: "You can select up to 3 values",
          variant: "destructive"
        });
      }
    }
  };
  
  const handleActivationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1) {
      setActivationCount(value);
    }
  };
  
  const handleSubmit = (event: React.FormEvent, type: string) => {
    event.preventDefault();
    toast({
      title: "Form submitted successfully!",
      description: `Thank you for joining Joybraid as a ${type}. We'll be in touch soon.`,
    });
  };

  return (
    <section id="join" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Join Joybraid</h2>
        
        <Tabs defaultValue={selectedType || "activator"} value={selectedType || undefined} className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="activator" id="join-activator">Activator Platform</TabsTrigger>
            <TabsTrigger value="brand" id="join-brand">Brand Platform</TabsTrigger>
          </TabsList>
          
          <TabsContent value="activator">
            <Card>
              <CardHeader>
                <CardTitle>Join Activator Platform</CardTitle>
                <CardDescription>
                  Earn as a Real World Geosocial Influencer. You'll receive an email to begin playing 
                  and earning when Joybraid goes live.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'Activator')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="activatorEmail">Email</Label>
                    <Input id="activatorEmail" type="email" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="activatorCell">Cell</Label>
                      <Input id="activatorCell" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="activatorZip">Zip Code</Label>
                      <Input id="activatorZip" required />
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Label>Values (Select up to 3)</Label>
                    <div className="flex flex-wrap gap-2">
                      {VALUES.map((value) => (
                        <Button 
                          key={value}
                          type="button"
                          variant={selectedValues.includes(value) ? "default" : "outline"}
                          onClick={() => handleValueToggle(value)}
                          className="rounded-full text-sm"
                        >
                          {value}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="brand">
            <Card>
              <CardHeader>
                <CardTitle>Join Brand Platform</CardTitle>
                <CardDescription>
                  Empower Growth Through Word of Mouth AI Viral Marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => handleSubmit(e, 'Brand')}>
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="businessName">Name of Business</Label>
                    <Input id="businessName" required />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="businessAddress">Address and Zip Code</Label>
                    <Input id="businessAddress" required />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="partnerName">Proprietor or Managing Partner Name</Label>
                    <Input id="partnerName" required />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="brandEmail">Email</Label>
                      <Input id="brandEmail" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brandCell">Cell</Label>
                      <Input id="brandCell" type="tel" required />
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Label>Values (Select up to 3)</Label>
                    <div className="flex flex-wrap gap-2">
                      {VALUES.map((value) => (
                        <Button 
                          key={value}
                          type="button"
                          variant={selectedValues.includes(value) ? "default" : "outline"}
                          onClick={() => handleValueToggle(value)}
                          className="rounded-full text-sm"
                        >
                          {value}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="marketingPrompt">Creative Marketing Prompt for The Product/Service You Want to Promote</Label>
                    <Textarea id="marketingPrompt" rows={4} required />
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="activations">Activations</Label>
                      <div className="text-xl font-semibold">{activationCount}</div>
                    </div>
                    <Input
                      id="activations"
                      type="number"
                      min="1"
                      value={activationCount}
                      onChange={handleActivationChange}
                      className="w-full"
                    />
                    <div className="text-right text-sm text-gray-500">
                      ${(activationCount * 0.49).toFixed(2)}/month
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full">Purchase Plan & Join</Button>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500">
                  Or contact us for custom activation plans
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SignupForms;
