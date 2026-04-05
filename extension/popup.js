// ══════════════════════════════════════
// Ad Clock · 投放时区助手 v3
// ══════════════════════════════════════

const TIMEZONE_DB = [
  // 亚洲
  { id: 'Asia/Shanghai',       label: '中国 · 北京',         short: '北京',     flag: '🇨🇳', group: '亚洲' },
  { id: 'Asia/Tokyo',          label: '日本 · 东京',         short: '东京',     flag: '🇯🇵', group: '亚洲' },
  { id: 'Asia/Seoul',          label: '韩国 · 首尔',         short: '首尔',     flag: '🇰🇷', group: '亚洲' },
  { id: 'Asia/Taipei',         label: '台湾 · 台北',         short: '台北',     flag: '🇹🇼', group: '亚洲' },
  { id: 'Asia/Hong_Kong',      label: '中国香港',            short: '香港',     flag: '🇭🇰', group: '亚洲' },
  { id: 'Asia/Singapore',      label: '新加坡',              short: '新加坡',   flag: '🇸🇬', group: '亚洲' },
  { id: 'Asia/Bangkok',        label: '泰国 · 曼谷',         short: '曼谷',     flag: '🇹🇭', group: '亚洲' },
  { id: 'Asia/Ho_Chi_Minh',    label: '越南 · 胡志明',       short: '胡志明',   flag: '🇻🇳', group: '亚洲' },
  { id: 'Asia/Jakarta',        label: '印尼 · 雅加达',       short: '雅加达',   flag: '🇮🇩', group: '亚洲' },
  { id: 'Asia/Manila',         label: '菲律宾 · 马尼拉',     short: '马尼拉',   flag: '🇵🇭', group: '亚洲' },
  { id: 'Asia/Kolkata',        label: '印度 · 孟买',         short: '孟买',     flag: '🇮🇳', group: '亚洲' },
  { id: 'Asia/Dubai',          label: '阿联酋 · 迪拜',       short: '迪拜',     flag: '🇦🇪', group: '亚洲' },
  { id: 'Asia/Riyadh',         label: '沙特 · 利雅得',       short: '利雅得',   flag: '🇸🇦', group: '亚洲' },
  { id: 'Asia/Karachi',        label: '巴基斯坦 · 卡拉奇',   short: '卡拉奇',   flag: '🇵🇰', group: '亚洲' },

  // 北美
  { id: 'America/New_York',    label: '美国 · 纽约 (东部)',     short: '纽约',       flag: '🇺🇸', group: '北美' },
  { id: 'America/Chicago',     label: '美国 · 芝加哥 (中部)',   short: '芝加哥',     flag: '🇺🇸', group: '北美' },
  { id: 'America/Denver',      label: '美国 · 丹佛 (山区)',     short: '丹佛',       flag: '🇺🇸', group: '北美' },
  { id: 'America/Los_Angeles', label: '美国 · 洛杉矶 (太平洋)', short: '洛杉矶',     flag: '🇺🇸', group: '北美' },
  { id: 'America/Toronto',     label: '加拿大 · 多伦多',         short: '多伦多',     flag: '🇨🇦', group: '北美' },
  { id: 'America/Vancouver',   label: '加拿大 · 温哥华',         short: '温哥华',     flag: '🇨🇦', group: '北美' },
  { id: 'America/Mexico_City', label: '墨西哥 · 墨西哥城',      short: '墨西哥城',   flag: '🇲🇽', group: '北美' },

  // 南美
  { id: 'America/Sao_Paulo',    label: '巴西 · 圣保罗',             short: '圣保罗',         flag: '🇧🇷', group: '南美' },
  { id: 'America/Buenos_Aires', label: '阿根廷 · 布宜诺斯艾利斯',   short: '布宜诺斯艾利斯', flag: '🇦🇷', group: '南美' },
  { id: 'America/Bogota',       label: '哥伦比亚 · 波哥大',         short: '波哥大',         flag: '🇨🇴', group: '南美' },
  { id: 'America/Lima',         label: '秘鲁 · 利马',               short: '利马',           flag: '🇵🇪', group: '南美' },
  { id: 'America/Santiago',     label: '智利 · 圣地亚哥',           short: '圣地亚哥',       flag: '🇨🇱', group: '南美' },

  // 欧洲
  { id: 'Europe/London',    label: '英国 · 伦敦',           short: '伦敦',       flag: '🇬🇧', group: '欧洲' },
  { id: 'Europe/Paris',     label: '法国 · 巴黎',           short: '巴黎',       flag: '🇫🇷', group: '欧洲' },
  { id: 'Europe/Berlin',    label: '德国 · 柏林',           short: '柏林',       flag: '🇩🇪', group: '欧洲' },
  { id: 'Europe/Madrid',    label: '西班牙 · 马德里',       short: '马德里',     flag: '🇪🇸', group: '欧洲' },
  { id: 'Europe/Rome',      label: '意大利 · 罗马',         short: '罗马',       flag: '🇮🇹', group: '欧洲' },
  { id: 'Europe/Amsterdam',  label: '荷兰 · 阿姆斯特丹',   short: '阿姆斯特丹', flag: '🇳🇱', group: '欧洲' },
  { id: 'Europe/Moscow',    label: '俄罗斯 · 莫斯科',       short: '莫斯科',     flag: '🇷🇺', group: '欧洲' },
  { id: 'Europe/Istanbul',  label: '土耳其 · 伊斯坦布尔',   short: '伊斯坦布尔', flag: '🇹🇷', group: '欧洲' },
  { id: 'Europe/Warsaw',    label: '波兰 · 华沙',           short: '华沙',       flag: '🇵🇱', group: '欧洲' },
  { id: 'Europe/Athens',    label: '希腊 · 雅典',           short: '雅典',       flag: '🇬🇷', group: '欧洲' },
  { id: 'Europe/Lisbon',    label: '葡萄牙 · 里斯本',       short: '里斯本',     flag: '🇵🇹', group: '欧洲' },

  // 大洋洲
  { id: 'Australia/Sydney',  label: '澳大利亚 · 悉尼', short: '悉尼',   flag: '🇦🇺', group: '大洋洲' },
  { id: 'Pacific/Auckland',  label: '新西兰 · 奥克兰', short: '奥克兰', flag: '🇳🇿', group: '大洋洲' },

  // 非洲
  { id: 'Africa/Cairo',         label: '埃及 · 开罗',           short: '开罗',       flag: '🇪🇬', group: '非洲' },
  { id: 'Africa/Lagos',         label: '尼日利亚 · 拉各斯',     short: '拉各斯',     flag: '🇳🇬', group: '非洲' },
  { id: 'Africa/Johannesburg',  label: '南非 · 约翰内斯堡',     short: '约翰内斯堡', flag: '🇿🇦', group: '非洲' },
  { id: 'Africa/Nairobi',       label: '肯尼亚 · 内罗毕',       short: '内罗毕',     flag: '🇰🇪', group: '非洲' },
];

