import { NavbarSettings } from "./_components/navbarSettings";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center text-black">
      <NavbarSettings />
      {children}
    </div>
   );
}
 
export default ProtectedLayout;