import React, { useEffect, useState } from 'react';


function Change (){

    let [count1,setCount1] = useState(0)
    let [count2,setCount2] = useState(0)
    let [count3,setCount3] = useState(0)

    useEffect(()=> {

        console.log("change in count 2 render")

    },[count2]);

    return <div>

            <button onClick={()=> setCount1(count1+=1)}> coun1 </button>
            <button onClick={()=> setCount2(count2+=1)}> coun2 </button>
            <button onClick={()=> setCount3(count3+=1)}> count3 </button>

         </div>

}

export default Change;