import styled from 'styled-components';

export const AboutStyle = styled.section`
user-select: none;
    .sub-title {
        margin-top: 3rem;
        font-size: 2.25rem;
        font-weight: 300;
        text-align: center;
        line-height: 1.2;
    }
    .about-info-wrap {
        margin: 15.12rem auto;
        display: flex;
        flex-wrap: wrap;
        row-gap: 3.2rem;
        justify-content: space-between;
        width: 107.9375rem;
        

        }
        .about-info {
            width: 53.125rem;
            
            display: flex;
            flex-direction: column;
            gap: 1.34rem;
            .about-info-title {
                display: flex;
                justify-content: space-between;
                gap: 0.62rem;
                align-items: center;

                h4 {
                    font-size: 2rem;
                    font-weight: 700;
                    margin-right: 0.5rem;
                    width: fit-content;
                }
                .bar {
                    flex: 1;
                    width: 100%;
                    height: 0.125rem;
                }
            }
            .about-info-content {
                ul {
                    li {
                        font-size: 1.5rem;
                        font-style: normal;
                        font-weight: 500;
                        margin-top: 1.69rem;
                    }
                }
            }
            &.intro {
                .about-info-content {
                    ul {
                        display: flex;
                        gap: 0.62rem;
                         li{
                        flex: 1;
                        &:last-child {
                            font-size: 1.5rem;
                            font-style: normal;
                            font-weight: 300;
                        }
                        
                    }
                      
                   }
            }

        }
    }
`;
