import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './AppSidebar';
import { TopBar } from './TopBar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Top bar with sidebar trigger */}
          <div className="relative">
            <SidebarTrigger className="absolute left-4 top-4 z-10" />
            <TopBar />
          </div>

          {/* Page content */}
          <main className="flex-1 p-6 bg-background">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-border bg-muted/20 px-6 py-4">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div>BookMS v1.0.0</div>
              <div>Build #abc123</div>
            </div>
          </footer>
        </div>
      </div>
    </SidebarProvider>
  );
};