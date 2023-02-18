import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = // Check if the user is authenticated
    if (!isAuthenticated) {
            router.push('/login');
        }
    }, []);

    return <>{children}</>;
};

export default PrivateRoute;
