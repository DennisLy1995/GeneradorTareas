import React, { Component } from "react";
import logoF from './icons/facebook.png';
import logoG from './icons/github-sign.png';
import logoL from './icons/linkedin.png';


class Footer extends React.Component {
    render() {
        return (

            <footer style={{ background: 'rgba(246, 251, 255,0.3)', textAlign: 'center', height:'10%' }} >
                <div className="container">

                    <div className="row">

                        <div className="col-md-12 py-5">
                            <div >

                                <a className="iconFooter">
                                    <img src={logoF} alt="Facebook" style={{ marginRight: '6%', width: '6%' }}></img>
                                </a>

                                <a className="iconFooter" href={"https://github.com/DennisLy1995/"}>
                                    <img src={logoG} alt="Github" style={{ marginRight: '6%', width: '6%' }}></img>
                                </a>

                                <a className="iconFooter" href={"https://github.com/DennisLy1995/"}>
                                    <img src={logoL} alt="Linkedin" style={{ marginRight: '6%', width: '6%' }}></img>
                                </a>
                                <div className="footer-copyright text-center py-3">© 2019 Copyright:
                        <a href="https://github.com/DennisLy1995/TasksGenerator"> DennisLy1995</a>
                            </div>
                            </div>
                            
                        </div>


                    </div>

                </div>

            </footer>

        );
    }

}

export default Footer;