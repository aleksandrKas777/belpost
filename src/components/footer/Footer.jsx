import './style/footer.scss';
import iconBelpost from '../../images/logoBelpostWait.png';
import logo from '../../images/logoTehnoSky.png';

export const Footer = () => {
    return (
        <footer>
            <div className='footer__rowOne'>
                <p>
                    Национальный оператор почтовой связи Республики Беларусь
                </p>

                <img src={iconBelpost} alt='iconBelpost'/>

                <p>
                    Покупайте белорусские товары на
                    <span><a target='_blank' href='https://shop.belpost.by/'
                             rel="noreferrer"> shop.belpost.by</a></span>
                </p>

            </div>

            <div className='footer__rowTwo'>
                <span>Разработано компанией</span>
                <img src={logo} alt='TehnoSky'/>

                <span><a target='_blank' href='https://high-tech.by/' rel="noreferrer">High-tech.by</a> </span>
            </div>
        </footer>
    )
}