// ── State ──
let regions = [];
let clocks = [];
let dragIdx = null; // for drag-drop

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  populateAllSelects();
  bindEvents();
  renderRegions();
  renderClocks();
  renderMidnight();
  setInterval(tickClocks, 1000);
});

// ── Storage ──
function loadState() {
  try {
    const r = localStorage.getItem('adclock_regions');
    const c = localStorage.getItem('adclock_clocks');
    regions = r ? JSON.parse(r) : [
      { tz: 'America/New_York' },
      { tz: 'America/Los_Angeles' },
      { tz: 'America/Sao_Paulo' },
      { tz: 'Europe/Madrid' },
      { tz: 'Asia/Jakarta' },
    ];
    clocks = c ? JSON.parse(c) : [
      { tz: 'Asia/Shanghai',      label: '北京' },
      { tz: 'America/New_York',   label: '纽约' },
      { tz: 'America/Los_Angeles', label: '洛杉矶' },
      { tz: 'America/Sao_Paulo',  label: '圣保罗' },
      { tz: 'Asia/Jakarta',       label: '雅加达' },
    ];
  } catch {}
}

function save() {
  localStorage.setItem('adclock_regions', JSON.stringify(regions));
  localStorage.setItem('adclock_clocks', JSON.stringify(clocks));
  if (typeof chrome !== 'undefined' && chrome.storage) {
    chrome.storage.local.set({ adclock_regions: regions, adclock_clocks: clocks });
  }
}

