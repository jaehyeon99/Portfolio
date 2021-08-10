import React from 'react';
import FadeIn from 'react-fade-in/lib/FadeIn';

function Head() {
    return (

        <div className="introduce">
            <FadeIn
                delay="800" >
                <div className="hello">
                    <h1>Hello I'm Jaehyeon Park <span className="hand">👋</span></h1>
                </div>
                <div className="my_role">
                    <img className="profile" src="https://img1.daumcdn.net/thumb/C428x428/?scode=mtistory2&fname=https%3A%2F%2Ftistory4.daumcdn.net%2Ftistory%2F4691630%2Fattach%2Fba273e597648456f9f2969a03883810c" alt="profile" />
                    <p> 안녕하세요 신입 프론트엔드 개발자 박재현입니다.</p>
                    <p>저는 배우는 것을 좋아하며 항상 자기계발을 통해 성장해나가고 있습니다.</p>
                </div>
            </FadeIn>

        </div>
    )
}

export default Head;