import React, { Component } from 'react'

import '../Stylesheets/RelatedStories.css'
import LineHeading from './LineHeading';

export default class RelatedStories extends Component {

    constructor(props) {
        super();
        this.state = {
            stories: props.stories
        }
    }

    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        return (


            <div className="row">

                <LineHeading title="RELATED" />

                <div className="row">
                    <div className="related-stories">

                        <div className="row row-eq-height">

                            {
                                this.state.stories.map(function (x) {
                                    return (<div className="col-xs-8 col-sm-8 col-md-4 border-related">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <a href="/">{(x.title ? x.title : x.text)}</a>
                                                </h5>
                                            </div>
                                            <div className="card-image d-flex align-items-center">
                                                <img className="card-img-top d-flex align-items-center" src={(x.mainImage ? x.mainImage : x.image)} alt="" />
                                            </div>

                                            {
                                                !x.profile ?


                                                    <div className="card-body related-story-text">

                                                        <div className="row">

                                                            <div className="col-12">
                                                                <div className="profile-name">
                                                                    <a href={x.link}>
                                                                        Visit {x.companyName}
                                                                    </a>
                                                                </div>
                                                                <div className="display-name">
                                                                    {x.link}
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>


                                                    :
                                                    <div className="card-body related-story-text">

                                                        <div className="row">

                                                            <div className="col-2">
                                                                <img src={x.profile.avatar}
                                                                    className="img-responsive profile-image" alt="fdfsfdfsdffd" width="50" height="50" />
                                                            </div>
                                                            <div className="col-7">
                                                                <div className="profile-name">
                                                                    <a href="/">
                                                                        @{x.profile.handle}
                                                                    </a>
                                                                </div>

                                                                <div className="display-name">
                                                                    {x.profile.displayName}
                                                                </div>
                                                            </div>
                                                            <div className="col-3 time-date">

                                                            </div>

                                                        </div>

                                                    </div>

                                            }
                                        </div>

                                    </div>);
                                })
                            }
                        </div>

                    </div>

                </div>

            </div>


        )
    }
}
