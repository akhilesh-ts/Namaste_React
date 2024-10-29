import { Link } from "react-router-dom"

const About=()=>{

    return (
      <div className=" py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold  mb-4 text-orange-400">Our Mission</h1>
          <p className="text-lg text-gray-600">
            Our mission is to deliver fresh, delicious meals from the best local restaurants right to your doorstep, with speed and reliability.
          </p>
        </section>

        {/* Grid Section for Story, Services, and Commitment */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Story */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to make food delivery easy and accessible, our journey started with a simple idea: making fresh food available quickly. We’ve partnered with local restaurants to bring a variety of cuisines to your home, office, or wherever you are.
            </p>
          </div>

          {/* Services */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">What We Offer</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Wide variety of cuisines from top local restaurants</li>
              <li>Fast delivery with real-time tracking</li>
              <li>Simple and secure online payments</li>
              <li>User-friendly app interface for easy ordering</li>
            </ul>
          </div>

          {/* Commitment */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Our Commitment</h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to delivering only the highest quality meals by partnering with restaurants that prioritize fresh ingredients and food safety. Your satisfaction is our top priority.
            </p>
          </div>
        </section>

        {/* Grid Section for Customer Approach, Innovation, and Team */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Customer Approach */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Customer First</h2>
            <p className="text-gray-600 leading-relaxed">
              At the core of our services is our commitment to customer satisfaction. We offer 24/7 support, personalized meal recommendations, and a hassle-free return and refund policy to ensure your experience is seamless.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Innovation at Heart</h2>
            <p className="text-gray-600 leading-relaxed">
              We use the latest technology to ensure your food is delivered fast and efficiently, with AI-powered food recommendations and real-time tracking for all orders.
            </p>
          </div>

          {/* Team */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-orange-400 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 leading-relaxed">
              Our passionate team works hard to bring you the best possible food delivery experience. From our developers to customer support, we’re all focused on making your experience great.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">Ready to Order?</h2>
          <Link to="/"
          data-testid="get-started-button"
            className="inline-block px-6 py-3 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300"
          >
            Get Started
          </Link>
        </section>
      </div>
    </div>
    )
}

export default About