// src/common/Header/style.js
import styled from 'styled-components';

export const HeaderStyle = styled.header`
    width: 100%;
    min-width: 100rem;
    height: ${({ isScrolled }) => (isScrolled ? '5rem' : '7.875rem')};
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid ${({ theme }) => theme.subBlack};

    /* 스크롤 시 50% 투명 / 기본(최상단)에서는 완전 불투명 */
    background-color: ${({ theme, isScrolled }) =>
        isScrolled ? `${theme.subBlack}90` : theme.subBlack};
    

    /* 블러 효과 */
    backdrop-filter: ${({ isScrolled }) => (isScrolled ? 'blur(10px)' : 'none')};

    /* 부드러운 애니메이션 */
    transition: 0.25s ease;
      

    /* 🔥 마우스 hover하면 언제나 원래 크기 & 불투명 */
    &:hover {
        height: 7.875rem;
        background-color: ${({ theme }) => theme.subBlack};
        backdrop-filter: none;
    }

    nav {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            gap: 12.5rem;

            li {
                font-size: 2.5rem;
                font-weight: 300;
                color: ${({ theme }) => theme.subWhite};
                cursor: pointer;
                transition:
                    color 0.25s ease,
                    font-weight 0.25s ease,
                    transform 0.25s ease;

                &:hover {
                    font-weight: 600;
                    /* color: ${({ theme }) => theme.accent}; */
                    transform: translateY(-2px);
                }
            }
        }
    }
`;
