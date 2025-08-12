import React from 'react'

export const Alert = (props) => {
    const capitalize=(word)=>{
        const Captial = word.toLowerCase();
        return Captial.charAt(0).toUpperCase() + Captial.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
            </div>
    )
}
