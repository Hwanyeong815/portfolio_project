import { useState } from 'react';
import Title from '../../components/ui/Title';
import CategoryButton from '../../components/ui/CategoryButton';
import { SkillsStyle } from './style';

import skillData from '../../assets/skillData';

const categories = ['All', 'Design', 'Front-end', 'Collaboration', 'AI Tools', 'Media & Motion'];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    return (
        <SkillsStyle className="bg-bg">
            <Title>Skills</Title>

            {/* 버튼 */}
            <div className="button-wrap">
                {categories.map((label) => (
                    <CategoryButton
                        key={label}
                        onClick={() => setActiveCategory(label)}
                        isActive={activeCategory === label}
                    >
                        {label}
                    </CategoryButton>
                ))}
            </div>

            {/* 아이콘 */}
            <div className="skill-icon-wrap">
                {skillData.map((item) => {
                    const isBlur =
                        activeCategory !== 'All' && item.category !== activeCategory;

                    return (
                        <div
                            className={`skill-icon-box bg-w hover-shadow-sB ${isBlur ? 'blur' : ''}`}
                            key={item.name}
                        >
                            <div className="img-wrap ">
                                <img src={item.icon} alt={item.name} />
                            </div>
                            <p className="text-line text-b">{item.name}</p>
                        </div>
                    );
                })}
            </div>
        </SkillsStyle>
    );
};

export default Skills;
