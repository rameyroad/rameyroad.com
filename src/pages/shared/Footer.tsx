import { Fragment } from "react";

import "./Footer.scss";

export const Footer: React.FC = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>Ramey Road</strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
