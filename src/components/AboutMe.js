import React from 'react';
import Fade from 'react-reveal/Fade';

function AboutMe() {
    return (
        <div className="about">
            <h2>Profile 👨‍💻</h2>
            <Fade top>
                <h6>1999.07.21</h6>
                <h6>박재현</h6>
                <h6>동인천고등학교 졸업 (2015.03 - 2018.02)</h6>
                <h6>한양대학교Erica 캠퍼스 소프트웨어학부(2018.03 ~) </h6>
                <h6>육군 병장 만기전역(2020.03.02 - 2021.09.09)</h6>
            </Fade>
            <Fade bottom>
                <div className="wise">

                    <h6>기타가와 야스시의 (편지가게) 中 </h6>
                    <p>꿈을 이루지 못한 사람들은 "나는 재능이 없었어"라고 말한다.<br />
                        꿈을 이루지 못한 이유가 재능이 없었던 것이라면<br /> 꿈을 이룬 사람들은 모두 "재능이 있었다" 라고 대답하는 것이 맞겠지만<br />
                        성공한 사람들 중에 그런 대답을 한 사람은 한 명도 없다.<br />
                        꿈을 이룬 사람들은 "정말로 하고 싶었던 일을 열정을 가지고 계속했을 뿐이다"라고 말한다.</p>
                </div>
                <p>저는 항상 열정을 가지고 제 첫번째 목표인 프론트엔드 개발자를 넘어 최종 목표 풀스택 개발자가 되는 것입니다. <br />
                    위의 구절 처럼 끊임 없는 노력과 열정을 통해 정체되어 있지 않고 하루하루 발전해 나가는 개발자입니다.</p>
            </Fade>
        </div>
    )
}

export default AboutMe;