import React from 'react'
import Footer from '../inc/Footer'

function Contact() {
    return (
        <div>
            <section className="bg-success">
                <h2 className="text-white text-center pad"> Contact Me</h2>

            </section>
            <section className="padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.5063475410902!2d83.4382626152012!3d26.728213283207438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915d6eb4004b0d%3A0xe54969702df09311!2sMMMUT%20Gorakhpur!5e0!3m2!1sen!2sin!4v1662760009918!5m2!1sen!2sin" width="600" height="800px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-4">
                            <h3>
                                Ask Your Queries Here
                            </h3>
                           <form >
                            <label for="">Your Query</label>
                            <textarea cols="30" rows="3"></textarea>
                           </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Contact
