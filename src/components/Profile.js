import React, { Component } from 'react'
import '../Stylesheets/Profile.css'


export default class Profile extends Component {

    constructor(props) {
        super();
        this.state = {
            description: props.desc
        }
    }

    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        return (
            <div className="profile">
                {!this.props.profile ? "" :
                    <>
                        <img src={this.props.profile.avatar} className="img-responsive profile-image" alt={this.props.profile.displayName} width="50" height="50" />
                        <div className="profile-name">
                            <a href="/">
                                @{this.props.profile.handle}
                            </a>
                        </div>

                        {   this.state.name ? "" : 
                            <div className="display-name">
                                {this.props.profile.displayName}
                            </div>}

                        <br />

                        {/* If description is found only then Bio is displayed in the layout */}
                        {this.state.description ? "" : <div> {this.props.profile.bio} </div>}

                    </>
                }

            </div>
        )
    }
}
