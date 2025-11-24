import styled from 'styled-components';

export const ProjectStyle = styled.section`
    height: max-content;
    padding-bottom: 10rem;
    padding-top: 7.875rem;
    .button-wrap {
        margin-top: 6.27rem;

        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .project-box {
        &-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 1.25rem;
            width: 107.5rem;
            margin: 3rem auto;
        }
        padding: 1.25rem;
        box-sizing: border-box;
        width: 53.125rem;
        min-height: 33.25rem;
        border-radius: 1.25rem;
        display: flex;
        justify-content: space-between;
        .text-line {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            white-space: pre-line;
            max-width: 16.4rem;
            li {
                user-select: none;
                display: flex;
                flex-direction: column;
                gap: 0.62rem;
                h4 {
                    font-size: 0.99994rem;
                    font-weight: 500;
                }
            }
            p {
                font-size: 0.99994rem;
                font-weight: 300;
                &.project-title {
                    line-height: 1.2;
                }
            }
            .main-work {
                margin-top: 0.62rem;
                font-size: 0.8rem;
                font-weight: 400;
                line-height: 1.25rem;
                word-break: keep-all;
                margin-left: 0.6rem;
                position: relative;
                &:before {
                    position: absolute;
                    left: -0.6rem;
                    top: 0%;
                                        content: '•';
                }
                &-wrap {
                    width: 90%;
                }
            }
            .link {
                &-wrap {
                    margin-top: 0.62rem;
                    display: flex;
                    gap: 0.625rem;  
                    flex-direction: column;
                }
                flex:1;
                width: max-content;
                font-size: 0.89925rem;
                font-weight: 600;
                padding: 0.5rem 1.25rem;
                box-sizing: border-box;
                border-radius: 1.625rem;
                text-decoration: none;
                   transition: 0.5s ease;
                &:hover {
                 
                  filter: brightness(0.7);
                }
                &.figma {
                    background-color: #FF7262;
                    color: ${({ theme }) => theme.subWhite};
                }
                &.github {
                }
                &.deploy {
                }
            }
            .tool {
                &-wrap {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.7rem;
                    width: 16.5625rem;
                }
                width: 2.8125rem;
                height: 2.8125rem;
                padding: 0.3125rem;
                border-radius: 0.25rem;
                /* box-sizing: border-box; */
                img {
                    width: 100%;
                }
            }
        }
    }
    .img-line {
        width: 33.625rem;
        background-color: yellow;
        position: relative;
        overflow: hidden;
        border-radius: 1.25rem;
        img {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            &:first-child {
                width: 150%;
                z-index: 1;
                
                
            }
            &:last-child {
                
                   filter: blur(1rem) brightness(0.7);
                object-fit: cover;
            }
            
        }
    }
`;
