import React from "react";
import { NavLink } from "react-router-dom";
import Data from "../data.json";
import "../style.css";

function Home(props) {
  const info = props.match.params.info;
  const deatil1 = "Here are some data for your buissness studies";
  const deatil2 = "Here are some users' data for your analytical studies";
  return (
    <section className="home">
      <section className="head">
      <h1>Hello {info}</h1>
        <p>{info == "Buissness" ? deatil1 : deatil2}</p>
      </section>
      <section className="users">
        {Data.members.map(member => {
          return (
            <NavLink to={`/${info}/user/${member.id}`} key={member.id}>
              <section className="user">
                <img src={member.img} alt="" />
                <h3>{member.real_name}</h3>
                <label>Timezone</label>
                <p>{member.tz}</p>
              </section>
            </NavLink>
          );
        })}
      </section>
    </section>
  );
}
export default Home;
