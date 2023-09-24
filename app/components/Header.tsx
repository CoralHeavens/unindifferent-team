import { t } from "~/root";
import keys from "~/localization/translationKeys";
import { useContext, useState, Dispatch } from 'react';
import { LangContext } from "~/context/context";
import { LANGUAGES } from "~/constants/constants";
import Button from "./Button";

const Header:React.FC = () => {
    const [engLang, updateEngLang] = useState(true);
    const setLang = useContext(LangContext)?.setValue as Dispatch<React.SetStateAction<string>>;

    const handleClick = () => {
        updateEngLang(state => !state);
        setLang(engLang ? LANGUAGES.ukrainian : LANGUAGES.english);
    }

    return (
        <header className='w-full flex justify-between items-center border-b-[1px] border-[#1b1b1b] border-opacity-20 pb-4 mb-8'>
            <section>
                <div className='text-4xl'>
                    {t(keys.logo)}
                </div>
            </section>

            <section>
                <Button
                    label={t(keys.language)}
                    onClick={handleClick}
                />
            </section>
        </header>
    )
}

export default Header;