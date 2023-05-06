import React from "react";
import styled from "styled-components";

import logo from "./logo.png";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();

  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <h1>HRnet</h1>

      {location.pathname === "/employeelist" ? (
        <Link to="/" className="button">
          <FontAwesomeIcon icon={faUserPlus} />
          <span>Add employee</span>
        </Link>
      ) : (
        <Link to="/employeelist" className="button">
          <FontAwesomeIcon icon={faUser} />
          <span>Employee List</span>
        </Link>
      )}
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 1rem;
  background-color: white;

  @media (max-width: 850px) {
    width: 700px;
    margin-top: 0.5rem;
  }
  @media (max-width: 425px) {
    width: 100%;
  }

  img {
    height: 80px;
    object-fit: cover;
    @media (max-width: 850px) {
      height: 55px;
    }
    @media (max-width: 425px) {
      height: 45px;
    }
  }

  h1 {
    font-size: 36px;
    color: #6d7e1e;
    @media (max-width: 850px) {
      font-size: 24px;
    }
    @media (max-width: 425px) {
      font-size: 20px;
    }
  }

  .button {
    background-color: #6d7e1e;
    color: #ffffff;
    padding: 0.7rem;
    border-radius: 5px;
    font-family: "Montserrat", "Roboto", sans-serif;
    font-size: 18px;
    text-decoration: none;
    span {
      margin-left: 0.6rem;

      @media (max-width: 425px) {
        margin-left: 0.2rem;
      }
    }

    @media (max-width: 850px) {
      font-size: 14px;
      padding: 0.45rem;
    }
    @media (max-width: 425px) {
      font-size: 10px;
      padding: 0.27rem;
    }
  }
`;
