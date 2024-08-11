import React from 'react'
import { careerdata } from './Careerjson'

function Career() {
    return (
   
        <div className='d-flex flex-wrap'>
          
            
         {careerdata.map((career)=>(
            <div class="card m-4" style={{width: "20rem"}}>
            <img src={career.img} class="card-img-top" alt="data-science" />
            <div class="card-body">
                <p class="card-text my-4">{career.title}</p>
              <div className='my-4'>{career.author}</div>
             <div className='d-flex justify-content-between'>
             <span className='my-2'>{career.date}</span>
             <span className='my-2'>{career.read_time}</span>
             </div>
            </div>
          </div>
         ))}
         
          </div>
       
      )
}

export default Career