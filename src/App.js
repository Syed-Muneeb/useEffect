import React, { useEffect, useState } from 'react';
import ChangeInProp from './ChangeInProp.js';
import {Demo1} from './demo1.js'
import Top from './demo2.js';
import Change from './demo3.js';
import Mount from './MountExample.js';



function LifeCycleDemo(){

    useEffect( () =>  {
    
    // this gets called after every render ,
    // the first one , and every one after that

        console.log("render!") 

    // this you want to implement component willunmount
    // return a function from inside a useeffect

    return ()=> console.log("unmounting....");


  },)

      return "I am a lifecyle demo !"

}

function App() {

  let [value,setValue] = useState(0);
  const [state,setState] = useState(true);


  return (
    <div>
      <br/>
          <button onClick ={()=> setValue( value += 1 )}> value </button>
          <button onClick ={()=> setState(!state)}> change state </button>
          {state && <LifeCycleDemo/>}

            
          <h2> prevent useEffect to run after every render </h2>
          <Demo1/>
          <h1> exmample </h1>
          <Top/>
          <h2> change component </h2>
          <Change/>
          <h2> change in prop </h2>
          <ChangeInProp/>
          <h2> mount </h2>
          <Mount/>
  
    </div>
  );
}

export default App;
