import React, { useState } from 'react';
import './BookingSection.css';





const black = require('../assets/scooter-black.png');
const red = require('../assets/scooter-red.png');
const scooter = { red, black }
const BookingSection = () => {

    const [selected, setSelected] = useState(scooter.red)
    return (
        <>
            <div className='container-fluid row px-0 mx-0'>
                <div className='text-center pt-5'><h1>BOOKING SECTION</h1></div>
                <div className='d-flex justify-content-between flex-wrap align-items-center'>
                    <div className='col-lg-5 col-md-4 col-sm-12'>
                        <img src={selected} alt='scooter' className='img-fluid' />
                    </div>
                    <div className='col-lg-2 col-md-4 col-sm-12 mx-auto'>
                        <div className="color-content d-flex flex-column ">
                           
                            <div className='mx-auto'>
                                <div className='text-center pt-5'><h4>ADD ON</h4></div>
                                <select className='dropdown bg-light mx-auto'>
                                    <option  value="coconut">Standard</option>
                                    <option value="grapefruit">Accessories Kit</option>

                                </select>
                            </div>
                            <div className='mx-auto'>
                                <div className='text-center pt-5'><h4>RANGE</h4></div>
                                <select className='dropdown mx-auto'>
                                    <option  value="coconut">110 Kms</option>
                                    <option value="grapefruit">125 Kms</option>
                                    <option value="grapefruit">150 Kms</option>
                                </select>
                            </div>
                            <div className='text-center  pt-5'><h4>Color</h4></div>
                            <div className="d-flex mx-auto py-5">
                                <button onClick={() => setSelected(scooter.black)} className="color bg-dark active-color"></button>
                                <button onClick={() => setSelected(scooter.red)} className="color bg-danger"></button>

                            </div>

                        </div>
                    </div>
                    <div className='coll-g-5 col-md-4 col-sm-12 bg-dark text-light p-5'>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder='First Name' />
                            </div>
                            <div className="col-md-6 ">
                                <label htmlFor="inputPassword4" className="form-label">Last Name</label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder='Last Name' />
                            </div>
                            <div className="col-12 text-center">
                                <label htmlFor="inputAddress" className="form-label">Email Id</label>
                                <input type="text" className="form-control" id="inputAddress" placeholder="eg: xyz@gmail.com" />
                            </div>
                            <div className="col-12 text-center">
                                <label htmlFor="inputAddress2" className="form-label ">Mobile Number</label>
                                <input type="text" className="form-control" id="inputAddress2" placeholder="" />
                            </div>


                            <div className="col-12 mx-auto d-flex justify-content-center">
                                <button type="submit" className="btn btn-light ">BOOK NOW</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingSection