import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, BookOpen, Calendar, Star, Bookmark, Users } from 'lucide-react';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {user?.fullName?.split(' ')[0]}!
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening with your library today.
        </p>
      </div>

      {/* Stats */}
      <DashboardStats />

      {/* Quick Actions & Recent Activity */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks to get you started
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <Button className="justify-start h-auto p-4" variant="outline">
                <Plus className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Add New Book</div>
                  <div className="text-sm text-muted-foreground">
                    Add a book to your collection
                  </div>
                </div>
              </Button>
              
              <Button className="justify-start h-auto p-4" variant="outline">
                <Bookmark className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Create Category</div>
                  <div className="text-sm text-muted-foreground">
                    Organize books by category
                  </div>
                </div>
              </Button>
              
              <Button className="justify-start h-auto p-4" variant="outline">
                <Users className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Add Author</div>
                  <div className="text-sm text-muted-foreground">
                    Register a new author
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates in your library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">
                    "The Great Gatsby" was added
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2 hours ago
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-success/10 rounded-full">
                  <Star className="h-4 w-4 text-success" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">
                    Category "Science Fiction" created
                  </p>
                  <p className="text-xs text-muted-foreground">
                    1 day ago
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full">
                  <Calendar className="h-4 w-4 text-accent" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">
                    5 books checked out this week
                  </p>
                  <p className="text-xs text-muted-foreground">
                    3 days ago
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};