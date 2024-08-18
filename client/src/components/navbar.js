import React from "react";
import './navbar.css'
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <div className="navlogo">
        Recipes.PK
      </div>
      <div className="navitems">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        <Link to="/saved-recipes">Saved Recipes</Link>
        {!cookies.access_token ? (
          <Link to="/auth">Login/Register</Link>
        ) : (
          <button className="btn" onClick={logout}> Logout </button>
        )}
      </div>
    </div>
  );
};