function getTzInfo(tzId) {
  return TIMEZONE_DB.find(t => t.id === tzId) || { id: tzId, label: tzId, short: tzId, flag: '🌐', group: '其他' };
}

// ── Selects ──
function populateAllSelects() {
  const selects = [document.getElementById('add-region-tz'), document.getElementById('add-timezone')];
  let groups = {};
  TIMEZONE_DB.forEach(t => { if (!groups[t.group]) groups[t.group] = []; groups[t.group].push(t); });
  selects.forEach(sel => {
    sel.innerHTML = '';
    Object.keys(groups).forEach(g => {
      const og = document.createElement('optgroup');
      og.label = g;
      groups[g].forEach(t => {
        const o = document.createElement('option');
        o.value = t.id;
        o.textContent = `${t.flag} ${t.label} (${getOffsetStr(t.id)})`;
        og.appendChild(o);
      });
      sel.appendChild(og);
    });
  });
}

// ── Time Helpers ──
function getOffsetStr(tz) {
  try {
    const f = new Intl.DateTimeFormat('en-US', { timeZone: tz, timeZoneName: 'shortOffset' });
    return (f.formatToParts(new Date()).find(x => x.type === 'timeZoneName') || {}).value || '';
  } catch { return ''; }
}

function fmtTime(d, tz) {
  return d.toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
}

function fmtDate(d, tz) {
  return d.toLocaleDateString('zh-CN', { timeZone: tz, month: '2-digit', day: '2-digit', weekday: 'short' });
}

function getDayPeriod(d, tz) {
  const h = parseInt(d.toLocaleTimeString('en-GB', { timeZone: tz, hour: '2-digit', hour12: false }));
  if (h >= 6 && h < 8)  return { t: '清晨', c: 'dawn' };
  if (h >= 8 && h < 18) return { t: '白天', c: 'day' };
  if (h >= 18 && h < 20) return { t: '傍晚', c: 'dawn' };
  return { t: '夜间', c: 'night' };
}

function getTzOffsetMs(date, tz) {
  // Returns how many ms `tz` is ahead of UTC (negative for west of UTC)
  const utcStr = date.toLocaleString('en-US', { timeZone: 'UTC' });
  const tzStr = date.toLocaleString('en-US', { timeZone: tz });
  return new Date(tzStr).getTime() - new Date(utcStr).getTime();
}

function convertToChina(timeStr, fromTz) {
  const now = new Date();
  const dateInTz = now.toLocaleDateString('en-CA', { timeZone: fromTz }); // today in source tz

  // Treat the wall-clock time as UTC first (just a reference point)
  const wallClockAsUTC = new Date(`${dateInTz}T${timeStr}:00Z`);

  // Get source timezone's offset from UTC (e.g. LA PDT = -7h = -25200000ms)
  const srcOffsetMs = getTzOffsetMs(wallClockAsUTC, fromTz);

  // Real UTC = wall clock time minus the source offset
  // e.g. LA 18:00 with offset -7h → UTC = 18:00 - (-7h) = 18:00 + 7h = 01:00 next day
  const realUTC = new Date(wallClockAsUTC.getTime() - srcOffsetMs);

  // Format in China timezone
  const ct = realUTC.toLocaleTimeString('en-GB', { timeZone: 'Asia/Shanghai', hour: '2-digit', minute: '2-digit', hour12: false });
  const cd = realUTC.toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });
  const dayOffset = Math.round((new Date(cd) - new Date(dateInTz)) / 86400000);

  return { time: ct, dayOffset };
}

