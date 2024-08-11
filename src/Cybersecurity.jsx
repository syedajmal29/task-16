import React from 'react'
import { cybersecuritydata } from './Cybersecurityjson'
function Cybersecurity() {
    return (
        <div className='d-flex flex-wrap'>
         {cybersecuritydata.map((cybersecurity)=>(
            <div class="card m-4" style={{width: "20rem"}}>
            <img src={cybersecurity.img} class="card-img-top" alt="data-science" />
            <div class="card-body">
                <p class="card-text my-4">{cybersecurity.title}</p>
              <div className='my-4'>{cybersecurity.author}</div>
             <div className='d-flex justify-content-between'>
             <span className='my-2'>{cybersecurity.date}</span>
             <span className='my-2'>{cybersecurity.read_time}</span>
             </div>
            </div>
          </div>
         ))}
         </div>
    )
}

export default Cybersecurity