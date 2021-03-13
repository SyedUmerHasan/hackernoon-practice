import React from 'react'

export default function PostImage(props) {

    /**
     * Renders React Elements
     * @returns 
     */
    return (
        <div>
            <img src={props.image} className="main-image" alt={props.title} />
        </div>
    )
}
