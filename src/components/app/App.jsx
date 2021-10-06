import {Header} from '../header';
import './style/app.scss'
import {Slider} from '../slider';
import {Main} from '../main';
export  const App =() => {
    return (
        <div className='App'>
            <Header/>
            <Slider/>
            <Main/>
        </div>
    );
}