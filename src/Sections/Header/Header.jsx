import React from 'react';

const menuLinks = [
  { id: 1, title: "About", path: "About" },
  { id: 2, title: "Contact", path: "Contact" },
  { id: 3, title: "Table", path: "Table" },
];

const Header = ({ setRoute }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__left">
            <a href="/" onClick={(e) => { e.preventDefault(); setRoute("About"); }}>
              <img
                src="https://play-lh.googleusercontent.com/uz1JnlkDF_nLArVvV6QTRyIhvVF6um8QzPPBnHdvqWT_TOxfkJP_Nfq0G9U5KkGk43iF"
                alt="logo"
                width={70}
              />
            </a>
            <ul className="header__right">
              {menuLinks.map((link) => (
                <li key={link.id}>
                  <button onClick={() => setRoute(link.path)}>{link.title}</button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
