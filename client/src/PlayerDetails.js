import React, { Component } from 'react'

export default class PlayerDetails extends Component {
    state = {
        player: ''
    }

    // componentDidMount(){
    //     this.setState({
    //         player: this.props.history.location.state.player
    //     })
    // }
    render() {
        console.log(this.props.history.location.state.player)
        return (
            <div className="card-container">
                <div className="card">
                    <p>{this.state.player.name}</p>
                    <p>{this.state.player.country}</p>
                </div>
            </div>
        )
    }
}
