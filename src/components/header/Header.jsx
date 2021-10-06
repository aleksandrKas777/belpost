
import './style/header.scss';

export const Header = () => {
    return (
        <header>
            <div>
                <ul className='header__left'>
                    <li>
                        time
                    </li>
                    <li>
                        temp
                    </li>
                </ul>
            </div>
            <div>
                data
            </div>
        </header>
    )
}