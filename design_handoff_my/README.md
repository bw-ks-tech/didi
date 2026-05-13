# Handoff: My — 개인 정보 저장 사이트 (와이어프레임 단계)

## Overview
"My"는 한 사람이 자신의 정보를 한 곳에 모아 두는 개인용 저장소 웹사이트입니다.
저장 대상은 메모/일기, 비밀번호/계정, 할 일/목표, 사진/이미지, 문서/파일, 연락처, 가계부/지출, 건강 기록 — 8가지 카테고리입니다.

이 핸드오프는 **메인 홈 화면의 레이아웃 구조**를 4가지 방향으로 탐색한 와이어프레임입니다. 사용자가 방향을 정한 뒤 hi-fi 디자인으로 발전시키는 것이 다음 단계입니다.

## About the Design Files
이 번들의 파일들은 **HTML로 만든 디자인 레퍼런스(와이어프레임)** 입니다. 그대로 가져다 쓰는 프로덕션 코드가 아니라, 의도된 모양과 흐름을 보여주는 프로토타입입니다.
실제 구현 시에는 이 디자인을 **타깃 코드베이스의 기존 환경(React/Next.js/Vue 등)** 안에서, 그 코드베이스의 패턴/컴포넌트/디자인 토큰으로 재현하시면 됩니다. 환경이 아직 없다면 프로젝트 성격에 맞는 프레임워크를 자유롭게 선택하세요(개인 프로젝트라면 Next.js + Tailwind 권장).

## Fidelity
**Low-fidelity (와이어프레임)**.
- 손글씨 톤 폰트(Caveat / Gaegu)와 줄 placeholder, stripe 이미지 placeholder는 모두 *와이어프레임 vibe* 를 위한 장치입니다. 실제 hi-fi에서는 Pretendard 단일 패밀리 + 진짜 콘텐츠로 대체됩니다.
- 색상 팔레트와 카테고리 매핑, 정보 구조(IH), 화면별 영역 분할은 그대로 가져가셔도 됩니다.
- 픽셀 단위 spacing/typography는 hi-fi 단계에서 확정합니다.

## Screens / Views

### 0. 컨셉 카드 (Cover)
프로젝트 한 줄 요약 — 컨셉/타입/컬러/시안 목록. 실제 사이트 화면이 아닌 핸드오프용 표지.

### A. 히어로 + 카테고리 그리드 (Apple 결)
- **Purpose**: 첫 진입 시 "오늘 무엇을 기록할까?"라는 정서적 시작점 + 큰 검색.
- **Layout**:
  - 상단 nav (좌: 로고, 중: 메뉴 9개, 우: 검색 + 프로필)
  - Hero 영역: 날짜 → 큰 인사말(64px) → 부제 → 큰 검색바(560px) → 주변에 일러스트 squiggle 4개
  - 카테고리 그리드: 4×2, 8개 카드 (aspect-ratio 1.35:1, 카드 우상단에 카테고리 컬러 blob)
- **Components**:
  - `<TopNav>`, 글로벌 search pill, category card (label + count + arrow)
- **Tone**: 여백 많음, 중앙 정렬, 일러스트 포인트.

### B. 사이드바 + 대시보드 (Naver 결)
- **Purpose**: 정보 밀도가 높고 모든 카테고리에 1-clic 접근.
- **Layout**:
  - 좌측 220px 사이드바: 카테고리 9개 + 태그 칩
  - 메인: 상단 검색 → "📌 고정해 둔 것들" 4-card row → 하단 2 컬럼 (좌: 최근 항목 list, 우: 가계부 위젯 + 오늘 할 일)
- **Components**:
  - sidebar item (dot + label + count), pinned card, row item, mini bar chart, todo checklist

### C. 벤토 매거진 (하이브리드)
- **Purpose**: 한 화면에서 전 카테고리 요약을 보되, 크기로 중요도/색으로 카테고리를 표현.
- **Layout**:
  - 상단 인사말(좌) + 검색(우) inline
  - 12-column bento grid, row height 110px:
    - 메모(5×3, peach) / 사진(4×2, sage) / 할 일(3×2, butter)
    - 비밀번호(4×1, rose) / 가계부(3×1, sky) / 건강(4×1, lilac)
    - 문서(5×1) / 연락처(4×1) / Quick Add(3×1, dashed)
- **Tone**: Apple 여백 + Naver 밀도.

