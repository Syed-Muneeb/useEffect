import React, { useEffect, useState } from 'react';


function Demo ({a,b}){

    useEffect(()=>{

        console.log("render")

    },[a]);

    return null
}


function ChangeInProp () {

    let  [count1,setCount1] = useState(0);
    let [count2,setCount2] = useState(0);


    return <div>

        <button onClick={()=> setCount1(count1+=1)}> coun1 </button>
        <button onClick={()=> setCount2(count2+=1)}> coun2 </button>
        <Demo a={count1} b={count2} />

     </div>
}

export default ChangeInProp;