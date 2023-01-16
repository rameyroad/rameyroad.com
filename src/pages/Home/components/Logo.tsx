import "./Logo.scss";

export const Logo: React.FC = () => {
    return (
        <section id="logo">
            <div className="logo-container wow fadeIn">
                <div className="row m-0">
                    <div className="col-12 text-center">
                        <img src="/img/logo_icon.png" style={{ width: "350px" }} />
                    </div>
                    <div className="col-12 text-center social-links">
                        <a target="_blank" href="#contact" className="scrollto">
                            <i className="fa fa-envelope"></i>
                        </a>
                        <a target="_blank" href="http://facebook.com/RameyRoad" className="facebook">
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a target="_blank" href="http://twitter.com/RameyRoad" className="twitter">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a target="_blank" href="http://www.linkedin.com/in/jmoore4" className="linkedin">
                            <i className="fa fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