### D. 탭 + 타임라인
- **Purpose**: 시간 축으로 모든 정보가 꿰어지는 일기장 형태.
- **Layout**:
  - 상단 헤더 밴드(베이지): 인사말 + 빠른 추가 pill 4개 → 검색 → 카테고리 탭 9개
  - 본문: 좌 90px 날짜 레일(오늘/어제/월/일/토) | 우 타임라인 (점선 + 컬러 닷 + 카드)
- **Tone**: 시간이 척추.

## Information Architecture
- **카테고리 9** (사이드바/탭 순서): 핀 고정, 메모/일기, 비밀번호, 할 일, 사진, 문서, 연락처, 가계부, 건강 기록
- **카테고리 ↔ 컬러 매핑** (모든 시안 공통):
  - 메모 → peach
  - 비밀번호 → rose
  - 할 일 → butter
  - 사진 → sage
  - 문서 → sky
  - 연락처 → lilac
  - 가계부 → peach (또는 sky)
  - 건강 → sage (또는 rose)

## Key Feature
- **검색**: 사용자가 명시적으로 요청한 핵심 기능. 모든 시안에서 글로벌 검색바가 prominent하게 노출됨. 데스크톱이 메인이므로 `⌘K` 단축키 노출 권장.

## Design Tokens

### Colors (warm pastel)
```css
--ink:        #2a2622;  /* 본문 */
--ink-soft:   #6b635b;  /* 보조 */
--ink-faint:  #b8afa6;  /* placeholder/disabled */
--paper:      #fbf7f1;  /* 카드/패널 배경 */
--canvas-bg:  #efe9df;  /* 캔버스/페이지 배경 */
--line:       #2a2622;  /* 와이어프레임용 — hi-fi에서는 1px solid #e8e0d2 정도로 완화 */

/* Category accents — 모두 oklch 동일 chroma·lightness, hue만 회전 */
--peach:  #f6c5a8;
--rose:   #efb6b6;
--butter: #f5d985;
--sage:   #b9cdb0;
--sky:    #b3c9d9;
--lilac:  #cebed8;
```

### Typography
- 본문: **Pretendard** (CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css`)
- 와이어프레임 한정 보조: Caveat, Gaegu (hi-fi에서는 제거하고 Pretendard weight로 대체)
- 스케일: 64 / 44 / 36 / 28 / 22 / 18 / 16 / 14 / 13 / 12

### Spacing
- 페이지 padding: 60–80px (좌우)
- 카드 padding: 12–16px
- 섹션 사이: 18–28px
- 요소 사이 gap: 4 / 6 / 8 / 10 / 12 / 18

### Radius
- 카드: 6px
- 큰 카드/카테고리: 10px
- pill / 검색바: 999px
- 아이콘 원형: 50%

### Shadow
- Sticky note만 `2px 3px 0 rgba(0,0,0,0.08)` (와이어프레임 한정)
- hi-fi 카드: `0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)` 권장

## Interactions & Behavior (intended)
- 카테고리 카드/탭/사이드바 항목 클릭 → 해당 카테고리 페이지로 라우팅
- 글로벌 검색: `⌘K` / `Ctrl+K`로 spotlight 모달 열기, 결과는 카테고리 라벨로 그룹핑
- 핀 고정: 항목별 `pinned` boolean → 홈의 핀 영역에 노출
- 시간 타임라인(D안): 날짜 클릭 시 해당 날짜로 스크롤
- Quick Add(C안 dashed 카드): 최근 사용 카테고리로 빠른 입력 모달

## State (suggested)
- `items: Item[]` — 단일 unified 모델, `kind: 'memo'|'password'|'todo'|'photo'|'doc'|'contact'|'expense'|'health'`
- `tags: string[]`, `pinned: boolean`, `createdAt`, `updatedAt`
- 클라이언트는 카테고리/태그/날짜/검색어로 필터링

## Device Target
**데스크톱 우선**. 모든 와이어프레임은 1280×820 기준. 모바일은 추후 별도 작업.

## Files in this bundle
- `My - Wireframes.html` — 진입점. 4개 시안을 한 캔버스에 배치.
- `wireframes.jsx` — 시안 컴포넌트 (VariantA/B/C/D + Cover).
- `design-canvas.jsx` — 핸드오프용 pan/zoom 캔버스 래퍼. **실제 제품에는 불필요** (참고용).

## Next Steps
1. 4개 시안 중 1–2개를 골라 hi-fi 디자인 확정 (Pretendard 단일 패밀리, sketchy 요소 제거).
2. 카테고리별 상세 페이지 와이어프레임 추가.
3. 검색 모달, Quick Add 모달, 항목 detail view 디자인.
4. 실제 데이터 모델/스키마 확정 (위 State 섹션 참고).
