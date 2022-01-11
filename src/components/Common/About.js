import React from "react";

import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';
import AboutItems from "./AboutItems";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!';
const aboutItems = [
    { className: '', date: '2009-2011', title: 'Our Humble Beginnings', content: lorem, image: img1},
    { className: 'timeline-inverted', date: 'March 2011', title: 'An Agency is Born', content: lorem, image: img2},
    { className: '', date: 'December 2012', title: 'Transition to Full Service', content: lorem, image: img3},
    { className: 'timeline-inverted', date: 'July 2014', title: 'Phase Two Expansion', content: lorem, image: img4},
];

class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="timeline">
                                {aboutItems.map((item, index)=>{
                                    return <AboutItems {...item} key={index} />
                                })}
                                <li className="timeline-inverted">
                                    <div className="timeline-image">
                                        <h4>Be Part
                                            <br />Of Our
                                            <br />Story!
                                        </h4>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
}

export default About;