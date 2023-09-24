import type { MetaFunction } from "@remix-run/node";

import Background from '../components/Background';
import Header from '../components/Header';
import HelpSection from '../components/HelpSection';
import Footer from '../components/Footer';
import { t } from "~/root";
import keys from "~/localization/translationKeys";
import en from "~/localization/en";

export const meta: MetaFunction = () => {
  try {
    return [
      { title: t(keys.title) },
      { name: "description", content: t(keys.helpSectionDescription) },
    ];
  } catch (error) {
    return [
      { title: en[keys.title] },
      { name: "description", content: en[keys.helpSectionDescription] },
    ];
  }
};

export default function Index() {
  return (
    <main className='w-full max-w-[800px] mx-auto p-8 bg-slate-200 bg-opacity-70 rounded-xl'>
      <Background />

      <Header />

      <HelpSection />

      <Footer />
    </main>
  );
}
