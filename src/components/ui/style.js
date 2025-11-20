import styled from 'styled-components';

export const ToggleStyle = styled.div`
    position: absolute;
    top: 40rem;
    right: 2rem;
    button {
        /* background-color: ${({ theme }) => theme.subBlack}; */
        border: none;
        cursor: pointer;
        width: 3.75rem;
        height: 3.75rem;    
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
            }
`;

export const TitleStyle = styled.h2`
    font-size: 72px;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;

    &::before {
        content: '<';
    }

    &::after {
        content: '/>';
    }
`;

export const CategoryButtonStyle = styled.button`
    padding: 0.5em 1.5em;
    /* border: 1px solid ${({ theme }) => theme.accent}; */
    border: none;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;

    &.on, &:hover {
        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.background};
    }
`;
