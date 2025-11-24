import styled from 'styled-components';
import React from 'react';
import { VisualStyle } from './style';

const Visual = () => {
    return (
        <VisualStyle className="bg-bg">
            <div className="visual-title">
                <h2 className="text-stan">
                    안녕하세요, <span className="text-acc">강환영</span>입니다.
                </h2>
                <strong className="text-stan">
                    Hello, I`m&nbsp;
                    <span className="text-acc">Strong Welcome</span>.
                </strong>
            </div>  
        </VisualStyle>
    );
};

export default Visual;