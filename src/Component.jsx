import React from 'react';
import { add, sub, mul, div } from './Calc';

function Component() {
    return(
    <>
        <h1>Sum of Two numbers is { add(2, 3) }</h1>
        <h1>Subtraction of Two numbers is { sub(40, 4) }</h1>
        <h1>Multiplication of Two numbers is {mul(40, 4) }</h1>
        <h1>Division of Two numbers is { div(40, 3) }</h1>
    </>
    );
}


export default Component;