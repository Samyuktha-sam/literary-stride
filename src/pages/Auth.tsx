import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CardContent } from '@/components/ui/card';
import { AuthLayout } from '@/components/auth/AuthLayout';
import { LoginForm } from '@/components/auth/LoginForm';
import { SignupForm } from '@/components/auth/SignupForm';
import { useAuth } from '@/contexts/AuthContext';

export const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const { isAuthenticated, user } = useAuth();

  // Redirect authenticated users to their dashboard
  if (isAuthenticated && user) {
    const dashboardPath = user.role === 'SuperAdmin' ? '/admin' : 
                         user.role === 'Admin' ? '/admin' : '/dashboard';
    return <Navigate to={dashboardPath} replace />;
  }

  return (
    <AuthLayout>
      <CardContent className="p-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login" className="transition-all">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="signup" className="transition-all">
              Sign Up
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-0">
            <LoginForm />
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-0">
            <SignupForm />
          </TabsContent>
        </Tabs>
      </CardContent>
    </AuthLayout>
  );
};