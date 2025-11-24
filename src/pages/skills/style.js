import styled from 'styled-components';

export const SkillsStyle = styled.section`
padding-top: 7.875rem;
    height: 67.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .button-wrap {
        margin-top: 6.27rem;

        display: flex;
        justify-content: center;
        gap: 20px;
    }
    .skill-icon-wrap {
        margin-top: 5.02rem;
        width: 63.125rem;
        display: flex;
        gap: 0.625rem;
        flex-wrap: wrap;
        user-select: none;
        .skill-icon-box {
            width: 10rem;
            height: 10rem;
            border-radius: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            &.blur {
                filter: blur(4px);
                pointer-events: none;
                user-select: none;
            }
           

            .img-wrap {
                width: 5.74713rem;
                height: 5.74713rem;
                margin-top: 1.25rem;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
            .text-line {
                text-align: center;
                height: 2.38544rem;
                font-size: 1.19275rem;
                font-weight: 400;
                margin-top: 0.5rem;
            }
        }
    }
`;
