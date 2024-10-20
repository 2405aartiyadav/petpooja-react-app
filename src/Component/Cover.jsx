import React from 'react'
import coverimage from '../assets/coverimage5.jpg'
import { Link } from 'react-router-dom'
function Cover() {
  return (
    <div className='container section'>
        <div className="row cover">
            <div className="col-md-6 mr-auto" id="coverHeading">
             <h2>
                Elevate your day,one delicious bite at a time.
             </h2>
             <Link to="/order">
             <button className='align-items-center'>Order Now</button>
             </Link>
            </div>
            <div className="col-md-4 offset-md-2" id="coverImg">
               <img src={coverimage} alt="" className='ml-md-5'/>
            </div>
        </div>
    </div>
  )
}

export default Cover