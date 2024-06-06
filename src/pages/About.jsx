import React from 'react';
import Layout from '../layout/Layout';
import './about.css';


const About = ({setRoute}) => {
  return (
    <Layout setRoute={setRoute}>
      <div className="container1">
        <div className="text-container-about">
          <h2>About our platform</h2>
          <p>Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:</p>
          <p>
            Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
          </p>
        </div>
        <div className="image-container-about">
          <img className="image1" src="https://s3-alpha-sig.figma.com/img/031d/ee8a/d390261e0a59354a086f7e9a9be4cb3b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lxZD825bhQLhhLrUCyLA6QoM49e9vwOGpmWZitYEczHguc71uhDSm7~LoHiSIwcMbBItPI0QXP2il-lnKLhSyMm5x4Z2H8vi0yPEOTsOKZvp48YM-S2atlZkPFQntgZxeQD5El2G8W1RzOeQTV0G52vXgD4yezqtFq-WK0TcY9qDSspGZYLodsYqduCKtkFPlcSOZwEsYY5QeMyR3LUyderalkDP7AgCipW4ShwWw-jIZ7-EYV45DKSSF-nT39Tgt1HkPqHkKojH72feoYs9I5b4uh7PLxJDPok4PCC3ZiLyAmi0I8UrblCfo8BoEjiF50OiZH3fTSwgenBpI7yO0g__" alt="Business Statistics"  width={150}/>
        </div>
      </div>
    </Layout>
  );
};

export default About;
