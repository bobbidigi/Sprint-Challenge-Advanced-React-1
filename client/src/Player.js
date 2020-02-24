import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className="card">
                    Name: {this.props.player.name}
            </div>
        )
    }
}
