import React from 'react'
import fullstackdata from './Fullstackjson'
function Fullstack() {
  return (
    <div className='d-flex flex-wrap'>
     {fullstackdata.map((fullstack)=>(
        <div class="card m-4" style={{width: "20rem"}}>
        <img src={fullstack.img} class="card-img-top" alt="full-stack" />
        <div class="card-body">
            <p class="card-text my-4">{fullstack.title}</p>
          <div className='my-4'>{fullstack.author}</div>
         <div className='d-flex justify-content-between'>
         <span className='my-2'>{fullstack.date}</span>
         <span className='my-2'>{fullstack.read_time}</span>
         </div>
        </div>
      </div>
     ))}
      
    </div>
  )
}

export default Fullstack