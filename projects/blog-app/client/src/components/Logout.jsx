import { LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      title="Logout"
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-100 dark:text-red-400 dark:hover:bg-red-900 transition"
    >
      <LogOut className="w-5 h-5" />
    </button>
  );
}
