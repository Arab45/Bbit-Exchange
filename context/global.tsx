import React, { createContext, ReactNode,useContext, useState } from 'react';
import { notification } from '@/hooks/query';
import { leaderBoard } from '@/hooks/query';
import { referral } from '@/hooks/query';



type GlobalContextValue = {
    notification: ReturnType<typeof notification>;
    leaderBoard: ReturnType<typeof leaderBoard>;
    referral: ReturnType<typeof referral>;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

interface GlobalContextType {
    children: ReactNode;
}

export const GlobalProvider = ({ children}: GlobalContextType) => {
const globalQuery = notification();
const globalLeaderBoard = leaderBoard();
const globalReferral = referral()

return (
    <GlobalContext.Provider value={{notification: globalQuery, leaderBoard: globalLeaderBoard, referral: globalReferral}}>
        {children}
    </GlobalContext.Provider>
    )
}

export const useNotification = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useNotification must be used within a GlobalProvider');
    }
    return context.notification;
};

export const useLeaderBoard = () => {
    const context = useContext(GlobalContext);
    if (!context) {
      throw new Error('useLeaderBoard must be used within a GlobalProvider');
    }
    return context.leaderBoard;
  };

  export const useReferral = () => {
    const context = useContext(GlobalContext);
    if(!context){
        throw new Error('referral must be use within a GlobalProvider')
    };

    return context.referral;
  }