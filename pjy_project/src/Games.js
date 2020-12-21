  
import React from "react";
import {withRouter, Link} from "react-router-dom";
import game from './Games.json';

class GamesComponent extends React.Component {
    render() {
        const items = game.Item.map((item, index) => {
                return (
                    
                    <div>               
                    <ol key={index}>
                    <h3><Link to={`/games/${index}`}>{item.title} </Link></h3>
                    <ul>
                        <li>price : {item.price}</li>
                        <li><img src={require(`${item.thumb}`)} alt={`${item.title}` +'\'s Thumbnail'}/> </li>
                    </ul>
                    </ol>
                    </div>
                );
        });
        return (
            items
        );   
    }
}
const Games = withRouter(GamesComponent);

export default Games;