import styled from 'styled-components';
import React from 'react';
import Title from '../../components/ui/Title';
import aboutData from '../../assets/aboutData';
import { AboutStyle } from './style';

const About = () => {
    return (
        <AboutStyle className="bg-bg">
            <Title>About</Title>

            <h3 className="sub-title text-stan">
                비전공자지만, 프론트엔드 개발이 제 역량과 가장 잘 맞는다는 확신을 갖고 <br />
                꾸준히 실력을 쌓아가고 있습니다. <br />
                약 4년간의 영상 제작 경험을 통해 쌓은 시각적 감각과 표현력을 <br />
                UI·인터랙션 구현에 강점으로 활용하고 있습니다.
            </h3>

                       <article className="about-info-wrap">
                <div className="about-info intro">
                    <div className="about-info-title">
                        <h4 className="text-stan">{aboutData.intro.title}</h4>
                        <span className="bar  bg-stan"></span>
                    </div>

                    <div className="about-info-content">
                        {aboutData.intro.items.map((item, index) => (
                            <ul key={index}>
                                <li>{item.label}</li>
                                <li className="text-acc">{item.value}</li>
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="about-info education">
                    <div className="about-info-title">
                        <h4 className="text-stan">{aboutData.education.title}</h4>
                        <span className="bar  bg-stan"></span>
                    </div>

                    <div className="about-info-content">
                        <ul>
                            <li>{aboutData.education.school}</li>
                            <li>
                                {aboutData.education.period} | {aboutData.education.grade}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="about-info licenses">
                    <div className="about-info-title">
                        <h4 className="text-stan">{aboutData.licenses.title}</h4>
                        <span className="bar  bg-stan"></span>
                    </div>

                    <div className="about-info-content">
                        <ul>
                            {aboutData.licenses.list.map((cert, idx) => (
                                <li key={idx}>- {cert}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="about-info career">
                    <div className="about-info-title">
                        <h4 className="text-stan">{aboutData.career.title}</h4>
                        <span className="bar  bg-stan"></span>
                    </div>

                    <div className="about-info-content">
                        <ul>
                            <li>{aboutData.career.description}</li>
                        </ul>
                    </div>
                </div>
            </article>

         
        </AboutStyle>
    );
};

export default About;
