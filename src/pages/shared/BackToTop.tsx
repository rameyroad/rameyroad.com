import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./BackToTop.scss";

export const BackToTop: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    const scrollToTop = () => {
        let options: ScrollToOptions = {
            top: 0,
            behavior: "smooth",
        };
        window.scrollTo(options);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });

    return (
        <Fragment>
            <Link to="#" className={`back-to-top ${scrollPosition > 25 ? "shown" : ""}`} onClick={scrollToTop}>
                <i className="fa fa-angle-up"></i>
            </Link>
        </Fragment>
    );
};
