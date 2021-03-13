import React from 'react'

export default function LineHeading(props) {

    /**
     * Renders React Elements
     * @returns 
     */
    return (
        <h2 className="lineheading">
            <span>{props.title}</span>
        </h2>
    )
}