// ── Render Regions ──
function renderRegions() {
  const list = document.getElementById('region-list');
  const s = document.getElementById('conv-start').value;
  const e = document.getElementById('conv-end').value;
  list.innerHTML = '';

  regions.forEach((region, idx) => {
    const info = getTzInfo(region.tz);
    let chinaTime = '', note = '', isWarn = false;

    if (s && e) {
      const cs = convertToChina(s, region.tz);
      const ce = convertToChina(e, region.tz);
      chinaTime = `${cs.time} → ${ce.time}`;
      const notes = [];
      new Set([cs.dayOffset, ce.dayOffset]).forEach(d => {
        if (d === 1) notes.push('次日');
        if (d === -1) notes.push('前日');
        if (d === 2) notes.push('后天');
      });
      const h = parseInt(cs.time);
      if ((h >= 0 && h < 7) || h >= 23) { isWarn = true; notes.push('需盯盘'); }
      note = notes.join(' · ');
    }

    const el = document.createElement('div');
    el.className = 'region-item';
    el.draggable = true;
    el.dataset.idx = idx;

    el.innerHTML = `
      <div class="region-grip" title="拖拽排序">⠿</div>
      <div class="region-flag">${info.flag}</div>
      <div class="region-info">
        <div class="region-name">${info.label}</div>
        <div class="region-offset">${getOffsetStr(region.tz)} · 当地 ${s}-${e}</div>
      </div>
      <div class="region-china">
        <div class="region-china-time">${chinaTime}</div>
        <div class="region-china-note ${isWarn ? 'warn' : ''}">${note}</div>
      </div>
      <button class="region-remove" data-idx="${idx}" title="删除">✕</button>
    `;

    // Drag events
    el.addEventListener('dragstart', (ev) => {
      dragIdx = idx;
      el.classList.add('dragging');
      ev.dataTransfer.effectAllowed = 'move';
    });
    el.addEventListener('dragend', () => {
      el.classList.remove('dragging');
      dragIdx = null;
      document.querySelectorAll('.region-item').forEach(x => {
        x.classList.remove('drag-over', 'drag-over-below');
      });
    });
    el.addEventListener('dragover', (ev) => {
      ev.preventDefault();
      ev.dataTransfer.dropEffect = 'move';
      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      el.classList.remove('drag-over', 'drag-over-below');
      if (ev.clientY < mid) {
        el.classList.add('drag-over');
      } else {
        el.classList.add('drag-over-below');
      }
    });
    el.addEventListener('dragleave', () => {
      el.classList.remove('drag-over', 'drag-over-below');
    });
    el.addEventListener('drop', (ev) => {
      ev.preventDefault();
      el.classList.remove('drag-over', 'drag-over-below');
      if (dragIdx === null || dragIdx === idx) return;

      const rect = el.getBoundingClientRect();
      const mid = rect.top + rect.height / 2;
      const insertBefore = ev.clientY < mid;

      const item = regions.splice(dragIdx, 1)[0];
      let targetIdx = idx;
      if (dragIdx < idx) targetIdx--;
      if (!insertBefore) targetIdx++;
      regions.splice(targetIdx, 0, item);

      save();
      renderRegions();
    });

    list.appendChild(el);
  });
}

// ── Render Clocks ──
function renderClocks() {
  const list = document.getElementById('clock-list');
  const empty = document.getElementById('empty-clock');
  if (clocks.length === 0) {
    list.style.display = 'none'; empty.style.display = 'block'; return;
  }
  list.style.display = 'flex'; empty.style.display = 'none';
  list.innerHTML = '';
  const now = new Date();
  clocks.forEach((c, i) => {
    const info = getTzInfo(c.tz);
    const p = getDayPeriod(now, c.tz);
    const el = document.createElement('div');
    el.className = 'clock-item';
    el.innerHTML = `
      <div class="clock-left">
        <div class="clock-label">${info.flag} ${c.label}</div>
        <div class="clock-utc">${getOffsetStr(c.tz)}</div>
      </div>
      <div class="clock-right">
        <div>
          <div class="clock-time" data-tz="${c.tz}">${fmtTime(now, c.tz)}</div>
          <div class="clock-date">${fmtDate(now, c.tz)} <span class="clock-period-tag period-${p.c}">${p.t}</span></div>
        </div>
        <button class="clock-remove" data-idx="${i}" title="删除">✕</button>
      </div>
    `;
    list.appendChild(el);
  });
}

function tickClocks() {
  const now = new Date();
  document.querySelectorAll('.clock-time[data-tz]').forEach(el => {
    el.textContent = fmtTime(now, el.dataset.tz);
  });
}

