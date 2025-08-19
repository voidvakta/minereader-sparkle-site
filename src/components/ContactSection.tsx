import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to Get</span>
            <br />
            <span className="gradient-text">Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of companies already transforming their data processing workflows with Minereader.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="feature-card">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-background/50" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input placeholder="Your Company" className="bg-background/50" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your data processing needs..." 
                    className="bg-background/50 min-h-[120px]" 
                  />
                </div>
                
                <Button className="btn-hero w-full group">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="feature-card">
              <Mail className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">hello@minereader.com</p>
              <p className="text-muted-foreground">support@minereader.com</p>
            </div>
            
            <div className="feature-card">
              <Phone className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-muted-foreground">Mon-Fri 9AM-6PM PST</p>
            </div>
            
            <div className="feature-card">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Office</h3>
              <p className="text-muted-foreground">
                123 Innovation Drive<br />
                San Francisco, CA 94105<br />
                United States
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;