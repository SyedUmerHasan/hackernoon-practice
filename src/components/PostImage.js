import React from 'react'

export default function PostImage(props) {
    return (
        <div>
            <img src={props.image} className="main-image" alt={props.title} />
        </div>
    )
}
