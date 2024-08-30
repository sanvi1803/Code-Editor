import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('http://localhost:8000/home', { withCredentials: true });
                if (response.status === 200) {
                    setIsAuthenticated(true);
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setIsAuthenticated(false);
                    navigate("/login");
                }
            }
        };
        checkAuth();
    }, [navigate]);

    if (!isAuthenticated) {
        return null; // You can show a loader here until the auth check is done
    }

    return children;
}
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired, // Validate that children is passed
};
export default ProtectedRoute;
