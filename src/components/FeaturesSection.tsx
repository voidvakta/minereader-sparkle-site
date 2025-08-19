import { Brain, Zap, Shield, BarChart3, FileText, Cloud } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning algorithms automatically extract insights from your documents and data sources."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process thousands of documents in minutes, not hours. Our optimized infrastructure scales with your needs."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, SOC 2, and other industry standards."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Transform raw data into actionable insights with our intelligent dashboard and reporting tools."
  },
  {
    icon: FileText,
    title: "Multi-Format Support",
    description: "Support for PDFs, Word docs, spreadsheets, images, and 50+ file formats out of the box."
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for the cloud with automatic scaling, real-time collaboration, and 99.9% uptime guarantee."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Features</span>
            <br />
            <span className="text-foreground">Built for Modern Teams</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your document processing workflow and unlock the hidden value in your data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group hover:glow-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;