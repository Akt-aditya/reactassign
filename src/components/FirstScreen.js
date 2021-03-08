import React from "react";
import { useHistory } from "react-router-dom";
import "../style.css";

const FirstScreen = () => {
  const history = useHistory();
  const handleChange = name => {
    history.push(`/${name}/home`);
  };

  return (
    <section className="firstscreen" >
      <h1>Who are you ?</h1>
      <div onClick={() => handleChange("Buissness")} >
        <span>A Buissness man looking for some data for study</span>
      </div>
      <div onClick={() => handleChange("Owner")}>
        <span>The owner looking for some analytics</span>
      </div>
    </section>
  );
};

export default FirstScreen;
