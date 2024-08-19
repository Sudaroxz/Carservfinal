import React, { useState } from "react";

const Payment = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    totalAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shipping_address = {
      first_name: formData.fname,
      last_name: formData.lname,
      address: formData.address,
      email: formData.email,
      country: formData.country,
      state: formData.state,
      city: formData.city,
      postcode: formData.pincode,
      phone_number: formData.mobile,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    var options = {
      key: "rzp_test_vv1FCZvuDRF6lQ",
      key_secret: "P4JAUwn4VdE6xDLJ6p2Zy8RQ",
      amount: parseInt(formData.totalAmount) * 100,
      currency: "INR",
      name: "Web Mastery",
      description: "for testing purpose",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        console.log("payment id", paymentId, shipping_address);
        setFormData({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          address: "",
          country: "",
          city: "",
          state: "",
          pincode: "",
          totalAmount: "",
        });
      },
      theme: {
        color: "#07a291db",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-teal-600">
          Booking Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <input
                type="text"
                className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
                placeholder="First Name"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <input
                type="text"
                className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
                placeholder="Last Name"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <input
                type="email"
                className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-span-1">
              <input
                type="tel"
                className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
                placeholder="Mobile"
                name="mobile"
                minLength={10}
                maxLength={10}
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <input
            type="text"
            className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="form-control w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-teal-500"
            placeholder="Total Amount"
            name="totalAmount"
            value={formData.totalAmount}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded font-semibold w-full hover:bg-teal-700 transition duration-300"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
