import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Resume.scss";

export const Resume: React.FC = () => {
    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";
    }, []);

    return (
        <section id="portfolio" className="fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Resume</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2>Summary</h2>
                        <div className="row">
                            <div className="col-12">
                                <ul>
                                    <li>Expert at creating applications with .Net/.Net Core</li>
                                    <li>Full stack developer</li>
                                    <li>SQL Server, database design</li>
                                    <li>REST API design &amp; development</li>
                                    <li>jQuery/javascript, CSS, bootstrap, responsive UIs</li>
                                    <li>JSON, XML structured data transfer &amp; storage</li>
                                    <li>Enterprise Architecture</li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <ul>
                                    <li>Azure build &amp; deploy strategies</li>
                                    <li>Azure portal management</li>
                                    <li>Project management</li>
                                    <li>Team leader/mentor</li>
                                    <li>SCRUM/Agile methodologies</li>
                                    <li>Web services</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            <img
                                style={{ padding: 15, float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                width="250"
                            />
                        </p>
                        <h4>
                            <a href="/resume/center-for-creative-leadership">
                                Lead Developer/Architect, Center for Creative Leadership
                            </a>
                        </h4>
                        <p>
                            <strong>May 2013 - Present</strong>
                        </p>
                        <p>
                            On-site consultant providing design &amp; development for classroom &amp; coaching
                            technologies.
                            <a href="/resume/center-for-creative-leadership" target="">
                                Learn more
                            </a>
                            .
                        </p>
                        <h4>
                            <a href="/resume/jm-it-services-llc">Owner, JM IT Services, LLC</a>
                        </h4>
                        <p>
                            <strong>November, 2007 &ndash; Present</strong>
                        </p>
                        <p>
                            Provide independent software design and development and general IT consulting.
                            <a href="/resume/jm-it-services-llc">Learn more</a>.
                        </p>
                        <p>
                            <img
                                style={{ padding: 15, float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/4b040351-c121-4c62-b46e-8bd6f6dad973-newriverinnovation_logo.png"
                                width="250"
                            />
                        </p>
                        <h4>
                            <a href="/resume/new-river-innovation">Lead Developer/Architect, New River Innovation</a>
                        </h4>
                        <p>
                            <strong>October 2009 - May 2013</strong>
                        </p>
                        <p>
                            Founding member and Lead Architect for Beyond415.com.{" "}
                            <a href="/resume/new-river-innovation">Learn more</a>.
                        </p>
                        <h4>
                            <a href="/resume/effectur-inc">Lead Web Developer/Architect, Effectur</a>
                        </h4>
                        <p>
                            <strong>September 2008 &ndash; September 2009</strong>
                        </p>
                        <p>
                            Developed software solutions for tax resolution services.{" "}
                            <a href="/resume/effectur-inc" target="">
                                Learn more
                            </a>
                            .
                        </p>
                        <p>
                            <img
                                style={{ padding: 15, float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                width="250"
                            />
                        </p>
                        <h4>
                            <a href="/resume/center-for-creative-leadership" target="">
                                Senior .Net Developer/Consultant
                            </a>
                        </h4>
                        <p>
                            <strong>August 2007 &ndash; September 2008</strong>
                        </p>
                        <p>
                            Developed web &amp; desktop applications for leadership development.
                            <a href="/resume/center-for-creative-leadership">Learn more</a>.
                        </p>
                        <p>
                            <img
                                style={{ padding: 15, float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/30e133ca-ac5d-496a-a310-ba7e45f2ce57-westover-logo.png"
                                width="250"
                            />
                        </p>
                        <h4>&nbsp;</h4>
                        <h4>
                            <a href="/resume/westover-church">Webmaster/System Administrator, Westover Church</a>
                        </h4>
                        <p>
                            <strong>February, 2006 &ndash; April 2013</strong>
                        </p>
                        <p>
                            Developed &amp; maintained website and provided general IT strategies.{" "}
                            <a href="/resume/westover-church" target="">
                                Learn more
                            </a>
                            .
                        </p>
                        <p>
                            <img
                                style={{ padding: 15, float: "right" }}
                                src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/8ccff272-26ae-46c3-b54b-66811f6d7c04-gilbarco-logo.png"
                                width="250"
                            />
                        </p>
                        <h4>
                            <a href="/resume/gilbarco-veeder-root">
                                Lead Engineer/Architecture Team Lead, Gilbarco Veeder-Root
                            </a>
                        </h4>
                        <p>
                            <strong>September 2006 &ndash; August 2007</strong>
                        </p>
                        <p>
                            Lead developer &amp; architect for Passport retail automation system.{" "}
                            <a href="/resume/gilbarco-veeder-root">Learn more</a>.
                        </p>
                        <h4>
                            <a href="/resume/gilbarco-veeder-root" target="">
                                Senior Software Engineer, Gilbarco Veeder-Root
                            </a>
                        </h4>
                        <p>
                            <strong>February 2001 &ndash; August 2006</strong>
                        </p>
                        <p>
                            Senior developer for Passport retail automation system.
                            <a href="/resume/gilbarco-veeder-root" target="">
                                Learn more
                            </a>
                            .
                        </p>
                        <h4>
                            <a href="/resume/gilbarco-veeder-root" target="">
                                Software Engineer/Project Lead, Gilbarco Veeder-Root
                            </a>
                        </h4>
                        <p>
                            <strong>August 1998 &ndash; January 2001</strong>
                        </p>
                        <p>
                            Senior developer for G-SITE retail automation system.
                            <a href="/resume/gilbarco-veeder-root" target="">
                                Learn more
                            </a>
                            .
                        </p>
                        <div className="row">
                            <div className="col-12">
                                <p>&nbsp;</p>
                                <h4>
                                    <a
                                        href="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/b6232ae9-f805-4b51-acb6-51c31fcf0bd3-Resume.pdf"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Download as PDF
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
