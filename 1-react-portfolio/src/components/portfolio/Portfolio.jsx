import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
    {
        id: 1,
        image: IMG1,
        title: "This is Portfolio Item Title",
        github: "https://github.com/",
        demo: "https://dribbble.com/",
    },
    {
        id: 2,
        image: IMG2,
        title: "This is Portfolio Item Title",
        github: "https://github.com/",
        demo: "https://dribbble.com/",
    },
    {
        id: 3,
        image: IMG3,
        title: "This is Portfolio Item Title",
        github: "https://github.com/",
        demo: "https://dribbble.com/",
    },
    {
        id: 4,
        image: IMG4,
        title: "This is Portfolio Item Title",
        github: "https://github.com/",
        demo: "https://dribbble.com/",
    },
    {
        id: 5,
        image: IMG5,
        title: "This is Portfolio Item Title",
        github: "https://github.com/",
        demo: "https://dribbble.com/",
    },
    {
        id: 6,
        image: IMG6,
        title: "This is Portfolio Item Title",
        github: "https://github.com/",
        demo: "https://dribbble.com/",
    },
];
export const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>portfolio</h2>

            <div className="portfolio__container container">
                {data.map(({id, image, title, github, demo}) => {
                    return (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={image} alt=""/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a rel="noreferrer" href={github} className="btn" target="_blank">Github</a>
                                <a rel="noreferrer" href={demo} className="btn btn-primary" target="_blank">Dribbble</a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};
