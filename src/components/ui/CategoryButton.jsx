import React from 'react';
import { CategoryButtonStyle } from './style';

const CategoryButton = ({ children,isActive, onClick }) => {
    return <CategoryButtonStyle onClick={onClick} className={isActive ? 'on' : ''}>{children}</CategoryButtonStyle>;
};

export default CategoryButton;
