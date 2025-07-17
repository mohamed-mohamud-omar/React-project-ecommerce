import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const team = [
  { name: 'Maryan', role: 'CEO & Founder', img:  'https://i.pravatar.cc/150?u=mohamed'},
  { name: 'Sagal', role: 'Marketing Manager', img: 'https://i.pravatar.cc/150?u=sagal' },
  { name: 'Hanaan', role: 'Lead Designer', img: 'https://i.pravatar.cc/150?u=hanaan' },
  { name: 'Cimran', role: 'Customer Support', img: 'https://i.pravatar.cc/150?u=cimran' },
  { name: 'Mohamed', role: 'Logistics Coordinator', img: 'https://i.pravatar.cc/150?u=maryan' },
  { name: 'Naima', role: 'Content Creator', img: 'https://i.pravatar.cc/150?u=abdi' },
  { name: 'Abdi', role: 'Web Developer', img:  'https://i.pravatar.cc/150?u=naima'},
];

const About = () => {
  return (
    <div className="bg-[#f3f3f3] min-h-screen px-6 py-10">
      {/* Main section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-xl overflow-hidden">
        {/* Left image */}
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80"
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ABOUT US</h1>
          <p className="text-gray-700 text-base mb-4">
    Welcome to our online clothing store — your ultimate destination for modern, stylish, and affordable fashion. Whether you're looking for everyday wear, occasion outfits, or something unique to express yourself, we've got you covered.
          </p>
          <p className="text-gray-600 mb-4">
    Our mission is to provide quality clothing that blends comfort and style, delivered straight to your doorstep. With new arrivals every week and secure nationwide shipping, shopping for clothes has never been this easy and exciting.
          </p>

          {/* Social icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-gray-600 w-6 h-6" />
            <FaTwitter className="text-gray-600 w-6 h-6" />
            <FaInstagram className="text-gray-600 w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md flex flex-col items-center p-4"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-3"
              />
              <h3 className="text-lg font-medium text-gray-700">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
