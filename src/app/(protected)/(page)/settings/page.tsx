import React from 'react';

type Props = {};

const SettingsPage = (props: Props) => {
  return ( 
    <div className="flex flex-col gap-4 relative">
    <h1 className="text-4xl sticky top-0 z-10 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
      Settings
    </h1>
    <div className="flex flex-col gap-10 p-6">
      <div>
        <h2 className="text-2xl font-bold">User Profile</h2>
        <p className="text-base text-white/50">Add or update your account informations</p>
      </div>
    </div>
  </div>
   );
}
 
export default SettingsPage;