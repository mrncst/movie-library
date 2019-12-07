import React from "react";
import { NavLink } from "react-router-dom";

const LateralMenu = () => {
  return (
    <div className="LateralMenu">
      <img
        className="LateralMenu-logo"
        src={require("../images/oculos.svg")}
        alt="Logo"
      />
      <h2>DISCOVER</h2>
      <NavLink to="/discover/popular" activeClassName="bm-selected">
        <img
          className="LateralMenu-icon"
          src={require("../images/fire.svg")}
          alt="Popular Icon"
        />
        Trending
      </NavLink>
      <NavLink to="/discover/surprise-me" activeClassName="bm-selected">
        <img
          className="LateralMenu-icon"
          src={require("../images/gift.svg")}
          alt="Surprise Icon"
        />
        Surprise Me
      </NavLink>
      <h2>GENRES</h2>
      <NavLink to="/genres/action" activeClassName="LateralMenu-selected">
        Action
      </NavLink>
      <NavLink to="/genres/animation" activeClassName="LateralMenu-selected">
        Animation
      </NavLink>
      <NavLink to="/genres/comedy" activeClassName="LateralMenu-selected">
        Comedy
      </NavLink>
      <NavLink to="/genres/crime" activeClassName="LateralMenu-selected">
        Crime
      </NavLink>
      <NavLink to="/genres/drama" activeClassName="LateralMenu-selected">
        Drama
      </NavLink>
      <NavLink to="/genres/family" activeClassName="LateralMenu-selected">
        Family
      </NavLink>
      <NavLink to="/genres/horror" activeClassName="LateralMenu-selected">
        Horror
      </NavLink>
      <NavLink to="/genres/music" activeClassName="LateralMenu-selected">
        Music
      </NavLink>
      <NavLink to="/genres/mystery" activeClassName="LateralMenu-selected">
        Mystery
      </NavLink>
      <NavLink to="/genres/romance" activeClassName="LateralMenu-selected">
        Romance
      </NavLink>
      <NavLink to="/genres/scifi" activeClassName="LateralMenu-selected">
        Sci-Fi
      </NavLink>
      <NavLink to="/genres/thriller" activeClassName="LateralMenu-selected">
        Thriller
      </NavLink>
      <NavLink to="/genres/war" activeClassName="LateralMenu-selected">
        War
      </NavLink>
    </div>
  );
};

export default LateralMenu;
