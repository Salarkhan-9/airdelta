import React, { useEffect, useState } from 'react';
// import { getApplicant } from '../Service/api';

const CheckBooking = () => {
    const [bookingDetails, setBookingDetails] = useState([]);

    useEffect(() => {
        fetchBookingDetails();
    }, []);

    const fetchBookingDetails = async () => {
        try {
            const result = await getApplicant(); // Assuming this API call fetches booking details
            setBookingDetails(result.data);
        } catch (error) {
            console.error('Error fetching booking details:', error);
        }
    };

    return (
        <div className='container'>
            <br /><br />
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
                <h4 className='text-dark'>Booking Details</h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>First Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>Passport</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Departure Airport</th>
                            <th scope='col'>Arrival Airport</th>
                            <th scope='col'>Departure Date</th>
                            <th scope='col'>Return Date</th>
                            <th scope='col'>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingDetails.map((details, index) => (
                            <tr key={index}>
                                <td>{details.firstName}</td>
                                <td>{details.lastName}</td>
                                <td>{details.passport}</td>
                                <td>{details.age}</td>
                                <td>{details.departureAirport}</td>
                                <td>{details.arrivalAirport}</td>
                                <td>{details.departureDate}</td>
                                <td>{details.returnDate}</td>
                                <td>{details.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br /><br /><br /><br />
            </div>
            <div className='col-md-2'></div>
        </div>
    </div>
       
    );
};

export default CheckBooking;









