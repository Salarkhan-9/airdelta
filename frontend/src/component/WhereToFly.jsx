import "./MyCSS.css";
// import TicketDetails from './TicketDetails';
import React, { useState } from 'react';
import CheckBooking from './CheckBooking'; // Import CheckBooking component

const WhereToFly = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    passport: '',
    age: '',
    gender: '',
    departureAirport: '',
    arrivalAirport: '',
    departureDate: '',
    returnDate: '',
    email: '',
    phone: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions on form submission (if needed)
    console.log('Form submitted:', formData);
  };

  return (
  
    <div className="container text-light">
      <div>
        <video
          src="src\component\Images\innerview.mp4"
          width="100%"
          height="auto"
          autoPlay
          loop // Add loop attribute to make the video loop continuously
          muted // Mute the video
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "0",
            left: "0",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <video
          src="src\component\Images\germanWing.mp4"
          width="100%"
          height="auto"
          autoPlay
          loop // Add loop attribute to make the video loop continuously
          muted // Mute the video
          style={{
            position: "absolute",
            zIndex: "-1",
            top: "710px",
            left: "0",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <br />         <br />


        <div className="row">
          <div className="col-md text-center ">
            <h4>Details for Ticket Reservation</h4>
          </div>
         </div>
         <br />
        <br />

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <form 
           className="row g-2 text-dark"
                     onSubmit={handleSubmit}
                     style={{
                       backgroundColor: "rgba(255, 255, 255, 0.7)",
                       padding: "50px",
                       borderRadius: "30px",
                     }}
          
          
          >
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="passport" className="form-label">
              Passport No.
            </label>
            <input
              type="text"
              className="form-control"
              id="passport"
              value={formData.passport}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              min="1"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="inputGender" className="form-label">
              Gender
            </label>
            <select
              id="inputGender"
              className="form-select"
              value={formData.inputGender}
              onChange={handleChange}
            >
              <option selected disabled>
                Choose...
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="departureAirport" className="form-label">
              Departure Airport
            </label>
            <select
              id="departureAirport"
              className="form-select"
              value={formData.departureAirport}
              onChange={handleChange}
            >
              <option selected disabled>
                Choose...
              </option>
              <option value="Dubai">Dubai</option>
              <option value="London">London</option>
              <option value="Mecca">Mecca</option>
              <option value="Karachi">Karachi</option>
              <option value="Gwader">Gwader</option>
              <option value="Skardu">Skardu</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
              <option value="Peshawer">Peshawer</option>

              <option value="Medina">Medina</option>
              <option value="Gilgit">Gilgit</option>
              <option value="Doha">London</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Baku">Baku</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="arrivalAirport" className="form-label">
              Arrival Airport
            </label>
            <select
              id="arrivalAirport"
              className="form-select"
              value={formData.arrivalAirport}
              onChange={handleChange}
            >
              <option selected disabled>
                Choose...
              </option>
              <option value="Dubai">Dubai</option>
              <option value="London">London</option>
              <option value="Mecca">Mecca</option>
              <option value="Karachi">Karachi</option>
              <option value="Gwader">Gwader</option>
              <option value="Skardu">Skardu</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Multan">Multan</option>
              <option value="Peshawer">Peshawer</option>

              <option value="Medina">Medina</option>
              <option value="Gilgit">Gilgit</option>
              <option value="Doha">London</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Baku">Baku</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="departureDate" className="form-label">
              Departure Date
            </label>
            <input
              type="date"
              className="form-control"
              id="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="returnDate" className="form-label">
              Return Date
            </label>
            <input
              type="date"
              className="form-control"
              id="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputStatus" className="form-label">
              Flight Status
            </label>
            <select
              id="inputStatus"
              className="form-select"
              value={formData.inputStatus}
              onChange={handleChange}
            >
              <option selected disabled>
                Choose...
              </option>
              <option>Domestic</option>
              <option>International</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={formData.inputAddress}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="example@mail.com"
              value={formData.inputEmail4}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-12"></div>

          <div className="col-12">   </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Confirm Ticket
            </button>
          </form>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <br /><br /><br /><br />
         
          {/* <CheckBooking formData={formData} /> */}
        </div>
      </div>
    </div>
  );
};

export default WhereToFly;

