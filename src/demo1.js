import React, { useState ,useEffect } from 'react'


export const Demo1 = () => {

    let [num , setNum] = useState(0);
    let [state,setState] = useState(0);


    useEffect( () =>  {

            console.log("render!");
    
        return ()=> console.log("unmounting....");
    
        // if you want your effect run less often  you can provide
        // a second aurgument array of values , think of them as the dependencies
        // for that effect if one of the dependies change since last time
        // the effect will run again
            // or

        // if you pass the empty array as  second aurgument
        // useffect  only runs mounting or unmounting
            // like this []
    
      },[num])
    
      return (
        
        <div>
               <button onClick={()=> setNum( num +=1 )}> number</button>
               <button onClick={()=> setState( state +=1 )}> state </button>

        </div>
    )
    
 }


    



