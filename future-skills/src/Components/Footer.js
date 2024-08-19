import React from 'react';
import logo from '../assets/logo.png';

function Footer() {
  return (
    <footer className="bg-black text-white p-8 mt-12 rounded-b-2xl">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <h3 className="font-bold">Abstract</h3>
          <p>Branches</p>
        </div>
        <div>
          <h3 className="font-bold">Resources</h3>
          <p>Blog</p>
          <p>Help Center</p>
          <p>Release Notes</p>
          <p>Status</p>
        </div>
        <div>
          <h3 className="font-bold">Community</h3>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Dribbble</p>
          <p>Podcast</p>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Legal</p>
          <h3 className="font-bold mt-8">Contact Us</h3>
          <p>info@abstract.com</p>
        </div> 
        <div className="flex flex-col mt-16"> 
          <img src={logo} alt="Logo" className="h-8 w-8" />
          <p >&copy; Copyright 2022</p> 
          <p>Abstract Studio Design, Inc.</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
