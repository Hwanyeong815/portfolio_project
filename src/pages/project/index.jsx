import { useState } from 'react';
import { ProjectStyle } from './style';
import Title from '../../components/ui/Title';
import CategoryButton from '../../components/ui/CategoryButton';
import projectData from '../../assets/projectData';

const categories = ['All', 'React', 'HTML/CSS'];

const Project = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = projectData.filter((project) => {
        if (activeCategory === 'All') return true;
        return project.category === activeCategory;
    });

    return (
        <ProjectStyle className="bg-bg">
            <Title>Project</Title>

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

            <div className="project-box-wrap">
                {filteredProjects.map((project) => (
                    <div className="project-box bg-sW hover-shadow-sB" key={project.id}>
                        <ul className="text-line">
                            <li>
                                <h4>프로젝트 명</h4>
                                <p className="project-title">
                                    {project.title} 
                                    <br />
                                    ({project.type})
                                </p>
                            </li>

                            <li>
                                <h4>주요 업무</h4>
                                <ul className="main-work-wrap">
                                    {project.mainWorks.map((work, index) => (
                                        <li key={index} className="main-work">
                                            {work}
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li>
                                <h4>링크</h4>
                                <div className="link-wrap">
                                    {project.links.figma && (
                                        <a
                                            href={project.links.figma}
                                            className="link figma"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            기획서(Figma)
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a
                                            href={project.links.github}
                                            className="link github bg-sB text-sW"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.links.deploy && (
                                        <a
                                            href={project.links.deploy}
                                            className="link deploy bg-acc text-sW"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            배포링크
                                        </a>
                                    )}
                                </div>
                            </li>

                            <li>
                                <h4>사용 기술 및 도구</h4>
                                <ul className="tool-wrap">
                                    {project.tools.map((tool) => (
                                        <li className="tool bg-w" key={tool.name}>
                                            <img src={tool.icon} alt={tool.name} />
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li>
                                <h4>제작 기간</h4>
                                <p>{project.period}</p> 
                            </li>
                        </ul>

                        <ul className="img-line">
                            {project.thumbnail && (
                                <>
                                <img src={project.thumbnail} alt={project.title} />
                                <img src={project.thumbnail} alt={project.title} />
                                </>
                            )}
                        </ul>
                    </div>
                ))}
            </div>
        </ProjectStyle>
    );
};

export default Project;
