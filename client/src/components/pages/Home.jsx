import kitten from "../../assets/imgs/kitten.jpg";

import styled from "styled-components";
const HomeWrapper = styled.main`
  display: grid;
  place-items: center;

  padding: 2rem;

  > div {
    height: 100%;
  }

  .home--hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 2rem;

    margin-bottom: 4rem;
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

  .home--main-most-popular > header {
    font-size: var(--font-text-lg);
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 2rem;
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

  @media (min-width: 670px) {
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
      <section className="home--main">
        <div className="home--main-most-popular">
          <header>Most popular cuties</header>
          <div className="home-main-most-popular-cats">
            <CatCard
              data={{
                name: "Asher",
                age: "5 months",
                breed: "Cutie patootie",
                description: "A cutie patootie who runs around the house with a big smile on his face.",
                price: "$1/hour",
              }}
            />
          </div>
        </div>
        {/* <p className='home--main-trending'>Trending supercats</p> */}
        {/* <p className='home--main-trending'>Trending supercats</p> */}
      </section>
    </HomeWrapper>
  );
};

const CatCardWrapper = styled.div`
  height: 50rem;

  border: 1px solid var(--color-border);
  border-radius: 8px;

  width: 25rem;

  img {
    width: 25rem;
    height: 25rem;

    border-radius: 8px 8px 0 0;
  }

  .cat-card--info p {
    display: flex;

    font-size: var(--font-text-sm);
  }
`;

const CatCard = ({ data }) => {
  return (
    <CatCardWrapper>
      <img
        src={kitten}
        alt="Most popular kitten"
      />
      <div className="cat-card--info">
        <p>{"Name: " + data.name}</p>
        <p>{"Age: " + data.age}</p>
        <p>{"Breed: " + data.breed}</p>
        <p>{"Price: " + data.price}</p>
        <p>{data.description}</p>
      </div>
    </CatCardWrapper>
  );
};

export default Home;
