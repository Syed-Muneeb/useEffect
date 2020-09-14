import React, { useEffect, useRef, useState } from 'react';


function Mount(){

 let inpuRef = useRef();

 let [state,setState] = useState("")

    useEffect(()=>{

        console.log("Mount");

    },[inpuRef])


    return <div>

            <form>
                <input ref={inpuRef}
                value = {state}
                onChange={(e)=> setState(e.target.value)}/>
            </form>
    </div>
}

export default Mount;