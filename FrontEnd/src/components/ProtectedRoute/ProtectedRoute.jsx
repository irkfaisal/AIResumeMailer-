import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth.jsx';
import Loader from '../Loader/Loader';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <Loader />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;