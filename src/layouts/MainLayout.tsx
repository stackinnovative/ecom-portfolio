import { Navbar } from "../components/layout/NavBar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">{children}</main>
    </div>
  );
};
