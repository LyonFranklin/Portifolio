import React from 'react'
import '../Contato/ContatoS.sass'

const Contato = () => {
  return (
    <div className="contact-us">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>Feel free to contact us any time. We will get back to you as soon as we can!</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">SEND</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Info</h2>
        <p><i className="fas fa-envelope"></i> info@getintouch.we</p>
        <p><i className="fas fa-phone"></i> +24 56 89 146</p>
        <p><i className="fas fa-map-marker-alt"></i> 14 Greenroad St.</p>
        <p><i className="fas fa-clock"></i> 09:00 - 18:00</p>
      </div>
    </div>
  );
};

export default Contato;