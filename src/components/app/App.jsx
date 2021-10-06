import {Header} from '../header';
import './style/app.scss'
import {Slider} from '../slider';
import {Main} from '../main';
import {Footer} from "../footer/Footer";
export  const App =() => {
    return (
        <div className='App'>
            <Header/>
            <Slider/>
            <Main/>
            <Footer/>
        </div>
    );
}