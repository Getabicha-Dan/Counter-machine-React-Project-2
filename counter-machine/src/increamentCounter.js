const IncreamentalCounter = ({handelIncreaser}) => {
    return ( 
        <div className="increase">
            <button onClick={handelIncreaser}> + </button>
        </div>
     );
}
 
export default IncreamentalCounter;