import React, { useState } from 'react'

function Option(props) {
    return (
        <option id='' value={props.value.name}>{props.value.name}</option>
    );
}

export default Option