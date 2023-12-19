import HeartIcon from "../custom/icons/HeartIcon";
import kitten from "../../assets/imgs/kitten.jpg";
import oldie from "../../assets/imgs/oldie.jpeg";
import trending1 from "../../assets/imgs/trending-1.jpg";
import trending2 from "../../assets/imgs/trending-2.jpg";
import trending3 from "../../assets/imgs/trending-3.jpeg";
import trending4 from "../../assets/imgs/trending-4.jpg";

import styled from "styled-components";
const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;

  padding: 2rem;

  > div {
    height: 100%;
  }

  .home--hero {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    margin-bottom: 4rem;
  }

  .home--hero-text {
    width: 32rem;
  }

  .home--hero-tagline {
    font-size: var(--font-hero-tagline-sm);
    font-weight: 500;
    text-align: center;
    letter-spacing: -1px;
  }

  .home--hero-description {
    font-size: var(--font-text-sm);
    text-align: center;
  }

  .home--hero-tmp-pic {
    background-color: black;

    width: 28rem;
    height: 28rem;
  }

  .home--main-most-popular,
  .home--main-trending {
    margin-bottom: 4rem;
  }

  .home--main-most-popular > header,
  .home--main-trending > header,
  .home--main-new > header {
    font-size: var(--font-text-lg);
    font-weight: 500;
    text-align: center;
    text-transform: uppercase;

    margin-bottom: 2rem;
  }

  .home--main-trending-cats,
  .home--main-most-popular-cats {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  @media (min-width: 490px) {
    .home--hero-text {
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

    .home--main-most-popular-cats {
      gap: 2.5rem;
    }
  }

  @media (min-width: 670px) {
    .home--hero-text {
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

  @media (min-width: 1200px) {
    .home--hero-text {
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

    .home--main-most-popular {
      width: 100%;
    }

    .home--main-most-popular-cats {
      flex-direction: row;
      justify-content: space-between;
      gap: 3rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section className="home--hero">
        <div className="home--hero-text">
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
          <div className="home--main-most-popular-cats">
            <CatCard
              imgSrc={kitten}
              data={{
                name: "Asher",
                age: "1 month",
                tagline: "Cutie patootie",
                description: "A cutie patootie who runs around the house with a big smile on his face.",
                price: "$1/hour",
              }}
            />
            <CatCard
              imgSrc={oldie}
              data={{
                name: "Sunrise",
                age: "12 years",
                tagline: "Old but gold",
                description: "A slow oldie with a big heart and kind soul -- cuddle and love with care.",
                price: "$5/hour",
              }}
              isReversed={true}
            />
          </div>
        </div>
        <div>
          <div className="home--main-trending">
            <header>Trending supercats</header>
            <div className="home--main-trending-cats">
              <CatCard
                imgSrc={trending1}
                data={{
                  name: "Chonks",
                  age: "11 years",
                  tagline: "Grumpy softie",
                  description:
                    'The catification of "don\'t judge a book by its cover". Best prepare to rub his chonky belly 24/7, hence chonks.',
                  price: "$0.5/hour",
                }}
              />
              <CatCard
                imgSrc={trending2}
                data={{
                  name: "Night and Moon",
                  age: "9 and 10 months",
                  tagline: "The curios and chaotic duo",
                  description: "A pair of siblings with an endless amount of curiosity and chaos. Yes, you should.",
                  price: "$0.7/hour",
                }}
              />
              <CatCard
                imgSrc={trending3}
                data={{
                  name: "Sir Whiskers",
                  age: "4 years",
                  tagline: "Side-eye specialist",
                  description: "A cat that judges your every move with an impeccable side-eye.",
                  price: "$0.35/hour",
                }}
              />
              <CatCard
                imgSrc={trending4}
                data={{
                  name: "Teddy",
                  age: "3 months",
                  tagline: "Best cosplayer",
                  description:
                    "She can rock any outfit you give her. Needless to say, she's truly the best cosplayer in the cat universe, verified by us.",
                  price: "$0.8/hour",
                }}
              />
            </div>
          </div>
          <div className="home--main-new">
            <header>New lovelies</header>
            <div className="home--main-new-cats"></div>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
};

const CatCardWrapper = styled.div`
  position: relative;

  width: 25rem;
  /* height: 48rem; */

  border: 1px solid var(--color-border);
  border-radius: 8px;

  .cat-card--heart-btn {
    position: absolute;
    right: 2%;
    top: 53.3%;
  }

  .cat-card--heart-btn svg {
    fill: var(--color-white);

    height: var(--svg-height-sm);

    transition: fill 0.4s, stroke 0.1s;
  }

  .cat-card--heart-btn:hover svg {
    fill: var(--color-red);
    stroke: var(--color-red);
  }

  img {
    width: 25rem;
    height: 25rem;

    object-fit: cover;

    border-radius: 8px 8px 0 0;
  }

  .cat-card--info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
  }

  .cat-card--info > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .cat-card--info-name {
    font-size: 2rem;
    text-align: center;
  }

  .cat-card--info-age,
  .cat-card--info-price,
  .cat-card--info-tagline {
    font-size: 1.3rem;
  }

  .cat-card--info-tagline {
    margin-bottom: 1.5rem;
  }

  .cat-card--info-description {
    font-size: 1.2rem;
  }

  > div:last-child {
    display: grid;
    place-items: center;

    padding-bottom: 1.5rem;
  }

  .cat-card--info-rent-btn {
    width: 6.5rem;
    height: 2.5rem;

    font-size: 1.5rem;

    border: 1px solid var(--color-black);
    border-radius: 8px;

    transition: background-color 0.4s, color 0.3s;
  }

  .cat-card--info-rent-btn:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }

  @media (min-width: 490px) {
    width: min-content;
    /* height: 52.3rem; */

    .cat-card--heart-btn {
      position: absolute;
      right: 2%;
      top: 58.5%;
    }

    .cat-card--heart-btn svg {
      height: var(--svg-height);
    }

    img {
      width: 30rem;
      height: 30rem;
    }

    .cat-card--info-name {
      font-size: 2.3rem;
      text-align: center;
    }

    .cat-card--info-age,
    .cat-card--info-price,
    .cat-card--info-tagline {
      font-size: 1.4rem;
    }

    .cat-card--info-description {
      font-size: 1.3rem;
    }

    .cat-card--info-rent-btn {
      width: 7.3rem;
      height: 2.7rem;

      font-size: 1.6rem;
    }
  }

  @media (min-width: 670px) {
    display: flex;
    align-items: center;

    width: 60rem;
    /* height: 30rem; */

    &.reversed {
      flex-direction: row-reverse;
    }

    &.reversed .cat-card--heart-btn {
      position: absolute;
      left: 1.5%;
      right: unset;
    }

    &.reversed img {
      border-radius: 0 8px 8px 0;
    }

    .cat-card--heart-btn {
      position: absolute;
      right: 1.5%;
      top: 2.5%;
    }

    img {
      flex-shrink: 0;

      border-radius: 8px 0 0 8px;
    }
  }
`;

const CatCard = ({ imgSrc, data, isReversed }) => {
  return (
    <CatCardWrapper className={isReversed ? "reversed" : ""}>
      <button className="cat-card--heart-btn">
        <HeartIcon stroke="var(--color-red)" />
      </button>
      <img
        src={imgSrc}
        alt="Most popular kitten"
      />
      <div>
        <div className="cat-card--info">
          <p className="cat-card--info-name">{data.name}</p>
          <div>
            <p className="cat-card--info-age">{data.age}</p>
            <p className="cat-card--info-price">{data.price}</p>
          </div>
          <p className="cat-card--info-tagline">{data.tagline}</p>
          <p className="cat-card--info-description">{data.description}</p>
        </div>
        <div>
          <button className="cat-card--info-rent-btn">Rent</button>
        </div>
      </div>
    </CatCardWrapper>
  );
};

export default Home;
