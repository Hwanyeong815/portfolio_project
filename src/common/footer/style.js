import styled from "styled-components";

export const FooterStyle = styled.footer`
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.subWhite};`