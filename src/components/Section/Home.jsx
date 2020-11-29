import React from 'react'
import image from '../../images/img1.svg'
import image1 from '../../images/img2.svg'
import image2 from '../../images/img3.svg'
import image3 from '../../images/img4.svg'
import image4 from '../../images/img5.svg'
import image5 from '../../images/img6.svg'
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
                    <div>
                        
                        <img src={image} alt="hakuna picha"/>
                   <p className="program">English Programs</p>    
                    </div>
                     <div>
                      <img src={image1} alt="hakuna picha"/>
                   <p className="program">2yr/Community </p>    
                </div>
                 <div>
                      <img src={image2} alt="hakuna picha"/>
                   <p className="program">Master Degree</p>    
                </div>
                 <div>
                      <img src={image3} alt="hakuna picha"/>
                   <p className="program">Certificate / Short</p>    
                </div>
                 <div>
                      <img src={image4} alt="hakuna picha"/>
                   <p className="program">Summer Holidays</p>    
                </div>
                 <div>
                      <img src={image5} alt="hakuna picha"/>
                   <p className="program">Scendary / Boarding</p>    
                </div>
                    
           </div>
        </section>
            </>
    )
}

export default Home
