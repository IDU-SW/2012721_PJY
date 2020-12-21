  
import React from 'react';
import {withRouter} from "react-router-dom";
import game from './Games.json';

class GameDetailComponent extends React.Component {
    render() {
        const params = this.props.match.params;
        const {gameId} = params;
        return (
            <h2>Game Detail for {gameId}</h2>
        )
    }
}

const GameDetail = withRouter(GameDetailComponent);

export default GameDetail;