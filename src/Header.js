import React, { Component } from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import SearchForm from "./Search/SearchForm";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header_icon"
            src="https://lh3.googleusercontent.com/tzWTeY_oGXzh71-rze0wNK0AIODtqSXBNzN1pwqEmfZepqtWRoKdK4-RTXIwiiqaH6V7SzpNxytXF7sWdMudbBh29DIzRuapaT2YkGcF6GTdaoSAbtWarWDvyHLkG9_CDqCRoEBTEbU=w2400"
            alt=""
          />
        </Link>

        <div className="header_center">
          <SearchForm />
        </div>

        <div className="header_right">
          <strong>Become a Tech Star 🚀</strong>
        </div>
      </div>
    );
  }
}

export default Header;
