import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import i18next, { TFunction } from "i18next";
import { useState, useMemo } from 'react';
import { initReactI18next, useTranslation, I18nextProvider, Trans } from "react-i18next";

import stylesheet from "~/tailwind.css";
import translationEn from "./localization/en";
import translationUa from "./localization/ua";
import { BASE_LANG } from "./constants/constants";
import { ContextValueInterface, LangContext } from "./context/context";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet }
];

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ua: { translation: translationUa }
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: true }
})

export let t: TFunction<"translation", undefined>;

export default function App() {
  const [currentLang, updateCurrentLang] = useState(BASE_LANG)
  t = useTranslation().t;

  const langMemo = useMemo(
    (): ContextValueInterface<typeof currentLang> => ({
      value: currentLang,
      setValue: (value: string) => {
        i18next.changeLanguage(value.toLowerCase());
        updateCurrentLang(value);
      }
    }),
    [currentLang, updateCurrentLang]
  );



  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <I18nextProvider i18n={i18next}>
          <LangContext.Provider value={langMemo}>
            <Trans t={t}>
              <Outlet />
              <ScrollRestoration />
              <Scripts />
              <LiveReload />
            </Trans>
          </LangContext.Provider>
        </I18nextProvider>
      </body>
    </html>
  );
}
