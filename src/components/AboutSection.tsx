import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    "Founded by ex-Google and Microsoft engineers",
    "Trusted by Fortune 500 companies worldwide",
    "$50M+ in Series B funding from top VCs",
    "99.9% uptime across 5+ years of operation"
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-foreground">About</span>
              <br />
              <span className="gradient-text">Minereader</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're revolutionizing how organizations extract value from their data. Our mission is to make advanced AI accessible to every team, enabling faster decisions and deeper insights.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button className="btn-hero">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="feature-card text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">50+</h3>
              <p className="text-muted-foreground">Team Members</p>
            </div>
            
            <div className="feature-card text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Customer Satisfaction</p>
            </div>
            
            <div className="feature-card text-center sm:col-span-2">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                Constantly pushing the boundaries of what's possible with AI and data processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;