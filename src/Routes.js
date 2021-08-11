import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './components/me/AboutMe';
import Skills from './components/skill/Skills';
import Jobs from './components/job/Jobs';
import Projects from './components/project/Projects';
import NotFound from './components/404/NotFound';

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={AboutMe}/>
            <Route path="/Me" component={AboutMe}/>
            <Route path="/Skills" component={Skills}/>
            <Route path="/Jobs" component={Jobs}/>
            <Route path="/Projects" component={Projects}/>

            <Route path="*" component={NotFound}/>
        </Switch>
    )
}

export default Routes;


