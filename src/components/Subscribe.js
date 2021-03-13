import React, { Component } from 'react'
import Profile from './Profile'

export default class Subscribe extends Component {

    constructor(props){
        super();
        this.state ={
            profile : props.profile,
        }
    }
    
    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        return (
            <div className="row">

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <Profile profile={this.state.profile} desc="true"></Profile>

                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <span>
                        <i className={this.state.profile.adIcon}></i>
                        <a href={this.state.profile.adLink}>
                            {this.state.profile.adText}
                        </a>
                    </span>

                </div>

            </div>
        )
    }
}
