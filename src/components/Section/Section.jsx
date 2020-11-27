import React from 'react';
import Home from '../Section/Home';
import Course from '../Section/Course';
import About from '../Section/About';
import Page from '../Section/Page';
import Event from '../Section/Event';
import Blog from '../Section/Blog';
import Contact from '../Section/Contact';
import { Route } from 'react-router-dom';

function Section() {
    return (
        <section>
            <Route path="/" component={Home} exact />
             <Route path="/course" component={Course} />
            <Route path="/about" component={About} />
            <Route path="/page" component={Page} />
            <Route path="/event" component={Event} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            
        </section>
    )
}
    
export default Section
