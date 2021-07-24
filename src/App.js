import { useState } from "react";
import "./styles.css";
// import QrReader from "react-qr-scanner";
import QrReader from 'react-qr-reader'
import QR from './QR'

export default function App() {
  // console.log("rendering")
  // const [state, setState] = useState({ delay: 100, result: "No result" , count: 0});
  // const handleScan=(data)=>{
  //   setState((currentState)=>{
  //     return {...currentState, count: currentState.count +1, result: data}
  //   })
  // }
  // const handleError=(err)=>{
  //   console.error(err)
  // }
  // const previewStyle = {
  //   height: 240,
  //   width: 320,
  // }
  return (
    <div className="App" style={{"display":"flex","flexDirection":"column"}}>
      <h1>Hello CodeSandbox</h1>
      <QR/>
      {/* <div>Count - {state.count}</div>
      <div>Result -{state.result}</div>
      <h2>Start editing to see some magic happen!</h2>
      <QrReader
          delay={1000}
          style={previewStyle}
          onError={()=>handleError()}
          onScan={()=>handleScan()}
      /> */}
    </div>
  );
}
