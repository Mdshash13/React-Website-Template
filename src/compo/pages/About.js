import React, { Component } from 'react';
import Moretext from './Addmore/Moretext';
import Footer from '../inc/Footer';

class About extends React.Component {
    render() {
        return (
            <div>
                <section className="bg-success">
                    <h2 className="text-white text-center pad"> About</h2>

                </section>
                <section className="padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h3>
                                    About Me
                                </h3>
                                <div className="underline my-3"></div>
                                <p>
                                    I am currently pursuing B.Tech in Information Technology from Madan Mohan Malviya University of Technology. As a student of IT, I am well versed in C++, HTML, CSS, JS and Node.Js and relentlessly working to add new and niche skills to my skillset.
                                    I can learn new things expeditiously and can smoothly adapt myself to work in a new environment. I am a bold and confident orator, capable of working in a team with utmost cooperation and rapport; and have a steep inclination for writing as well.
                                    As an aberration from the conventional tech skills, I am eager to explore the niche fields as well if I am rightly guided and trained as I believe that, "that's where the future is heading."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Moretext/>
                <Footer/>
            </div>
        )
    }
}

export default About
