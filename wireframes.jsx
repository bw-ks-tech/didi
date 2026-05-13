// Wireframes for "My" — personal info storage site
// 4 layout explorations using sketchy hand-drawn vibe.

const ART_W = 1280;
const ART_H = 820;

// ── Shared bits ──────────────────────────────────────────────────

function Logo({ size = 28 }) {
  return (
    <span className="scribble" style={{ fontSize: size, fontWeight: 700, lineHeight: 1, color: 'var(--ink)' }}>
      My<span style={{ color: '#c66', marginLeft: 1 }}>.</span>
    </span>
  );
}

function Annot({ x, y, w = 120, children, color = '#c44', arrow = 'br' }) {
  // arrow: 'br' bottom-right, 'bl' bottom-left, 'tr' top-right, 'tl' top-left
  const paths = {
    br: 'M5 5 Q 30 25 60 18 T 110 30',
    bl: 'M115 5 Q 90 25 60 18 T 10 30',
    tr: 'M5 35 Q 30 15 60 22 T 110 10',
    tl: 'M115 35 Q 90 15 60 22 T 10 10',
  };
  return (
    <div className="annot" style={{ left: x, top: y, width: w, color }}>
      <div style={{ marginBottom: 2 }}>{children}</div>
      <svg width={w} height="36" viewBox={`0 0 ${w} 36`}>
        <path d={paths[arrow]} fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M0 0 L 8 4 L 4 8 Z" fill={color}
          transform={arrow.endsWith('l') ? `translate(8 26)` : `translate(${w - 12} 26) rotate(90)`} />
      </svg>
    </div>
  );
}

function StickyNote({ children, color = 'var(--butter)', rotate = -2, style = {} }) {
  return (
    <div style={{
      background: color,
      border: '1.4px solid var(--line)',
      padding: '10px 12px',
      transform: `rotate(${rotate}deg)`,
      fontFamily: 'Gaegu, sans-serif',
      fontSize: 13,
      lineHeight: 1.35,
      boxShadow: '2px 3px 0 rgba(0,0,0,0.08)',
      ...style,
    }}>
      {children}
    </div>
  );
}

function TopNav({ active = '홈' }) {
  const items = ['홈', '메모', '비밀번호', '할 일', '사진', '문서', '연락처', '가계부', '건강'];
  return (
    <div className="topnav">
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <Logo />
      </div>
      <div className="menu">
        {items.map((it) => (
          <span key={it} className={it === active ? 'active' : ''}>{it}</span>
        ))}
      </div>
      <div className="right">
        <div className="searchbar" style={{ padding: '6px 12px', minWidth: 180 }}>
          <span style={{ fontSize: 12 }}>🔍</span>
          <span className="placeholder" style={{ fontSize: 12 }}>전체 검색…</span>
        </div>
        <div className="icon-circ">M</div>
      </div>
    </div>
  );
}

// ── Variant A: Hero + 카테고리 그리드 (Apple 톤) ─────────────────

