"use client";

import { useCurrentUser } from '@/hooks/useCurrentUser';
import { logout } from '@/actions/logout';
import { UserButton } from '../_components/admin/userButton';
import { auth } from '@/auth';
import { UserInfo } from '../_components/admin/userInfo';

const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  }
  return (
    <div className="flex flex-col gap-4 relative">
  <div className="flex justify-between">
    <h1 className="text-4xl sticky top-0 z-10 p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
      Dashboard
    </h1>
    <div className="flex items-center pr-4">
      <UserButton />
    </div>
  </div>
</div>

  );
}

export default SettingsPage