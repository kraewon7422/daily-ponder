# Daily Ponder

A calm daily page: **a quote to think about**, **what happened on this day in history**, and **a tiny journal** that takes ten seconds to fill in.

**Live demo:** https://kraewon7422.github.io/daily-ponder/ — open it in Chrome and click the **Install** icon in the address bar to get it as a desktop/phone app (works offline).

## What's inside

- **Quote of the day:** about 450 hand-picked quotes from philosophy, science, mathematics, literature, poetry, art, music, film, history and more, each with its author and source. Every quote was checked against Wikiquote; ones listed there as misattributed or only "attributed" were removed.
- **Favorites:** tap ♡ to keep a quote; your favorites live in their own list.
- **Share card:** turns the quote into a soft-colored 1080×1350 image to send or post.
- **Today's read:** one book or landmark paper a day (literature, philosophy, science, math, computer science, history, psychology, economics, art). Each was fact-checked against Wikipedia or Crossref, and links go to the confirmed article or DOI.
- **On this day:** events, births and deaths from this date in past years, live from Wikipedia.
- **A few strokes for today:**
  - a mood (one tap) and today in one word
  - one line about your day
  - three good things
  - your thought on today's quote
- **Mood calendar:** a month of moods at a glance; click a day to read what you wrote.
- **You, on this day:** what you wrote on this same date in earlier years.
- **Writing streak:** a quiet "🔥 N days in a row" counter.
- **Year in review:** a whole year of moods as one grid, plus the words you used most.
- **7 languages:** English, 한국어, 日本語, 中文, Español, Français, Deutsch. Quotes stay in English; "On this day" comes from that language's Wikipedia (Korean and Japanese are read from their date pages).
- **Light / dark / auto** theme button, and it works offline once opened (fonts included).
- **Private by default:** entries live in your browser. Optional Google sign-in syncs them across devices; export/import as a JSON backup.

## Run it locally

No build step and no dependencies. Serve the folder with any static server:

```bash
python -m http.server 8000
# open http://localhost:8000/
```

Add `?date=2025-10-24` to the URL to preview another day.

## Turning on Google sign-in (optional)

Without this, everything still works and entries stay on the device.

1. Create a project at https://console.firebase.google.com and add a **Web app**.
2. **Authentication → Sign-in method →** enable **Google**.
3. **Authentication → Settings → Authorized domains →** add your site's domain (e.g. `yourname.github.io`).
4. **Firestore Database →** create a database, then set these **Rules** so each person can only read and write their own entries:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       match /users/{uid}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
5. Paste the web app's config object into `firebase-config.js` (replace `null`). These values are public identifiers, not secrets; the rules above are what protect the data.

## Files

| File | What it does |
|---|---|
| `index.html` | the whole app (layout, styles, logic, translations) |
| `quotes.js` | the quote collection |
| `reads.js` | the reading list |
| `firebase-config.js` | optional login config (`null` = no login) |
| `manifest.webmanifest`, `sw.js`, icons | make it installable and usable offline |

## Why I made it

I wanted one page to open each day that gives me something worth thinking about, a sense of how long and strange history is, and a habit of writing *something* down that's so small I'd actually keep doing it. A year later, the app shows me what I wrote on the same day.

## License

MIT

---

# Daily Ponder (한국어)

하루에 한 번 여는 차분한 페이지예요. **생각해 볼 만한 명언**, **역사 속 오늘**, 그리고 10초면 쓸 수 있는 **작은 일기**가 있어요.

**바로 써 보기:** https://kraewon7422.github.io/daily-ponder/ ― Chrome에서 열고 주소창의 **설치** 아이콘을 누르면 앱처럼 설치돼요 (오프라인에서도 작동).

## 기능

- **오늘의 문장:** 철학·과학·수학·문학·시·미술·음악·영화·역사 등에서 고른 약 450개의 명언 (저자와 출처 표기). 모든 문장을 Wikiquote와 대조했고, 잘못 알려진 인용이나 출처가 불확실한 문장은 뺐어요.
- **좋아하는 문장:** ♡를 누르면 따로 모아 볼 수 있어요.
- **공유 카드:** 오늘의 문장을 은은한 색감의 이미지로 만들어 보내거나 올릴 수 있어요.
- **오늘의 읽을거리:** 하루 한 권의 책 또는 명논문 (문학·철학·과학·수학·컴퓨터 과학·역사·심리학·경제·예술). 위키백과와 Crossref로 사실 확인을 했고, 링크는 확인된 문서나 DOI로 연결돼요.
- **역사 속 오늘:** 위키백과에서 가져온 같은 날짜의 사건·출생·사망.
- **오늘을 몇 줄로:**
  - 기분(한 번 탭)과 오늘을 한 단어로
  - 오늘의 한 줄
  - 좋았던 세 가지
  - 오늘의 문장에 대한 내 생각
- **기분 달력:** 한 달의 기분을 한눈에 볼 수 있고, 날짜를 누르면 그날 쓴 글이 보여요.
- **지난 해 오늘의 나:** 예전 같은 날짜에 쓴 글을 보여 줘요.
- **연속 기록:** "🔥 N일 연속"이 조용히 표시돼요.
- **한 해 돌아보기:** 1년치 기분을 한 장의 격자로, 자주 쓴 단어와 함께 보여 줘요.
- **7개 언어:** English, 한국어, 日本語, 中文, Español, Français, Deutsch. 명언은 영어 원문으로 유지되고, '역사 속 오늘'은 그 언어의 위키백과 문장을 그대로 보여 줘요.
- **밝게 / 어둡게 / 자동** 테마 버튼, 한 번 열면 오프라인에서도 작동 (글꼴 포함).
- **기본은 내 기기에만 저장:** Google 로그인을 하면 여러 기기에서 동기화돼요. JSON 파일로 백업(내보내기/가져오기)도 할 수 있어요.

## 로컬에서 실행

```bash
python -m http.server 8000
# http://localhost:8000/ 열기
```

## Google 로그인 켜기 (선택)

위 영어 설명의 1~5단계를 따라 Firebase 프로젝트를 만들고, `firebase-config.js`에 설정값을 붙여 넣으면 돼요.

## 라이선스

MIT
