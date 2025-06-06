"use client";

import {useState} from "react";
import PreferencesModal from "./PreferencesModal";

export default function CookieBanner({onClose}: { onClose?: () => void }) {
    const [showModal, setShowModal] = useState(false);

    const acceptAll = () => {
        localStorage.setItem("cookie-preferences", JSON.stringify({
            analytics: true,
            marketing: true,
            preferences: true
        }));
        localStorage.setItem("cookie-preferences-dismissed", "true");
        onClose?.();
    };

    const declineAll = () => {
        localStorage.setItem("cookie-preferences", JSON.stringify({
            analytics: false,
            marketing: false,
            preferences: false
        }));
        localStorage.setItem("cookie-preferences-dismissed", "true");
        onClose?.();
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <div
                className="fixed bottom-0 left-0 w-full bg-gray-900 text-white px-6 py-4 z-50 shadow-lg animate-slide-up-fade">
                <div
                    className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-sm">
                    <p className="text-left sm:text-left text-sm">
                        Diese Website verwendet Cookies, um ein verbessertes Nutzererlebnis zu bieten. Per Klick auf
                        „Zustimmen“ erkläre ich mich mit der Verwendung von Cookies einverstanden.{" "}
                        <a
                            href="/IL-Solar_Datenschutzerklaerung.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline text-[var(--accent)] hover:text-[var(--accent-foreground)] transition"
                        >
                            Datenschutzerklärung
                        </a>
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center sm:justify-end sm:items-center w-full sm:w-auto">
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-4 py-2 border border-white/50 text-white rounded transition-all duration-200 transform hover:scale-105 hover:bg-white/10"
                        >
                            Einstellungen
                        </button>

                        <button
                            onClick={acceptAll}
                            className="px-4 py-2 bg-[var(--accent)] text-white rounded transition-all duration-200 transform hover:scale-105 hover:bg-opacity-90"
                        >
                            Zustimmen
                        </button>

                        <button
                            onClick={declineAll}
                            className="px-4 py-2 bg-[var(--destructive)] text-white rounded transition-all duration-200 transform hover:scale-105 hover:shadow-md hover:bg-opacity-90"
                        >
                            Ablehnen
                        </button>
                    </div>
                </div>
            </div>

            {showModal && <PreferencesModal onClose={handleModalClose}/>}
        </>
    );
}