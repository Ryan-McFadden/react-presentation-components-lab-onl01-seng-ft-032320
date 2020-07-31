// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {
    return (
        <div onCLick={props.handleClick()}>I am just happy</div>
    )
}

export default SimplerComponent