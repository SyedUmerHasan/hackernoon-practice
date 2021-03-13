import React, { Component } from 'react'
import '../Stylesheets/MainPage.css'
import Profile from './Profile'
import Rating from './Rating'
import RelatedStories from './RelatedStories';


var date = null;
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
var completedate = "";

export default class MainPage extends Component {

    constructor(props) {
        super();
        date = props.jsonData.createdAt
        date = new Date(date);
        completedate = monthNames[date.getMonth()] + " " + this.dateOrdinal(date.getDate()) + " " + date.getFullYear();
        document.getElementsByTagName('title').text = props.jsonData.title
    }

    dateOrdinal = (d) => {
        return d + (31 === d || 21 === d || 1 === d ? "st" : 22 === d || 2 === d ? "nd" : 23 === d || 3 === d ? "rd" : "th")
    };

    render() {
        return (
            <>
                <div className="main-page">

                    <div className="row">
                        <div className="container">
                            <h1>{this.props.jsonData.title}</h1>
                        </div>
                    </div>

                    <div className="row bookmark-container">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                            <span className="bookmark-bar">
                                <span>{completedate}</span>
                                <span className="stat"><i aria-hidden="true" className="fas fa-star"></i> 402 reads</span>
                                <span className="bookmark"><button><i aria-hidden="true" className="fas fa-bookmark "></i></button></span>
                            </span>

                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">

                            <Rating reactions={this.props.jsonData.reactions.storyReactions}></Rating>

                        </div>
                    </div>


                    <img src={this.props.jsonData.mainImage} className="main-image" alt="imasdffdffsfddfge" />



                    <div className="row main-content">

                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            <Profile profile={this.props.jsonData.profile}></Profile>
                        </div>

                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div dangerouslySetInnerHTML={{ __html: this.props.jsonData.markup }} />

                            <div className="rating">
                                <Rating reactions={this.props.jsonData.reactions.storyReactions} center="true"></Rating>
                            </div>


                            <div className="footer-container">

                                <div className="row">

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                        <Profile profile={this.props.jsonData.profile} desc="true"></Profile>

                                    </div>

                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                                        <span>
                                            <i className={this.props.jsonData.profile.adIcon}></i>
                                            <a href={this.props.jsonData.profile.adLink}>
                                                {this.props.jsonData.profile.adText}
                                            </a>
                                        </span>

                                    </div>

                                </div>

                            </div>


                            <br />


                        </div>

                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">

                        </div>

                    </div>


                    <div className="row">

                        <h2 className="lineheading"><span>RELATED</span></h2>

                        <div className="row">
                            <RelatedStories stories={this.props.jsonData.relatedStories}></RelatedStories>
                        </div>

                    </div>


                    <div className="container">
                        <div className="row tag-container">

                            <h2 className="lineheading"><span>TAGS</span></h2>

                            <div className="tag-inner-container">
                                {
                                    this.props.jsonData.tags.map(function (eachTag) {
                                        return (<span className="each-tag">#{eachTag}</span>)
                                    })
                                }
                            </div>

                        </div>
                    </div>


                    <div className="row join-now-container">
                        <div className="join-now">
                            <a href="https://app.hackernoon.com/signup">
                                Join Hacker Noon
                            <i className="fas fa-glasses" aria-hidden="true"></i>
                            </a>
                            <p>Create your free account to unlock your custom reading experience.</p>
                        </div>
                    </div>


                </div>

                <footer class="layout-footer">
                    <div>
                        <ul>
                            <li><a href="https://help.hackernoon.com" class="Link-k8dxie-0 gLHiBQ"><strong>Help</strong></a></li>
                            <li><a href="https://about.hackernoon.com" class="Link-k8dxie-0 gLHiBQ"><strong>About</strong></a></li>
                            <li><a href="https://app.hackernoon.com/new" class="Link-k8dxie-0 gLHiBQ"><strong>Start Writing</strong></a></li>
                            <li><a href="https://sponsor.hackernoon.com" class="Link-k8dxie-0 gLHiBQ"><strong>Sponsor:</strong></a></li>
                            <li><a href="https://sponsor.hackernoon.com/#brandasauthor" class="Link-k8dxie-0 gLHiBQ">Brand-as-Author</a></li>
                            <li><a href="https://sponsor.hackernoon.com/#billboard" class="Link-k8dxie-0 gLHiBQ">Sitewide Billboard</a></li>
                            <li><a href="https://sponsor.hackernoon.com/#adbytag" class="Link-k8dxie-0 gLHiBQ">Ad by tag</a></li>
                            <li><a href="https://sponsor.hackernoon.com/#newsletter" class="Link-k8dxie-0 gLHiBQ">Newsletter</a></li>
                            <li><a href="https://noonies.tech/sponsor" class="Link-k8dxie-0 gLHiBQ">Noonies</a></li>
                        </ul>
                        <ul>
                            <li><a href="/contact" class="Link-k8dxie-0 gLHiBQ">Contact Us</a></li>
                            <li><a class="Link-k8dxie-0 gLHiBQ">Terms</a></li>
                            <li><a href="/privacy" class="Link-k8dxie-0 gLHiBQ">Privacy</a></li>
                            <li><a class="Link-k8dxie-0 gLHiBQ">Cookies</a></li>
                            <li><a class="Link-k8dxie-0 gLHiBQ">Stories published yesterday</a></li>
                            <li><a href="https://leaders.hackernoon.com" class="Link-k8dxie-0 gLHiBQ">Leaderboard</a></li>
                            <li><a href="https://community.hackernoon.com" class="Link-k8dxie-0 gLHiBQ">Contributors' Club</a></li>
                            <li><a href="/" class="Link-k8dxie-0 gLHiBQ">Chrome Extension</a></li>
                        </ul>
                    </div>
                    <div class="footer__follow">
                        <div class="SocialLinks-sc-1bbo2b4-0 Follow__Layout-sc-12l5d2g-0 dcgsMq">
                            <a href="https://www.linkedin.com/company/hackernoon/" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/linkedin-new.png" alt="LinkedIn social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://facebook.com/hackernoon" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/facebook-new.png" alt="facebook social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://twitter.com/hackernoon" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/twitter-new.png" alt="Twitter social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://github.com/hackernoon" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/github-new.png" alt="github social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://www.youtube.com/c/hackernoon" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/youtube-new.png" alt="youtube social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://www.instagram.com/hackernoon" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/instagram-new.png" alt="instagram social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://podcast.hackernoon.com/" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/podcast-new.png" alt="podcast social icon" width="20" height="20" loading="lazy" />
                            </a>
                            <a href="https://hackernoon.com/feed" target="_blank" rel="dofollow">
                                <img src="https://hackernoon.com/social-icons/rss-new.png" alt="rss social icon" width="20" height="20" loading="lazy" />
                            </a>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}
