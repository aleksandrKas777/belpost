import {Switch, Route} from 'react-router-dom';
import {AdminProcedure} from './parts/adminProcedure';
import {Home} from "./parts/home/Home";
import {Guide} from "./parts/guide";
import {ReceptionSchedule} from "./parts/receptionSchedule";

export const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>

        <Route exact path='/admin-procedure' component={AdminProcedure}/>


        <Route exact path='/guide' component={Guide}/>

        <Route exact path='/reception-schedule' component={ReceptionSchedule}/>
    </Switch>
)