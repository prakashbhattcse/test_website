import React from 'react'
import './AboutUs.css';


const AboutUs = () => {
    return (
        <>
            <section>
                <div className='container-fluid row about-us mx-0 px-0 text-light'>
                    <div className='about-us-heading justify-content-center d-flex align-items-center text-light'> ABOUT US</div>
                </div>



                <div className='flex flex-column mx-auto'>
                    <div className='d-flex justify-content-between about-us-box1 row py-3 px-6 mx-auto align-items-center'>
                     
                        <img src='./logo.png' alt='' className='img-fluid col-lg-4 col-md-5 col-sm-5  p-10 mx-auto'></img>
                        <div className='container col-lg-7 col-md-5 col-sm-11 about-us-text mx-auto pt-4'>TEDI (INDIA) PRIVATE LIMITED, Company founded in 2008 has come a long way from its beginnings in Automotive Industry selling Safety and Security Products. When the company first started out, our passion for providing safer automobile industry drive us now to be more eco-friendly, providing the best equipment for the industry by doing intense research. We now in the pace of starting wide dealer network to serve customers in urban as well as rural regions and we are thrilled to be a part of the quirky, eco-friendly wing of the E -Vehicle industry.</div>
                     
                    </div>

                    <div className='d-flex justify-content-between row flex-wrap-reverse py-3 px-6 align-items-center about-us-box1'>
                        <div className='container col-lg-7 col-md-5 col-sm-11 about-us-text mx-auto pt-4'>TEDI (INDIA) PRIVATE LIMITED, Company founded in 2008 has come a long way from its beginnings in Automotive Industry selling Safety and Security Products. When the company first started out, our passion for providing safer automobile industry drive us now to be more eco-friendly, providing the best equipment for the industry by doing intense research. We now in the pace of starting wide dealer network to serve customers in urban as well as rural regions and we are thrilled to be a part of the quirky, eco-friendly wing of the E -Vehicle industry.</div>
                        <img src='./about-us2.png' alt='' className='img-fluid col-lg-4 col-md-5 col-sm-5 py-5 mx-auto'></img>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutUs