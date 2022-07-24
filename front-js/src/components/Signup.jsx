import React, { useEffect, useRef } from "react";
import axios from "../axios";
import { ethers } from "ethers";
function Signup({ signed }) {
  const name = useRef(null);
  const pswd = useRef(null);
  const pkey = useRef(null);

  const signup = async () => {
    let _name = name.current.value;
    let _pswd = pswd.current.value;
    let _pkey = pkey.current.value;
    let res = await axios.post("/signup", {
      name: _name,
      pswd: _pswd,
      pkey: _pkey,
      isCreator: document.getElementById("creator").checked,
      isConsumer: document.getElementById("consumer").checked,
    });
    let res_json = await res.data;
    if (res_json.error == 0) {
      signed(true, _pkey);
    } else if (res_json.error == 1) {
      alert("User name exists");
      name.current.value = "";
      pswd.current.value = "";
      pkey.current.value = "";
    }
  };
  return (
    <div className="m-4">
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Signup
          </h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                name="name"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Name"
                ref={name}
              />
            </div>
            <div className="my-3">
              <input
                name="pswd"
                type="password"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Password"
                ref={pswd}
              />
            </div>
            <div className="my-3">
              <input
                name="pkey"
                type="password"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Public key"
                ref={pkey}
              />
            </div>
          </div>
          <h3 className="text-gray-700">Creator</h3>
          <input type="checkbox" name="creator" id="creator" />
          <h3 className="text-gray-700">consumer</h3>
          <input type="checkbox" name="consumer" id="consumer" />
        </main>
        <footer className="p-4">
          <button
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            onClick={signup}
          >
            Login
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Signup;
