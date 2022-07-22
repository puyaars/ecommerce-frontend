
import React from 'react'
import { useRouter } from 'next/router'

import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from "../locale/en.json";
import fa from "../locale/fa.json";

export default function I18nProvider({ children }: { children: React.ReactNode }) {

    const { locale } = useRouter()

    i18n
        .use(initReactI18next)
        .init({
            fallbackLng: 'fa',
            debug: true,
            resources: {
                en: {
                    translation: en
                },
                fa: {
                    translation: fa
                }
            },
            lng: locale
        });

    return (
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    )
}