function VariantA() {
  const cats = [
    { name: '메모/일기', count: '128', color: 'var(--peach)' },
    { name: '비밀번호',   count: '42',  color: 'var(--rose)' },
    { name: '할 일',      count: '17',  color: 'var(--butter)' },
    { name: '사진',       count: '301', color: 'var(--sage)' },
    { name: '문서',       count: '54',  color: 'var(--sky)' },
    { name: '연락처',     count: '88',  color: 'var(--lilac)' },
    { name: '가계부',     count: '6월', color: 'var(--peach)' },
    { name: '건강 기록',  count: '21',  color: 'var(--sage)' },
  ];
  return (
    <div className="sketch" style={{ width: ART_W, height: ART_H, position: 'relative' }}>
      <TopNav active="홈" />

      {/* Hero */}
      <div style={{ padding: '60px 80px 30px', textAlign: 'center', position: 'relative' }}>
        <div className="hand" style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 10 }}>
          2026년 5월 6일 · 수요일
        </div>
        <div className="scribble squig" style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          오늘, 무엇을 기록할까요?
        </div>
        <div className="hand" style={{ fontSize: 16, color: 'var(--ink-soft)', marginTop: 14 }}>
          나만의 작은 서랍 — 메모, 사진, 비밀번호 한 곳에.
        </div>

        {/* Big search */}
        <div className="searchbar" style={{ maxWidth: 560, margin: '24px auto 0', padding: '14px 22px' }}>
          <span>🔍</span>
          <span className="placeholder">검색어를 입력해 주세요</span>
          <div style={{ flex: 1 }} />
          <span className="pill" style={{ fontSize: 11, padding: '2px 10px' }}>⌘K</span>
        </div>

        {/* decorative scribbles like apple imagery */}
        <svg width="60" height="40" style={{ position: 'absolute', left: 100, top: 80 }} viewBox="0 0 60 40">
          <path d="M5 25 Q 15 5 25 20 T 45 18" fill="none" stroke="var(--peach)" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg width="50" height="50" style={{ position: 'absolute', right: 120, top: 60 }} viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="6" fill="none" stroke="var(--butter)" strokeWidth="3" />
          <circle cx="25" cy="25" r="2" fill="var(--butter)" />
        </svg>
        <svg width="40" height="40" style={{ position: 'absolute', right: 220, top: 160 }} viewBox="0 0 40 40">
          <path d="M5 20 Q 20 5 35 20 T 35 35" fill="none" stroke="var(--rose)" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg width="50" height="30" style={{ position: 'absolute', left: 200, top: 180 }} viewBox="0 0 50 30">
          <path d="M5 15 C 10 5, 20 25, 25 15 S 40 5, 45 15" fill="none" stroke="var(--sage)" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Grid */}
      <div style={{ padding: '20px 80px 40px' }}>
        <div className="hand" style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 14 }}>
          ◆ 내 서랍
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {cats.map((c) => (
            <div className="cat-card" key={c.name}>
              <div className="blob" style={{ background: c.color }} />
              <div>
                <div className="hand" style={{ color: 'var(--ink-soft)', fontSize: 11 }}>카테고리</div>
                <div className="label">{c.name}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div className="count">{c.count}</div>
                <span style={{ fontSize: 18 }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Annotations */}
      <Annot x={760} y={150} arrow="bl">큰 인사말 + 검색이<br/>첫 화면의 주인공</Annot>
      <Annot x={70} y={520} arrow="tr">카테고리는<br/>큼직한 카드 그리드</Annot>
      <StickyNote rotate={3} style={{ position: 'absolute', right: 30, bottom: 30, width: 150 }}>
        Apple 결: 여백 많고<br/>중앙 정렬, 일러스트<br/>포인트 ✿
      </StickyNote>
    </div>
  );
}

// ── Variant B: 사이드바 + 대시보드 (Naver 결 + 정돈) ──────────────

function VariantB() {
  return (
    <div className="sketch" style={{ width: ART_W, height: ART_H, position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <TopNav active="홈" />
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        {/* sidebar */}
        <div style={{ width: 220, borderRight: '1.5px solid var(--line)', padding: '18px 14px', background: '#f5efe4' }}>
          <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', padding: '0 8px 8px' }}>내 서랍</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              ['📌', '핀 고정',     false, 'var(--butter)'],
              ['📝', '메모 / 일기', true,  'var(--peach)'],
              ['🔒', '비밀번호',    false, 'var(--rose)'],
              ['✓',  '할 일',       false, 'var(--butter)'],
              ['🖼', '사진',        false, 'var(--sage)'],
              ['📄', '문서',        false, 'var(--sky)'],
              ['👤', '연락처',      false, 'var(--lilac)'],
              ['💰', '가계부',      false, 'var(--peach)'],
              ['❤︎', '건강 기록',   false, 'var(--rose)'],
            ].map(([ic, name, active, c]) => (
              <div key={name} className={`side-item ${active ? 'active' : ''}`}>
                <span className="side-dot" style={{ background: c }} />
                <span style={{ fontSize: 13 }}>{name}</span>
                <span style={{ marginLeft: 'auto', fontFamily: 'Caveat', fontSize: 14, color: 'var(--ink-soft)' }}>
                  {[12,128,42,17,301,54,88,'6월',21][['📌','📝','🔒','✓','🖼','📄','👤','💰','❤︎'].indexOf(ic)]}
                </span>
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1.5px dashed var(--ink-faint)', margin: '14px 4px' }} />
          <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', padding: '0 8px 8px' }}># 태그</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '0 4px' }}>
            {['여행','독서','운동','일','가족','레시피'].map(t => (
              <span key={t} className="pill" style={{ fontSize: 11, padding: '2px 8px' }}>#{t}</span>
            ))}
          </div>
        </div>

        {/* main */}
        <div style={{ flex: 1, padding: '20px 28px', overflow: 'hidden' }}>
          {/* search */}
          <div className="searchbar" style={{ marginBottom: 18 }}>
            <span>🔍</span>
            <span className="placeholder">전체 서랍에서 검색…</span>
            <div style={{ flex: 1 }} />
            <span className="pill" style={{ fontSize: 11 }}>최근 검색</span>
            <span className="pill" style={{ fontSize: 11 }}>필터</span>
          </div>

          {/* row 1: pinned strip */}
          <div className="hand" style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 8 }}>📌 고정해 둔 것들</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 18 }}>
            {[
              ['메모', '런던 출장 메모', 'var(--peach)'],
              ['비번', 'Github · 회사', 'var(--rose)'],
              ['할 일', '이번 주 정리', 'var(--butter)'],
              ['문서', '계약서_v2.pdf', 'var(--sky)'],
            ].map(([k,t,c]) => (
              <div key={t} style={{ border: '1.4px solid var(--line)', borderRadius: 6, background: '#fff', padding: '10px 12px', height: 80, position: 'relative' }}>
                <span className="pill" style={{ fontSize: 10, padding: '1px 8px', background: c }}>{k}</span>
                <div className="hand" style={{ fontSize: 14, marginTop: 8 }}>{t}</div>
                <div className="line-ph short" style={{ marginTop: 6 }} />
              </div>
            ))}
          </div>

          {/* row 2: two columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
            <div>
              <div className="hand" style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 8 }}>최근 항목</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  ['📝', '오늘의 일기 — 비 오는 수요일', '방금 전'],
                  ['🔒', 'Notion 계정', '2시간 전'],
                  ['💰', '5월 식비 정산',  '어제'],
                  ['🖼', 'IMG_4821.jpg',  '어제'],
                  ['❤︎', '아침 러닝 3.2km', '5월 4일'],
                  ['📄', '월세 계약서.pdf', '5월 2일'],
                ].map(([ic, t, time]) => (
                  <div className="row-item" key={t}>
                    <span style={{ fontSize: 14 }}>{ic}</span>
                    <span style={{ fontFamily: 'Gaegu', fontSize: 13 }}>{t}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'Caveat', fontSize: 14, color: 'var(--ink-soft)' }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="hand" style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 8 }}>이번 주 한눈에</div>
              <div className="box" style={{ padding: 14, height: 120 }}>
                <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>가계부 — 5월</div>
                <div className="scribble" style={{ fontSize: 28, fontWeight: 700 }}>₩ 842,300</div>
                <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 40, marginTop: 8 }}>
                  {[20, 35, 18, 50, 28, 42, 15].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: h, background: 'var(--peach)', border: '1px solid var(--line)' }} />
                  ))}
                </div>
              </div>
              <div className="box" style={{ padding: 14, marginTop: 10 }}>
                <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>오늘의 할 일 (3 / 7)</div>
                {['장보기 ✓', '운동 30분 ✓', '메일 답장 ✓', '독서 한 챕터', '약속 정리'].map(t => (
                  <div key={t} className="hand" style={{ fontSize: 13, padding: '2px 0', color: t.endsWith('✓') ? 'var(--ink-faint)' : 'var(--ink)', textDecoration: t.endsWith('✓') ? 'line-through' : 'none' }}>
                    ☐ {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Annot x={30} y={100} arrow="br">왼쪽 사이드바<br/>= 카테고리 네비</Annot>
      <Annot x={500} y={120} arrow="bl">상단엔 글로벌 검색<br/>딱 한 줄</Annot>
      <Annot x={1050} y={460} arrow="tl" w={140}>오른쪽 위젯으로<br/>한눈에 요약 카드</Annot>
      <StickyNote rotate={2} color="var(--sage)" style={{ position: 'absolute', left: 30, bottom: 24, width: 160 }}>
        Naver 결: 정보 밀도 ↑<br/>한 페이지에서 다 보임
      </StickyNote>
    </div>
  );
}

// ── Variant C: Bento 매거진 (하이브리드 — Apple 여백 + Naver 밀도) ─

function VariantC() {
  return (
    <div className="sketch" style={{ width: ART_W, height: ART_H, position: 'relative' }}>
      <TopNav active="홈" />
      <div style={{ padding: '24px 60px 30px' }}>
        {/* greeting + search inline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div>
            <div className="scribble" style={{ fontSize: 36, fontWeight: 700 }}>
              안녕, <span style={{ color: '#c66' }}>오늘도</span> 잘 정리해볼까요
            </div>
            <div className="hand" style={{ fontSize: 13, color: 'var(--ink-soft)', marginTop: 4 }}>
              저장된 항목 657개 · 최근 동기화 방금 전
            </div>
          </div>
          <div className="searchbar" style={{ width: 320, padding: '10px 16px' }}>
            <span style={{ fontSize: 13 }}>🔍</span>
            <span className="placeholder">검색…</span>
            <span className="pill" style={{ marginLeft: 'auto', fontSize: 10, padding: '2px 8px' }}>⌘K</span>
          </div>
        </div>

        {/* Bento grid — 12 col */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '110px',
          gap: 12,
        }}>
          {/* big memo */}
          <div className="box" style={{ gridColumn: 'span 5', gridRow: 'span 3', padding: 16, position: 'relative', background: 'var(--peach)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="pill" style={{ fontSize: 11 }}>📝 메모</span>
              <span className="hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>방금 전</span>
            </div>
            <div className="scribble" style={{ fontSize: 28, fontWeight: 700, marginTop: 14 }}>
              비 오는 수요일
            </div>
            <div className="line-ph full" style={{ marginTop: 12 }} />
            <div className="line-ph full" style={{ marginTop: 6 }} />
            <div className="line-ph med" style={{ marginTop: 6 }} />
            <div className="line-ph full" style={{ marginTop: 6 }} />
            <div className="line-ph short" style={{ marginTop: 6 }} />
            <div style={{ position: 'absolute', bottom: 14, right: 16 }}>
              <span className="pill" style={{ fontSize: 11, background: '#fff' }}>이어 쓰기 →</span>
            </div>
          </div>

          {/* photos collage */}
          <div className="box" style={{ gridColumn: 'span 4', gridRow: 'span 2', padding: 12, background: 'var(--sage)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <span className="pill" style={{ fontSize: 11 }}>🖼 사진</span>
              <span className="hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>301장</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, height: 140 }}>
              <div className="img-ph" style={{ gridRow: 'span 2' }}>사진</div>
              <div className="img-ph">사진</div>
              <div className="img-ph">사진</div>
              <div className="img-ph">사진</div>
              <div className="img-ph">+297</div>
            </div>
          </div>

          {/* todo */}
          <div className="box" style={{ gridColumn: 'span 3', gridRow: 'span 2', padding: 14, background: 'var(--butter)' }}>
            <span className="pill" style={{ fontSize: 11 }}>✓ 할 일</span>
            <div className="scribble" style={{ fontSize: 22, fontWeight: 700, marginTop: 8 }}>3 / 7</div>
            <div style={{ marginTop: 4 }}>
              {['장보기', '메일 답장', '독서 한 챕터'].map((t, i) => (
                <div key={t} className="hand" style={{ fontSize: 12 }}>
                  {i < 2 ? '✓' : '☐'} {t}
                </div>
              ))}
            </div>
          </div>

          {/* password vault */}
          <div className="box" style={{ gridColumn: 'span 4', gridRow: 'span 1', padding: 12, background: 'var(--rose)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>🔒</span>
            <div>
              <div className="hand" style={{ fontSize: 14 }}>비밀번호 42개 · 모두 안전</div>
              <div className="hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>마지막 점검 어제</div>
            </div>
            <span className="pill" style={{ marginLeft: 'auto', fontSize: 11 }}>열기</span>
          </div>

          {/* expense */}
          <div className="box" style={{ gridColumn: 'span 3', gridRow: 'span 1', padding: 12, background: 'var(--sky)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="pill" style={{ fontSize: 11, alignSelf: 'flex-start' }}>💰 가계부</span>
            <div className="scribble" style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>₩ 842,300</div>
            <div className="hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>5월 누적</div>
          </div>

          {/* health */}
          <div className="box" style={{ gridColumn: 'span 4', gridRow: 'span 1', padding: 12, background: 'var(--lilac)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>❤︎</span>
            <div>
              <div className="hand" style={{ fontSize: 14 }}>아침 러닝 3.2km · 28분</div>
              <div className="hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>이번 주 4회 째</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 3, alignItems: 'flex-end' }}>
              {[10,18,8,22,14,26,16].map((h,i)=> <div key={i} style={{ width: 6, height: h, background: '#fff', border: '1px solid var(--line)' }} />)}
            </div>
          </div>

          {/* docs */}
          <div className="box" style={{ gridColumn: 'span 5', gridRow: 'span 1', padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="pill" style={{ fontSize: 11 }}>📄 최근 문서</span>
            <span className="hand" style={{ fontSize: 13 }}>월세 계약서.pdf</span>
            <span className="line-ph short" style={{ flex: 1, maxWidth: 80 }} />
            <span className="hand" style={{ fontSize: 11, color: 'var(--ink-soft)' }}>5월 2일</span>
          </div>

          {/* contacts */}
          <div className="box" style={{ gridColumn: 'span 4', gridRow: 'span 1', padding: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="pill" style={{ fontSize: 11 }}>👤 연락처</span>
            <div style={{ display: 'flex', marginLeft: 6 }}>
              {['var(--peach)','var(--sage)','var(--sky)','var(--rose)','var(--butter)'].map((c,i)=>
                <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: '1.2px solid var(--line)', marginLeft: i ? -6 : 0 }} />
              )}
            </div>
            <span className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginLeft: 'auto' }}>+88</span>
          </div>

          {/* quick add */}
          <div className="box-dashed" style={{ gridColumn: 'span 3', gridRow: 'span 1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <span style={{ fontSize: 18 }}>＋</span>
            <span className="hand" style={{ fontSize: 13 }}>새 항목 빨리 담기</span>
          </div>
        </div>
      </div>

      <Annot x={460} y={170} arrow="br" w={140}>벤토 그리드:<br/>크기로 중요도 표현</Annot>
      <Annot x={20} y={420} arrow="tr">색은 카테고리 단서<br/>(파스텔 매핑)</Annot>
      <StickyNote rotate={-3} color="var(--lilac)" style={{ position: 'absolute', right: 30, bottom: 20, width: 160 }}>
        하이브리드:<br/>여백은 Apple 결,<br/>밀도는 Naver 결
      </StickyNote>
    </div>
  );
}

// ── Variant D: 탭 + 타임라인 (시간순 일기장 스타일) ───────────────

function VariantD() {
  return (
    <div className="sketch" style={{ width: ART_W, height: ART_H, position: 'relative' }}>
      <TopNav active="홈" />

      {/* big search-y header band */}
      <div style={{ padding: '28px 80px 0', borderBottom: '1.5px solid var(--line)', background: '#f5efe4' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div className="hand" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>나의 타임라인</div>
            <div className="scribble" style={{ fontSize: 44, fontWeight: 700, lineHeight: 1.05 }}>
              지난 일주일, 한눈에
            </div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <span className="pill" style={{ background: 'var(--butter)' }}>＋ 메모</span>
            <span className="pill">＋ 사진</span>
            <span className="pill">＋ 비밀번호</span>
            <span className="pill">＋ 항목</span>
          </div>
        </div>

        <div className="searchbar" style={{ marginBottom: 14 }}>
          <span>🔍</span>
          <span className="placeholder">‘런던’ 처럼 단어로, 또는 ‘지난 주 사진’ 처럼 자연스럽게…</span>
        </div>

        {/* tabs */}
        <div style={{ display: 'flex', gap: 4, marginBottom: -1 }}>
          {[
            ['전체', true], ['메모', false], ['비밀번호', false], ['할 일', false],
            ['사진', false], ['문서', false], ['연락처', false], ['가계부', false], ['건강', false],
          ].map(([t, a]) => (
            <span key={t} className={`tab ${a ? 'active' : ''}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* timeline body */}
      <div style={{ padding: '24px 80px', display: 'grid', gridTemplateColumns: '90px 1fr', gap: 18, height: 540, overflow: 'hidden' }}>
        {/* day rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 4 }}>
          {[
            ['오늘', '5/6', true],
            ['어제', '5/5', false],
            ['월',   '5/4', false],
            ['일',   '5/3', false],
            ['토',   '5/2', false],
          ].map(([d, dt, a]) => (
            <div key={dt} style={{
              border: '1.4px solid var(--line)',
              borderRadius: 6,
              padding: '8px 10px',
              background: a ? 'var(--peach)' : '#fff',
              textAlign: 'center',
            }}>
              <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{d}</div>
              <div className="scribble" style={{ fontSize: 18, fontWeight: 700 }}>{dt}</div>
            </div>
          ))}
        </div>

        {/* timeline column */}
        <div style={{ position: 'relative', borderLeft: '1.5px dashed var(--ink-faint)', paddingLeft: 24 }}>
          {[
            { time: '14:32', cat: '메모', color: 'var(--peach)', title: '비 오는 수요일', body: '오늘은 우산을 잃어버렸지만, 카페에서 좋은 시간을…', tags: ['일기','기분'] },
            { time: '11:08', cat: '비번', color: 'var(--rose)',  title: 'Notion 계정 업데이트', body: '2단계 인증 다시 켰음. 백업 코드 보관함에 저장.', tags: ['업무'] },
            { time: '09:14', cat: '건강', color: 'var(--sage)',  title: '아침 러닝 3.2km · 28분', body: '한강 코스. 무릎 컨디션 90%. 다음엔 5km 도전.', tags: ['운동'] },
            { time: '08:40', cat: '할 일', color: 'var(--butter)', title: '오늘의 할 일 3개 완료', body: '장보기, 메일 답장, 운동. 남은 4개는 내일로.', tags: [] },
            { time: '07:55', cat: '가계부', color: 'var(--sky)',  title: '편의점 6,400원', body: '아메리카노 + 샌드위치. 5월 식비 32% 사용.', tags: ['식비'] },
          ].map((it, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: 14 }}>
              <div style={{
                position: 'absolute', left: -32, top: 14,
                width: 14, height: 14, borderRadius: '50%',
                background: it.color, border: '1.4px solid var(--line)',
              }} />
              <div className="row-item" style={{ alignItems: 'flex-start', flexDirection: 'column', gap: 4, padding: '10px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
                  <span className="pill" style={{ fontSize: 10, padding: '1px 8px', background: it.color }}>{it.cat}</span>
                  <span className="hand" style={{ fontSize: 14, fontWeight: 700 }}>{it.title}</span>
                  <span style={{ marginLeft: 'auto' }} className="scribble">{it.time}</span>
                </div>
                <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)' }}>{it.body}</div>
                {it.tags.length > 0 && (
                  <div style={{ display: 'flex', gap: 4 }}>
                    {it.tags.map(t => <span key={t} className="pill" style={{ fontSize: 10, padding: '1px 8px' }}>#{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Annot x={780} y={120} arrow="bl" w={140}>탭으로 카테고리 전환,<br/>‘전체’가 기본</Annot>
      <Annot x={20} y={340} arrow="br">왼쪽 날짜 레일<br/>= 빠른 점프</Annot>
      <StickyNote rotate={2} color="var(--peach)" style={{ position: 'absolute', right: 30, bottom: 24, width: 170 }}>
        시간이 곧 척추.<br/>모든 정보가 ‘언제’로<br/>꿰어집니다 ⏳
      </StickyNote>
    </div>
  );
}

// ── Cover / intro artboard ───────────────────────────────────────

function Cover() {
  return (
    <div className="sketch" style={{ width: 720, height: 480, padding: 40, position: 'relative' }}>
      <div className="hand" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>WIREFRAME EXPLORATION</div>
      <div className="scribble" style={{ fontSize: 90, fontWeight: 700, lineHeight: 1, marginTop: 8 }}>
        My<span style={{ color: '#c66' }}>.</span>
      </div>
      <div className="hand" style={{ fontSize: 18, marginTop: 6, color: 'var(--ink-soft)' }}>
        나만의 정보 서랍 — 메모 · 비번 · 할 일 · 사진 · 문서 · 연락처 · 가계부 · 건강
      </div>

      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginBottom: 6 }}>◆ 컨셉</div>
          <div className="hand" style={{ fontSize: 14, lineHeight: 1.5 }}>
            여백 많은 Apple 결과<br/>정보 밀집한 Naver 결을<br/>섞은 따뜻한 파스텔.
          </div>
        </div>
        <div>
          <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginBottom: 6 }}>◆ 타입</div>
          <div className="hand" style={{ fontSize: 14, lineHeight: 1.5 }}>
            Pretendard (본문)<br/>+ 손글씨 톤 보조<br/>(와이어프레임 vibe)
          </div>
        </div>

        <div>
          <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginBottom: 6 }}>◆ 컬러</div>
          <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
            {['var(--peach)','var(--rose)','var(--butter)','var(--sage)','var(--sky)','var(--lilac)'].map((c,i)=>
              <div key={i} style={{ width: 26, height: 26, borderRadius: '50%', background: c, border: '1.4px solid var(--line)' }} />
            )}
          </div>
        </div>
        <div>
          <div className="hand" style={{ fontSize: 12, color: 'var(--ink-soft)', marginBottom: 6 }}>◆ 시안</div>
          <div className="hand" style={{ fontSize: 14, lineHeight: 1.5 }}>
            A · 히어로 + 그리드<br/>
            B · 사이드바 + 대시보드<br/>
            C · 벤토 매거진<br/>
            D · 탭 + 타임라인
          </div>
        </div>
      </div>

      <StickyNote rotate={-4} color="var(--butter)" style={{ position: 'absolute', right: -12, bottom: 30, width: 170 }}>
        ※ 모두 와이어프레임!<br/>색·아이콘은 placeholder.<br/>방향 정한 뒤 hi-fi로 ✿
      </StickyNote>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────

function App() {
  return (
    <DesignCanvas>
      <DCSection id="intro" title="My — 와이어프레임 탐색" subtitle="개인 정보 저장 사이트 · 4가지 레이아웃 시안">
        <DCArtboard id="cover" label="00 · 컨셉 카드" width={720} height={480}>
          <Cover />
        </DCArtboard>
      </DCSection>

      <DCSection id="layouts" title="홈 화면 레이아웃 시안" subtitle="크게 다른 4가지 구조 — 시간 들이지 말고 ‘느낌’만 비교해 보세요">
        <DCArtboard id="A" label="A · 히어로 + 카테고리 그리드" width={ART_W} height={ART_H}>
          <VariantA />
        </DCArtboard>
        <DCArtboard id="B" label="B · 사이드바 + 대시보드" width={ART_W} height={ART_H}>
          <VariantB />
        </DCArtboard>
        <DCArtboard id="C" label="C · 벤토 매거진 (하이브리드)" width={ART_W} height={ART_H}>
          <VariantC />
        </DCArtboard>
        <DCArtboard id="D" label="D · 탭 + 타임라인" width={ART_W} height={ART_H}>
          <VariantD />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
