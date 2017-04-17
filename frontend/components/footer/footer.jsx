import React from 'react';
import ReactDOM from 'react-dom';

const Footer = () => {
  return (
    <footer>
      <div className='wrapper'>
        <div className='seperator padded'>
          <div className='col-2'>
            <select>
              <option>English</option>
              <option>Espaniol</option>
              <option>French</option>
            </select>
            <select>
              <option>INR</option>
            </select>
          </div>
          <div className='col-1 first'>
            <h3>Company</h3>
            <ul className="list-layout">
              <li><a href="#" className="link-contrast">About</a></li>
              <li><a href="#" className="link-contrast">Press</a></li>
              <li><a href="#" className="link-contrast">Help</a></li>
              <li><a href="#" className="link-contrast">Policies</a></li>
              <li><a href="#" className="link-contrast">Disaster Response</a></li>
              <li><a href="#" className="link-contrast">Terms &amp; Privacy</a></li>
            </ul>
          </div>
          <div className='col-1'>
            <h3>Discover</h3>
            <ul className="list-layout">
              <li><a href="#" className="link-contrast">Trust &amp; Safety</a></li>
              <li><a href="#" className="link-contrast">Travel Credit</a></li>
              <li><a href="#" className="link-contrast">Gift Cards</a></li>
              <li><a href="#" className="link-contrast">Eatbnb Picks</a></li>
              <li><a href="#" className="link-contrast">Mobile</a></li>
            </ul>
          </div>
          <div className='col-1'>
            <h3>Hosting</h3>
            <ul className="list-layout">
              <li><a href="#" className="link-contrast">Why Host</a></li>
              <li><a href="#" className="link-contrast">Hospitality</a></li>
              <li><a href="#" className="link-contrast">Responsible Hosting</a></li>
              <li><a href="#" className="link-contrast">Home Safety</a></li>
              <li><a href="#" className="link-contrast">Instant Book</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
