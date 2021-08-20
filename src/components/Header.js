import React from 'react';
import { Link} from 'react-router-dom';
function Header() {
    return (
        <>
            <div className="nav">
                <div className="main">
                    <a href="/">&lt;Jaehyeon/&gt;</a>
                </div>

                <div className="menu">

                    <Link to="/AboutMe">About</Link>
                    <Link to="/Skils">Skil</Link>
                    <Link to="/Project">Project</Link>
                    <Link to="/Contact">Contact Me</Link>

                </div>

            </div>

        </>
    )
}

export default Header;