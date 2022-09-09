import React, { useState } from "react";
import Image from "next/image";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Biz bilen habarlaşmak üçin!!!</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <Image
            width={40}
            height={40}
            id="app__footer-img"
            src={images.email}
            alt="email"
          />
          <a
            style={{ margin: "0 0.7rem" }}
            href="mailto:iuhddevelopers@gmail.com"
            className="p-text"
          >
            iuhddevelopers@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <Image
            width={40}
            height={40}
            id="app__footer-img"
            src={images.mobile}
            alt="phone"
          />
          <a
            style={{ margin: "0 0.7rem" }}
            href="tel:+99363 98-94-04"
            className="p-text"
          >
            +99363 98-94-04
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Siziň adyňyz"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Siziň elektron poçta adresiňiz"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Siziň biz barada teswiriňiz"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Iber" : "Iberilýär..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Teswiriňiz üçin sag boluň!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "habarlaşmak üçin",
  "app__whitebg"
);
