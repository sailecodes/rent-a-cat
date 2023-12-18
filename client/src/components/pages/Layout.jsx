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

    .navbar--links a {
      font-size: var(--font-nav-lg);
    }

    input {
      height: var(--input-height-lg);

      font-size: var(--font-text-lg);
    }
  }

  @media (min-width: 670px) {
    flex-direction: row;
    justify-content: space-between;

    .navbar--search {
      width: 40rem;
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
  position: fixed;
  bottom: 0;
`;

const LowerNavbar = () => {
  return (
    <LowerNavbarWrapper>
      <div></div>
    </LowerNavbarWrapper>
  );
};

export default Layout;
