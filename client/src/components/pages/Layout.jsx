import { NavLink, Outlet } from "react-router-dom";

import styled from "styled-components";
import Footer from "./Footer";
const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 6.5rem 1fr 30rem;

  height: 100vh;
`;

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};

const NavbarWrapper = styled.nav`
  background-color: lightblue;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;

  .navbar--logo-text {
    font-size: var(--font-logo-sm);
    font-weight: 600;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  > div a {
    color: var(--color-text);

    font-size: var(--font-nav-sm);
    font-weight: 500;
  }

  @media (min-width: 490px) {
    .navbar--logo-text {
      font-size: var(--font-logo-lg);
    }

    > div a {
      font-size: var(--font-nav-lg);
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>
        <p className="navbar--logo-text">Rent A Cat</p>
      </div>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/gift"></NavLink>
        <NavLink to="/gift">Gift</NavLink>
      </div>
      <div>
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </NavbarWrapper>
  );
};

export default Layout;
