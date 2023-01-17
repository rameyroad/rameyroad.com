import { useEffect } from "react";
import { Link } from "react-router-dom";

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
                                style={{ padding: 15, float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/ba4cbe0d-d040-4b04-bf91-a813fb2d30d9-UNCG_Spartans_logo.png"
                                width="178"
                                height="146"
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
                        <ul>
                            <li>Graduated summa cum laude (3.92/4.00)</li>
                            <li>Academic Excellence award for outstanding academic achievement</li>
                        </ul>
                    </div>
                    <div className="col-12">
                        <h4>
                            <img
                                style={{ padding: 15, float: "right" }}
                                src="/uploads/81b2b5e9-03a3-487a-ad1e-5a69969ae31f-East_Tennessee_State_Buccaneers_logo.png"
                                alt=""
                                width=""
                                height="200"
                            />
                        </h4>
                        <h4>Bachelor of Science - Computer Science</h4>
                        <p>
                            Received BS degree from
                            <a href="https://www.etsu.edu/cbat/computing/" target="_blank" rel="noopener">
                                East Tennessee State University
                            </a>
                            in August of 1998.
                            <img
                                style={{ float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/a1479d3c-14d8-4a79-b5e3-f05f8527e0f4-East_Tennessee_State_Buccaneers_logo.png"
                                width="150"
                                height="149"
                            />
                        </p>
                        <ul>
                            <li>Graduated cum laude (3.53/4.00)</li>
                            <li>Member of Upsilon Pi Epsilon Computer Science Honor Society</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
