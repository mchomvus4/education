import React from 'react'
import './Home.css';
function Home() {
    return (
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
    )
}

export default Home
