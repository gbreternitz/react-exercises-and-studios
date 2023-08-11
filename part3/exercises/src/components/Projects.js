import data from "./../data.json";
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let bHolders = data;
    let bHolder = bHolders[index];

    function handleClick() {
        if (index < data.length - 1) {
            setIndex(index + 1);
        }
        else {
            setIndex(0);
        }
    }

    return (
        <>
            <button onClick={handleClick}>
                Next >>
            </button>
            <p>BreathHolder: {bHolder.breathholder}</p>
            <p>Time: {bHolder.time}</p>
            <p>Rank: {bHolder.rank}</p>
            <p>Status of life: {bHolder.isAlive ? "Alive" : "Dead."}</p>
        </>
    )
}