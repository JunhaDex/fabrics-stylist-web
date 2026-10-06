@../../CLAUDE.md
@../../docs/ssot/org-principles.md
@../../docs/ssot/repo-architecture.md
@AGENTS.md

# stylist-web (fabrics-stylist-web)

옷장을 등록하고 그날의 TPO에 맞는 코디를 추천받는 웹앱. pocket 컨테이너에 처음
탑재되는 웹앱이다. 조직 공통 원칙은 위 `@import`로 상속하며, 이 파일은 프로젝트
고유 사항만 기술한다. 저장소 이름은 가칭이며 실제 앱 이름은 별도로 정한다.

## 스택
| 영역 | 선택 |
|---|---|
| 프레임워크 | Next.js (App Router), React |
| 패키지 관리 | pnpm workspace, Turborepo |
| MFA | Next.js Multi-Zones. `@module-federation/nextjs-mf`는 App Router 미지원이라 쓰지 않는다 |
| UI | `@junhadex/core` + `@junhadex/theme-neutral` (GitHub Packages), Tailwind v4 |
| 스키마 | zod (`@repo/contracts`) |
| 변경 이력 | git-cliff (`cliff.toml`) |

## 워크스페이스 구조
```
apps/shell      기본 zone. /, /login, /.well-known/*. 다른 zone으로 보내는 rewrites 소유 (3000)
apps/closet     /closet/*, assetPrefix /closet-static. 옷장 목록·상세·등록 (3001)
apps/styling    /styling/*, assetPrefix /styling-static. 해시태그 TPO 입력과 추천 결과 (3002)
packages/ui     프로젝트 전용 재사용 컴포넌트와 Tailwind 진입 CSS (@repo/ui)
packages/contracts  zod 스키마와 타입 (@repo/contracts, 예정)
packages/mock       fixture와 mock adapter, server-only (@repo/mock, 예정)
packages/eslint-config, packages/typescript-config
```

## 아키텍처 규칙
- **zone 경계**: 함께 자주 방문하는 페이지를 같은 zone에 둔다. zone 간 이동은
  hard navigation이다. zone 경계를 넘는 링크는 `<Link>` 대신 `<a>`를 쓴다.
- **라우트 접두사**: `basePath`를 쓰지 않고 `app/closet/`처럼 디렉터리로 둔다.
  URL 경로는 zone마다 고유해야 한다.
- **zone 간 UI 공유**: 런타임 결합은 불가능하므로 `@repo/ui`로 빌드 시점에 결합한다.
  개인화 홈의 위젯도 `@repo/ui`에 둔다. 모든 zone이 같은 AppShell을 SSR한다.
- **BFF**: 별도 BFF 앱을 두지 않고 각 zone의 Next 서버가 자기 영역의 BFF다.
  서버 컴포넌트는 자기 서버로 HTTP를 보내지 않고 zone 내부 `server/` 데이터 계층을
  호출한다. 이 계층이 지금은 `@repo/mock`을, 이후에는 Backend를 호출한다.
  클라이언트 발 변경 요청은 자기 경로 아래 Route Handler(`/closet/api/*` 등)로 받는다.
  Server Actions를 쓰면 `serverActions.allowedOrigins`에 사용자 대면 origin을 지정한다.
- **로컬 실행**: `pnpm dev`가 세 zone을 함께 띄우고, shell이 `CLOSET_URL`,
  `STYLING_URL`(기본 localhost:3001, 3002)로 rewrite한다. pocket은 shell(3000)만 본다.
  `adb reverse` 사용 시 Host가 `localhost:3000`이므로 `allowedDevOrigins`를 설정하지 않는다.

## 화면·디자인 시스템 규칙
- mobile first, PC는 반응형(모바일 BottomTabBar → PC SideNav).
- 테마 `neutral`, 모드 light/dark. 모드는 쿠키에 저장하고 서버 레이아웃이
  `<html data-mode>`로 SSR한다.
- 소비 계약: Tailwind 진입 CSS는 `@repo/ui`에 한 번만 정의한다
  (`@import "tailwindcss"` + `@import "@junhadex/theme-neutral/theme.css"` +
  `@source "…/@junhadex/core/dist"`). 각 앱은 이를 import하고 자기 소스만 `@source`로 추가한다.
- 범용 컴포넌트가 common-design에 없으면 `@repo/ui`에 먼저 만들고, 검증되면
  common-design으로 승격한다. 도메인 컴포넌트(카드 등)는 이 프로젝트가 정의한다.
- 색상·radius 등 룩앤필은 토큰과 variant prop으로만 제어한다. className 오버라이드는
  레이아웃 속성만 허용한다(common-design 규칙).
- 소셜 로그인 버튼은 각 제공자(Google, Apple, Naver, Kakao)의 공식 버튼 가이드를 따른다.
- 예시 이미지는 `@repo/ui`의 로컬 SVG 플레이스홀더를 쓴다. 외부 placeholder 서비스는 쓰지 않는다.

## todo 관리
작업이 진행되면 루트 `../../docs/stylist-web-todo.md`를 실시간으로 갱신한다.
구조와 릴리스 시 처리는 `../../docs/TODO.md`의 "프로젝트 todo 파일" 절을 따른다.
시행착오는 기록하지 않고 최종 결정만 남긴다.
