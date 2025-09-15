import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Book } from 'lucide-react';

export const Books = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Books</h1>
          <p className="text-muted-foreground">
            Manage your book collection
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Book
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            Book Collection
          </CardTitle>
          <CardDescription>
            Your comprehensive book management interface
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Book className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No books yet</h3>
            <p className="text-muted-foreground mb-4">
              Start building your library by adding your first book
            </p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Book
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};