import React from 'react';
import './Course.css';
 import image1 from '../../images/s6-img3.jpg';
function Course() {
    return (
        <>
        <section className="flex_first_section">
            <div className="course">
                <h2>Courses <br/><span className="homepage">homepage</span><span>- courses</span> </h2>   
           </div>
            </section>
            
            <section className="main_section">
                <div className="leftsidebar">
                   
                    <section className="courses_price">
                 <div className="card_body_course">
                    <div className="card">
                    <img src={image1} alt="card_image" className="course_image"/>
                    </div>
                        <div className="buyer_comment">
                        <i className='fa fa-users user_icon'></i>
                            <p className="_course_cost">124 Buyers</p>
                            <i className='fa fa-comment comment_icon'></i>
                            <p className="_comment">0 </p>
                        </div>
                        <div className="">
                            <b><p className="php_master">PHP Master and<br /> Make Money</p></b> 
                            <p className="_border"><b>Free</b></p>
                        </div>
                  
                </div>

                       <div className="card_body_course">
                            <div className="card">
                            <img src={image1} alt="card_image" className="course_image"/>
                            </div>
                                <div className="buyer_comment">
                                <i className='fa fa-users user_icon'></i>
                                    <p className="_course_cost">101 Buyers</p>
                                    <i className='fa fa-comment comment_icon'></i>
                                    <p className="_comment">0 </p>
                                </div>
                            <div className="">
                                <b><p className="php_master">Complete Guide to<br /> Photography</p></b> 
                                <p className="_border"><b>$69.00</b></p>
                            </div>
                  
                    </div>
                       <div className="card_body_course">
                            <div className="card">
                            <img src={image1} alt="card_image" className="course_image"/>
                            </div>
                                <div className="buyer_comment">
                                <i className='fa fa-users user_icon'></i>
                                    <p className="_course_cost">101 Buyers</p>
                                    <i className='fa fa-comment comment_icon'></i>
                                    <p className="_comment">0 </p>
                                </div>
                            <div className="">
                                <b><p className="php_master">From Zero to Hero<br /> with Nodejs</p></b> 
                                <p className="_border"><b>$69.00</b></p>
                            </div>
                  
                     </div>
                    
                    </section>
                     {/* second card row */}
                <section className="courses_price">
                 <div className="card_body_course">
                    <div className="card">
                    <img src={image1} alt="card_image" className="course_image"/>
                    </div>
                        <div className="buyer_comment">
                        <i className='fa fa-users user_icon'></i>
                            <p className="_course_cost">101 Buyers</p>
                            <i className='fa fa-comment comment_icon'></i>
                            <p className="_comment">0 </p>
                        </div>
                        <div className="">
                            <b><p className="php_master">Introduction Learn<br /> LMS Plugin</p></b> 
                            <p className="_border"><b>$69.00</b></p>
                        </div>
                  
                </div>

                       <div className="card_body_course">
                            <div className="card">
                            <img src={image1} alt="card_image" className="course_image"/>
                            </div>
                                <div className="buyer_comment">
                                <i className='fa fa-users user_icon'></i>
                                    <p className="_course_cost">101 Buyers</p>
                                    <i className='fa fa-comment comment_icon'></i>
                                    <p className="_comment">0 </p>
                                </div>
                            <div className="">
                                <b><p className="php_master">Learn Web Graphic<br /> Design</p></b> 
                                <p className="_border"><b>Free</b></p>
                            </div>
                  
                    </div>
                       <div className="card_body_course">
                            <div className="card">
                            <img src={image1} alt="card_image" className="course_image"/>
                            </div>
                                <div className="buyer_comment">
                                <i className='fa fa-users user_icon'></i>
                                    <p className="_course_cost">100 Buyers</p>
                                    <i className='fa fa-comment comment_icon'></i>
                                    <p className="_comment">0 </p>
                                </div>
                            <div className="">
                                <b><p className="php_master">Print Designing<br />Teaching</p></b> 
                                <p className="_border"><b>$69.00</b></p>
                            </div>
                  
                     </div>
                   
                </section>
                </div>

                <div className="leftsidebar">
                    <div className="_search_left">
                        <p style={{fontSize:'2rem'}}><b>Search</b></p>
                        <p style={{color:'#16a085'}}>Leave your keyword</p>
                    </div>
                    
                    <div className="_search_left">
                        <p style={{fontSize:'2rem'}}><b>LATEST COURSES</b></p>
                        <p style={{ color: '#16a085'}}>Tutorial Will Introduce You</p>
                    </div>
                    <img className="side_image" src={image1} alt="side_image"/>
                    </div>
           </section>
            
               
            
            </>
    )
}

export default Course
