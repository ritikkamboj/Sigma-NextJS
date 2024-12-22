import React from "react";

function About() {
  return (
    <div>
      <p className="text-xl"> We are in about page</p>
      <ul>
        <li>Full stck solution without knowing node or express</li>
        <li>File based routing is thhe biggest advantage </li>
      </ul>
    </div>
  );
}

export const metadata = {
  title: "About Page",
  description: "Now we are in About page ",
};

export default About;
