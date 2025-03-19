import { useState, ReactNode, } from 'react';
import { AuthContext } from '../hooks/useAuth';


export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<boolean | null>(null);

    return (
        <AuthContext.Provider value={{ user, login: () => setUser(true), logout: () => setUser(null) }}>
            {children}
        </AuthContext.Provider>
    );
};
