import React, { Component } from 'react'
import heart from '../Assets/heart.png'
import boat from '../Assets/boat.png'
import light from '../Assets/light.png'
import money from '../Assets/money.png'
import '../Stylesheets/Rating.css'

export default class Rating extends Component {

    constructor(props){
        super();
        this.state = {
            center : props.center,
            money : props.reactions.money,
            moneyStatus : false,
            boat : props.reactions.boat,
            boatStatus : false,
            light : props.reactions.light,
            lightStatus : false,
            heart : props.reactions.heart,
            heartStatus : false,
        }
    }

    toggleMoney = () => {
        if(this.state.moneyStatus){            
            this.setState({
                money : this.state.money - 1,
                moneyStatus : false
            })
        }
        else{
            this.setState({
                money : this.state.money + 1,
                moneyStatus : true
            })
        }
    }

    toggleBoat = () => {
        if(this.state.boatStatus){            
            this.setState({
                boat : this.state.boat - 1,
                boatStatus : false
            })
        }
        else{
            this.setState({
                boat : this.state.boat + 1,
                boatStatus : true
            })
        }
    }

    toggleLight = () => {
        if(this.state.lightStatus){            
            this.setState({
                light : this.state.light - 1,
                lightStatus : false
            })
        }
        else{
            this.setState({
                light : this.state.light + 1,
                lightStatus : true
            })
        }
    }

    toggleHeart = () => {
        if(this.state.heartStatus){            
            this.setState({
                heart : this.state.heart - 1,
                heartStatus : false
            })
        }
        else{
            this.setState({
                heart : this.state.heart + 1,
                heartStatus : true
            })
        }
    }

    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        var total  = this.state.money + this.state.boat + this.state.light + this.state.heart;
        return (
            <div className="emoji">
                {/* If center exist in the state then align Rating in the center-aligned otherwise let it be right-aligned */}
                <span className={!this.state.center ? "d-flex flex-row-reverse img-actions" : "d-flex justify-content-center img-actions flex-row-reverse" }>
                    <img alt="toggleMoney" src={money} onClick={this.toggleMoney} className= {!this.state.moneyStatus ? "img-responsive" : "img-responsive active"} />
                    <img alt="toggleBoat" src={boat} onClick={this.toggleBoat} className={!this.state.boatStatus ? "img-responsive" : "img-responsive active"} />
                    <img alt="toggleLight" src={light} onClick={this.toggleLight} className={!this.state.lightStatus ? "img-responsive" : "img-responsive active"} />
                    <img alt="toggleHeart" src={heart} onClick={this.toggleHeart} className={!this.state.heartStatus ? "img-responsive" : "img-responsive active"} />
                    <label>{total}</label>
                </span>
            </div>
        )
    }
}
