import React, { useState } from "react";
import Tag from "../Tag/Tag";
import "./Contact.css";

function Contact() {
  const title = "contact section";
  const [inputsValue, setInputsValue] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPassword: "",
  });

  function handleChangeInput(e) {
    setInputsValue({ ...inputsValue, [e.target.name]: e.target.value });
  }
  return (
    <div className="contact mb-3">
      <Tag title={title} />
      <form action="" className="p-3 mt-2 w-50 mx-auto ">
        <div className="name mb-4">
          <label
            htmlFor="user-name"
            className={`position-relative overflow-hidden ${
              inputsValue.userName ? "active" : ""
            } top-0 `}
          >
            userName:
          </label>
          <input
            type="text"
            id="user-name"
            name="userName"
            value={inputsValue.userName}
            placeholder={inputsValue.userName ? "" : "userName"}
            onChange={handleChangeInput}
            className="form-control border-0 border-bottom"
          />
        </div>

        <div className="age mb-4">
          <label
            htmlFor="user-age"
            className={`position-relative ${
              inputsValue.userAge ? "active" : ""
            } top-0 `}
          >
            userAge:
          </label>
          <input
            type="text"
            id="user-age"
            name="userAge"
            value={inputsValue.userAge}
            placeholder={inputsValue.userAge ? "" : "userAge"}
            onChange={handleChangeInput}
            className="form-control border-0 border-bottom "
          />
        </div>

        <div className="email mb-4">
          <label
            htmlFor="user-email"
            className={`position-relative ${
              inputsValue.userEmail ? "active" : ""
            } top-0 `}
          >
            userEmail:
          </label>
          <input
            type="text"
            id="user-email"
            name="userEmail"
            value={inputsValue.userEmail}
            placeholder={inputsValue.userEmail ? "" : "userEmail"}
            onChange={handleChangeInput}
            className="form-control border-0 border-bottom "
          />
        </div>

        <div className="password mb-4">
          <label
            htmlFor="user-password"
            className={`position-relative ${
              inputsValue.userPassword ? "active" : ""
            } top-0 `}
          >
            userPassword:
          </label>
          <input
            type="text"
            id="user-password"
            name="userPassword"
            value={inputsValue.userPassword}
            placeholder={inputsValue.userPassword ? "" : "userPassword"}
            onChange={handleChangeInput}
            className="form-control border-0 border-bottom "
          />
        </div>

        <button className="btn text-capitalize">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
