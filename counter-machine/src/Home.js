import { useState } from "react";
import IncreamentalCounter from "./increamentCounter";
import ReducerCounter from "./reducerCounter";
const Home = () => {
    const [number,setNumber ]= useState(1);

    const handelIncreaser = ()=>{
        setNumber(number+1);

    }
    const handelReducer = ()=>{
        setNumber(number-1);
    }
    
    
    return ( 
        <div className="home">
            <h1>Counter Machine</h1>        
            <p>{number}</p>
            <IncreamentalCounter handelIncreaser={handelIncreaser}/>
            <ReducerCounter handelReducer={handelReducer}/>
            
        </div>
    );
}
 
export default Home;