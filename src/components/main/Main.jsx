import {BrowserRouter} from "react-router-dom";
import './style/main.scss';
import {Routes} from "./routes/Routes";

export const Main = () => {

    return (
        <main>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>

        </main>
    )
}