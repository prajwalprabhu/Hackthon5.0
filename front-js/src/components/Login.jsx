import React, { useEffect, useRef } from "react";
import axioss from "../axios";
import { ethers } from "ethers";
import axios from "axios";
function Login({ logged }) {
  const name = useRef(null);
  const pswd = useRef(null);
  const pkey = useRef(null);

  const login = async () => {
    let _name = name.current.value;
    let _pswd = pswd.current.value;
    let _pkey = pkey.current.value;
    let res = await axioss.post("/login", {
      name: _name,
      pswd: _pswd,
      pkey: _pkey,
    });
    let res_json = await res.data;
    if (res_json.error === 0) {
      logged(true, _pkey);
    } else if (res_json.error === 1) {
      logged(false);
    } else if (res_json.error === 2) {
      alert("Wrong password");
      pswd.current.value = "";
    }
  };

  return (
    <div className="m-4">
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            Login
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
        </main>
        <footer className="p-4">
          <button
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
            onClick={login}
          >
            Login
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Login;
