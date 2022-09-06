import React from "react";
import {Link} from "react-router-dom";
import {Fight} from "../../utils/api";
import {Player} from "./Player";

class Result extends React.Component {
    constructor() {
        super();
        this.state = {
            winner: null,
            loser:null,
            error: null,
            loading: false
        }
    }

    componentDidMount() {
        this.setState({loading: true});
        const searchParams = new URLSearchParams(window.location.search);
        Fight([
            searchParams.get("playerOneName"),
            searchParams.get("playerTwoName")
        ])
            .then(([winner, loser]) => {
                this.setState({winner, loser, loading: false})
            })
    }

    render() {
        // console.log(this.state)
        if(this.state.loading) {
            return <p>Loading...</p>
        }

        if(this.state.error) {
            return <>
                <p>{this.state.error}</p>
                <Link className = "battle-button" to = '/battle' >Reset</Link>
            </>
        }

        return(
            <div className = "row">
                <Player
                    label = "Winner"
                    score = {this.state.winner?.score}
                    profile = {this.state.winner?.profile}
                />
                <Player
                    label = "Loser"
                    score = {this.state.loser?.score}
                    profile = {this.state.loser?.profile}
                />
            </div>
        )
    }
}

export default Result;