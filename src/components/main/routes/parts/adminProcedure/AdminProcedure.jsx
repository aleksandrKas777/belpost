import iconBelpost from '../../../../../images/iconBelpost.png';
import btnBack from '../../../../../images/btnBack.png'
import './style/adminProcedure.scss';

export const AdminProcedure = () => {
    return (
        <div className='container'>
            <div className='container__title'>
                <div/>
                <h2>Административные процедуры</h2>
                <img src={btnBack} alt='back'/>
            </div>

            <div className='procedure'>
                <div className='procedure__item'>
                    <p>
                        Страница 1
                    </p>
                    <img src={iconBelpost} alt='iconBelpost'/>
                </div>

                <div className='procedure__item'>
                    <p>
                        Процедура 2
                    </p>
                    <img src={iconBelpost} alt='iconBelpost'/>
                </div>

                <div className='procedure__item'>
                    <p>
                        Процедура 3
                    </p>
                    <img src={iconBelpost} alt='iconBelpost'/>
                </div>

                <div className='procedure__item'>
                    <p>
                        Процедура 4
                    </p>
                    <img src={iconBelpost} alt='iconBelpost'/>
                </div>
            </div>
        </div>
)
}

