import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <section className="bg-dark text-white py-15">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="py-3">Copyright MD</h5>
                        {/* <div className="underline"></div> */}
                        <p> This Website is Designed by Shashwat</p>
                    </div>
                    <div className="col-md-4">
                        <h5 className="py-3"> Links</h5>
                        {/* <div className="underline"></div> */}
                        <div ><Link to="/" className="text-decoration-none"> Home</Link></div>
                        <div ><Link to="/Contact" className="text-decoration-none"> Contact</Link></div>
                        <div ><Link to="/About" className="text-decoration-none">About</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h5 className="py-3">Contact Me</h5>
                        {/* <div className="underline"></div> */}
                        <div>
                            <p>Email : shashwat131427@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
