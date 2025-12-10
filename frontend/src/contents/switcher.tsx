import React, { useContext, useState } from 'react';
import type { LanguageStateSwitcherType } from '../localization/localizationWrapper';
import { LocalizationContext } from '../localization/localizationWrapper';

interface LangSwitcherProps {
    switchState: LanguageStateSwitcherType | null;
}

const Switcher = (props: LangSwitcherProps) => {

    const localization = useContext(LocalizationContext)
    const currentLang = (localization ? localization[1] : "ENG");

    const toggleLanguage = () => {
        if (!props.switchState) {
            return;
        }

        props.switchState((prevState) => {
            if (prevState == "ENG") {
                return "UA";
            } else {
                return "ENG";
            }
        });
    };

    return (
        <button
            onClick={toggleLanguage}
            className="relative w-20 h-8 bg-violet-600 rounded-full flex items-center p-1 cursor-pointer shadow-xl hover:bg-purple-700 transition-all group"
            aria-label="Switch Language">
        <span className={`absolute left-3 text-xs font-bold text-white/60 transition-opacity duration-300 ${currentLang == "ENG" ? 'opacity-100' : 'opacity-0'} transition-all`}>
            UA
        </span>
        <span className={`absolute right-3 text-xs font-bold text-white/60 transition-opacity duration-300 ${currentLang == "ENG" ? 'opacity-0' : 'opacity-100'} transition-all`}>
            EN
        </span>

        <div
            className={`
            h-6 w-7 bg-white rounded-full shadow-md flex items-center justify-center 
            text-violet-600 font-bold text-sm transform transition-transform duration-300
            ${currentLang == "ENG" ? 'translate-x-11' : 'translate-x-0' }
            `}
        >
            {currentLang}
        </div>
        </button>
    );
};

export default Switcher;
//w-24 h-12