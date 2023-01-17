import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import "./Portfolio.scss";

type ProjectParams = {
    projName: string;
};

export const Project: React.FC = () => {
    const { projName } = useParams<ProjectParams>();
    const [projContent, setProjContent] = useState<string>("");

    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";
    }, []);

    useEffect(() => {
        if (projName) {
            let contentUrl = `/projects/${projName}.html`;
            fetch(contentUrl)
                .then((res) => res.text())
                .then((text) => setProjContent(text));
        }
    }, [projName]);

    return (
        <section id="portfolio" className="fadeInUp">
            <div className="container">
                <div style={{ float: "right" }}>
                    <Link to="/portfolio">
                        <i className="fa fa-chevron-left"></i>&nbsp; Back to portfolio
                    </Link>
                </div>
                <div style={{ display: "block", clear: "both" }}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={projContent} />
                </div>
            </div>
        </section>
    );
};
