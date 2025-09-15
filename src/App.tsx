import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { AppLayout } from "@/components/layout/AppLayout";
import { Auth } from "@/pages/Auth";
import { Dashboard } from "@/pages/Dashboard";
import { Books } from "@/pages/Books";
import { Forbidden } from "@/pages/Forbidden";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/auth" element={<Auth />} />
            <Route path="/403" element={<Forbidden />} />
            
            {/* Protected routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <AppLayout>
                  <Navigate to="/dashboard" replace />
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/books" element={
              <ProtectedRoute>
                <AppLayout>
                  <Books />
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/categories" element={
              <ProtectedRoute>
                <AppLayout>
                  <div className="text-center py-12">
                    <h1 className="text-2xl font-bold">Categories</h1>
                    <p className="text-muted-foreground">Categories management coming soon</p>
                  </div>
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/authors" element={
              <ProtectedRoute>
                <AppLayout>
                  <div className="text-center py-12">
                    <h1 className="text-2xl font-bold">Authors</h1>
                    <p className="text-muted-foreground">Authors management coming soon</p>
                  </div>
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/management/users" element={
              <ProtectedRoute requiredRoles={['Admin', 'SuperAdmin']}>
                <AppLayout>
                  <div className="text-center py-12">
                    <h1 className="text-2xl font-bold">User Management</h1>
                    <p className="text-muted-foreground">User management coming soon</p>
                  </div>
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/management/roles" element={
              <ProtectedRoute requiredRoles={['SuperAdmin']}>
                <AppLayout>
                  <div className="text-center py-12">
                    <h1 className="text-2xl font-bold">Role Management</h1>
                    <p className="text-muted-foreground">Role management coming soon</p>
                  </div>
                </AppLayout>
              </ProtectedRoute>
            } />
            
            <Route path="/admin" element={
              <ProtectedRoute requiredRoles={['Admin', 'SuperAdmin']}>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            } />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
