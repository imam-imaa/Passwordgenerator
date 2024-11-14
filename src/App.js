import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './data/Passchar';

function App() {
  let p="imaaimam";
  // let n=p.charAt( Math.floor(Math.random()*p.length) )
  // console.log(n)
  let[uppercase,setUppercase]=useState(false)
  let[lowercase,setLowercase]=useState(false)
  let[number,setNumber]=useState(false)
  let[symbol,setSymbol]=useState(false)
  let[passwordlen,setPasswordlen]=useState(10)
  let[fpass,setPass]=useState('')

    let createPassword=()=>{
      let finalPass=''
      let charSet=''
       if(uppercase || lowercase || number || symbol){
         if(uppercase)charSet+=UC;  
         if(lowercase)charSet+=LC;  
         if(number)charSet+=NC;  
         if(symbol)charSet+=SC
         
         for(let i=0;i<passwordlen;i++){
          finalPass+=charSet.charAt( Math.floor(Math.random()*charSet.length) )

         }
         setPass(finalPass)

       }

       else{
        alert("please one checkbox...")
       }
    }
    let copyPass=()=>{
      navigator.clipboard.writeText(fpass)
    }

  return (
    <>
      <div className='PasswordBox'>
        <h2>Password Generator</h2>
        <div className='PasswordBoxin'>
          <input type='text' value={fpass} /> <button onClick={copyPass}>Copy</button>
        </div>
        <div className='passLenth'>
          <label>Password length</label>
          <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>setPasswordlen(event.target.value)} />
        </div>
        <div className='passLenth'>
          <label>Including uppercase latter</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>
        <div className='passLenth'>
          <label>Including lowercase latter</label>
          <input type='checkbox' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className='passLenth'>
          <label>Including number</label>
          <input type='checkbox' checked={number} onChange={()=>setNumber(!number)} />
        </div>
        <div className='passLenth'>
          <label>Including symbol</label>
          <input type='checkbox'checked={symbol} onChange={()=>setSymbol(!symbol)} />
        </div>
        <button className='btn' onClick={createPassword}>
          Generate Password
          </button>
      </div>
    </>
  );
}

export default App;
