import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { self } from "../../http/api";
import useAuthStore from "../../store/user-store";
import { useEffect } from "react";
import Loader from "../../assets/loader.webm";
// import useAuthStore from "../../store/user-store";
function Root() {
  // Otherwise Move to auth page
  const { setUser } = useAuthStore();

  const handleSelfRoute = async () => {
    const { data } = await self();
    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["self"],
    queryFn: handleSelfRoute,
  });

  useEffect(() => {
    if (data) {
      setUser(data.user);
    }
  }, [data, setUser]);

  // Login then move to dashboard
  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <video src={Loader} autoPlay muted />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default Root;
