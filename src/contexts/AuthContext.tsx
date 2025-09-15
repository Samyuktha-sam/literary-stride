import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'User' | 'Admin' | 'SuperAdmin';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  provider?: 'email' | 'google' | 'microsoft';
  lastLogin?: string;
  isActive: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  loginWithSSO: (provider: 'google' | 'microsoft', token: string) => Promise<void>;
  logout: () => void;
  hasRole: (role: UserRole) => boolean;
  hasAnyRole: (roles: UserRole[]) => boolean;
}

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  role?: UserRole;
  agreeToTerms: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing token on mount
    const token = localStorage.getItem('access_token');
    if (token) {
      // In a real app, validate token with backend
      // For demo, create a mock user
      setUser({
        id: '1',
        email: 'admin@bookms.com',
        fullName: 'Admin User',
        role: 'Admin',
        provider: 'email',
        lastLogin: new Date().toISOString(),
        isActive: true,
      });
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (email === 'admin@bookms.com' && password === 'password123') {
        const mockUser: User = {
          id: '1',
          email,
          fullName: 'Admin User',
          role: 'Admin',
          provider: 'email',
          lastLogin: new Date().toISOString(),
          isActive: true,
        };
        setUser(mockUser);
        localStorage.setItem('access_token', 'mock-jwt-token');
      } else {
        throw new Error('Invalid credentials');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (data: RegisterData) => {
    setIsLoading(true);
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: Date.now().toString(),
        email: data.email,
        fullName: data.fullName,
        role: data.role || 'User',
        provider: 'email',
        lastLogin: new Date().toISOString(),
        isActive: true,
      };
      setUser(mockUser);
      localStorage.setItem('access_token', 'mock-jwt-token');
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithSSO = async (provider: 'google' | 'microsoft', token: string) => {
    setIsLoading(true);
    try {
      // Mock SSO login - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: Date.now().toString(),
        email: `user@${provider}.com`,
        fullName: `${provider} User`,
        role: 'User',
        provider,
        lastLogin: new Date().toISOString(),
        isActive: true,
      };
      setUser(mockUser);
      localStorage.setItem('access_token', 'mock-jwt-token');
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  };

  const hasRole = (role: UserRole): boolean => {
    if (!user) return false;
    const roleHierarchy = { User: 0, Admin: 1, SuperAdmin: 2 };
    return roleHierarchy[user.role] >= roleHierarchy[role];
  };

  const hasAnyRole = (roles: UserRole[]): boolean => {
    return roles.some(role => hasRole(role));
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    loginWithSSO,
    logout,
    hasRole,
    hasAnyRole,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};