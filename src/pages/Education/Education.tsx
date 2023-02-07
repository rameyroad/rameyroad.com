import { useEffect } from "react";
import { Link } from "react-router-dom";
import { contentRoot } from "../../App";

import "./Education.scss";

export const Education: React.FC = () => {
    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";
    }, []);

    return (
        <section id="portfolio" className="fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Education</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>
                            <img
                                style={{ padding: 15, float: "right", maxWidth: "200px" }}
                                src={`${contentRoot}/images/UNCG_Spartans_logo.png`}
                            />
                        </p>
                        <h4>Master of Science - Information Systems &amp; Operations Management</h4>
                        <p>
                            Received MS degree from the
                            <a href="https://bryan.uncg.edu/" target="_blank" rel="noopener">
                                Bryan School of Business
                            </a>
                            at the University of North Carolina at Greensboro in August of 2005.
                        </p>
                        {/* <ul>
                            <li>Graduated summa cum laude (3.92/4.00)</li>
                            <li>Academic Excellence award for outstanding academic achievement</li>
                        </ul> */}
                    </div>
                    <div className="col-12">
                        <h4>
                            <img
                                style={{ padding: 15, float: "right", maxWidth: "200px" }}
                                src={`${contentRoot}/images/East_Tennessee_State_Buccaneers_logo.png`}
                            />
                        </h4>
                        <h4>Bachelor of Science - Computer Science</h4>
                        <p>
                            Received BS degree from
                            <a href="https://www.etsu.edu/cbat/computing/" target="_blank" rel="noopener">
                                East Tennessee State University
                            </a>
                            in August of 1998.
                        </p>
                        {/* <ul>
                            <li>Graduated cum laude (3.53/4.00)</li>
                            <li>Member of Upsilon Pi Epsilon Computer Science Honor Society</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
