import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="container flex items-center justify-justify-around w-9/12 h-screen">
        <div className="flex flex-col mx-10">
          <h1 className="font-semibold text-4xl mb-5">Skills</h1>
          <table className="text-xl">
            <tr>
              <td className="pr-20">HTML</td>
              <td>CSS</td>
            </tr>
            <tr>
              <td>Javascript</td>
              <td>PHP</td>
            </tr>
            <tr>
              <td>React JS</td>
              <td>Python</td>
            </tr>
            <tr>
              <td>JAVA</td>
              <td>Node JS</td>
            </tr>
            <tr>
              <td>Spring Boot</td>
              <td>React Native</td>
            </tr>
            <tr>
              <td>Codeigniter</td>
              <td>Tailwindcss</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Skills;
