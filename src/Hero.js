import "./Hero.scss";

import restaurantFood from "./assets/restaurantfood.jpg";

function Hero() {
    return (
        <article>
            <h2>Little Lemon</h2>
            <section>
                <h3>Chicago</h3>
                <p>lorem</p>
                <button>Reserve a Table</button>
            </section>
            <section>
                <h3 className="visually-hidden">Hero Image</h3>
                <img src={restaurantFood} alt="Restaurant food on a serving tray" className="hero-image" />
            </section>
        </article>
    )
}

export default Hero;