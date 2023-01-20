import { Fragment } from "react";

import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";
import { BackToTop } from "./shared/BackToTop";

export const Layout: React.FC<any> = (props: any) => {
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
