"use client";

import {useState, useEffect} from "react";
import {Switch} from "@headlessui/react";
import {X} from "lucide-react";

export default function PreferencesModal({onClose}: { onClose: () => void }) {
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
    const [marketingEnabled, setMarketingEnabled] = useState(false);
    const [preferencesEnabled, setPreferencesEnabled] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("cookie-preferences");
        if (stored) {
            const parsed = JSON.parse(stored);
            setAnalyticsEnabled(parsed.analytics);
            setMarketingEnabled(parsed.marketing);
            setPreferencesEnabled(parsed.preferences);
        }
    }, []);

    const savePreferences = () => {
        localStorage.setItem("cookie-preferences", JSON.stringify({
            analytics: analyticsEnabled,
            marketing: marketingEnabled,
            preferences: preferencesEnabled,
        }));
        localStorage.setItem("cookie-preferences-dismissed", "true");
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white text-gray-800 rounded-lg shadow-lg w-full max-w-md p-6 relative">
                <button
                    onClick={() => onClose?.()}
                    className="absolute top-3 right-3 text-gray-400 hover:text-black"
                    aria-label="Schließen"
                >
                    <X className="w-5 h-5"/>
                </button>

                <h2 className="text-lg font-semibold mb-6">Cookie-Einstellungen</h2>

                <div className="space-y-4">
                    <SwitchGroup label="Statistik" enabled={analyticsEnabled} setEnabled={setAnalyticsEnabled}/>
                    <SwitchGroup label="Marketing" enabled={marketingEnabled} setEnabled={setMarketingEnabled}/>
                    <SwitchGroup label="Präferenzen" enabled={preferencesEnabled} setEnabled={setPreferencesEnabled}/>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={savePreferences}
                        className="bg-[var(--accent)] text-white px-5 py-2 rounded font-medium hover:bg-opacity-90"
                    >
                        Speichern
                    </button>
                </div>
            </div>
        </div>
    );
}

function SwitchGroup({
                         label,
                         enabled,
                         setEnabled,
                     }: {
    label: string;
    enabled: boolean;
    setEnabled: (val: boolean) => void;
}) {
    return (
        <div className="flex items-center justify-between gap-4">
            <span className="text-sm font-medium text-gray-700">{label}</span>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                    enabled ? "bg-[var(--accent)]" : "bg-gray-300"
                } relative inline-flex h-5 w-10 items-center rounded-full transition-colors`}
            >
        <span
            className={`${
                enabled ? "translate-x-5" : "translate-x-1"
            } inline-block h-3.5 w-3.5 transform bg-white rounded-full transition-transform`}
        />
            </Switch>
        </div>
    );
}