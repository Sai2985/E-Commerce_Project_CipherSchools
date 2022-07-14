import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            HI, we are STAR GALAXY. Here, Teams around the world invent on behalf of our customers every day to meet their desire for lower prices, better selection, and convenient services. One way we guarantee a wide selection of products is through the 1.7 million small and medium businesses around the world selling on STAR GALAXY.com and offering more options for customers. STAR GALAXY has invested tens of billions of dollars in infrastructure and built hundreds of tools to help independent sellers succeed in our store. That includes openly sharing data analytics that help independent sellers reach customers.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/images/about us.jpg" alt="About Us" height="400px" width="700px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
