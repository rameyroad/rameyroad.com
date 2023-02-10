import { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ReactGA from "react-ga";

import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";
import { BackToTop } from "./shared/BackToTop";

export const Layout: React.FC<any> = (props: any) => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.initialize("353233475");
    }, []);

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location]);

    return (
        <Fragment>
            <div id="mainPage">
                <Header />
                <Fragment>{props.children}</Fragment>
            </div>
            <Footer />
            <BackToTop />
        </Fragment>
    );
};
