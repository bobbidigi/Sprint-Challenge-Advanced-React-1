import React, { Component } from "react";
// import {Link} from 'react-router-dom'
export default class Player extends Component {
render() {

//     <Link to={{
//         pathname: '/player',
//         state: {
//         player: this.props.player
//         }
//         }}>
//         <div className="card">
//                 Name: {this.props.player.name}
//         </div>
// </Link>
    return (<div className="card">
                Name: {this.props.player.name}
            </div>) 
    
}
}
