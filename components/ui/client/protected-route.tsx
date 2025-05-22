import { useAuth } from "@/providers/auth-provider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
	const { isAuthenticated } = useAuth();
	const location = useLocation();

	if (!isAuthenticated) {
		return (
			<Navigate
				href="/"
				state={{ from: location }}
				replace
			/>
		);
	}

	return <Outlet />;
};

export default ProtectedRoute;
