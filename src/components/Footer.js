import React, { Component } from 'react'

export default class Footer extends Component {

    /**
     * Renders React Elements
     * @returns 
     */
    render() {
        return (
            <footer class="layout-footer body-width">

                <div class="row">
                    <div className="col-md-10 col-lg-10 col-sm-12">
                        <ul>
                            <li><a href="https://help.hackernoon.com"><strong>Help</strong></a></li>
                            <li><a href="https://about.hackernoon.com"><strong>About</strong></a></li>
                            <li><a href="https://app.hackernoon.com/new"><strong>Start Writing</strong></a></li>
                            <li><a href="https://sponsor.hackernoon.com"><strong>Sponsor:</strong></a></li>
                            <li><a href="https://sponsor.hackernoon.com/#brandasauthor">Brand-as-Author</a></li>
                            <li><a href="https://sponsor.hackernoon.com/#billboard">Sitewide Billboard</a></li>
                            <li><a href="https://sponsor.hackernoon.com/#adbytag">Ad by tag</a></li>
                            <li><a href="https://sponsor.hackernoon.com/#newsletter">Newsletter</a></li>
                            <li><a href="https://noonies.tech/sponsor">Noonies</a></li>
                        </ul>
                        <ul>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a>Terms</a></li>
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a>Cookies</a></li>
                            <li><a>Stories published yesterday</a></li>
                            <li><a href="https://leaders.hackernoon.com">Leaderboard</a></li>
                            <li><a href="https://community.hackernoon.com">Contributors' Club</a></li>
                            <li><a href="/">Chrome Extension</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-lg-2 col-sm-12 shar-logo">
                        <div>
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
                </div>


            </footer>

        )
    }
}
