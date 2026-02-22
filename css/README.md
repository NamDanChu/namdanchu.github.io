# CSS 폴더 구조

## 설계 원칙 (SOLID)
- **단일 책임**: 각 파일은 하나의 역할만 담당
- **응집도**: 관련 스타일을 함께 묶음
- **결합도**: 변수 기반으로 의존성 최소화

## 파일 구성
| 파일 | 용도 | 로드 순서 |
|------|------|-----------|
| variables.css | 전역 CSS 변수 (색상, 폰트) | 1 |
| reset.css | 브라우저 리셋, base 스타일 | 2 |
| layout.css | 헤더, 섹션, 그리드 | 3 |
| components.css | 버튼, 카드, 링크 등 | 4 |
| main.css | 메인 페이지 전용 | main.html |
| developer.css | 개발자 페이지 전용 | developer/*.html |

## 새 페이지 추가 시
1. main.css 또는 developer.css를 참고하여 새 CSS 파일 생성
2. 필요한 파일만 @import (variables, reset, layout, components)
3. 페이지 전용 스타일만 추가
