import { NavLink, Outlet } from "react-router-dom";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import Footer from "./Footer";
import ProfileIcon from "../custom/icons/ProfileIcon";
import HeartIcon from "../custom/icons/HeartIcon";
import CartIcon from "../custom/icons/CartIcon";

import styled from "styled-components";
import CategoriesIcon from "../custom/icons/CategoriesIcon";
const LayoutWrapper = styled.div`
  max-width: 116rem;
  height: 100svh;

  margin: 0 auto;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <SocialsNavBar />
      <MainNavbar />
      <CategoriesNavbar />
      <Outlet />
      <Footer />
      <BottomNavbar />
    </LayoutWrapper>
  );
};

const SocialNavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 1rem 2rem;

  border-bottom: 1px solid var(--color-border);

  a {
    display: grid;
    place-items: center;
  }

  p {
    color: var(--color-gray);

    font-size: 1.5rem;
    text-align: center;
  }

  .fa-icon:hover {
    cursor: pointer;
  }
`;

const SocialsNavBar = () => {
  return (
    <SocialNavbarWrapper>
      <a
        href="https://www.linkedin.com/in/elias-roman-38440028b/"
        target="_blank"
        rel="noopener noreferrer">
        <FaLinkedin
          size={25}
          color="gray"
          className="fa-icon"
        />
      </a>
      <a
        href="https://github.com/sailecodes"
        target="_blank"
        rel="noopener noreferrer">
        <FaGithubSquare
          size={25}
          color="gray"
          className="fa-icon"
        />
      </a>
    </SocialNavbarWrapper>
  );
};

const MainNavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem 2rem;

  border-bottom: 1px solid var(--color-border);

  .navbar--logo {
    flex-shrink: 0;

    display: grid;
    place-items: center;
  }

  .navbar--logo-text {
    flex-shrink: 0;

    font-family: "Silkscreen", sans-serif;
    font-size: var(--font-logo-sm);
    font-weight: 600;
  }

  .navbar--search {
    width: 100%;
    max-width: 50rem;
  }

  input {
    color: var(--color-gray);

    height: var(--input-height-sm);
    width: 100%;

    font-size: var(--font-text-sm);

    padding: 0 2rem;

    border: 1px solid var(--color-border);
    border-radius: 8px;
  }

  .navbar--links {
    display: none;
  }

  @media (min-width: 490px) {
    .navbar--logo-text {
      font-size: var(--font-logo-lg);
    }

    input {
      height: var(--input-height-lg);

      font-size: var(--font-text-lg);
    }
  }

  @media (min-width: 670px) {
    flex-direction: row;
    gap: 5rem;

    .navbar--search {
      flex-shrink: 1;

      max-width: 60rem;

      margin-left: auto;
    }
  }

  @media (min-width: 1024px) {
    justify-content: space-between;

    .navbar--search {
      margin-left: 0;
    }

    .navbar--links {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;
    }

    .navbar--links a {
      display: grid;
      place-items: center;
    }

    .navbar--links svg {
      height: var(--svg-height);
      width: var(--svg-height);
    }
  }
`;

const MainNavbar = () => {
  return (
    <MainNavbarWrapper>
      <div className="navbar--logo">
        <p className="navbar--logo-text">Rent A Cat</p>
      </div>
      <div className="navbar--search">
        <input
          type="text"
          name="cat-search"
          placeholder="Search an adorable cat"
        />
      </div>
      <div className="navbar--links">
        <NavLink to="/profile">
          <ProfileIcon stroke="var(--color-black)" />
        </NavLink>
        <NavLink to="/hearts">
          <HeartIcon stroke="var(--color-black)" />
        </NavLink>
        <NavLink to="/cart">
          <CartIcon stroke="var(--color-black)" />
        </NavLink>
      </div>
    </MainNavbarWrapper>
  );
};

const CategoriesNavbarWrapper = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    height: 6.1rem;

    border-bottom: 1px solid var(--color-border);

    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      color: var(--color-black);

      font-size: var(--font-text-lg);
      font-weight: 500;
      text-transform: uppercase;
    }

    a div {
      width: 0rem;

      border-bottom: 1px solid var(--color-black);

      transition: width 0.3s;
    }

    a:hover div {
      width: 100%;
    }
  }
`;

const CategoriesNavbar = () => {
  return (
    <CategoriesNavbarWrapper>
      <NavLink>
        Home
        <div></div>
      </NavLink>
      <NavLink>
        Baby Kittens
        <div></div>
      </NavLink>
      <NavLink>
        Growing Teens
        <div></div>
      </NavLink>
      <NavLink>
        Happy adults
        <div></div>
      </NavLink>
      <NavLink>
        Cute Oldies
        <div></div>
      </NavLink>
    </CategoriesNavbarWrapper>
  );
};

const BottomNavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  background-color: var(--color-white);

  width: 100%;
  max-width: 49.5rem;
  height: 5rem;

  padding: 0 4rem;

  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.41);

  transition: border-radius 0.2s;

  a,
  button {
    display: grid;
    place-items: center;
  }

  svg {
    width: var(--svg-height);
  }

  @media (min-width: 490px) {
    border-radius: 8px 8px 0 0;

    .navbar--logo-text {
      font-size: var(--font-logo-lg);
    }

    input {
      height: var(--input-height-lg);

      font-size: var(--font-text-lg);
    }
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

const BottomNavbar = () => {
  return (
    <BottomNavbarWrapper>
      <NavLink to="/profile">
        <ProfileIcon stroke="var(--color-black)" />
      </NavLink>
      <NavLink to="/hearts">
        <HeartIcon stroke="var(--color-black)" />
      </NavLink>
      <NavLink to="/cart">
        <CartIcon stroke="var(--color-black)" />
      </NavLink>
      <button>
        <CategoriesIcon stroke="var(--color-black)" />
      </button>
    </BottomNavbarWrapper>
  );
};

export default Layout;
