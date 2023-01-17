import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Portfolio.scss";

export const Portfolio: React.FC = () => {
    useEffect(() => {
        let elHeader = document.getElementById("header");
        if (elHeader) elHeader.className = "header-fixed";
    }, []);

    return (
        <section id="portfolio" className="fadeInUp">
            <div className="container">
                <div className="section-header">
                    <h2>Portfolio</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                    alt="CCL"
                                    width="249"
                                    height="47"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/ella-by-ccl">
                                        Everyday Leader Learning Assistant -
                                        ELLA
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    A mobile application that allows users of
                                    all levels to develop their leadership
                                    skills at their own pace &amp;
                                    schedule.&nbsp;
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/ella-by-ccl"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                    alt="CCL"
                                    width="249"
                                    height="47"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/ccl-lxd">
                                        Leadership By Design
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    A mobile application that allows users of
                                    all levels to develop their leadership
                                    skills at their own pace &amp;
                                    schedule.&nbsp;
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/ccl-lxd"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/4d5c65f5-142b-4e17-86c2-c156db934db2-snappulse_icon.png"
                                    alt="SnapPulse"
                                    height="75"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/snappulse" target="">
                                        SnapPulse
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Digital tool that allows leaders to set
                                    development goals and periodically "pulse"
                                    their colleagues for feedback on their
                                    progress
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/snappulse"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                    alt="CCL"
                                    width="249"
                                    height="47"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link
                                        to="/portfolio/delivery-support-tool"
                                        target=""
                                    >
                                        Delivery Support Tool
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Merges multiple, independent applications
                                    into a single online platform for managing
                                    multiple lines of business.&nbsp;
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/delivery-support-tool"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/f2d06441-a80e-44f5-88b1-63a7267c3251-CCL_CompassOverlay.png"
                                    alt="CCL Compass"
                                    width="200"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/ccl-compass" target="">
                                        CCL Compass
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Digital tool that distills and organizes
                                    more than 50 years of leadership expertise,
                                    creating personalized strategies that help
                                    leaders build on strengths and improve in
                                    areas of development.
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/ccl-compass"
                                    rel="noopener"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/939f8c34-34fd-453a-9cd9-13bee75f213d-gvr-logo.png"
                                    alt="Goode Vacation Rentals"
                                    width="200"
                                    height="54"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link
                                        to="/portfolio/goode-vacation-rentals"
                                        target=""
                                    >
                                        Goode Vacation Rentals
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Vacation rentals site in Hilton Head, SC.
                                    Built &amp; host custom website for
                                    displaying property information, searching
                                    availability, and taking online
                                    reservations.
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/goode-vacation-rentals"
                                    rel="noopener"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6 col-xl-4">
<div className="card mb-3">
<div className="card-header"><img style="float: left;" src="https://fallglobal.westoverchurch.com/img/ambition_logo.png" alt="CCL" height="50" /></div>
<div className="card-body m-1 p-2" >
<h5 className="card-title m-2"><Link to="https://fallglobal.westoverchurch.com/" target="_blank" rel="noopener">Fall Global Conference</Link></h5>
<p className="card-text">Custom site for Westover Church's annual global conference. Features public information and private users area for personalized conference schedule.</p>
</div>
<div className="card-footer text-right"><Link className="btn btn-outline-primary btn-sm" to="https://fallglobal.westoverchurch.com/" target="_blank" rel="noopener">Visit Site</Link></div>
                        </div></div> */}

                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                    alt="CCL"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/clavin" target="">
                                        Clavin Notification System
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Provides a common platform for sending
                                    emails, push notifications, &amp; SMS
                                    message for CCL applications. Features Azure
                                    service bus, Cosmos DB, &amp; REST API to
                                    create a robust, enterprise level
                                    notification system.
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/clavin"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/804589be-5c60-40a1-b63f-5273613b8bad-ccl-logo-header.png"
                                    alt="CCL"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/asset-store" target="">
                                        Asset Store
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Provides a common platform for securely
                                    storing and tracking participant assets
                                    (PDFs, audio/video files, etc.) for CCL
                                    applications. Features Azure blob storage,
                                    AES encryption, &amp; REST API to create a
                                    robust, enterprise level asset management
                                    system.
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/asset-store"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-4">
                        <div className="card mb-3">
                            <div className="card-header">
                                <img
                                    src="https://rameyroadeus01.blob.core.windows.net/rroad-piranha/bfb5b2b6-27f9-4cc9-aa38-af9c12bd8844-beyond415_logo.png"
                                    alt="Beyond415 logo"
                                    height="75"
                                />
                            </div>
                            <div className="card-body m-1 p-2">
                                <h5 className="card-title m-2">
                                    <Link to="/portfolio/beyond415" target="">
                                        Beyond415
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    Toolkit for IRS practice and procedure,
                                    featuring step-by-step instructions, sample
                                    documents and letters, and time and billing
                                    estimates for more than 50 individual tax
                                    issues.
                                </p>
                            </div>
                            <div className="card-footer text-right">
                                <Link
                                    className="btn btn-outline-primary btn-sm"
                                    to="/portfolio/beyond415"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
<div className="col-12">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
<ol className="carousel-indicators">
<li className="active" data-target="#carouselExampleIndicators" data-slide-to="0">&nbsp;</li>
<li className="" data-target="#carouselExampleIndicators" data-slide-to="1">&nbsp;</li>
<li className="" data-target="#carouselExampleIndicators" data-slide-to="2">&nbsp;</li>
</ol>
<div className="carousel-inner">
<div className="carousel-item active"><img className="d-block w-100" src="https://via.placeholder.com/728x360.png?text=First+Slide" alt="First slide" /></div>
<div className="carousel-item"><img className="d-block w-100" src="https://via.placeholder.com/728x360.png?text=Second+Slide" alt="Second slide" /></div>
<div className="carousel-item"><img className="d-block w-100" src="https://via.placeholder.com/728x360.png?text=Third+Slide" alt="Third slide" /></div>
</div>
<Link className="carousel-control-prev" role="button" to="#carouselExampleIndicators" data-slide="prev"> <span className="sr-only">Previous</span> </Link> <Link className="carousel-control-next" role="button" to="#carouselExampleIndicators" data-slide="next"> <span className="sr-only">Next</span> </Link></div>
<div>&nbsp;</div>
</div>
</div> */}
                </div>
            </div>
        </section>
    );
};
