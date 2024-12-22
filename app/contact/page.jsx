import React from "react";
import Script from "next/script";

function Contact() {
  return (
    <div>
      <Script>{`alert("we are in contact page injecting our js ")`}</Script>
      This is the content of contact page{" "}
    </div>
  );
}

export const metadata = {
  title: "Contact Page",
  description: "Now we are in Contact page ",
};

export default Contact;
