import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-neutral-100   flex flex-row">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="bg-content py-6 h-full px-8">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
