import React, { createContext, ReactNode,useContext, useState } from 'react';
import { notification } from '@/hooks/query';

type notificationType = ReturnType<typeof notification>;

const notificationContext = createContext<notificationType | undefined>(undefined);


interface GlobalContextType {
    children: ReactNode;
}

export const GlobalProvider = ({ children}: GlobalContextType) => {
const globalQuery = notification();

return (
    <notificationContext.Provider value={globalQuery}>
        {children}
    </notificationContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(notificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a GlobalProvider');
    }
    return context;
}