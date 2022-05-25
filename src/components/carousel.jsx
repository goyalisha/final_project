import Carousel from 'react-bootstrap-carousel'
// import {useState} from 'react'
import React from "react";
import './carousel.css'
import { Link } from 'react-router-dom'

function Carousel1() {
  return (
    <div className="  ">
   
      <Link to='/' ></Link>
    <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="okay"
        src="https://previews.123rf.com/images/makemoremove/makemoremove1802/makemoremove180200028/95815492-tel%C3%A9fono-m%C3%B3vil-tienda-m%C3%B3vil-concepto-de-tienda-aplicaci%C3%B3n-de-compras-en-l%C3%ADnea-en-el-m%C3%B3vil-agregar-al.jpg?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="okay"
        src="https://i.ytimg.com/vi/75gF72XLRGg/maxresdefault.jpg?text=Second slide&bg=282c34"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="okay"
        src="https://gadgetadda.com/wp-content/uploads/2014/10/Online-Shopping.jpg?text=Third slide&bg=20232a"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default Carousel1
