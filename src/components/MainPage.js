import React, { Component } from 'react'
import '../Stylesheets/MainPage.css'
import Bookmark from './Bookmark';
import LineHeading from './LineHeading';
import PostContent from './PostContent';
import PostImage from './PostImage';
import PostTitle from './PostTitle';
import Profile from './Profile'
import Rating from './Rating'
import RelatedStories from './RelatedStories';
import Subscribe from './Subscribe';
import Tags from './Tags';
import Footer from './Footer';
import JoinUs from './JoinUs';


var date = null;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var completedate = "";

export default class MainPage extends Component {

    constructor(props) {
        super();
        /** Fetches out createdAt date of the post from Props */
        date = props.jsonData.createdAt
        date = new Date(date);
        completedate = monthNames[date.getMonth()] + " " + this.dateOrdinal(date.getDate()) + " " + date.getFullYear();
        /** Sets State for the component */
        this.state = {
            postCreatedAt: props.jsonData.createdAt,
            postTitle: props.jsonData.title,
            postImage: props.jsonData.mainImage,
            completedate: completedate,
            profile: props.jsonData.profile,
            storyReactions: props.jsonData.reactions.storyReactions
        }
    }

    /**
     * Converts Integer Date to Ordinal Date
     * @param {*} date 
     * @returns 
     */
    dateOrdinal = (date) => {
        return date + (31 === date || 21 === date || 1 === date ? "st" : 22 === date || 2 === date ? "nd" : 23 === date || 3 === date ? "rd" : "th")
    };

    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        return (
            <>
                <div className="main-page body-width">

                    <div className="container">
                        <PostTitle title={this.props.jsonData.title} ></PostTitle>
                    </div>

                    <div className="row bookmark-container">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Bookmark completedate={this.state.completedate}></Bookmark>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <Rating reactions={this.state.storyReactions}></Rating>
                        </div>
                    </div>

                    <PostImage title={this.state.postTitle} image={this.state.postImage}></PostImage>

                    <PostContent
                        profile={this.state.profile}
                        stringifiedHTML={this.props.jsonData.markup}
                        storyReactions={this.state.storyReactions} />

                    <RelatedStories stories={this.props.jsonData.relatedStories}></RelatedStories>


                    <Tags tags={this.props.jsonData.tags} />

                    <JoinUs />


                </div>

                <Footer />
            </>
        )
    }
}
