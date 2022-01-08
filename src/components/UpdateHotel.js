import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function UpdateHotel() {
    const {id} = useParams()
    return (
        <div className="container-fluid">
      <h1 className="text-center text-dark py-3 display-2">Update Post {id}</h1>
      <div className="row">
        <div className="col-md-6 p-5 mx-auto shadow">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                placeholder="Phone"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className='row'>
            <div className="form-group">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Update Hotel"
              />
               <Link
               to="/"
                className="btn btn-dark ml-3">Cancel
                    </Link>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    )
}
