import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { Project } from "../../@types/project";
import { getAllProjects } from "../../services/apiClient";

import "./Portfolio.scss";

type ProjectParams = {
    projName: string;
};

export const ProjectDisplay: React.FC = () => {
    const { projName } = useParams<ProjectParams>();
    const [projContent, setProjContent] = useState<string>("");

    const [project, setProject] = useState<Project | undefined>();

    const loadData = async () => {
        let pjs = await getAllProjects();
        let project = pjs.find((p) => p.id === projName);
        setProject(project);
    };

    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";

        loadData();
    }, []);

    useEffect(() => {
        if (project) {
            fetch(project.contentUrl)
                .then((res) => res.text())
                .then((text) => setProjContent(text));
        }
    }, [project]);

    return (
        <section id="portfolio" className="fadeInUp">
            <div className="container">
                <div style={{ float: "right" }}>
                    <Link to="/portfolio">
                        <i className="fa fa-chevron-left"></i>&nbsp; Back to
                        portfolio
                    </Link>
                </div>
                <div style={{ display: "block", clear: "both" }}>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        children={projContent}
                    />
                </div>
            </div>
        </section>
    );
};
