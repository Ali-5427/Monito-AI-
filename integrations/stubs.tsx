import React from 'react';

// Stub implementations for removed Wix members
export const MemberProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export const useMember = () => ({
    member: null,
    isLoggedIn: false,
    isAuthenticated: false,
    isLoading: false,
    actions: {
        login: async () => { console.log("Login stub called"); },
        logout: async () => { console.log("Logout stub called"); }
    }
});