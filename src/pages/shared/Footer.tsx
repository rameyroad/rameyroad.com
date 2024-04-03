import { useRef } from "react";
import { useIsInViewport } from "../../hooks/useIsInViewport";

import "./Footer.scss";

export const Footer: React.FC = () => {
    const sectionRef = useRef<any>(null);
    const isInViewport = useIsInViewport(sectionRef);

    return (
        <footer id="footer" className={isInViewport ? "" : ""} ref={sectionRef}>
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong>Ramey Road, Inc.</strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    );
};
