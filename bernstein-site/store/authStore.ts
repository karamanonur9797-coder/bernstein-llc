import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isAuthModalOpen: boolean;
    authModalView: 'login' | 'register' | 'forgot_password';
    login: (user: User) => void;
    logout: () => void;
    openAuthModal: (view?: 'login' | 'register' | 'forgot_password') => void;
    closeAuthModal: () => void;
    setAuthModalView: (view: 'login' | 'register' | 'forgot_password') => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            isAuthModalOpen: false,
            authModalView: 'login',

            login: (user) => set({ user, isAuthenticated: true, isAuthModalOpen: false }),
            logout: () => set({ user: null, isAuthenticated: false }),

            openAuthModal: (view = 'login') => set({ isAuthModalOpen: true, authModalView: view }),
            closeAuthModal: () => set({ isAuthModalOpen: false }),
            setAuthModalView: (view) => set({ authModalView: view }),
        }),
        {
            name: 'bernstein-auth-storage',
            partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
        }
    )
);
