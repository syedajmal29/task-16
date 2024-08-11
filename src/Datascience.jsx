import React from 'react'
import { datasciencedata } from './Datasciencejson'

function Datascience() {
  return (
    <div className='d-flex flex-wrap'>
     {datasciencedata.map((datascience)=>(
        <div class="card m-4" style={{width: "20rem"}}>
        <img src={datascience.img} class="card-img-top" alt="data-science" />
        <div class="card-body">
            <p class="card-text my-4">{datascience.title}</p>
          <div className='my-4'>{datascience.author}</div>
         <div className='d-flex justify-content-between'>
         <span className='my-2'>{datascience.date}</span>
         <span className='my-2'>{datascience.read_time}</span>
         </div>
        </div>
      </div>
     ))}
      
    </div>
  )
}

export default Datascience