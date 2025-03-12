import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    //Cambiar el valor de counter
    const increment = (value = 1) => {
        //Toma el valor actual y les suma el valor que le mandamos como argumento
        setCounter((current) => current + value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    const decrement = (value = 1) => {
        //No dé números negativos
        // if(counter === 0) return;
        setCounter((current) => current - value);
    }

    return {
        counter,
        increment,
        reset,
        decrement
    };
}