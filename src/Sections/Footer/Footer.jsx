import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img
          src="https://first-react-project-gilt.vercel.app/assets/footerIcon-PUYEE3Zb.svg"
          alt="logo"
          height={50}
          width={50}
        />
        <div className="footer-column">
          <h3>Want to receive our awesome stories?</h3>
          <input type="text" placeholder="Your email" />
          <button>Subscribe</button>
          <p>info@test.com, All rights reserved.</p>
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Lead generation</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-links">
            <ul>
              <li>
                <a href="#">Customer engagement</a>
              </li>
              <li>
                <a href="#">Customer support</a>
              </li>
              <li>
                <a href="#">Help Center Articles</a>
              </li>
            </ul>
            <img src="https://i.pinimg.com/736x/16/88/da/1688da9bfe4e72c31601fd010dc46a2c.jpg" alt="logo" width={150} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
