const ReducerCounter = ({handelReducer}) => {
    return ( 
        <div className="reducer">
            <button onClick={handelReducer}> - </button>
        </div>
     );
}
 
export default ReducerCounter;