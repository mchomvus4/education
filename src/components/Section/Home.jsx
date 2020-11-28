import React from 'react'
import './Home.css';
function Home() {
    return (
        <section className="container">
            <div className="flex_container">
                <div className="header_word">
                    <p className="achieve">Achieve your dream of<br/> studying overseas with INTO </p>
                    <p className="accredited">Accredited Online Tanzania University</p>
                </div>

                <div className="header_form">
                    <form className="form_group">
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
         </div>
       </section>
    )
}

export default Home
