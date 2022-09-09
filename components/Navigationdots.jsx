/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {[
      "baş sahypa",
      "biz barada",
      "işlerimiz",
      "ukyplarymyz",
      "habarlaşmak üçin",
      "teswirler",
    ].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: "#12743e" } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
