import styled from 'styled-components';

export const VisualStyle = styled.section`
    width: 100%;
    height: 20rem;
    min-width: 100rem;
    user-select: none;
.text-effect-size{
    transition: 0.2s ease;
    &:hover{
        
        font-weight: 400;
    }
}
    .visual-title {
        margin-top: 19rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        font-size: 8rem;
        font-weight: 700;
    }
    strong {
        padding-top: 1rem;
        font-size: 3rem;
        font-weight: 700;
    }
`;
