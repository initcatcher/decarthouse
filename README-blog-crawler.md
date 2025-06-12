# 네이버 블로그 크롤러 시스템

이 시스템은 네이버 블로그 `tomas0124`의 최신 포스트를 자동으로 크롤링하여 웹사이트에 표시하는 기능을 제공합니다.

## 구성 요소

### 1. GitHub Actions 워크플로우 (`.github/workflows/update-blog.yml`)

- 매월 1일, 15일에 자동 실행
- 수동 실행도 가능 (workflow_dispatch)
- Python 크롤링 스크립트 실행 후 결과를 자동 커밋

### 2. Python 크롤링 스크립트 (`scripts/fetch_blog.py`)

- 네이버 블로그 API를 사용하여 최신 포스트 목록 가져오기
- 최대 20개 포스트 수집
- `public/blog-data/post_list.json`에 결과 저장

### 3. React 컴포넌트 (`src/components/Notice.tsx`)

- 정적 JSON 파일에서 블로그 데이터 로드
- 포스트 클릭 시 새 탭에서 원본 블로그 포스트 열기
- 로딩 상태와 에러 처리 포함

## 설정 방법

### 1. GitHub Actions 활성화

1. GitHub 리포지토리의 Settings → Actions → General로 이동
2. "Allow all actions and reusable workflows" 선택
3. "Workflow permissions"에서 "Read and write permissions" 선택

### 2. 수동 실행

GitHub Actions 탭에서 "Update Naver Blog JSON" 워크플로우를 선택하고 "Run workflow" 버튼을 클릭합니다.

### 3. 로컬 테스트

```bash
# Python 의존성 설치
pip install requests beautifulsoup4

# 크롤링 스크립트 실행
python scripts/fetch_blog.py
```

## 파일 구조

```
├── .github/workflows/
│   └── update-blog.yml          # GitHub Actions 워크플로우
├── scripts/
│   └── fetch_blog.py           # 블로그 크롤링 스크립트
├── public/blog-data/
│   └── post_list.json          # 크롤링된 블로그 데이터
└── src/components/
    └── Notice.tsx              # 블로그 포스트 표시 컴포넌트
```

## JSON 데이터 형식

```json
{
  "lastUpdated": "2024-01-15T10:30:00.000Z",
  "blogId": "tomas0124",
  "totalPosts": 15,
  "posts": [
    {
      "title": "블로그 포스트 제목",
      "url": "https://blog.naver.com/PostView.naver?blogId=tomas0124&logNo=...",
      "date": "2024-01-15",
      "logNo": "123456789"
    }
  ]
}
```

## 커스터마이징

### 블로그 ID 변경

`scripts/fetch_blog.py` 파일에서 `BLOG_ID` 변수를 수정하세요.

### 포스트 수 조절

`scripts/fetch_blog.py` 파일에서 `MAX_POSTS` 변수를 수정하세요.

### 스케줄 변경

`.github/workflows/update-blog.yml` 파일에서 `cron` 표현식을 수정하세요.

## 주의사항

- 네이버 블로그 API는 공식 API가 아니므로 변경될 수 있습니다
- 크롤링 간격을 너무 짧게 설정하지 마세요 (서버 부하 방지)
- Vercel의 빌드 제한을 고려하여 스케줄을 설정하세요
