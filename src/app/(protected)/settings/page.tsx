"use client";

import { useCurrentUser } from '@/hooks/useCurrentUser';
import { logout } from '@/actions/logout';

const SettingsPage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  }
  return (
    <div className="bg-white p-10 rounded-xl">
    <form>
      <button onClick={onClick} type="submit">
        logout
      </button>
      </form>
    </div>
  );
}

export default SettingsPage