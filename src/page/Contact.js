import { useFormik } from "formik";
import { ContactForm } from "../schema/ContactForm";
import { useState } from "react";
import success from '../asset/success.gif'

const Contact = () => {

  const [isSuccess,setIsSuccess]=useState(false)

  const formik=useFormik({
    initialValues:{
     name:'',
     email:'',
     message:''
    },
    validationSchema:ContactForm,
    onSubmit:(values,{resetForm})=>{
      setIsSuccess(true)
      resetForm()
      
    }
  })

  const { errors, touched } = formik;

  return (

    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
    {/* Company Information Section */}
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-8">
      <h1 className="text-3xl font-bold text-orange-400 mb-4 text-center">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
      Welcome to <span className="text-orange-400">Hungry Nomad</span> , your trusted food delivery service. For over a decade, we’ve connected customers with top local restaurants, offering a wide range of meals from quick bites to gourmet dishes, delivered right to your door. We’re dedicated to making food ordering fast, easy, and reliable. Need help or have questions? Contact us, and we’ll be happy to assist!
      </p>
    </div>
  
    {/* Contact Form and Google Map Section */}
    <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-4xl space-y-6 md:space-y-0 md:space-x-6">
      {/* Contact Form */}
      {
isSuccess ?(
  <div  className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
    <div className="w-full flex items-center justify-center">
    <img data-testid="success-image" src={success} alt="" className="h-28" />
    </div>
     <p className="text-center">Thank you! Your submission was successful. We'll be in touch with you soon!</p>
    </div>
) :(
<div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Get in Touch</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4 " >
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
            data-testid="name"
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Name"
            />
            {errors.name && touched.name ? (
             <div className="text-red-500">{errors.name}</div>
           ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
            data-testid="email"
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Email"
            />
            {errors.email && touched.email ? (
             <div className="text-red-500">{errors.email}</div>
           ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
            data-testid="message"
              id="message"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Your Message"
              rows="4"
            ></textarea>
            {errors.message && touched.message ? (
             <div className="text-red-500">{errors.message}</div>
           ) : null}
          </div>
          <button
          
            type="submit"
            className="w-full py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
)
      }
      
  
      {/* Google Map */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2">
        <h2 className="text-2xl font-bold text-orange-400 mb-4">Our Location</h2>
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.634612423584!2d76.33262487479419!3d10.046979690060853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d6f3a60778b%3A0x810be95c9816e984!2sTinkerSpace!5e0!3m2!1sen!2sin!4v1727970636308!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          
        </div>
      </div>
    </div>
  </div>
                              
  );
};

export default Contact;

