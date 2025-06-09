// src/components/Layout.tsx
import { Header } from "./Header";
import { AdminHeader } from "./admin/AdminHeader";
import { Footer } from "./Footer";
import { BarSelection } from "./Barselection";

interface LayoutProps {
  children: React.ReactNode;
  isAuthenticated?: boolean;
  isAdmin?: boolean;
}


export const Layout = ({ children, isAuthenticated = false, isAdmin = false }: LayoutProps) => {
  return (
    <>
      <BarSelection />
        {isAdmin ? (
          <AdminHeader />
        ) : (
          <Header isAuthenticated = {isAuthenticated} />
        )}
      <main>{children}</main>
      <Footer />
    </>
  );
};
