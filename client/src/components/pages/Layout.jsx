import { NavLink, Outlet } from "react-router-dom";

import Footer from "./Footer";
import ProfileIcon from "../custom/icons/ProfileIcon";
import HeartIcon from "../custom/icons/HeartIcon";
import CartIcon from "../custom/icons/CartIcon";

import styled from "styled-components";
const LayoutWrapper = styled.div`
  max-width: 116rem;
  height: 100vh;

  margin: 0 auto;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <TopNavbar />
      <Outlet />
      <Footer />
      <LowerNavbar />
    </LayoutWrapper>
  );
};

const TopNavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 1rem 2rem;

  .navbar--logo {
    flex-shrink: 0;

    display: grid;
    place-items: center;
  }

  .navbar--logo-text {
    flex-shrink: 0;

    font-size: var(--font-logo-sm);
    font-weight: 600;
  }

  .navbar--search {
    width: 100%;
    max-width: 50rem;
  }

  input {
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

const TopNavbar = () => {
  return (
    <TopNavbarWrapper>
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
    </TopNavbarWrapper>
  );
};

const LowerNavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  max-width: 49.5rem;
  height: 5.5rem;

  padding: 0 4rem;

  -webkit-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.41);

  transition: border-radius 0.2s;

  a {
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

const LowerNavbar = () => {
  return (
    <LowerNavbarWrapper>
      <NavLink to="/profile">
        <ProfileIcon stroke="var(--color-black)" />
      </NavLink>
      <NavLink to="/hearts">
        <HeartIcon stroke="var(--color-black)" />
      </NavLink>
      <NavLink to="/cart">
        <CartIcon stroke="var(--color-black)" />
      </NavLink>
    </LowerNavbarWrapper>
  );
};

export default Layout;
