import React from 'react'
import image from '../../images/img1.svg'
import image1 from '../../images/img2.svg'
import image2 from '../../images/img3.svg'
import image3 from '../../images/img4.svg'
import image4 from '../../images/img5.svg'
import image5 from '../../images/img6.svg'
import baner1 from '../../images/baner1.jpg'
import baner2 from '../../images/baner2.jpg'
import s6image2 from '../../images/s6-img2.jpg'
import s6image3 from '../../images/s6-img3.jpg'
import s6image4 from '../../images/s6-img4.jpg'


import './Home.css';
function Home() {
    return (
        <>
        <section className="container">
                <div className="header_word">
                    <p className="achieve">Achieve your dream of<br/> studying overseas with INTO </p>
                    <p className="accredited">Accredited Online Tanzania University</p>
                </div>
            <div className="form_flex">
                <form>
                     <select>
                            <option value="selected">CATEGORY</option>
                            <option value="">BachEnd</option>
                            <option value="">FrontEnd</option>
                            <option value="">IT & Software</option>
                            <option value="">Photography</option>
                            <option value="">Technology</option>
                        </select>
                        <input type="text" name="" placeholder="Search Course" />
                        <a className="btn" href="#search">SEARCH</a>
               </form>
                </div>
               
        </section>
        
        <section>
            <div className="flex_section">
                    <div className="image_bg">
                        
                    <img className="secction2_img" src={image} alt="hakuna picha"/>
                   <p className="program">English Programs</p>    
                    </div>
                     <div className="image_bg">
                      <img className="secction2_img" src={image1} alt="hakuna picha"/>
                   <p className="program">2yr/Community </p>    
                </div>
                 <div className="image_bg">
                      <img className="secction2_img" src={image2} alt="hakuna picha"/>
                   <p className="program">Master Degree</p>    
                </div>
                 <div className="image_bg">
                      <img className="secction2_img" src={image3} alt="hakuna picha"/>
                   <p className="program">Certificate / Short</p>    
                </div>
                 <div className="image_bg">
                      <img className="secction2_img" src={image4} alt="hakuna picha"/>
                   <p className="program">Summer Holidays</p>    
                </div>
                 <div className="image_bg">
                      <img className="secction2_img" src={image5} alt="hakuna picha"/>
                   <p className="program">Scendary / Boarding</p>    
                </div>
                    
           </div>
          </section>
          <section className="flex_third_section">
             <div className="">
                <p className="para1"><b>Innovation Powers The</b></p>
                <p className="para2">NEW TANZANIAN UNIVERSITY <span className="sub_para2"><b>in</b></span></p>
                <p className="para3"><b>Creating Next Generation</b></p>
                <p className="para4">Voluptas sit aspernatur aut odit aut fugit,
                    sed quias conseq lim magni<br/> squam est qui dolorem ipsum quiala. 
                    Loluptolores eos qui ratione vol<br/> ust luptatem sequi que por tiu ut odi.<br/></p>
                    <p className="para5">aut fugit, sed quias consequuntur magni dolores eoune isquam est<br/> qu dolorem ipsum quiala.</p>
             </div>
             
             <div>
               <img src={baner1} alt="baner1"/>
             </div>
          </section>
          <section className="flex_fourth_section">
             <div className="btn_fourth_section">
               <a className="learn" href="#learn">LEARN MORE</a> <span className="or">or</span> <a className="history" href="#history">OUR HISTORY</a>
             </div>
             <div>
                <img className="forth_section_banner2" src={baner2} alt="banner2"/>
             </div>
             
          </section>
          <section className="flex_fifth_section">
             <div>
                <p className="fifth_section_200"><b>200+ <br/>Prestigious'</b></p>
                <p className="fifth_section_para">National Academies-honored faculty</p>
             </div>
            
             <div>
                <p className="fifth_section_400"><b>400+ Best Elite <br/>Programs</b></p>
                <p className="fifth_section_para">leading, shaping changing our world</p>
             </div>
           
             <div>
                <p className="fifth_section_270"><b>270+ Athletic <br/>Championships</b></p>
                <p className="fifth_section_para">National and conference titles</p>
               </div>
          </section>
          {/* ################ card first section################## */}
          <section className="flex_sixth_section">
             <div className="">
                <p className="sixth_section_heading"><b>interested online courses</b></p>
                <div className="sixth_section_border"></div>
                <p className="sixth_section_sub">leading, shaping changing our world</p>
                
             </div>
             <div className="card_section">
             <div className="card_body">
                <div className="card">
                  <img src={s6image2} alt="card_image" className="card_section_image"/>
                </div>
                   <div className="buyer_comment">
                      <i class='fa fa-users user_icon'></i>
                      <p className="_buyer">127 Buyers</p>
                      <i class='fa fa-comment comment_icon'></i>
                      <p className="_comment">0 Comment</p>
            
                   </div>
                   <div className="_course"><p>JavaScript Online Course</p>
                      <b><p className="course_cost">Free</p></b>
                      <div className="card_border"></div>
                   </div>
                </div>
                
               
                 <div className="card_body">
                <div className="card">
                  <img src={s6image3} alt="card_image" className="card_section_image"/>
                </div>
                <div className="buyer_comment">
                   <i class='fa fa-users user_icon'></i>
                      <p className="_buyer">127 Buyers</p>
                      <i class='fa fa-comment comment_icon'></i>
                      <p className="_comment">0 Comment</p>
                   </div>
                   <div className="_course"><p>Chemistry Online Course</p>
                      <b><p className="course_cost">$69.00</p></b>
                      <div className="card_border"></div>
                   </div>
                </div>
                
                 <div className="card_body">
                <div className="card">
                  <img src={s6image4} alt="card_image" className="card_section_image"/>
                </div>
                <div className="buyer_comment">
                  <i class='fa fa-users user_icon'></i>
                      <p className="_buyer">127 Buyers</p>
                      <i class='fa fa-comment comment_icon'></i>
                      <p className="_comment">0 Comment</p>
                   </div>
                   <div className="_course"><p>HTML/CSS3 Essentials</p>
                      <b><p className="course_cost">$69.00</p></b>
                      <div className="card_border"></div>
                   </div>
                </div>
               
              
             </div>
          </section>
            {/* second cards */}
          <section className="sixth_second_card">
             <div className="card_section">
                
             <div className="card_body">
                <div className="card">
                  <img src={s6image2} alt="card_image" className="card_section_image"/>
                </div>
                   <div className="buyer_comment">
                      <i class='fa fa-users user_icon'></i>
                      <p className="_buyer">127 Buyers</p>
                      <i class='fa fa-comment comment_icon'></i>
                      <p className="_comment">0 Comment</p>
            
                   </div>
                   <div className="_course"><p>JavaScript Online Course</p>
                      <b><p className="course_cost">Free</p></b>
                      <div className="card_border"></div>
                   </div>
                </div>
                
               
                 <div className="card_body">
                <div className="card">
                  <img src={s6image3} alt="card_image" className="card_section_image"/>
                </div>
                <div className="buyer_comment">
                   <i class='fa fa-users user_icon'></i>
                      <p className="_buyer">127 Buyers</p>
                      <i class='fa fa-comment comment_icon'></i>
                      <p className="_comment">0 Comment</p>
                   </div>
                   <div className="_course"><p>Chemistry Online Course</p>
                      <b><p className="course_cost">$69.00</p></b>
                      <div className="card_border"></div>
                   </div>
                </div>
                
                 <div className="card_body">
                <div className="card">
                  <img src={s6image4} alt="card_image" className="card_section_image"/>
                </div>
                <div className="buyer_comment">
                  <i class='fa fa-users user_icon'></i>
                      <p className="_buyer">127 Buyers</p>
                      <i class='fa fa-comment comment_icon'></i>
                      <p className="_comment">0 Comment</p>
                   </div>
                   <div className="_course"><p>HTML/CSS3 Essentials</p>
                      <b><p className="course_cost">$69.00</p></b>
                      <div className="card_border"></div>
                   </div>
                </div>
               
             </div>
          </section>
            </>
    )
}

export default Home
