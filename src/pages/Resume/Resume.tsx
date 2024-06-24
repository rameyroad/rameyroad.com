import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentRoot } from "../../App";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./Resume.scss";

type ResumeParams = {
    detailId: string;
};

export const Resume: React.FC = () => {
    const { detailId } = useParams<ResumeParams>();
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";
    }, []);

    useEffect(() => {
        if (detailId) {
            let contentUrl = `${contentRoot}/html/${detailId}.html`;
            fetch(contentUrl)
                .then((res) => res.text())
                .then((text) => setContent(text));
        }
    }, [detailId]);

    return (
        <section id="portfolio" className="fadeInUp">
            {detailId ? (
                <div className="container">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
                </div>
            ) : (
                <div className="container">
                    <div className="section-header">
                        <h2>Resume</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h2>Summary</h2>
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li>Full stack developer</li>
                                        <li>Expert at creating applications with .Net/.Net Core</li>
                                        <li>Expert in React.js/Native</li>
                                        <li>SQL Server, database design</li>
                                        <li>REST API design &amp; development</li>
                                        <li>jQuery/javascript, CSS, bootstrap, responsive UIs</li>
                                        <li>JSON, XML structured data transfer &amp; storage</li>
                                        <li>Enterprise Architecture</li>
                                    </ul>
                                </div>
                                <div className="col-6">
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
                                    src={`${contentRoot}/images/ccl-logo-header.png`}
                                    width="250"
                                />
                            </p>
                            <h4>
                                <a href="/resume/ccl">Lead Developer/Architect, Center for Creative Leadership</a>
                            </h4>
                            <p>
                                <strong>May 2013 - Present</strong>
                            </p>
                            <p>
                                On-site consultant providing design &amp; development for classroom &amp; coaching
                                technologies.
                                <br />
                                <br />
                                <a href="/resume/ccl" target="">
                                    Learn more
                                </a>
                                .
                            </p>
                            <h4>
                                <a href="/resume/jmit">Owner, JM IT Services, LLC</a>
                            </h4>
                            <p>
                                <strong>November, 2007 &ndash; Present</strong>
                            </p>
                            <p>
                                Provide independent software design and development and general IT consulting.
                                <br />
                                <br />
                                <a href="/resume/jmit">Learn more</a>.
                            </p>
                            <p>
                                <img
                                    style={{ padding: 15, float: "right" }}
                                    src={`${contentRoot}/images/newriverinnovation_logo.png`}
                                    width="250"
                                />
                            </p>
                            <h4>
                                <a href="/resume/nri">Lead Developer/Architect, New River Innovation</a>
                            </h4>
                            <p>
                                <strong>October 2009 - May 2013</strong>
                            </p>
                            <p>
                                Founding member and Lead Architect for Beyond415.com.
                                <br />
                                <br />
                                <a href="/resume/nri">Learn more</a>.
                            </p>
                            <h4>
                                <a href="/resume/effectur">Lead Web Developer/Architect, Effectur</a>
                            </h4>
                            <p>
                                <strong>September 2008 &ndash; September 2009</strong>
                            </p>
                            <p>
                                Developed software solutions for tax resolution services.
                                <br />
                                <br />
                                <a href="/resume/effectur" target="">
                                    Learn more
                                </a>
                                .
                            </p>
                            <p>
                                <img
                                    style={{ padding: 15, float: "right" }}
                                    src={`${contentRoot}/images/ccl-logo-header.png`}
                                    width="250"
                                />
                            </p>
                            <h4>
                                <a href="/resume/ccl" target="">
                                    Senior .Net Developer/Consultant
                                </a>
                            </h4>
                            <p>
                                <strong>August 2007 &ndash; September 2008</strong>
                            </p>
                            <p>
                                Developed web &amp; desktop applications for leadership development.
                                <br />
                                <br />
                                <a href="/resume/ccl" target="">
                                    Learn more
                                </a>
                                .
                            </p>
                            <p>
                                <img
                                    style={{ padding: 15, float: "right" }}
                                    src={`${contentRoot}/images/westover-logo.png`}
                                    width="250"
                                />
                            </p>
                            <h4>
                                <a href="/resume/westover">Webmaster/System Administrator, Westover Church</a>
                            </h4>
                            <p>
                                <strong>February, 2006 &ndash; April 2013</strong>
                            </p>
                            <p>
                                Developed &amp; maintained website and provided general IT strategies.
                                <br />
                                <br />
                                <a href="/resume/westover" target="">
                                    Learn more
                                </a>
                                .
                            </p>
                            <p>
                                <img
                                    style={{ padding: 15, float: "right" }}
                                    src={`${contentRoot}/images/gilbarco-logo.png`}
                                    width="250"
                                />
                            </p>
                            <h4>
                                <a href="/resume/gvr">Lead Engineer/Architecture Team Lead, Gilbarco Veeder-Root</a>
                            </h4>
                            <p>
                                <strong>September 2006 &ndash; August 2007</strong>
                            </p>
                            <p>
                                Lead developer &amp; architect for Passport retail automation system.
                                <br />
                                <br />
                                <a href="/resume/gvr">Learn more</a>.
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
                                <br />
                                <br />
                                <a href="/resume/gvr" target="">
                                    Learn more
                                </a>
                                .
                            </p>
                            <h4>
                                <a href="/resume/gvr" target="">
                                    Software Engineer/Project Lead, Gilbarco Veeder-Root
                                </a>
                            </h4>
                            <p>
                                <strong>August 1998 &ndash; January 2001</strong>
                            </p>
                            <p>
                                Senior developer for G-SITE retail automation system.
                                <br />
                                <br />
                                <a href="/resume/gvr" target="">
                                    Learn more
                                </a>
                                .
                            </p>
                            <div className="row">
                                <div className="col-12">
                                    <p>&nbsp;</p>
                                    <h4>
                                        <a href={`${contentRoot}/docs/Resume.pdf`} target="_blank" rel="noopener">
                                            Download as PDF
                                        </a>
                                    </h4>
                                    <h4>
                                        <a href={`${contentRoot}/docs/Resume.docx`} target="_blank" rel="noopener">
                                            Download as Word Document
                                        </a>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
