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
            <div className="flex_about">
                <div>
                    <img src={earth} alt="about_img" />
                    <p className="about_para">Our Program</p>
                </div>
                <div>
                    <img src={university} alt="about_img" />
                    <p className="about_para">Our History</p>
                </div>
                <div>
                    <img src={book} alt="about_img" />
                   <p className="about_para"> Research</p>
                </div>
                <div>
                    <img src={student} alt="about_img" />
                   <p className="about_para"> Student</p>
                </div>
                <div>
                    <img src={diploma} alt="about_img" />
                    <p className="about_para">High Quality</p>
                </div>
            </div>
       </section>
    )
}

export default About
