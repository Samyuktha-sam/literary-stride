import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Bookmark, Users, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  trend?: {
    value: number;
    label: string;
  };
}

const StatCard = ({ title, value, icon: Icon, trend }: StatCardProps) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium text-muted-foreground">
        {title}
      </CardTitle>
      <Icon className="h-4 w-4 text-muted-foreground" />
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      {trend && (
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <TrendingUp className="h-3 w-3" />
          <span className="text-success">+{trend.value}%</span>
          <span>{trend.label}</span>
        </div>
      )}
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Books"
        value="1,234"
        icon={Book}
        trend={{ value: 12, label: "from last month" }}
      />
      <StatCard
        title="Categories"
        value="45"
        icon={Bookmark}
        trend={{ value: 5, label: "from last month" }}
      />
      <StatCard
        title="Authors"
        value="567"
        icon={Users}
        trend={{ value: 8, label: "from last month" }}
      />
      <StatCard
        title="Available"
        value="1,089"
        icon={Book}
        trend={{ value: 3, label: "from last week" }}
      />
    </div>
  );
};