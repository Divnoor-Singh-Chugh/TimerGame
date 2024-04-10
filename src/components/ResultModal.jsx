import { forwardRef } from "react";
const ResultModal=forwardRef(function ResultModal({targetTime,remainingTime,onReset},ref){
    const userLost=remainingTime<=0
    const formattedRemaingTime=(remainingTime/1000).toFixed(2);
    const score=Math.round((1-remainingTime/(targetTime*1000))*100);
return(<dialog ref={ref} className="result-modal">
    {userLost && <h2>You Lost</h2>}
    {!userLost && <h2>Your Score: {score}</h2>}
    <p>The target time was <strong>{targetTime} seconds.</strong></p>
    <p>You stopped the timer with <strong>{formattedRemaingTime} seconds left.</strong></p>
    <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
    </form>
</dialog>)

});



export default ResultModal