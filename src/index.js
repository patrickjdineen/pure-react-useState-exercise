import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//start switch room
function LightSwitchRoom () {
    const [lights, setLights ] = useState(false);

    const lit= lights ? "light": "dark";

    function Switch(){
        setLights(!lights);
    };

    return(
        <div>
        The lights are {lit}
        <button onClick={Switch}>Toggle Lights</button>
        </div>
    );
}
//end switch room

//Number adder
function RandomList () {
    const [numbers, setNumbers] = useState([]);

    function addNum () {
        setNumbers(nums => [...numbers,Math.random()])
    }

    return (
        <div>
            <button onClick={addNum}>Add a number</button>
            Your numbers are:
            {numbers.map(number =>(
                <p key={numbers.index}>{number}</p>
            ))}
        </div>
    );
};

//end number adder

//Shared between both items below
const Control =  ({ children, value, onIncrease, onDecrease }) => {

    return(
        <div>
            <button onClick={onDecrease}>-</button>
            <div>
            <div>{value}</div>
            <div>{children}</div>
            </div>
            <button onClick={onIncrease}>+</button>
        </div>

    );

};

//single group
function AudioControls() {
    const [vol, setVol] = useState(85);
    const [treble, setTreble] = useState(70);
    const [mid, setMid] = useState(50);
    const [bass, setBass] = useState(75);
    

    return(
        <div>
            <Control value={vol} onIncrease={() => setVol(vol +1)} onDecrease={() => setVol(vol -1)} >
                Volume
            </Control>
            <Control value={treble} onIncrease={() => setTreble(treble +1)} onDecrease={() => setTreble(treble -1)} >
                Treble
            </Control>
            <Control value={mid} onIncrease={() => setMid(mid +1)} onDecrease={() => setMid(mid -1)} >
                Mid
            </Control>
            <Control value={bass} onIncrease={() => setBass(bass +1)} onDecrease={() => setBass(bass -1)} >
                Bass
            </Control>


        </div>

    );
};

//object states

const AudioObjects = () => {
    const [{volume, bass, mid, treble}, setValues] = useState({
        volume:80,
        bass:25,
        mid:50,
        treble:75
    });

    const increase = key =>() =>{
        setValues(values => ({
            ...values,
            [key]: values[key]+1
        }));
    }
    const decrease = key =>() =>{
        setValues(values =>({
            ...values,
            [key]:values[key] -1
        }));
    }

    return(
        <Control value={volume}
        onIncrease={increase('volume')} 
        onDecrease={decrease('volume')}
        >
            Volume 2
        </Control>
    );

}



ReactDOM.render(
    <div>
    <LightSwitchRoom />
    <RandomList />
    <AudioObjects />
    </div>
    ,
    document.querySelector('#root')
);