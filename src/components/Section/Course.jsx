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
            
            <section className="flex_main">
               <div className="search_bar">
                    <li className="fa fa-th fa-2x search_th "></li>  &nbsp; &nbsp;
                    <li className="fa fa-list fa-2x search_list"></li>
                    <p className="showing">Showing 1 to 9 of 11</p>
                    <div className="btn_btn_search">
                        <li className="fa fa-search"></li>
                    </div>
                    <input className="input" type="text" placeholder="Type a search" />
                   
                    
            </div>
             <section className="courses_price">
                 <div className="card_body_course">
                    <div className="card">
                    <img src={image1} alt="card_image" className="course_image"/>
                    </div>
                        <div className="buyer_comment">
                        <i className='fa fa-users user_icon'></i>
                            <p className="_course_cost">124 Buyers</p>
                            <i className='fa fa-comment comment_icon'></i>
                            <p className="_comment">0 Comment</p>
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
                                    <p className="_comment">0 Comment</p>
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
                                    <p className="_comment">0 Comment</p>
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
                            <p className="_comment">0 Comment</p>
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
                                    <p className="_comment">0 Comment</p>
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
                                    <p className="_comment">0 Comment</p>
                                </div>
                            <div className="">
                                <b><p className="php_master">Print Designing<br />Teaching</p></b> 
                                <p className="_border"><b>$69.00</b></p>
                            </div>
                  
                     </div>
                   
                </section>
             
            </section>
            
               
            
            </>
    )
}

export default Course
