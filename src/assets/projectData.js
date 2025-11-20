

const projectData = [
    {
        id: 'road-on',
        title: '여행사 예약시스템 프로젝트',
        type: '팀프로젝트',
        category: 'React',
        period: '25.08.23 ~ 25.09.24', 
        links: {
            figma: 'https://www.figma.com/design/qID60mIwsf3lmhnAtpyo9o/%EB%A1%9C%EB%93%9C%EC%98%A8-%EA%B8%B0%ED%9A%8D%EC%84%9C?node-id=1-2593&p=f&t=OvmwRyMCAx8QSpnj-0',
            github: 'https://github.com/Hwanyeong815/RoadOn_Project',
            deploy: 'https://road-on-project-three.vercel.app/',
        },
        mainWorks: [
            'React 컴포넌트 아키텍처 설계 및 \n Zustand 기반 전역 상태 관리 시스템 구축',
            '마이페이지 UI/UX 설계 및 \n 반응형 레이아웃 구현',
            '메인페이지 성능 최적화 및 \n 코드 리팩토링을 통한 유지보수성 개선',
            '예약 내역, 찜 목록, 인증 등 \n 핵심 기능의 상태 관리 로직 구현 및 연동',
        ],
        tools: [
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Zustand', icon: '/icons/zustand.svg' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'SwiperJS', icon: '/icons/swiper.svg' },
            { name: 'sass', icon: '/icons/sass.svg' },
            { name: 'Styled-components', icon: '/icons/styled.svg' },
        ],
        thumbnail: '/thum-roadon.png',
    },

    {
        id: 'tohome-redesign',
        title: '이커머스 리디자인 프로젝트',
        type: '팀프로젝트',
        category: 'React',
        period: '25.07.31 ~ 25.08.22',
        links: {
            figma: 'https://www.figma.com/design/VJMMcXBJW2mZ42WjT8gl5H/4%EC%A1%B0_%ED%98%84%EB%8C%80%EC%8B%9D%ED%92%88%EA%B4%80-%ED%88%AC%ED%99%88_%EA%B8%B0%ED%9A%8D%EC%84%9C-%EC%A0%9C%EC%B6%9C%EC%9A%A9-?node-id=0-1&p=f&t=7j9Pr9RiQKPUxi5a-0',
            github: 'https://github.com/Hwanyeong815/tohome_redesign',
            deploy: 'https://tohome-redesign-pi.vercel.app/',
        },
        mainWorks: [
            '부팀장으로서 프로젝트 아키텍처 설계 및 데이터 구조 표준화 주도',
            '서브 페이지 UI/UX 기획 및 사용자 경험 개선안 제시',
            '회의록 작성 및 스프린트 단위 업무 분배를 통한 협업 효율화',
            '모바일 반응형 대응 및 크로스 브라우징 이슈 해결',
        ],
        tools: [
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'React', icon: '/icons/react.svg' },
            { name: 'Redux', icon: '/icons/redux.svg' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'SwiperJS', icon: '/icons/swiper.svg' },
            { name: 'sass', icon: '/icons/sass.svg' },
            { name: 'Styled-components', icon: '/icons/styled.svg' },
        ],
        thumbnail: '/thum-tohome.png',
    },

    {
        id: 'inu-redesign',
        title: '인천대학교 리디자인',
        type: '팀프로젝트',
        category: 'HTML/CSS',
        period: '25.05.10 ~ 25.06.09',
        links: {
            figma: 'https://www.figma.com/design/vIjwknzWlEWNCgv7zn6byA/2%EC%B0%A8-%EB%AF%B8%EB%8B%88-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9C%A0%ED%98%9C%EC%9C%A4--%EA%B0%95%ED%99%98%EC%98%81--%EB%AF%BC%EA%B2%BD%EB%AF%BC-%EA%B9%80%EC%A0%95%EC%9D%80-?node-id=372-259&p=f&t=y7H3xRbSJRMqt5vP-0',
            github: 'https://github.com/Hwanyeong815/inuProject',
            deploy: 'https://hwanyeong815.github.io/inuProject/',
        },
        mainWorks: [
            '프로젝트 일정 관리 및 팀원 간 커뮤니케이션 조율',
            '재사용 가능한 Header/Footer 컴포넌트 개발 및 공통 스타일 시스템 구축',
            '페이지 전반의 시각적 일관성 확립 및 접근성 개선 작업',
        ],
        tools: [
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'HTML', icon: '/icons/html.svg' },
            { name: 'CSS', icon: '/icons/css.svg' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'JavaScript', icon: '/icons/js.svg' },
        ],
        thumbnail: '/thum-inu.png',
    },

    {
        id: 'kimeye-redesign',
        title: '김안과 사이트 리디자인',
        type: '개인프로젝트',
        category: 'HTML/CSS',
        period: '25.07.05 ~ 25.07.31',
        links: {
            figma: 'https://www.figma.com/design/kSFsn64QO0f9G9qvUOtxRq/250707-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B82-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8--%EA%B0%9C%EC%9D%B8-?node-id=0-1&p=f&t=TUH6QWxbou5hdCHD-0',
            github: 'https://github.com/Hwanyeong815/kimeye_redesign',
            deploy: 'https://hwanyeong815.github.io/kimeye_redesign/',
        },
        mainWorks: [
            '사용자 동선 분석을 통한 게시판 구조 재설계 및 UI 개선',
            'sass 모듈화를 통한 컴포넌트 스타일 시스템 구축',
            '주요 레이아웃 리디자인 및 브랜드 아이덴티티 강화',
        ],
        tools: [
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'HTML', icon: '/icons/html.svg' },
            { name: 'sass', icon: '/icons/sass.svg' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'JavaScript', icon: '/icons/js.svg' },
        ],
        thumbnail: '/thum-kimeye.png',
    },

    {
        id: 'inis-redesign',
        title: '건강보험 사이트 리디자인',
        type: '개인프로젝트',
        category: 'HTML/CSS',
        period: '25.06.10 ~ 25.07.04',
        links: {
            figma: 'https://www.figma.com/design/cpSkTjW7fr8XuokZVR8IH0/250616-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A6%AC%EB%89%B4%EC%96%BC--%EA%B0%9C%EC%9D%B8-?node-id=0-1&p=f&t=3jIZQgVIUw7IQr2t-0',
            github: 'https://github.com/Hwanyeong815/inis_renewal',
            deploy: 'https://hwanyeong815.github.io/inis_renewal/',
        },
        mainWorks: [
            '복잡한 정보 구조의 시각적 위계 정립 및 UI 리디자인',
            'Vanilla JavaScript 기반 동적 필터링 시스템 구현',
            '마이크로 인터랙션 적용을 통한 사용자 경험 향상',
        ],
        tools: [
            { name: 'Figma', icon: '/icons/figma.svg' },
            { name: 'HTML', icon: '/icons/html.svg' },
            { name: 'CSS', icon: '/icons/css.svg' },
            { name: 'GSAP', icon: '/icons/gsap.svg' },
            { name: 'JavaScript', icon: '/icons/js.svg' },
        ],
        thumbnail: '/thum-inis.png',
    },
];

export default projectData;
