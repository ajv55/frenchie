'use client';

import React, { createContext, useContext, useState } from 'react';

type PupProvider = {
    children: React.ReactNode
}

type PupContext = {
    setIsSuccess: React.Dispatch<React.SetStateAction<boolean>> | undefined | null
    isSuccess: boolean
}

export const PupContext = createContext<PupContext | null>(null); 



export const PupProvider = ({ children }: PupProvider) => {

    const [isSuccess, setIsSuccess] = useState(false);


    const value = {
        isSuccess, setIsSuccess
    }
    return (
            <PupContext.Provider value={value}>
                {children}
            </PupContext.Provider>
        
    );
}


export function usePup() {
    const context = useContext(PupContext);
    if (!context)  { 
        throw new Error('usePup must be within a PupProvider')
    }

    return context
}

