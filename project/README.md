# Project 폴더

## 용도
카테고리(앱, 웹, 프로그램)별 프로젝트 목록 및 상세 내용(설명, 개인정보처리방침) 제공

## 구조
```
project/
├── index.html          # 메인 페이지 (사이드바 + 메인 콘텐츠)
├── css/project.css     # 와이어프레임 스타일 (흰 배경, 굵은 검정 테두리)
├── js/project.js       # 프로젝트 데이터 및 선택 로직
├── data/               # 프로젝트별 상세 콘텐츠
│   └── tictactoe-privacy.html  # 틱택토 온라인 개인정보처리방침
└── README.md
```

## 프로젝트 추가 방법
1. `js/project.js`의 `PROJECTS` 객체에 새 프로젝트 추가
2. 개인정보처리방침이 있으면 `data/{id}-privacy.html` 생성 후 `privacyPolicy` 경로 지정

## 카테고리
- **웹**: 웹/SaaS 프로젝트
- **앱**: 모바일 앱
- **프로그램**: 데스크톱 프로그램
