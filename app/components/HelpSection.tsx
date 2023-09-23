import { t } from "~/root";
import payPal from "../images/paypal.png";
import keys from "~/localization/translationKeys";
import { useContext } from 'react';
import { LangContext } from "~/context/context";
import Button from "./Button";

const HelpSection:React.FC = () => {
    const langContext = useContext(LangContext);

    return (
        <section className='w-full flex flex-col items-center text-3xl mx-auto text-center'>
            
            <article className="text-[#6e6e6e]">
                {t(keys.helpSectionTitle)}
            </article>

            <article className="text-[#1b1b1b]">
                {t(keys.helpSectionTitleBold)}
            </article>

            <article className="text-[#6e6e6e] text-base my-8">
                {t(keys.helpSectionDescription)}
            </article>

            <Button
                label={t(keys.headerButton)}
                onClick={() => {}}
            />

            <img alt="" src={payPal} className="mt-8 max-w-[60%]" />
        </section>
    )
}

export default HelpSection;