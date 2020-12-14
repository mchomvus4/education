import React from 'react'
import './About.css';
import earth from '../../images/earth-globe.svg';
import university from '../../images/university.svg';
import book from '../../images/books.svg';
import student from '../../images/student.svg';
import diploma from '../../images/diploma.svg';
import about from '../../images/about-img.png';
function About() {
    return (
        <>
        <section>
             <div className="about">
                <h2>About <br/><span className="homepage">homepage</span><span>- about</span> </h2>   
           </div>
           
            <div className="flex_about">
                <div>
                    <img className="about_section_img" src={earth} alt="about_img" />
                    <p className="about_para">Our Program</p>
                </div>
                <div>
                    <img className="about_section_img"  src={university} alt="about_img" />
                    <p className="about_para">Our History</p>
                </div>
                <div>
                    <img className="about_section_img"  src={book} alt="about_img" />
                   <p className="about_para"> Research</p>
                </div>
                <div>
                    <img className="about_section_img"  src={student} alt="about_img" />
                   <p className="about_para"> Student</p>
                </div>
                <div>
                    <img  className="about_section_img" src={diploma} alt="about_img" />
                    <p className="about_para">High Quality</p>
                </div>
            </div>
            </section>
            <section className="section_two">
                <div className="section_two_one">
                    <h2>Welcome to Online Learning, you have <br/>important steps</h2>
                    <p className="section_two_p01">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesqu quis eros<br /> lobortis, vestibulum turpis ac, pulvinar odio. Praesent vulp utate a elit ac mollis.<br /> In sit amet ipsum turpis.</p>
                    <p className="section_two_p02"><i className="fa fa-caret-right icon_section" ></i>Over 37 lectures and 55.5 hours of content!</p>
                    <p className="section_two_p02"><i className="fa fa-caret-right icon_section" ></i>LIVE PROJECT End to End Software Testing Training Included.</p>
                    <p className="section_two_p02"><i className="fa fa-caret-right icon_section" ></i> Learn Software Testing and Automation basics from a professional trainer.</p>
                </div>
                <div className="section_two-two">
                    <img src={about} alt="about_img"/>
                </div>
            </section>
            </>
    )
}

export default About
