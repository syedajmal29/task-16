import React from 'react'
import { alldata } from './Alljson'

function All() {
    return (
        <div className='d-flex flex-wrap'>
         {alldata.map((all)=>(
            <div class="card m-4" style={{width: "20rem"}}>
            <img src={all.img} class="card-img-top" alt="data-science" />
            <div class="card-body">
                <p class="card-text my-4">{all.title}</p>
              <div className='my-4'>{all.author}</div>
             <div className='d-flex justify-content-between'>
             <span className='my-2'>{all.date}</span>
             <span className='my-2'>{all.read_time}</span>
             </div>
            </div>
          </div>
         ))}
          
        </div>
      )
}

export default All