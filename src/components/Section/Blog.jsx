import React from 'react';
import './Blog.css';
import image1 from '../../images/s6-img3.jpg';
import image01 from '../../images/image01.png'
import image02 from '../../images/image02.png'
import image03 from '../../images/image03.png'
function Blog() {
    return (
        <section className="blog_section">
            <div className="blog_container">
                <div className="blog_left">
                    <h2>SEO for your WP website</h2>
                    <div className="">
                        <img className="_blog_image_size" src={image01} alt="_image01" />
                        
                    </div>
                    <i className="far fa-user _blog_icon"></i> <span className="_spanblog">by samwel </span> 
                    <i class="far fa-calendar _blog_icon"></i> <span className="_spanblog">Posted on 15Dec, 2020</span>
                    <i class="fas fa-folder _blog_icon"></i><span className="_spanblog">In Ideas</span>
                   <div className="_blogborder">
                    <p className="_blog_p01">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book…</p>
                    </div>
                    <div className="_blogstarted">
                        <a className="blogstarted" href="#about">GET STARTED</a>
                    </div>

                    <div className="">
                        <h2>Expenses You Arent Thinking</h2>
                        <img className="_blog_image_size" src={image02} alt="_image01" />
                        
                    </div>
                    <i className="far fa-user _blog_icon"></i><span className="_spanblog">by samwel </span>  
                    <i class="far fa-calendar _blog_icon"></i><span className="_spanblog">Posted on 15Dec, 2020</span>
                    <i class="fas fa-folder _blog_icon"></i><span className="_spanblog">In Ideas</span>
                    <div className="_blogborder">
                        <p className="_blog_p01">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book…</p>
                    </div>
                    <div className="_blogstarted">
                        <a className="blogstarted" href="#about">GET STARTED</a>
                    </div>

                     <div className="">
                        <h2>Become PHP Master & Make Money</h2>
                        <img className="_blog_image_size" src={image03} alt="_image01" />
                        
                    </div>
                    <i className="far fa-user _blog_icon"></i><span className="_spanblog">by samwel </span>  
                    <i class="far fa-calendar _blog_icon"></i><span className="_spanblog">Posted on 15Dec, 2020</span>
                    <i class="fas fa-folder _blog_icon"></i><span className="_spanblog">In Ideas</span>
                    <div className="_blogborder">
                        <p className="_blog_p01">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book…</p>
                    </div>
                    <div className="_blogstarted">
                        <a className="blogstarted" href="#about">GET STARTED</a>
                    </div>
                </div>






                <div className="blog_right">
                    <div className="_search_left">
                        <p style={{fontSize:'2rem'}}><b>Search</b></p>
                        <p style={{color:'#16a085'}}>Leave your keyword</p>
                    </div>
                    
                    <div className="_search_left">
                        <p style={{fontSize:'2rem'}}><b>LATEST COURSES</b></p>
                        <p style={{ color: '#16a085'}}>Tutorial Will Introduce You</p>
                    </div>
                    <div className="right">
                    <img className="side_image" src={image1} alt="side_image" />
                        <p className="php">PHP Master and Make Money<br/><span style={{color:'#16a085'}}>Free</span></p>
                        
                    </div>
                     <div className="right">
                    <img className="side_image" src={image1} alt="side_image" />
                        <p className="php">Complete Guide to Photography<br/><span style={{color:'#16a085'}}>$69.00</span></p>
                        
                    </div>
                     <div className="right">
                    <img className="side_image" src={image1} alt="side_image" />
                        <p className="php">From Zero to Hero with Nodejs<br/><span style={{color:'#16a085'}}>$69.00</span></p>
                        
                    </div>
                     <div className="right">
                    <img className="side_image" src={image1} alt="side_image" />
                        <p className="php">Introduction Learn LMS Plugin<br/><span style={{color:'#16a085'}}>$69.00</span></p>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog
