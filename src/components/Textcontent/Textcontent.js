import React from 'react'
import "./textcontent.css"
export default function Textcontent() {
  return (
   <div className='textcomponent-Wrapper'>
   <div className='textcomponent'>
    <h1 className='heading'>We Build WEB & MOBILE APPS that user loves!</h1>
    <p className='heading-text'>The team of LOGO provides the best services out there for web and mobile applications to deliever you the best projects.</p>
     </div>
   <button onClick={()=>{alert("Clicked the button")}} className='btn btntext'>Let's build your idea</button>
   </div>
  )
}
