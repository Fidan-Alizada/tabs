import React from 'react';
import Layout from '../layout/Layout';
import './contact.css';

const Contact = ({setRoute}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Form submitted');
  };

  return (
    <Layout setRoute={setRoute}>
      <div className="container">
        <div className="contact-content">
          <div className="contact-container">
            <h1>Contact Us</h1>
            <p>
              We would love to hear from you! Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" placeholder="Your Message" required />
              </div>
              <button type="submit">Submit</button>
            </form>
            <div className="contact-info">
              <p>Email: <a href="mailto:info@test.com">info@test.com</a></p>
              <p>Phone: +994 (123)-456-78-90</p>
              <p>Address: Baku, Azerbaijan</p>
            </div>
          </div>
          <div className="image-container">
            <img className='image2'
              src="https://s3-alpha-sig.figma.com/img/eef3/6a48/1a33eb6dc13aa6b624105a5a5e591e72?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WuPRyl9aWJr3kaxd1WjOOlhJKYgzQb1fFKzeOaC~GaaW8RcMeQ~PRJa5VR96orruCD8ZLLUol~BY-RIGKdulOrNmtde-Bu9uSWsGF5~4maJ~B-UTs918kH5OGuBDdCtvbeVbpXRmJP1nnfH6E6iNdvWiX4hs5oiwXb~iif5ujmrzq4ohHwPQHpXBDWpm5axXyMuwHQTJVmW5VyT8TjaujKzhnfwDlEmZHGxGubY6PaP8E4I-g0uoE5ZN3YzwU2IC2whDhr4XEn9Dari5sD~347oepe05kFXo59Ip7HesFBNnrpFMQ0dlNYD-VUakE3~fXlGr7MGRHPp7e6Qca2lR5A__"
              alt="Business Statistics"
          
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

