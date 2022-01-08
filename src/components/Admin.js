import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div>
            <div className="container">
      <div className="row"> 
      <div className='col-md-12 my-5 text-right'>

       <Link to="/add" className='btn btn-outline-dark'>
           Add Contact
       </Link>
      </div>
      
      
      </div>
      </div>
        </div>
    )
}

export default Admin