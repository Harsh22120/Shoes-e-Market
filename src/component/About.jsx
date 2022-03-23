import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <div className="container py-5 my-5">
            <div className='row'>
              <div className="col-md-6">
                <h1 className='text-dark fw-blod mb-4'>About Us</h1>
                <p className='lead mb-4'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                   Recusandae soluta placeat nam pariatur ex aut nobis animi possimus in, 
                   amet quas voluptatem autem reiciendis quidem accusantium quam a praesentium porro, 
                   impedit quibusdam cupiditate quo. Natus libero corporis incidunt ad molestias. 
                   Qui, vero sapiente? Odio asperiores magni mollitia sit perspiciatis fugit 
                   quibusdam qui a architecto, 
                   iste adipisci totam laudantium beatae inventore laborum ex fuga modi id temporibus magnam, 
                   eos vel amet. Cupiditate error voluptatem unde pariatur beatae officiis nesciunt voluptatibus, 
                   dicta ipsum rerum delectus incidunt modi non perspiciatis aperiam vero,
                    aliquid provident eum placeat est sint, libero facere hic! Quidem, officiis!
                </p>
                <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
              </div>
              <div className='col-md-6 d-flex justify-content-center'>
                <img src='/assets/aboutus.jpg' alt='About us' height="400px" width="400px" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default About