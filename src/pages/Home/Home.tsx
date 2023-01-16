import { Fragment } from "react";

import { Intro } from "./components/Intro";
import { Logo } from "./components/Logo";
import { About } from "./components/About";

import "./Home.scss";

export const Home: React.FC = () => {
    return (
        <Fragment>
            <Intro />
            <Logo />
            <About />
        </Fragment>
    );
};
