import './style/header.scss';
import {useEffect, useState} from "react";
import {Language} from "../language";

export const Header = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {

        const dateTime = new Date();
        const day = dateTime.getDate();
        const month = dateTime.getMonth() + 1;
        const year = dateTime.getFullYear();
        const hours = dateTime.getHours();
        const minutes = dateTime.getMinutes();
        setTime(hours + ':' + minutes);
        setDate(day + ' ' + month + ' ' + year);

    }, [])

    return (
        <header>
            <div className='header__left'>
                <ul>
                    <li>
                        {time}
                    </li>
                    <li>
                        temp
                    </li>
                </ul>
            </div>
            <div className='header__right'>
                <div>
                    {date}
                </div>
                <Language/>
            </div>
        </header>
    )
}