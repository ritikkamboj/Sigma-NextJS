"use client";
import React, { useRef } from "react";
import { handleAction } from "./action/form";

function page() {
  // handleAction();
  const ref = useRef();
  return (
    <div>
      <form
        ref={ref}
        action={(e) => {
          handleAction(e);
          ref.current.reset();
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input className="text-black" name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input className="text-black" name="add" id="add" type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default page;
