import React  from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import { FaAlignRight } from "react-icons/fa";
export const Navbar =()=>{
  
    return (
    
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:" lightpurple"}}>
  <div class="collapse navbar-collapse" id="navbarNav">
  <a class="navbar-brand" href="#">Mariana Hotel</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link  class="nav-item nav-link active" to="/">Home </Link>
              </li>
      <li class="nav-item">
      <Link  class="nav-item nav-link active"to="/about">About </Link>

      </li>
      <li class="nav-item">
      <Link  class="nav-item nav-link active"to="/room">Rooms</Link>

      </li>
      <li class="nav-item">
      <Link  class="nav-item nav-link active" to="/booknow">BookNow </Link>
       
      </li>

      <li class="nav-item">
      <Link  class="nav-item nav-link active" to="/admin">
      <button type="button" class="btn btn-primary">Admin
      
      </button>

      </Link>
       
      </li>
    </ul>
   
  </div>
</nav>
        //   <ul
        //     className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
        //   >
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link to="/room">Rooms</Link>
        //     </li>
        //   </ul>
    );
  }