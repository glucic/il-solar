"use client";

import {createContext, useContext, useEffect, useState} from "react";
import CookieBanner from "./CookieBanner";

interface CookiePreferencesContextType {
    open: () => void;
}

const CookiePreferencesContext = createContext<CookiePreferencesContextType>({
    open: () => {
    },
});

export const useCookiePreferences = () => useContext(CookiePreferencesContext);

export const CookiePreferencesProvider = ({children}: { children: React.ReactNode }) => {
    const [visible, setVisible] = useState(false);

    // 🔁 Detect first-time visitors
    useEffect(() => {
        const dismissed = localStorage.getItem("cookie-preferences-dismissed");
        if (!dismissed) setVisible(true);
    }, []);

    const open = () => setVisible(true);
    const close = () => setVisible(false);

    return (
        <CookiePreferencesContext.Provider value={{open}}>
            {children}
            {visible && <CookieBanner onClose={close}/>}
        </CookiePreferencesContext.Provider>
    );
};