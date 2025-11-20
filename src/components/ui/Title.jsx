import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2`
    font-size: 3.75rem;
    font-weight: 700;
    text-align: center;
    margin-top: 2rem;

    &::before,
    &::after {
        font-size: 3.5rem;
        font-style: normal;
        font-weight: 400;
    }

    &::before {
        content: '<';
    }

    &::after {
        content: '/>';
    }
`;

const Title = ({ children }) => {
    return <TitleStyle className="text-stan">{children}</TitleStyle>;
};

export default Title;
