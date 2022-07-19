import Navbar from "components/header/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="container px-4 mx-auto">{children}</div>
    </div>
  );
}

export default Layout;
