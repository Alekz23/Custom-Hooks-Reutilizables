import { useState } from "react";


export default function useCounter(inicialState = 10) {

    const [counter, setcounter] = useState(inicialState);


    const Increment = () => {
        setcounter(counter + 1);
    }

    const Decrement = () => {
        setcounter(counter - 1);
    }

    const Reset = () => {
        setcounter(inicialState);
    }

    return{
        counter,
        Increment,
        Decrement,
        Reset
    }
}
