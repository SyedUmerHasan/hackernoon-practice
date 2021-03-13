import React from 'react'
import LineHeading from './LineHeading'

export default function Tags(props) {

    /**
     * Renders React Elements
     * @returns 
     */
    return (
        <div className="container">
            <div className="row tag-container">

                <LineHeading title="TAGS" />

                <div className="tag-inner-container">
                    {
                        props.tags.map(function (eachTag) {
                            return (<span className="each-tag">#{eachTag}</span>)
                        })
                    }
                </div>

            </div>
        </div>
    )
}
