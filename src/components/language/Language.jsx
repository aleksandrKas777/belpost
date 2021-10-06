import iconRussia from '../../images/IconRussia.png';
import iconUA from '../../images/iconUnitedKingdom.png';
import {useState} from "react";
export const Language = () => {
    const [icon, setIcon] = useState('');


    const changeIcon = () => {
        let lang = icon === 'en' ? 'ru' : 'en'
        setIcon(lang);
        // eslint-disable-next-line no-restricted-globals
        location.href = window.location.pathname + '#' + lang;
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <img src={icon === 'ru' ? iconRussia : iconUA} alt={icon} onClick={changeIcon}/>
    )
}