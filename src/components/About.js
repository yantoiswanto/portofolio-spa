import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <div className="container flex items-center justify-justify-around w-9/12 h-screen">
        <div className="flex flex-col mx-10">
          <h1 className="font-semibold text-4xl mb-5">About</h1>
          <p>
            Et commodo enim aliquip et reprehenderit ad fugiat laboris. Cillum
            dolore elit adipisicing sunt in ut nulla enim qui est incididunt
            incididunt excepteur. Nulla qui irure aute pariatur dolore id tempor
            in. Ut duis ex veniam incididunt commodo deserunt Lorem ad. Mollit
            aute consequat esse enim consequat ut in ut. Reprehenderit deserunt
            veniam labore commodo elit labore aute duis consectetur excepteur
            duis. Enim magna qui eiusmod adipisicing id esse laborum proident
            veniam eu Lorem.
          </p>
          <div className="flex justify-start items-center space-x-2 mt-3">
            <NavLink to="https://github.com/yantoiswanto">
              <div className="border-green-700 border-2 w-10 h-10 rounded-full justify-center flex items-center hover:shadow-xl">
                <FaGithubAlt className="w-6 h-6 hover:shadow-xl " />
              </div>
            </NavLink>
            <NavLink to="https://github.com/yantoiswanto">
              <div className="border-green-700 border-2 w-10 h-10 rounded-full justify-center flex items-center hover:shadow-xl">
                <FaLinkedinIn
                  className="w-6 h-6 hover:shadow-xl"
                  style={{ color: 'blue' }}
                />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
