import React from 'react';
import Fade from 'react-reveal/Fade';



function Skils() {
    return (
        <div className="skil">
            <h2>I can do🤸‍♂️</h2>
            <div className="skillset">
                <Fade left>
                    <div className="skillbox">
                        <div className="skilbox_1">
                            <p><i class="fab fa-html5"></i><br />HTML5<br />90%</p>
                            <p><i class="fab fa-css3-alt"></i><br />CSS3<br />70%</p>
                            <p><i class="fab fa-js-square"></i><br />JS<br />65%</p>
                        </div>
                        <div className="skillbox_2">
                            <p><i class="fab fa-react"></i><br />React<br />60%</p>
                            <p><i class="fab fa-github-square"></i><br />Git<br />85%</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="code">
                        <i class="fas fa-code"></i>
                    </div>
                </Fade>
            </div>




        </div>

    )
}

export default Skils;