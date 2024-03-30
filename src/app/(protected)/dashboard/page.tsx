"use client";

import { useCurrentUser } from '@/hooks/useCurrentUser';
import { logout } from '@/actions/logout';

const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  }
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b"></h1>
    </div>
  );
}

export default SettingsPage