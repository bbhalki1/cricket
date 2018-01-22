import React from 'react';

const Input = (props) => {
    return(
        <div>
            <input type="text" value={props.text} onChange={props.change}/>
        </div>
    )
}

export default Input;