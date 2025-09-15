import { cn } from "@/lib/utils";
import { UserRole } from "@/contexts/AuthContext";

interface RoleBadgeProps {
  role: UserRole;
  className?: string;
}

export const RoleBadge = ({ role, className }: RoleBadgeProps) => {
  const roleStyles = {
    User: "role-badge role-badge-user",
    Admin: "role-badge role-badge-admin", 
    SuperAdmin: "role-badge role-badge-superadmin",
  };

  return (
    <span className={cn(roleStyles[role], className)}>
      {role}
    </span>
  );
};