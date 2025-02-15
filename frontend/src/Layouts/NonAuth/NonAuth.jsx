import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/user-store";

function NonAuth() {
  const { user } = useAuthStore();

  if (user !== null) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default NonAuth;
