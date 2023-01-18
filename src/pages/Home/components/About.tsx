import { Container } from "react-bootstrap";

import "./styles/About.scss";

export const About: React.FC = () => {
    return (
        <section id="about">
            <Container>
                <header className="section-header">
                    <h2 className="section-title">About Ramey Road</h2>
                </header>
                <div className="row">
                    <div className="col-12">
                        <blockquote>
                            <div className="row">
                                <div className="col-12 text-left">
                                    Two types of leaders: there are thinkers and there are <strong>doers</strong>. Some
                                    are idea generators and <strong>others are the implementers</strong>.
                                </div>
                                <div className="col-12 text-right">- Gary Rohrmayer</div>
                            </div>
                        </blockquote>
                    </div>
                    <div className="col-12 text-left">
                        <p>
                            Ramey Road is an independent software development and consulting company in central North
                            Carolina. The principal member, Jason Moore, has more than 20 years experience with software
                            design and architecture. I have designed and built web, mobile, server-side, and desktop
                            applications for the retail, educational, non-profit, real-estate, and financial services
                            industries.
                        </p>
                        <p>
                            I am a full-stack developer that primarily focuses on Microsoft technologies. I have
                            architected and built solutions for the full spectrum of organizations - from global
                            enterprises, to one-person operations. I love developing great ideas into great solutions.
                        </p>
                        <p>
                            Whether you are a small businesses or a large &amp; growing enterprise, I can help you
                            realize the ideas that take your business to the next level.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};
