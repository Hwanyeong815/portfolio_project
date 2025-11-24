import styled from 'styled-components';
import React from 'react';
import { VisualStyle } from './style';

const Visual = () => {
    return (
        <VisualStyle className="bg-bg">
            <div className="visual-title">
                <h2 className="text-stan ">
                    <span className='text-effect-size'>  안녕하세요, </span>
                    <span className="text-acc text-effect-size">강환영</span>
                    <span className="text-effect-size">입니다.</span>
                </h2>
                <strong className="text-stan">
                    <span className='text-effect-size'>Hello, I`m &nbsp;</span>
                                        <span className="text-acc text-effect-size">Strong Welcome</span>
                    <span className='text-effect-size'>.</span>
                    
                </strong>
            </div>  
        </VisualStyle>
    );
};

export default Visual;