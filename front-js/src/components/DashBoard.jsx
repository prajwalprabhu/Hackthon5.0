import React from "react";
import axios from "../axios";
async function DashBoard({ pkey }) {
  let res = await axios.get("/getdata", { pkey: pkey });
  let res_json = await res.data;
  return (
    <div className="m-4">
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <main className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">
            DahBoard
          </h1>
          <div className="my-3">
            <div type="text" name="name" className="my-3">
              res_json.name
            </div>
            <div className="my-3">
              <input
                name="pswd"
                type="password"
                className="input input-bordered block w-full focus:ring focus:outline-none"
                placeholder="Password"
              />
              {/* {res.json.files.map((img, id) => {
                <></>;
              })} */}
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

export default DashBoard;
