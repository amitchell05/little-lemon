import "./Hero.scss";

import restaurantFood from "./assets/restaurantfood.jpg";

function Hero() {
    return (
        <article>
            <section>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>lorem</p>
                <button>Reserve a Table</button>
            </section>
            <section>
                <h2 className="visually-hidden">Hero Image</h2>
                <img src={restaurantFood} alt="Restaurant food on a serving tray" className="hero-image" />
            </section>
        </article>
    )
}

export default Hero;