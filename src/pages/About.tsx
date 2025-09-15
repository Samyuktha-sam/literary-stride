import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Shield, BarChart, Globe, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const aboutFeatures = [
  {
    icon: BookOpen,
    title: "Smart Organization",
    description: "AI-powered categorization and intelligent tagging make organizing thousands of books effortless."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access controls and comprehensive audit trails."
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: "Teams can work together seamlessly with real-time updates and collaborative features."
  },
  {
    icon: BarChart,
    title: "Powerful Analytics",
    description: "Deep insights into usage patterns, popular books, and operational efficiency."
  },
  {
    icon: Globe,
    title: "Cloud-Native",
    description: "Access your library from anywhere with our reliable, scalable cloud infrastructure."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensures instant search results and smooth user experience."
  }
];

const stats = [
  { number: "50,000+", label: "Books Managed" },
  { number: "1,000+", label: "Libraries Served" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" }
];

export const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">BookMS</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/')}>
              Home
            </Button>
            <Button variant="ghost" onClick={() => navigate('/auth')}>
              Sign In
            </Button>
            <Button onClick={() => navigate('/auth')}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            About BookMS
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're on a mission to revolutionize library management. BookMS combines cutting-edge 
            technology with intuitive design to create the most powerful and user-friendly library 
            management system available today.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              To empower libraries, educational institutions, and organizations worldwide with 
              technology that simplifies book management and enhances the reading experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Built for the Future</h3>
              <p className="text-muted-foreground mb-6">
                BookMS was born from the frustration of using outdated library systems. We saw an 
                opportunity to create something better - a platform that combines modern design 
                principles with powerful functionality.
              </p>
              <p className="text-muted-foreground">
                Our team of experienced developers and library professionals worked together to 
                create a system that addresses real-world challenges while being delightful to use.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <h4 className="text-xl font-semibold mb-4">Why Choose BookMS?</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>✓ Intuitive, modern interface</li>
                <li>✓ Robust security and permissions</li>
                <li>✓ Comprehensive search capabilities</li>
                <li>✓ Real-time analytics and reporting</li>
                <li>✓ Seamless cloud synchronization</li>
                <li>✓ 24/7 expert support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Features for Modern Libraries
            </h2>
            <p className="text-xl text-muted-foreground">
              Every feature is designed with user experience and efficiency in mind
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Simplicity</h3>
              <p className="text-muted-foreground">
                We believe powerful software should be simple to use. Complex tasks should feel effortless.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-muted-foreground">
                Your library data is precious. We ensure 99.9% uptime and enterprise-grade security.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our platform based on user feedback and emerging technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the BookMS Community
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover why thousands of libraries trust BookMS for their management needs.
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8"
            onClick={() => navigate('/auth')}
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">BookMS</span>
              </div>
              <p className="text-muted-foreground">
                Professional library management system for the modern age.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
                <li>Integrations</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Status</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 BookMS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};