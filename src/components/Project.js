import React from 'react';
import Fade from 'react-reveal/Fade';

function Project() {
    return (
        <div className="my_project">
            <h2>Project 💻</h2>
            <div className="pro_lists">
                <Fade left>
                    <div className="pro_1">

                        <h5>코로나 예방접종센터 위치정보 알리미</h5>
                        <h6>코로나 예방접종센터를 알려주는 웹페이지 </h6>
                        <p>사용 언어 <i class="fab fa-react"></i></p>

                    </div>
                </Fade>

                <Fade right>
                    <div className="pro_2">

                        <h5>날씨 정보 페이지</h5>
                        <h6>원하는 지역을 검색하여 날씨를 검색하는 웹페이지 </h6>
                        <p>사용 언어 <i class="fab fa-react"></i></p>

                    </div>
                </Fade>

                <Fade left>
                    <div className="pro_3">

                        <h5>영화 순위 정보 페이지</h5>
                        <h6>원하는 날짜를 검색하여 영화 순위를 검색하는 웹페이지</h6>
                        <p>사용 언어 <i class="fab fa-react"></i></p>

                    </div>
                </Fade>

                <Fade right>
                    <div className="pro_4">

                        <h5>MBTI로 알아보는 나와 닮은 동물</h5>
                        <h6>MBTI테스틀 통하여 만든 나와 닮은 동물 찾아보는 웹페이지</h6>
                        <p>사용 언어 <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-js-square"></i> </p>

                    </div>
                </Fade>
                <Fade left>

                    <div className="pro_5">

                        <h5>스타벅스 페이지 렌더링</h5>
                        <h6>스타벅스 페이지 클론 코딩</h6>
                        <p>사용 언어 <i class="fab fa-html5"></i> <i class="fab fa-css3-alt"></i> <i class="fab fa-js-square"></i> </p>

                    </div>
                </Fade>

            </div>
        </div>
    )
}

export default Project;