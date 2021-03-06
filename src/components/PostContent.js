import React, { Component } from 'react'

/**
 * Import Components 
 */
import Profile from './Profile'
import Rating from './Rating'
import Subscribe from './Subscribe'

/**
 * Import Library Dependencies
 */
import parse from 'html-react-parser';

export default class PostContent extends Component {
    constructor(props) {
        super();
        this.state = {
            profile: props.profile,
            stringifiedHTML: props.stringifiedHTML,
            storyReactions: props.storyReactions
        }
    }
    
    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        return (
            <div className="row main-content">

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <Profile profile={this.state.profile} />
                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                    { parse(this.state.stringifiedHTML) }

                    <div className="rating">
                        <Rating reactions={this.state.storyReactions} center="true" />
                    </div>

                    <div className="footer-container">
                        <Subscribe profile={this.state.profile} />
                    </div>

                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    {/* Renders no content */}
                </div>

            </div>

        )
    }
}
