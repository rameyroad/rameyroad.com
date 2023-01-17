import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../../@types/project";
import { contentRoot } from "../../App";
import { getAllProjects } from "../../services/apiClient";

import "./Portfolio.scss";

export const Portfolio: React.FC = () => {
    const [allProjects, setAllProjects] = useState<Array<Project>>([]);

    const loadData = async () => {
        let pjs = await getAllProjects();
        let sorted = [...pjs].sort(
            (a: any, b: any) => a.sequenceNum - b.sequenceNum
        );
        setAllProjects(sorted);
    };

    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";

        loadData();
    }, []);

    return (
        <section id="portfolio" className="fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Portfolio</h2>
                </div>
                <div className="row">
                    {allProjects &&
                        allProjects.map((project: Project, index: number) => {
                            return (
                                <div className="col-12 col-md-6 col-xl-4">
                                    <div className="card mb-5">
                                        <div className="card-header text-center">
                                            <img
                                                src={project.imageUrl}
                                                alt={project.title}
                                                height="50"
                                            />
                                        </div>
                                        <div className="project-body card-body m-1 p-2">
                                            <h5 className="card-title m-2">
                                                <Link
                                                    to={`/portfolio/${project.id}`}
                                                >
                                                    {project.shortDescription}
                                                </Link>
                                            </h5>
                                            <p className="card-text">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="card-footer text-right">
                                            <Link
                                                className="btn btn-outline-primary btn-sm"
                                                to={`/portfolio/${project.id}`}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};
