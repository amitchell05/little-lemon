import "./About.scss";

import MarioAndAdrianA from "../assets/Mario and Adrian A.jpg";
import MarioAndAdrianB from "../assets/Mario and Adrian B.jpg";

function About() {
    return (
        <section>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <img src={ MarioAndAdrianA } alt="Mario and Adrian" className="about-image" />
            <img src={ MarioAndAdrianB } alt="Mario and Adrian" className="about-image" />
        </section>
    );
}

export default About;
