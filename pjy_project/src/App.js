import React from 'react';
import './App.css';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";

import Games from "./Games";
import GameDetail from "./GameDetail";

function App() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to="/games">Games</Link></li>
                </ul>
            </nav>
            <Switch>
                <Route path="/games" exact={true}>
                    <Games />
                </Route>
                <Route path="/games/:gameId" exact={true}>
                    <GameDetail />
                </Route>              
                <Route path="*">
                    <DefaultComponent />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function DefaultComponent() {
    return (
        <h2>Steam Games</h2>
    )
}

export default App;