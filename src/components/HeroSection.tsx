import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-sm"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="gradient-text">Mine</span> Your Data's
          <br />
          <span className="text-foreground">True Potential</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock powerful insights from your documents and data with our cutting-edge AI-powered reading and analysis platform. Transform how your team processes information.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="btn-hero group">
            Start Mining Data
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button className="btn-hero-outline group">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">99.7%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">10x</div>
            <div className="text-muted-foreground">Faster Processing</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;