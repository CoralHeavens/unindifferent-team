import { t } from "~/root";
import drone from "../images/drone.png";
import keys from "~/localization/translationKeys";
import { useContext } from 'react';
import { LangContext } from "~/context/context";

const Footer:React.FC = () => {
    const langContext = useContext(LangContext);
    
    const footerSections = [
        t(keys.footerOrganization),
        t(keys.footerFond),
        t(keys.footerCity),
        t(keys.footerPhone)
    ]

    return (
        <footer className='p-8'>
            <img alt="" src={drone} className="max-h-[400px] mx-auto" />

            <section className="w-full flex justify-center items-center gap-8 flex-wrap uppercase">
                {footerSections.map((text) => (
                    <div className="text-base font-medium">
                        {text}
                    </div>
                ))}
            </section>
        </footer>
    )
}

export default Footer;