import Sidebar from "./_components/sidebar/index";
import React from 'react';

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = (props: ProtectedLayoutProps) => {
  return ( 
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">{props.children}</div>
    </div>
   );
}
 
export default ProtectedLayout;