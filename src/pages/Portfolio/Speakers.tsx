import { useEffect } from "react";

import "./Portfolio.scss";

import project1 from "../../assets/projects/1.jpg";
import project2 from "../../assets/projects/2.jpg";
import project3 from "../../assets/projects/3.jpg";
import project4 from "../../assets/projects/4.jpg";
import project5 from "../../assets/projects/5.jpg";
import project6 from "../../assets/projects/6.jpg";

export const Portfolio: React.FC = () => {
    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";
    }, []);

    return (
        <section id="speakers" className="fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Event Speakers</h2>
                    <p>Here are some of our speakers</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                            <img src={project1} alt="Speaker 1" className="img-fluid" />
                            <div className="details">
                                <h3>
                                    <a href="speaker-details.html">Brenden Legros</a>
                                </h3>
                                <p>Quas alias incidunt</p>
                                <div className="social">
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                            <img src={project2} alt="Speaker 2" className="img-fluid" />
                            <div className="details">
                                <h3>
                                    <a href="speaker-details.html">Hubert Hirthe</a>
                                </h3>
                                <p>Consequuntur odio aut</p>
                                <div className="social">
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                            <img src={project3} alt="Speaker 3" className="img-fluid" />
                            <div className="details">
                                <h3>
                                    <a href="speaker-details.html">Cole Emmerich</a>
                                </h3>
                                <p>Fugiat laborum et</p>
                                <div className="social">
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                            <img src={project4} alt="Speaker 4" className="img-fluid" />
                            <div className="details">
                                <h3>
                                    <a href="speaker-details.html">Jack Christiansen</a>
                                </h3>
                                <p>Debitis iure vero</p>
                                <div className="social">
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                            <img src={project5} alt="Speaker 5" className="img-fluid" />
                            <div className="details">
                                <h3>
                                    <a href="speaker-details.html">Alejandrin Littel</a>
                                </h3>
                                <p>Qui molestiae natus</p>
                                <div className="social">
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="speaker">
                            <img src={project6} alt="Speaker 6" className="img-fluid" />
                            <div className="details">
                                <h3>
                                    <a href="speaker-details.html">Willow Trantow</a>
                                </h3>
                                <p>Non autem dicta</p>
                                <div className="social">
                                    <a href="">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
