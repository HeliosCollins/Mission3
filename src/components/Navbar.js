
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg">
          <a className='aColor title' href="#">All Turners Services</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a className='aColor Home' href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a className='aColor Quote' href="#">Apply for a Quote</a>
              </li>
              <li class="nav-item">
                <a className='aColor Policy' href="#">Policy Information</a>
              </li>
              <li class="nav-item">
                <a className='aColor Claims' href="#">Claims</a>
              </li>
              <li class="nav-item">
                <a className='aColor About' href="#">About us</a>
              </li>
              <div className='btns-nav'>
                <Button color='primary'>
                  Login
                </Button>
                <Button color='primary'>
                  Sing Up
                </Button>
              </div>
            </ul>
          </div>
        </nav>
      );
  }
}
export default Navbar;