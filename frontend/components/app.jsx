import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Feed from "./feed/feed";
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavContainer from "./nav/nav_container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1 className="logo">Blogger</h1>
            </Link>
        </header>

        <div className="searchBar">
            <input type="search" placeholder="Search Blogger" className="inputsearchBar" />
        </div>



        <ProtectedRoute exact path="/" component={NavContainer} />
        <Switch>
            <ProtectedRoute path="/feed" component={Feed} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />

            <AuthRoute path="/" component={GreetingContainer} />
        </Switch>
    </div>
);

export default App;
