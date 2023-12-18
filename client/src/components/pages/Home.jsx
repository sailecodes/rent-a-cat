import styled from "styled-components";
const HomeWrapper = styled.main`
  background-color: gray;

  display: grid;
  place-items: center;

  padding: 2rem;

  > div {
    background-color: green;

    /* max-width: 100rem; */

    height: 100%;
  }

  .home--hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;
  }

  .home--hero > div:nth-child(1) {
    width: 32rem;
  }

  .home--hero-tagline {
    font-size: var(--font-hero-tagline-sm);
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
  }

  .home--hero-description {
    font-size: var(--font-hero-description-sm);
    text-align: center;
  }

  .home--hero-tmp-pic {
    background-color: black;

    display: unset;

    width: 28rem;
    height: 28rem;
  }

  @media (min-width: 490px) {
    .home--hero > div:nth-child(1) {
      width: 45rem;
    }

    .home--hero-tagline {
      font-size: var(--font-hero-tagline-md);
    }

    .home--hero-description {
      font-size: var(--font-hero-description-md);
    }

    .home--hero-tmp-pic {
      width: 35rem;
      height: 35rem;
    }
  }

  @media (min-width: 650px) {
    .home--hero > div:nth-child(1) {
      width: 55rem;
    }

    .home--hero-tagline {
      font-size: var(--font-hero-tagline-md);
    }

    .home--hero-description {
      font-size: var(--font-hero-description-md);
    }
  }

  @media (min-width: 1024px) {
    .home--hero {
      display: flex;
      flex-direction: row;
    }

    .home--hero-tagline {
      font-size: var(--font-hero-tagline-md);
      text-align: left;
    }

    .home--hero-description {
      font-size: var(--font-hero-description-md);
      text-align: left;
    }
  }

  @media (min-width: 1160px) {
    .home--hero > div:nth-child(1) {
      width: 70rem;
    }

    .home--hero-tagline {
      font-size: var(--font-hero-tagline-lg);
    }

    .home--hero-description {
      font-size: var(--font-hero-description-lg);
    }

    .home--hero-tmp-pic {
      width: 40rem;
      height: 40rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section className="home--hero">
        <div>
          <p className="home--hero-tagline">Love cats? Rent a cat.</p>
          <p className="home--hero-description">
            Enjoy the company of cute cats to not only decrease your stress levels but also experience the cutest animal
            in the universe.
          </p>
        </div>
        <div className="home--hero-tmp-pic"></div>
        {/* <img src="" alt="" /> */}
      </section>
      <section className="home--cats"></section>
    </HomeWrapper>
  );
};
export default Home;
