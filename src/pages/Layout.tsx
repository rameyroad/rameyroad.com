import { Fragment } from "react";

import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";
import { BackToTop } from "./shared/BackToTop";

export const Layout: React.FC<any> = (props: any) => {
    return (
        <Fragment>
            <Header />
            <Fragment>{props.children}</Fragment>
            <Footer />
            <BackToTop />
        </Fragment>
    );
};
