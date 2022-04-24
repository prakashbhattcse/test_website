import React from 'react';
import './Contact.css';


const Contact = () => {
    return (
        <>
            <div className='container-fluid row py-5 contact'>
                <div className='col-lg-8  mx-auto  contact-inner'>
                    <div className='mx-auto display-2 text-center'><h1>Contact Us</h1></div>
                    <div className='row d-flex justify-content-between pt-5'>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
                            <div className='col-lg-12 col-md-12 col-sm-12 py-5'>
                                <h3>Email Us</h3>
                                <h5 className='pt-3'>info@tediev.com</h5>
                            </div>
                            <div className='col-lg-12 col-md-12 col-sm-12 py-4 px-4'>
                                <h3>Visit Us</h3>
                                <h5 className='pt-3'>Tedi India Pvt. Ltd.(Electric Vehicle Division).</h5>
                                <h5 className='pt-1 '>No: 190, North Usman Road, T. Nagar,
                                    Chennai, Tamil Nadu, India.
                                    Pincode– 600 017.</h5>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 mx-auto'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"   frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title='title' className='map mx-auto'></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact