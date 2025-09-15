import React from 'react';
import { Card } from '@/components/ui/card';
import authHeroImage from '@/assets/auth-hero.jpg';
import { BookOpen } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Hero image with overlay */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${authHeroImage})` }}
        />
        <div className="absolute inset-0 overlay-gradient" />
        
        {/* Content overlay */}
        <div className="relative z-10 flex flex-col justify-center px-12 text-white">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold">BookMS</h1>
            </div>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Organize your library effortlessly
            </h2>
            <p className="text-lg text-white/80 max-w-md">
              Streamline your book collection with powerful management tools, 
              role-based access, and intuitive organization features.
            </p>
          </div>
          
          {/* Features list */}
          <div className="space-y-3 text-white/90">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Comprehensive book catalog management</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Role-based access controls</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Advanced search and filtering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Auth form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-background">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-0 bg-card/50 backdrop-blur-sm">
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
};