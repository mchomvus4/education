import React from 'react'
import './About.css';
import earth from '../../images/earth-globe.svg';
import university from '../../images/university.svg';
import book from '../../images/books.svg';
import student from '../../images/student.svg';
import diploma from '../../images/diploma.svg';
function About() {
    return (
        <section>
            <h1 className="panding">I will be back to this page there was some more staff to do at home page</h1>
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
    )
}

export default About
