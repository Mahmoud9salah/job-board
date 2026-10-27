import AdminSidebar from "@/components/navbar/AdminSidebar";
import { Ad } from "lucide-react";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
        <AdminSidebar>
            {children}
        </AdminSidebar>
    </div>
  );
}

export default DashboardLayout;