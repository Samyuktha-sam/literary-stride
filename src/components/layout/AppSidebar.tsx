import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Book, Bookmark, Users, UserCog, Settings, Lock } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/AuthContext';

interface NavItem {
  title: string;
  url: string;
  icon: any;
  requiresAuth?: boolean;
  requiredRoles?: Array<'User' | 'Admin' | 'SuperAdmin'>;
}

const navigationItems: NavItem[] = [
  {
    title: 'Books',
    url: '/books',
    icon: Book,
    requiresAuth: true,
  },
  {
    title: 'Categories',
    url: '/categories',
    icon: Bookmark,
    requiresAuth: true,
  },
  {
    title: 'Authors',
    url: '/authors',
    icon: Users,
    requiresAuth: true,
  },
];

const managementItems: NavItem[] = [
  {
    title: 'Users',
    url: '/management/users',
    icon: UserCog,
    requiresAuth: true,
    requiredRoles: ['Admin', 'SuperAdmin'],
  },
  {
    title: 'Roles',
    url: '/management/roles',
    icon: Settings,
    requiresAuth: true,
    requiredRoles: ['SuperAdmin'],
  },
];

export const AppSidebar = () => {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';
  const location = useLocation();
  const { user, hasAnyRole } = useAuth();
  
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  
  const getNavClasses = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  const canAccessItem = (item: NavItem) => {
    if (!item.requiresAuth) return true;
    if (!user) return false;
    if (!item.requiredRoles) return true;
    return hasAnyRole(item.requiredRoles);
  };

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarContent className="py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                if (!canAccessItem(item)) return null;
                
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink 
                        to={item.url} 
                        className={getNavClasses({ isActive: isActive(item.url) })}
                      >
                        <item.icon className="h-4 w-4" />
                        {!collapsed && (
                          <span className="flex items-center gap-2">
                            {item.title}
                            {item.requiresAuth && (
                              <Lock className="h-3 w-3 text-muted-foreground" />
                            )}
                          </span>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Management Section */}
        {user && hasAnyRole(['Admin', 'SuperAdmin']) && (
          <SidebarGroup>
            <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
              Management
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {managementItems.map((item) => {
                  if (!canAccessItem(item)) return null;
                  
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          className={getNavClasses({ isActive: isActive(item.url) })}
                        >
                          <item.icon className="h-4 w-4" />
                          {!collapsed && (
                            <span className="flex items-center gap-2">
                              {item.title}
                              <Lock className="h-3 w-3 text-muted-foreground" />
                            </span>
                          )}
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
};