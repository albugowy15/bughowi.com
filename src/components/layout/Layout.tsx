import Navbar from "components/header/Navbar";
import Subscribe from "components/subscribe/Subscribe";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="container 2xl:max-w-7xl px-4 mx-auto flex-1">
        {children}
      </div>
      <div className="py-8" />
      <Subscribe />
    </div>
  );
}

export default Layout;
