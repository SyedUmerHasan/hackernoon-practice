import React, { Component } from 'react'

export default class Bookmark extends Component {
    constructor(props){
        super()
        this.state = {
            completedate : props.completedate
        }
    }
    
    render() {
        return (
            <span className="bookmark-bar">

                <div class="row">

                    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <span>{this.state.completedate}</span>
                    </div>
                    
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                        
                        <span className="stat">
                            <i aria-hidden="true" className="fas fa-star"></i> 
                            402 reads
                        </span>
                        
                        <span className="bookmark">
                            <button>
                                <i aria-hidden="true" className="fas fa-bookmark "></i>
                            </button>
                        </span>

                    </div>

                </div>

            </span>
        )
    }
}
