import React, { useEffect ,useState} from 'react';


function Top(){

  let [count,setCount] = useState(0);

    useEffect(()=> {

        console.log("Top render")
    })

    return <div>
        
            <button onClick={()=> setCount(count +=1 )}> increment top</button>
            <Middle/>
    </div>
}

export default Top;

function Middle(){

    let [count,setCount] = useState(0);
  
      useEffect(()=> {
  
          console.log("Middle render")
      })
  
      return <div>
          
              <button onClick={()=> setCount(count +=1 )}> increment Middle</button>
              <Bottom/>
      </div>
  }

  function Bottom(){

    let [count,setCount] = useState(0);
  
      useEffect(()=> {
  
          console.log("Bottom render")
      })
  
      return <div>
          
              <button onClick={()=> setCount(count +=1 )}> increment Bottom</button>
      </div>
  }
  