// ── Render Midnight Reference ──
function renderMidnight() {
  const list = document.getElementById('midnight-list');
  list.innerHTML = '';

  // Group by region
  const groups = {};
  TIMEZONE_DB.forEach(tz => {
    // Skip China itself
    if (tz.id === 'Asia/Shanghai') return;
    if (!groups[tz.group]) groups[tz.group] = [];

    // Convert midnight (00:00) in this timezone to Beijing time
    const result = convertToChina('00:00', tz.id);

    groups[tz.group].push({
      ...tz,
      chinaTime: result.time,
      dayOffset: result.dayOffset,
    });
  });

  // Sort each group by chinaTime
  Object.keys(groups).forEach(g => {
    groups[g].sort((a, b) => {
      // Sort by actual Beijing hour
      const ha = parseInt(a.chinaTime);
      const hb = parseInt(b.chinaTime);
      return ha - hb;
    });
  });

  // Render
  const groupOrder = ['北美', '南美', '欧洲', '亚洲', '大洋洲', '非洲'];
  groupOrder.forEach(g => {
    if (!groups[g]) return;

    const header = document.createElement('div');
    header.className = 'midnight-group-header';
    header.textContent = g;
    list.appendChild(header);

    groups[g].forEach(tz => {
      let dayTag = '', dayClass = 'same';
      if (tz.dayOffset === 1) { dayTag = '次日'; dayClass = 'next'; }
      else if (tz.dayOffset === -1) { dayTag = '前日'; dayClass = 'prev'; }
      else if (tz.dayOffset === 0) { dayTag = '当日'; dayClass = 'same'; }

      const row = document.createElement('div');
      row.className = 'midnight-row';
      row.innerHTML = `
        <span class="midnight-flag">${tz.flag}</span>
        <span class="midnight-name">${tz.short}</span>
        <span class="midnight-offset">${getOffsetStr(tz.id)}</span>
        <span class="midnight-china">${tz.chinaTime}</span>
        <span class="midnight-day-tag ${dayClass}">${dayTag}</span>
      `;
      list.appendChild(row);
    });
  });
}

// ── Events ──
function bindEvents() {
  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
    });
  });

  // Time change → refresh regions
  ['conv-start', 'conv-end'].forEach(id => {
    document.getElementById(id).addEventListener('change', renderRegions);
  });

  // Preset chips
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      document.getElementById('conv-start').value = chip.dataset.start;
      document.getElementById('conv-end').value = chip.dataset.end;
      renderRegions();
    });
  });

  // Add region
  document.getElementById('btn-add-region').addEventListener('click', () => {
    document.getElementById('add-region-panel').style.display = 'flex';
  });
  document.getElementById('btn-cancel-region').addEventListener('click', () => {
    document.getElementById('add-region-panel').style.display = 'none';
  });
  document.getElementById('btn-confirm-region').addEventListener('click', () => {
    const tz = document.getElementById('add-region-tz').value;
    if (!regions.find(r => r.tz === tz)) {
      regions.push({ tz });
      save();
      renderRegions();
    }
    document.getElementById('add-region-panel').style.display = 'none';
  });

  // Remove region (delegated)
  document.getElementById('region-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.region-remove');
    if (btn) { regions.splice(parseInt(btn.dataset.idx), 1); save(); renderRegions(); }
  });

  // ── Add clock (timezone-first, auto-fill label) ──
  const addTzSelect = document.getElementById('add-timezone');
  const addLabelInput = document.getElementById('add-label');

  document.getElementById('btn-add-clock').addEventListener('click', () => {
    document.getElementById('modal-add').style.display = 'flex';
    // Auto-fill label from current selection
    const info = getTzInfo(addTzSelect.value);
    addLabelInput.value = info.short;
    addLabelInput.select();
  });

  // When timezone changes, auto-fill the label
  addTzSelect.addEventListener('change', () => {
    const info = getTzInfo(addTzSelect.value);
    addLabelInput.value = info.short;
    addLabelInput.select();
  });

  document.getElementById('btn-cancel-add').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

  document.getElementById('btn-confirm-add').addEventListener('click', () => {
    const tz = addTzSelect.value;
    let label = addLabelInput.value.trim();
    if (!label) label = getTzInfo(tz).short;
    clocks.push({ tz, label });
    save();
    renderClocks();
    closeModal();
  });

  addLabelInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('btn-confirm-add').click();
  });

  // Remove clock
  document.getElementById('clock-list').addEventListener('click', (e) => {
    const btn = e.target.closest('.clock-remove');
    if (btn) { clocks.splice(parseInt(btn.dataset.idx), 1); save(); renderClocks(); }
  });
}

function closeModal() {
  document.getElementById('modal-add').style.display = 'none';
}
