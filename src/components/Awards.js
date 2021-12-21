import React, { Component } from 'react';

class Awards extends Component {
  render() {
    return (
      <div className="container flex items-center justify-justify-around w-9/12 h-screen">
        <div className="flex flex-col mx-10">
          <h1 className="font-semibold text-4xl mb-5">
            Awards & Certifications
          </h1>
          <ul className="list-disc list-inside">
            <li>Certifications Fundamental Python - Cisco & Kominfo</li>
            <li>Certifications React and React Native Basics - Hacktiv8</li>
            <li>Certifications UI/UX - Skilvul & Kominfo</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Awards;
