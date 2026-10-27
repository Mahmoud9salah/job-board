import NavbarFooter from "@/components/navbar/NavbarFooter";
import NavbarHeader from "@/components/navbar/NavbarHeader";

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
        <NavbarHeader />
          <main className="w-full flex-1">{children}</main>
        <NavbarFooter />
    </div>
  );
}

export default AppLayout;