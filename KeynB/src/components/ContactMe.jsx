import React from 'react';

const ContactMe = () => {
  return (
    <section className="contact-section py-16 px-4 md:px-8 lg:px-16 text-center">
      <h2 data-aos="fade-up" className="text-4xl font-bold mb-8 text-white">Get in Touch</h2>
      <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="contact-details space-y-4">
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-white">
          Email: <a href="mailto:keynb50@gmail.com" className="text-purple-400 hover:underline">keynb50@gmail.com</a>
        </p>
        <p data-aos="fade-up" data-aos-delay="300" className="text-xl text-white">
          LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Keyn Brosdahl</a>
        </p>
        <p data-aos="fade-up" data-aos-delay="400" className="text-xl text-white">
          GitHub: <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Your GitHub Profile</a>
        </p>
        {/* You can add your phone number here if you wish, but it's often omitted for public portfolios */}
        {/* <p data-aos="fade-up" data-aos-delay="500" className="text-xl text-white">Phone: 573-397-8946</p> */}
      </div>
    </section>
  );
};

export default ContactMe;