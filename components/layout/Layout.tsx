import Navbar from "components/header/Navbar";
import Subscribe from "components/subscribe/Subscribe";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="container px-4 mx-auto">{children}</div>
      <Subscribe />
    </div>
  );
}

export default Layout;
