// SERKAP! - logik permainan
// ================= SISTEM IKON VEKTOR SVG NUSANTARA (ICONS & .j-svg) =================
const ICONS = {
  // Bendera & Identiti Malaysia + Serkap Buluh Tradisional
  flag_my: `<rect x="2" y="5" width="20" height="14" rx="2" fill="#cc0001" stroke="none"/><path d="M2 7.5h20M2 10.5h20M2 13.5h20M2 16.5h20" stroke="#fff" stroke-width="1.4"/><rect x="2" y="5" width="10" height="8" rx="1" fill="#010066" stroke="none"/><path d="M6.8 6.8a2.2 2.2 0 1 0 0 4.4 1.9 1.9 0 0 1 0-4.4z" fill="#ffcc00" stroke="none"/><circle cx="8.8" cy="9" r="0.9" fill="#ffcc00" stroke="none"/>`,
  serkap_trap: `<path d="M8.5 3.5h7l4.5 16.5H4L8.5 3.5z" fill="rgba(224,163,92,0.18)"/><path d="M9.5 3.5c-1 5.5-2 11-2.5 16.5M14.5 3.5c1 5.5 2 11 2.5 16.5M12 3.5V20M6.2 9.5h11.6M5 15h14"/><ellipse cx="12" cy="3.5" rx="3.5" ry="1.3" fill="rgba(224,163,92,0.35)"/>`,

  // Watak Permainan
  rakyat: `<path d="M12 2.5l7 3.2v5.3c0 5-3 9.3-7 10.8-4-1.5-7-5.8-7-10.8V5.7l7-3.2z" fill="rgba(58,161,126,0.18)" stroke="#3aa17e"/><path d="M9 12.2l2 2 4.2-4.4" stroke="#3aa17e" stroke-width="2.4"/>`,
  lalang: `<path d="M12 21V7M12 21c-1.5-4.5-4.5-8-8-9.5M12 21c1.5-5 4.5-8.5 8-10M8.5 21c-.5-4-2-7.5-5-9.5M15.5 21c.5-4 2-7.5 5-9.5" stroke="#e0a35c"/><path d="M12 4l-1.5 3 1.5 1 1.5-1L12 4z" fill="#e0a35c" stroke="none"/>`,
  goreng: `<path d="M3 10.5h18M5.5 10.5l1.5-5a2 2 0 0 1 2-1.4h6a2 2 0 0 1 2 1.4l1.5 5"/><circle cx="8.5" cy="15.5" r="2.8" fill="rgba(255,255,255,0.12)"/><circle cx="15.5" cy="15.5" r="2.8" fill="rgba(255,255,255,0.12)"/><path d="M11.3 15.5h1.4"/>`,
  kuali: `<circle cx="10.5" cy="12" r="6.5" fill="rgba(232,116,59,0.16)"/><path d="M16.5 9.5L22 6.5"/><circle cx="10.5" cy="12" r="2.5" fill="#e0a35c" stroke="none"/>`,
  blur: `<circle cx="12" cy="12" r="9" fill="rgba(199,155,216,0.15)"/><path d="M7.5 9.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m6 0a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"/><path d="M8.5 16c1-1.3 2.2-1.3 3.5 0s2.5 1.3 3.5 0"/>`,

  // UI & Navigasi
  home: `<path d="M3 10.5L12 3l9 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-9z"/><path d="M9 21v-6h6v6"/>`,
  users: `<circle cx="9" cy="8" r="3.5"/><path d="M2.5 19.5c0-3.1 2.9-5.5 6.5-5.5s6.5 2.4 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M17.5 14.2c2.4.4 4 2.2 4 4.8"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.77 1.02 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
  trophy: `<path d="M6 4h12v4a6 6 0 0 1-12 0V4z" fill="rgba(255,204,0,0.16)"/><path d="M6 6H3v2a3 3 0 0 0 3 3M18 6h3v2a3 3 0 0 1-3 3M12 14v4M8 21h8"/>`,
  book: `<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>`,
  sparkles: `<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" fill="rgba(255,204,0,0.2)"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16zM5 16l.7 1.8L7.5 18.5l-1.8.7L5 21l-.7-1.8L2.5 18.5l1.8-.7L5 16z"/>`,
  play: `<polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none"/>`,
  pause: `<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>`,
  arrow_left: `<path d="M19 12H5M12 19l-7-7 7-7"/>`,
  arrow_right: `<path d="M5 12h14M12 5l7 7-7 7"/>`,
  close: `<path d="M18 6L6 18M6 6l12 12"/>`,
  check: `<path d="M20 6L9 17l-5-5" stroke-width="2.5"/>`,
  plus: `<path d="M12 5v14M5 12h14" stroke-width="2.4"/>`,
  refresh: `<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>`,
  edit: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>`,
  trash: `<path d="M3 6h18M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6M18.5 6l-.8 13a2 2 0 0 1-2 1.9H8.3a2 2 0 0 1-2-1.9L5.5 6M10 10.5v6M14 10.5v6"/>`,
  volume_on: `<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="rgba(224,163,92,0.2)"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>`,
  volume_off: `<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="rgba(224,163,92,0.2)"/><path d="M16 9.5l5 5M21 9.5l-5 5"/>`,
  lock: `<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>`,
  scale: `<path d="M12 3v18M5 7l7-2 7 2M5 7l-3 6h6L5 7zM19 7l-3 6h6l-3-6zM8 21h8"/>`,
  flame: `<path d="M12 2c1.5 3.5 4.5 5.5 4.5 9.5a5.5 5.5 0 0 1-11 0c0-2.5 1.3-4.6 2.5-6 0 2 1.5 3 2 3-.5-2.5.5-4.8 2-6.5z" fill="rgba(255,122,43,0.25)"/>`,
  bolt: `<polygon points="13 2 4 14 12 14 11 22 20 10 12 10 13 2" fill="rgba(255,204,0,0.25)"/>`,
  wheel: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v7M12 14v7M3 12h7M14 12h7M5.6 5.6l5 5M13.4 13.4l5 5M18.4 5.6l-5 5M10.6 13.4l-5 5"/>`,
  dice: `<rect x="3" y="3" width="18" height="18" rx="3.5" fill="rgba(255,255,255,0.06)"/><circle cx="8.5" cy="8.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="15.5" cy="8.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><circle cx="8.5" cy="15.5" r="1.3" fill="currentColor" stroke="none"/><circle cx="15.5" cy="15.5" r="1.3" fill="currentColor" stroke="none"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>`,
  folder: `<path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z"/>`,
  search: `<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>`,
  shush: `<circle cx="12" cy="10" r="7"/><path d="M9.5 9h.01M14.5 9h.01M12 12v8"/><rect x="10.5" y="13" width="3" height="7" rx="1.5" fill="var(--bg)"/>`,
  finger_tap: `<path d="M12 11V4.5a1.8 1.8 0 0 0-3.6 0V13l-1.9-1.5a1.7 1.7 0 0 0-2.4 2.4l4.4 5.1c.8.9 2 1.5 3.3 1.5h3.7a4 4 0 0 0 4-4v-3.5a1.7 1.7 0 0 0-3.4 0v-.5a1.7 1.7 0 0 0-3.4 0v-.5z"/><path d="M6.5 4.5a4.5 4.5 0 0 1 7.4 0"/>`,
  point_right: `<path d="M4 12h13M13 7l5 5-5 5" stroke-width="2.4"/>`,
  bulb: `<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.8 10.6c.7.6 1.3 1.5 1.5 2.4h4.6c.2-.9.8-1.8 1.5-2.4A6 6 0 0 0 12 3z" fill="rgba(255,204,0,0.18)"/>`,
  speech: `<path d="M21 11.5a8.4 8.4 0 0 1-9 8 8.8 8.8 0 0 1-4-.9L3 20l1.4-4.2A8 8 0 0 1 3 11.5a8.5 8.5 0 0 1 9-8 8.5 8.5 0 0 1 9 8z"/>`,
  warning: `<path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" fill="rgba(255,204,0,0.16)"/><path d="M12 9v4M12 17h.01"/>`,
  target: `<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`,

  // Soundboard, Anugerah & Keputusan
  cricket: `<path d="M5 16c2-5 7-7 13-6 0 4-3 7-8 7H5z"/><path d="M14 10l4-5M16 10l4-2M8 17l-3 4M12 17l2 4M15 16l5 4"/>`,
  siren: `<path d="M7 18v-5a5 5 0 0 1 10 0v5" fill="rgba(255,71,87,0.28)"/><rect x="5" y="18" width="14" height="3" rx="1"/><path d="M12 2v2M4.2 5.2l1.4 1.4M19.8 5.2l-1.4 1.4M2 12h2M20 12h2"/>`,
  gavel: `<path d="M14 4l6 6-3 3-6-6 3-3z" fill="rgba(255,204,0,0.2)"/><path d="M12.5 8.5L4 17l3 3 8.5-8.5M3 21h9"/>`,
  drum: `<ellipse cx="12" cy="9" rx="8" ry="3.5" fill="rgba(255,204,0,0.2)"/><path d="M4 9v7c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5V9"/><path d="M8 12v7M12 12.5v7M16 12v7M4 3l6 4M20 3l-6 4"/>`,
  crown: `<path d="M3 18h18L19 7l-4.5 4L12 5 9.5 11 5 7 3 18z" fill="rgba(255,204,0,0.28)"/><path d="M3 21h18"/>`,
  medal_silver: `<circle cx="12" cy="14" r="5.5" fill="rgba(227,230,239,0.25)"/><path d="M9 3l3 5.5L15 3M10.5 14h3"/>`,
  medal_bronze: `<circle cx="12" cy="14" r="5.5" fill="rgba(235,165,116,0.25)"/><path d="M9 3l3 5.5L15 3M12 12v4"/>`,
  party: `<path d="M4 20L10 6l8 8-14 6z" fill="rgba(0,229,163,0.22)"/><path d="M14 4l1 2M19 6l-2 1M18 11l2 1M11 3l-1 2"/><circle cx="16" cy="4" r="1" fill="#ffcc00" stroke="none"/><circle cx="20" cy="9" r="1" fill="#ff2a5f" stroke="none"/>`,
  clown: `<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12.5" r="2.2" fill="#ff2a5f" stroke="none"/><path d="M8.5 9.5h.01M15.5 9.5h.01M8.5 15.5c1.8 1.8 5.2 1.8 7 0"/><path d="M4 9c-1.5-1-1.5-3.5 1-4M20 9c1.5-1 1.5-3.5-1-4"/>`,
  steal_mask: `<path d="M3 10c2-3 5.5-4 9-4s7 1 9 4c-1 5-4.5 7-9 7s-8-2-9-7z" fill="rgba(255,122,43,0.25)"/><ellipse cx="8.5" cy="11" rx="2" ry="1.3"/><ellipse cx="15.5" cy="11" rx="2" ry="1.3"/>`,
  sad_fitnah: `<circle cx="12" cy="12" r="9"/><path d="M9 9.5h.01M15 9.5h.01"/><path d="M8.5 16c1.5-1.5 5.5-1.5 7 0"/><path d="M8.5 11.5v3M15.5 11.5v3" stroke="#3a86ff"/>`,
  question_face: `<circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.3 2.3 0 0 1 4.4.8c0 1.5-2.2 2-2.2 3.2"/><circle cx="12" cy="16.5" r="0.8" fill="currentColor" stroke="none"/>`,

  // 16 Ikon Kategori Nusantara
  cat_makan: `<path d="M3 15c2-4 6-6 11-5 3 .6 5.5 2.5 7 5H3z" fill="rgba(0,229,163,0.18)"/><path d="M7 15c1-3.5 3.5-5.5 6-5.5s4.5 2 5 5.5" fill="rgba(255,255,255,0.18)"/><circle cx="9.5" cy="12.5" r="1.4" fill="#ff4757" stroke="none"/><path d="M2 18h20"/>`,
  cat_kuih: `<rect x="4" y="6" width="16" height="12" rx="2.5" fill="rgba(255,42,95,0.16)"/><path d="M4 10h16M4 14h16"/>`,
  cat_minum: `<path d="M7 6h10l-1.2 14a2 2 0 0 1-2 1.8h-3.6a2 2 0 0 1-2-1.8L7 6z" fill="rgba(255,122,43,0.2)"/><path d="M6 6h12M13 6l2-4"/><circle cx="10" cy="16" r="1" fill="currentColor" stroke="none"/><circle cx="13" cy="17" r="1" fill="currentColor" stroke="none"/><circle cx="11.5" cy="14" r="1" fill="currentColor" stroke="none"/>`,
  cat_port: `<path d="M4 10l1.5-5h13L20 10"/><path d="M4 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" fill="rgba(255,204,0,0.18)"/><path d="M5 12v8h14v-8M9 20v-5h6v5"/>`,
  cat_negeri: `<path d="M3 19c3-1.5 6-1.5 9 0s6 1.5 9 0"/><path d="M11 18V7M11 7c-2-2.5-5.5-2-7 0M11 7c2.5-2.5 6-1.5 7.5 1M11 7c-3 0-5 2-5.5 4M11 7c3 0 5 2 5.5 4"/><circle cx="18" cy="5" r="2" fill="rgba(255,204,0,0.3)"/>`,
  cat_kenderaan: `<path d="M5 11l2-5h10l2 5"/><rect x="3" y="11" width="18" height="6" rx="2" fill="rgba(58,134,255,0.2)"/><circle cx="7" cy="17.5" r="2"/><circle cx="17" cy="17.5" r="2"/>`,
  cat_rumah: `<path d="M2 11l10-7 10 7"/><path d="M5 10v9h14v-9" fill="rgba(255,204,0,0.14)"/><path d="M9 19v-5h6v5M7 19v2M17 19v2"/>`,
  cat_sekolah: `<rect x="5" y="6" width="14" height="15" rx="3" fill="rgba(58,134,255,0.18)"/><path d="M9 6V4a3 3 0 0 1 6 0v2M5 12h14M9 15h6"/>`,
  cat_kerja: `<rect x="3" y="7" width="18" height="13" rx="2" fill="rgba(255,204,0,0.15)"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>`,
  cat_tech: `<rect x="6" y="2.5" width="12" height="19" rx="2.5" fill="rgba(139,92,246,0.18)"/><path d="M10 5.5h4M12 18.5h.01"/>`,
  cat_haiwan: `<circle cx="12" cy="12" r="2.2" fill="#ffcc00"/><path d="M12 3c2 2 2.5 4.5 0 6.8C9.5 7.5 10 5 12 3zM21 12c-2 2-4.5 2.5-6.8 0 2.3-2.5 4.8-2 6.8 0zM12 21c-2-2-2.5-4.5 0-6.8 2.5 2.3 2 4.8 0 6.8zM3 12c2-2 4.5-2.5 6.8 0-2.3 2.5-4.8 2-6.8 0z" fill="rgba(255,42,95,0.22)"/>`,
  cat_budaya: `<polygon points="12 4 19 11 12 18 5 11" fill="rgba(0,229,163,0.22)"/><path d="M8.5 7.5l7 7M15.5 7.5l-7 7M12 2v2M10 21l2-3 2 3"/>`,
  cat_hiburan: `<rect x="3" y="5" width="18" height="15" rx="2" fill="rgba(255,42,95,0.15)"/><path d="M3 9h18M7 5l2 4M13 5l2 4"/><polygon points="10 12 15 14.5 10 17 10 12" fill="currentColor" stroke="none"/>`,
  cat_sukan: `<circle cx="12" cy="18" r="2.5" fill="rgba(255,255,255,0.25)"/><path d="M9.8 16L6 5l4 2 2-3 2 3 4-2-3.8 11"/><path d="M7.5 10h9"/>`,
  cat_seram: `<path d="M6 19v-7a6 6 0 0 1 12 0v7l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5z" fill="rgba(139,92,246,0.2)"/><circle cx="9.8" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="14.2" cy="11" r="1" fill="currentColor" stroke="none"/>`,
  cat_pedas: `<path d="M17 6c2 3 1 8-3 12-3.5 3.5-8 4-10 2 2-.5 5-2.5 7-5 2.5-3 3-6.5 6-9z" fill="rgba(255,42,95,0.3)"/><path d="M17 6c1-2 2.5-3 4-2.5"/>`,

  // 20 Avatar Nusantara
  oyen: `<path d="M5 9V4l4 3h6l4-3v5a7 7 0 0 1-14 0z" fill="rgba(255,255,255,0.18)"/><path d="M9 11h.01M15 11h.01M11 13.5l1 1 1-1M12 7v2"/>`,
  kapcai: `<circle cx="6.5" cy="16.5" r="3"/><circle cx="17.5" cy="16.5" r="3"/><path d="M6.5 16.5L10 10h4l2.5 6.5M12 10l-1.5-4H8M14 13h4"/>`,
  tudung: `<path d="M12 3a7 7 0 0 0-7 7v6c2.5 2.5 5 3.5 7 3.5s4.5-1 7-3.5v-6a7 7 0 0 0-7-7z" fill="rgba(255,255,255,0.16)"/><circle cx="12" cy="10.5" r="3.8"/><path d="M10.5 10h.01M13.5 10h.01M11 12c.6.5 1.4.5 2 0"/>`,
  polis: `<path d="M5 9l7-4 7 4-1.5 2.5H6.5L5 9z" fill="rgba(255,255,255,0.25)"/><path d="M6.5 11.5a5.5 5.5 0 0 0 11 0M8 14h8"/>`,
  spek: `<rect x="2.5" y="9" width="8" height="6" rx="1.8" fill="rgba(255,255,255,0.22)"/><rect x="13.5" y="9" width="8" height="6" rx="1.8" fill="rgba(255,255,255,0.22)"/><path d="M10.5 11h3M2.5 10.5L1 9M21.5 10.5L23 9"/>`,
  boba: `<path d="M7 7h10l-1.2 13h-7.6L7 7z" fill="rgba(255,255,255,0.18)"/><path d="M6 7h12M13 7l1.5-4"/><circle cx="10" cy="16.5" r="1" fill="currentColor" stroke="none"/><circle cx="13.5" cy="16.5" r="1" fill="currentColor" stroke="none"/>`,
  gitar: `<circle cx="9" cy="15" r="4.5" fill="rgba(255,255,255,0.18)"/><path d="M12.2 11.8L20 4M18 3l3 3"/><circle cx="9" cy="15" r="1.2"/>`,
  hantu: `<path d="M6 19v-7a6 6 0 0 1 12 0v7l-3-2-3 2-3-2-3 2z" fill="rgba(255,255,255,0.18)"/><circle cx="9.8" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="14.2" cy="11" r="1" fill="currentColor" stroke="none"/>`,
  harimau: `<circle cx="12" cy="12.5" r="6.5" fill="rgba(255,255,255,0.18)"/><path d="M6.5 7.5a2.2 2.2 0 1 1 3-2M17.5 7.5a2.2 2.2 0 1 0-3-2M6 11h2M6 13.5h2M16 11h2M16 13.5h2M10.5 14l1.5 1.2 1.5-1.2"/>`,
  topi: `<path d="M5 13a7 7 0 0 1 14 0H5z" fill="rgba(255,255,255,0.22)"/><path d="M3 13h18l2 2.5H5"/>`,
  gamepad: `<rect x="2.5" y="7" width="19" height="10" rx="5" fill="rgba(255,255,255,0.18)"/><path d="M7.5 10v4M5.5 12h4"/><circle cx="15.5" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="17.5" cy="13" r="1" fill="currentColor" stroke="none"/>`,
  musang: `<polygon points="12 18 4 8 8 4 12 8 16 4 20 8 12 18" fill="rgba(255,255,255,0.18)"/><circle cx="9.5" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="14.5" cy="11" r="1" fill="currentColor" stroke="none"/>`,
  katak: `<path d="M4 13a8 6 0 0 0 16 0c0-3-2-5-4-5-1.2 0-2.2.5-4 .5S9.2 8 8 8c-2 0-4 2-4 5z" fill="rgba(255,255,255,0.18)"/><circle cx="8" cy="7.5" r="2"/><circle cx="16" cy="7.5" r="2"/><path d="M8.5 14c2 1.5 5 1.5 7 0"/>`,
  tengkolok: `<path d="M4 16h16v2H4z"/><path d="M5 16L4 9l5.5 3L12 5l2.5 7L20 9l-1 7H5z" fill="rgba(255,255,255,0.22)"/>`,
  tembikai: `<path d="M3 10a9 9 0 0 0 18 0H3z" fill="rgba(255,255,255,0.2)"/><circle cx="9" cy="13" r="0.9" fill="currentColor" stroke="none"/><circle cx="12" cy="14.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="0.9" fill="currentColor" stroke="none"/>`,
  wau: `<path d="M12 3c4.5 2.5 7 5.5 7 8.5 0 2.5-3 4-7 4s-7-1.5-7-4C5 8.5 7.5 5.5 12 3z" fill="rgba(255,255,255,0.2)"/><path d="M6.5 18.5a6.5 4 0 0 1 11 0M12 3v18"/>`,
  tapir: `<rect x="4" y="8" width="15" height="9" rx="4.5" fill="rgba(255,255,255,0.2)"/><path d="M11 8v9M19 11.5c1.5 0 2.5 1 2.5 2.5H18M7 17v3M15 17v3"/><circle cx="15.5" cy="11" r="0.9" fill="currentColor" stroke="none"/>`,
  cili: `<path d="M16.5 6.5c2 3 1 7.5-3 11.5-3.5 3.5-7.5 4-9.5 2 2-.5 4.8-2.3 6.8-4.8 2.3-2.8 2.8-6.2 5.7-8.7z" fill="rgba(255,255,255,0.22)"/><path d="M16.5 6.5c1-2 2.2-2.8 3.8-2.3"/>`,
  mikrofon: `<rect x="9" y="3" width="6" height="10" rx="3" fill="rgba(255,255,255,0.22)"/><path d="M6 10a6 6 0 0 0 12 0M12 16v5M9 21h6"/>`
};

// Pemetaan keserasian data lama (emoji -> kunci ikon SVG)
const LEGACY_ICON_MAP = {
  '🐱': 'oyen', '🛵': 'kapcai', '🧕': 'tudung', '👮‍♂️': 'polis', '🕶️': 'spek',
  '🧋': 'boba', '🎸': 'gitar', '👻': 'hantu', '🐯': 'harimau', '🧢': 'topi',
  '🥘': 'kuali', '🎮': 'gamepad', '🦊': 'musang', '🐸': 'katak', '🤠': 'tengkolok',
  '🍉': 'tembikai', '🦄': 'wau', '🐼': 'tapir', '🌶️': 'cili', '🎤': 'mikrofon'
};

function ico(name, cls = '') {
  const key = LEGACY_ICON_MAP[name] || name;
  const body = ICONS[key];
  if (!body) return esc(name);
  return `<svg class="j-svg${cls ? ' ' + cls : ''}" viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
}

// ================= LAMBANG LOGO: SUSPEK KENA SERKAP =================
// Serkap buluh beranyam, sepasang mata mengintai dari bawah, kanta penyiasat & sinar.
// Dipakai pada papan tanda, ikon tab browser & ikon Home Screen.
function logoSVG() {
  const C = 32; // titik tengah
  const rays = Array.from({ length: 12 }, (_, i) =>
    `<path d="M${C} ${C}L${C - 3.2} 0h6.4z" transform="rotate(${i * 30} ${C} ${C})"/>`).join('');
  // Gelang anyaman: lebar serkap bertambah dari atas (y15) ke bawah (y45)
  const halfW = y => 5.5 + (y - 15) * 0.383;
  const rings = [21.5, 28, 34.5, 40.5].map(y => {
    const w = halfW(y);
    return `<path d="M${C - 1 - w} ${y}Q${C - 1} ${y + 2.6} ${C - 1 + w} ${y}" stroke="#7a4a1c" stroke-width="1.7"/>
      <path d="M${C - 1 - w + 0.6} ${y - 0.9}Q${C - 1} ${y + 1.6} ${C - 1 + w - 0.6} ${y - 0.9}" stroke="#f6dca0" stroke-width="0.6" opacity="0.75"/>`;
  }).join('');
  const slats = [[27, 17.6], [29, 24], [31, 31], [33, 38], [35, 44.4]]
    .map(([top, bottom]) => `<path d="M${top} 15.6Q${(top + bottom) / 2} 31 ${bottom} 45.8"/>`).join('');
  const spark = (x, y, s) =>
    `<path class="lg-spark" d="M${x} ${y - s}L${x + s * 0.28} ${y - s * 0.28}L${x + s} ${y}L${x + s * 0.28} ${y + s * 0.28}L${x} ${y + s}L${x - s * 0.28} ${y + s * 0.28}L${x - s} ${y}L${x - s * 0.28} ${y - s * 0.28}Z"/>`;

  return `<svg class="logo-svg" viewBox="0 0 64 64" aria-hidden="true">
    <defs>
      <radialGradient id="lgBg" cx="40%" cy="32%" r="72%"><stop offset="0" stop-color="#52b891"/><stop offset="0.62" stop-color="#23664c"/><stop offset="1" stop-color="#143a2c"/></radialGradient>
      <linearGradient id="lgBamboo" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a5672a"/><stop offset="0.33" stop-color="#f3d38a"/><stop offset="0.62" stop-color="#e2b25f"/><stop offset="1" stop-color="#94591f"/></linearGradient>
      <radialGradient id="lgGlass" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#ffffff" stop-opacity="0.6"/><stop offset="0.5" stop-color="#cfefff" stop-opacity="0.2"/><stop offset="1" stop-color="#9fd8ff" stop-opacity="0.12"/></radialGradient>
      <clipPath id="lgClip"><circle cx="${C}" cy="${C}" r="29"/></clipPath>
    </defs>
    <circle cx="${C}" cy="${C}" r="31.5" fill="#f7e9cd"/>
    <circle cx="${C}" cy="${C}" r="29" fill="url(#lgBg)"/>
    <g clip-path="url(#lgClip)"><g class="lg-rays" fill="#f7e9cd" opacity="0.13">${rays}</g></g>
    <circle cx="${C}" cy="${C}" r="31.5" fill="none" stroke="#1f5c45" stroke-width="1"/>
    <circle cx="${C}" cy="${C}" r="27.6" fill="none" stroke="#f7e9cd" stroke-width="0.6" stroke-dasharray="1.5 2.2" opacity="0.45"/>

    <ellipse cx="31" cy="55.2" rx="19" ry="2.8" fill="#0b241b" opacity="0.6"/>
    <!-- Ruang gelap bawah serkap: suspek bersembunyi -->
    <ellipse cx="31" cy="50.8" rx="16" ry="5" fill="#120c08"/>
    <g class="lg-eyes">
      <ellipse cx="25.6" cy="51.2" rx="3.4" ry="2.7" fill="#fffaf0"/>
      <ellipse cx="34.8" cy="51.2" rx="3.4" ry="2.7" fill="#fffaf0"/>
      <g class="lg-pupils" fill="#120c08"><circle cx="26.3" cy="51.6" r="1.55"/><circle cx="35.5" cy="51.6" r="1.55"/></g>
      <circle cx="25" cy="50.6" r="0.55" fill="#fff"/><circle cx="34.2" cy="50.6" r="0.55" fill="#fff"/>
    </g>
    <path d="M19 47.6q-1.6 2.1 -1.6 3.2a1.6 1.6 0 0 0 3.2 0q0 -1.1 -1.6 -3.2z" fill="#bfe6ff"/>

    <!-- Serkap buluh -->
    <path d="M25.5 15C24 25 18 36 14 45.2Q31 49.8 48 45.2C44 36 38 25 36.5 15Z" fill="url(#lgBamboo)" stroke="#6e4319" stroke-width="1.2" stroke-linejoin="round"/>
    <g fill="none" stroke="#8a5a22" stroke-width="0.9" opacity="0.75">${slats}</g>
    <g fill="none" stroke-linecap="round">${rings}</g>
    <path d="M23.6 19.5Q20.2 31 18 40.5" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" opacity="0.28"/>
    <path d="M14 45.2Q31 49.8 48 45.2" fill="none" stroke="#7d4b1b" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M15.6 44.4Q31 48.6 46.4 44.4" fill="none" stroke="#f0c97a" stroke-width="0.9" stroke-linecap="round" opacity="0.85"/>
    <ellipse cx="31" cy="15" rx="5.5" ry="1.9" fill="#4a2e14" stroke="#e7bd6c" stroke-width="1.3"/>

    <!-- Kanta penyiasat -->
    <path d="M51 39L57 45" stroke="#3d2511" stroke-width="4.8" stroke-linecap="round"/>
    <path d="M50.4 38.4L52.4 40.4" stroke="#f6c27a" stroke-width="5.2" stroke-linecap="butt"/>
    <circle cx="45" cy="33" r="8.2" fill="url(#lgGlass)" stroke="#f6c27a" stroke-width="3"/>
    <circle cx="45" cy="33" r="6.5" fill="none" stroke="#b9773a" stroke-width="0.7"/>
    <path d="M40.6 30.6A5.4 5.4 0 0 1 44.2 27.7" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" opacity="0.95"/>

    <g fill="#f7e9cd">${spark(14.5, 19, 3)}${spark(50.5, 15.5, 2.2)}${spark(19, 10.5, 1.4)}</g>
  </svg>`;
}

// Tekan lambang: serkap bergegar & suspek terkejut
function wiggleLogo() {
  const el = $('hero-logo-icon');
  el.classList.remove('wiggle');
  void el.offsetWidth; // ulang animasi
  el.classList.add('wiggle');
  playSFX('drum');
  vibrate(30);
}

// Ikon app (tab browser, Home Screen, Play Store) kini fail statik dalam folder icons/
// — dijana daripada logoSVG() yang sama supaya rupa sentiasa sepadan.

// Skrin pembukaan: sorok selepas app siap dimuatkan (minimum ~0.9s supaya logo sempat nampak)
const SPLASH_START = Date.now();
function hideSplash() {
  const sp = $('splash');
  if (!sp) return;
  setTimeout(() => {
    sp.classList.add('hide');
    setTimeout(() => sp.remove(), 500);
  }, Math.max(0, 900 - (Date.now() - SPLASH_START)));
}

// Service worker: simpan fail game dalam telefon supaya boleh main tanpa internet
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') return;
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

// ================= PANGKALAN DATA KATEGORI MALAYSIA =================
// Format setiap pasangan: [Perkataan Rakyat, Perkataan Lalang, Hint Penyamar, Soalan Pemicu]
// Panduan tambah perkataan: kedua-dua perkataan mesti dikenali ramai, sama "keluarga"
// (supaya Lalang tak terus kantoi) tapi cukup berbeza untuk dibahaskan.
const CATEGORY_GROUPS = [
  { id: 'makan', icon: 'cat_makan', name: 'Makan & Minum' },
  { id: 'tempat', icon: 'cat_negeri', name: 'Tempat & Jalan' },
  { id: 'harian', icon: 'cat_rumah', name: 'Kehidupan Harian' },
  { id: 'budaya', icon: 'cat_budaya', name: 'Budaya & Hiburan' },
  { id: 'lepak', icon: 'cat_pedas', name: 'Lepak' }
];

const CATEGORIES = [
  {
    id: 'makan', group: 'makan', name: 'Mamak & Gerai', icon: 'cat_makan', desc: 'Nasi, mi & lauk wajib rakyat',
    words: [
      ['Nasi Lemak', 'Nasi Dagang', 'Sarapan', 'Selalu makan berlaukkan apa dan bungkus guna apa?'],
      ['Roti Canai', 'Roti Tampal', 'Kedai mamak', 'Kalau order dekat mamak, kau suka makan waktu bila?'],
      ['Burger Ramly', 'Roti John', 'Gerai malam', 'Apa bahan paling penting yang buat benda ni sedap?'],
      ['Maggi Kari', 'IndoMie Goreng', 'Tengah malam', 'Kau suka letak bahan tambahan apa bila masak benda ni?'],
      ['Satay', 'Lokching (Sate Ikan)', 'Bakar', 'Kuah pencicah dia rasa macam mana?'],
      ['Nasi Kandar', 'Nasi Ganja', 'Kuah banjir', 'Lepas makan benda ni selalunya terus rasa apa?'],
      ['Mee Goreng Mamak', 'Kuey Teow Goreng', 'Goreng', 'Kau suka pedas tahap mana bila order benda ni?'],
      ['Nasi Ayam', 'Nasi Ayam Penyet', 'Ayam', 'Bahagian mana paling penting supaya benda ni sedap?'],
      ['Laksa Penang', 'Laksa Johor', 'Berkuah', 'Kau makan benda ni dengan apa sebagai pelengkap?'],
      ['Nasi Goreng Kampung', 'Nasi Goreng Pattaya', 'Kedai tomyam', 'Kau order ni bila dah tak tahu nak makan apa ke?'],
      ['Rendang', 'Kari Ayam', 'Berempah', 'Lauk ni paling sedap makan dengan apa?'],
      ['Mi Bandung', 'Mi Rebus', 'Mi berkuah', 'Kuah dia rasa macam mana?'],
      ['Char Kuey Teow', 'Kuey Teow Kungfu', 'Kuali panas', 'Bahan apa yang wajib ada dalam benda ni?'],
      ['Nasi Kerabu', 'Nasi Ulam', 'Tradisional', 'Negeri mana yang paling terkenal dengan benda ni?'],
      ['Durian Musang King', 'Durian Kampung', 'Berbau', 'Berapa sanggup kau bayar untuk makan benda ni?']
    ]
  },
  {
    id: 'kuih', group: 'makan', name: 'Kuih & Pencuci Mulut', icon: 'cat_kuih', desc: 'Kuih petang, manisan & kudapan',
    words: [
      ['Cendol', 'ABC (Ais Kacang)', 'Sejuk', 'Selalu makan dekat tepi jalan atau dalam kedai?'],
      ['Pisang Goreng', 'Keropok Lekor', 'Minum petang', 'Selalu makan kosong atau cicah sos/kicap?'],
      ['Kuih Lapis', 'Seri Muka', 'Berlapis', 'Kau makan benda ni selapis-selapis ke terus ngap?'],
      ['Onde-Onde', 'Kuih Koci', 'Gula melaka', 'Apa yang jadi masa kau gigit benda ni?'],
      ['Karipap', 'Popia Goreng', 'Rangup', 'Inti apa yang paling sedap untuk benda ni?'],
      ['Apam Balik', 'Roti Bakar', 'Manis', 'Topping apa yang kau selalu pilih?'],
      ['Kuih Bahulu', 'Kuih Bangkit', 'Kuih raya', 'Biasanya benda ni disimpan dalam apa?'],
      ['Dodol', 'Wajik', 'Melekit', 'Berapa lama orang kena kacau benda ni?'],
      ['Tau Fu Fa', 'Puding Roti', 'Lembut', 'Kau suka makan panas ke sejuk?'],
      ['Kek Lapis Sarawak', 'Kek Batik', 'Kek', 'Kalau tetamu datang, kau potong saiz berapa besar?'],
      ['Kuih Keria', 'Donut Gula', 'Bulat', 'Lebih sedap makan masa panas atau dah sejuk?'],
      ['Cekodok Pisang', 'Lempeng Pisang', 'Pisang', 'Ini sarapan atau minum petang bagi kau?']
    ]
  },
  {
    id: 'minum', group: 'makan', name: 'Minuman', icon: 'cat_minum', desc: 'Air mamak, kopitiam & bazar',
    words: [
      ['Teh Tarik', 'Kopi Peng', 'Mamak', 'Selalu orang minum panas ke sejuk, dan berapa harga secawan?'],
      ['Milo Ais', 'Milo Dinosaur', 'Coklat', 'Kau suka bancuh pekat ke cair?'],
      ['Sirap Bandung', 'Air Mata Kucing', 'Bazar', 'Warna dia macam mana?'],
      ['Teh O Ais Limau', 'Asam Boi', 'Masam', 'Rasa paling kuat dalam minuman ni apa?'],
      ['Bubble Tea', 'Kopi Starbucks', 'Mahal', 'Berapa ringgit kau sanggup bayar untuk segelas?'],
      ['Kopi O', 'Kopi Tongkat Ali', 'Pahit', 'Kau minum benda ni waktu bila?'],
      ['Air Tebu', 'Air Soya', 'Pasar malam', 'Kau suka tambah ais banyak ke sikit?'],
      ['Air Kelapa Muda', 'Air Tembikai', 'Segar', 'Kat mana tempat paling best minum benda ni?'],
      ['Nescafe Tarik', 'Neslo', 'Campur', 'Siapa dalam geng kita selalu order benda ni?'],
      ['Air Sirap Selasih', 'Air Barli', 'Majlis', 'Benda ni selalu dihidang masa majlis apa?'],
      ['Yakult', 'Vitagen', 'Botol kecil', 'Kau minum sekali teguk ke hirup perlahan?']
    ]
  },
  {
    id: 'port', group: 'tempat', name: 'Port & Lokasi Lepak', icon: 'cat_port', desc: 'Kedai, port lepak & tempat jalan',
    words: [
      ['Pasar Malam', 'Bazar Ramadan', 'Sesak', 'Pukul berapa waktu paling sesuai pergi tempat ni?'],
      ['Kedai Eco RM2', 'MR.DIY', 'Murah', 'Barang apa yang kau paling selalu rembat dekat sini?'],
      ['KLCC', 'Menara KL', 'Tinggi', 'Kali terakhir kau pergi sini dengan siapa?'],
      ['Mamak 24 Jam', 'Kopitiam', 'Lepak', 'Berapa jam paling lama kau pernah duduk lepak sini?'],
      ['Stesen Minyak', 'R&R Lebuhraya', 'Berhenti', 'Selain isi minyak, kau selalu turun buat apa dekat sini?'],
      ['Mydin', "Lotus's (Tesco)", 'Troli', 'Barang apa yang mesti ada dalam troli kau?'],
      ['Panggung Wayang', 'Bilik Karaoke', 'Gelap', 'Snek apa yang kau mesti beli sebelum masuk?'],
      ['Kedai Gunting Rambut', 'Salun', 'Rambut', 'Ayat apa kau cakap bila duduk atas kerusi tu?'],
      ['Kedai Runcit', '7-Eleven', 'Dekat rumah', 'Barang apa kau paling selalu beli kat sini?'],
      ['Taman Permainan', 'Taman Rekreasi', 'Petang', 'Waktu bila paling ramai orang kat sini?'],
      ['Warung Pak Cik', 'Gerai Tomyam', 'Makan murah', 'Menu apa yang kau mesti order bila pergi sini?'],
      ['Pusat Beli-Belah', 'Outlet Premium', 'Aircond', 'Kau pergi sini nak beli barang ke cuci mata?']
    ]
  },
  {
    id: 'negeri', group: 'tempat', name: 'Cuti-Cuti Malaysia', icon: 'cat_negeri', desc: 'Pulau, bukit, bandar & negeri',
    words: [
      ['Genting Highlands', 'Cameron Highlands', 'Sejuk', 'Kalau naik sini, aktiviti utama kau buat apa?'],
      ['Langkawi', 'Pulau Pinang', 'Pulau', 'Benda pertama kau buat bila sampai sini?'],
      ['Melaka', 'Ipoh', 'Bersejarah', 'Makanan apa yang wajib cuba bila pergi sini?'],
      ['Kota Kinabalu', 'Kuching', 'Borneo', 'Kau pernah pergi? Naik apa nak ke sana?'],
      ['Gunung Kinabalu', 'Bukit Broga', 'Mendaki', 'Persediaan apa yang paling penting sebelum naik?'],
      ['Pulau Redang', 'Pulau Perhentian', 'Snorkel', 'Aktiviti apa yang paling best buat kat sini?'],
      ['Port Dickson', 'Pantai Cenang', 'Pantai', 'Kau datang sini dengan siapa selalunya?'],
      ['Putrajaya', 'Cyberjaya', 'Bandar', 'Apa benda yang paling kau ingat pasal tempat ni?'],
      ['Kelantan', 'Terengganu', 'Pantai timur', 'Satu perkataan loghat negeri ni yang kau tahu?'],
      ['Johor Bahru', 'Singapura', 'Selatan', 'Bila nak pergi sini, apa yang kau paling risau?'],
      ['Sunway Lagoon', 'Legoland', 'Taman tema', 'Permainan apa yang kau paling nak cuba?'],
      ['Batu Caves', 'Bukit Bendera', 'Tinggi', 'Berapa lama rasanya nak sampai ke atas?']
    ]
  },
  {
    id: 'kenderaan', group: 'tempat', name: 'Kenderaan & Jalan Raya', icon: 'cat_kenderaan', desc: 'Kereta, jem, tol & pengangkutan',
    words: [
      ['Sangkut Jem', 'Beratur Tol', 'Sabar', 'Apa benda pertama kau buat bila kena situasi ni?'],
      ['Roadblock Polis', 'Saman JPJ', 'Berdebar', 'Apa reaksi muka kau bila nampak benda ni dari jauh?'],
      ['Perodua Myvi', 'Perodua Axia', 'Kereta', 'Kenapa ramai orang pilih kereta ni?'],
      ['Proton Saga', 'Proton Wira', 'Klasik', 'Siapa dalam keluarga kau pernah pakai kereta ni?'],
      ['Motor Kapcai', 'Skuter', 'Dua roda', 'Barang apa yang selalu diangkut atas benda ni?'],
      ['LRT', 'MRT', 'Rel', 'Waktu bila paling sesak naik benda ni?'],
      ['Bas Ekspres', 'Keretapi ETS', 'Jarak jauh', 'Apa kau buat sepanjang perjalanan?'],
      ['Lori Pasir', 'Treler Balak', 'Besar', 'Apa kau buat bila dia ada depan kau?'],
      ['Lampu Isyarat', 'Bulatan Jalan', 'Simpang', 'Siapa yang patut jalan dulu sebenarnya?'],
      ['Bonggol Jalan', 'Lubang Jalan', 'Terhentak', 'Apa ayat keluar dari mulut kau bila terlanggar?'],
      ['Parking Penuh', 'Parking Berbayar', 'Cari tempat', 'Berapa pusingan kau sanggup cari sebelum mengalah?'],
      ['Cuci Kereta', 'Servis Kereta', 'Penjagaan', 'Berapa lama sekali kau buat benda ni?']
    ]
  },
  {
    id: 'rumah', group: 'harian', name: 'Rumah & Keluarga', icon: 'cat_rumah', desc: 'Kerja rumah, jiran & ahli keluarga',
    words: [
      ['Takde Air', 'Blackout (Takde Elektrik)', 'Mengeluh', 'Benda pertama kau cari bila masalah ni berlaku tengah malam?'],
      ['Mak Mertua', 'Ipar Duai', 'Keluarga', 'Macam mana nak ambil hati orang ni?'],
      ['Kipas Siling', 'Aircond', 'Panas', 'Siapa dalam rumah kau yang selalu berebut benda ni?'],
      ['Periuk Nasi Elektrik', 'Air Fryer', 'Dapur', 'Benda ni selalu guna untuk masak apa?'],
      ['Sapu Lantai', 'Mop Lantai', 'Bersih', 'Siapa dalam keluarga kau paling malas buat benda ni?'],
      ['Sidai Baju', 'Lipat Baju', 'Kain', 'Berapa lama baju tu dibiarkan sebelum siap?'],
      ['Remote TV', 'Charger Telefon', 'Hilang', 'Tempat paling pelik kau pernah jumpa benda ni?'],
      ['Selipar Jepun', 'Selipar Crocs', 'Kaki', 'Kenapa benda ni selalu hilang sebelah?'],
      ['Tikar Mengkuang', 'Karpet', 'Ruang tamu', 'Bila masa benda ni mesti dikeluarkan?'],
      ['Anak Sulung', 'Anak Bongsu', 'Adik-beradik', 'Perangai apa yang paling ketara bagi orang ni?'],
      ['Mak Cik Jiran', 'Pak Cik Pengawal', 'Jiran', 'Apa soalan klise dia bila jumpa kau?'],
      ['Pindah Rumah', 'Ubah Suai Rumah', 'Penat', 'Barang apa paling susah nak urus?']
    ]
  },
  {
    id: 'sekolah', group: 'harian', name: 'Nostalgia Sekolah', icon: 'cat_sekolah', desc: 'Kenangan sekolah & permainan dulu',
    words: [
      ['Lori Milo', 'Jururawat Gigi', 'Tetamu', 'Bila nampak dia masuk sekolah, kau rasa suka atau takut?'],
      ['Galah Panjang', 'Baling Selipar', 'Main petang', 'Macam mana cara nak kira menang dalam permainan ni?'],
      ['Kasut Pallas', 'Kasut Bata', 'Kapur', 'Kau pernah ada pengalaman buruk tak dengan benda ni?'],
      ['Pengawas Sekolah', 'Cikgu Disiplin', 'Peraturan', 'Apa kesalahan paling kerap orang kantoi dengan dia?'],
      ['Buku Nilam', 'Buku Teks', 'Buku', 'Jujur cakap, dulu kau betul-betul guna ke atau menipu je?'],
      ['Kantin Sekolah', 'Koperasi Sekolah', 'Waktu rehat', 'Berapa ringgit duit belanja yang kau selalu habis dekat sini?'],
      ['Aiskrim Malaysia', 'Aiskrim Potong', 'Sejuk', 'Perisa apa yang paling laku keras masa kau kecik dulu?'],
      ['Perhimpunan Pagi', 'Hari Sukan Sekolah', 'Padang', 'Bahagian paling bosan atau seronok masa acara ni?'],
      ['Kena Rotan', 'Berdiri Atas Kerusi', 'Hukuman', 'Kesalahan apa yang buat orang kena benda ni?'],
      ['SPM', 'UPSR', 'Peperiksaan', 'Apa kau buat malam sebelum peperiksaan ni?'],
      ['Kelas Tambahan', 'Tuisyen', 'Belajar', 'Kau betul-betul belajar atau pergi lepak je?'],
      ['Bas Sekolah', 'Van Sekolah', 'Pagi', 'Siapa yang selalu duduk kat tempat paling belakang?']
    ]
  },
  {
    id: 'kerja', group: 'harian', name: 'Kerja & Duit', icon: 'cat_kerja', desc: 'Gaji, ofis, bos & komitmen',
    words: [
      ['Hari Gaji', 'Bonus Tahunan', 'Duit masuk', 'Benda pertama kau buat bila duit ni masuk?'],
      ['Mesyuarat Pagi', 'Mesyuarat Zoom', 'Meleret', 'Apa yang kau buat bila benda ni lama sangat?'],
      ['Cuti Sakit (MC)', 'Cuti Tahunan', 'Cuti', 'Alasan apa paling biasa orang guna?'],
      ['Kerja Overtime', 'Kerja Hujung Minggu', 'Penat', 'Berapa lama paling lama kau pernah buat?'],
      ['Bos', 'Supervisor', 'Atasan', 'Apa ayat paling ditakuti bila dia panggil?'],
      ['Interview Kerja', 'Hari Pertama Kerja', 'Berdebar', 'Baju apa kau pakai untuk hari ni?'],
      ['Kerja Dari Rumah (WFH)', 'Kerja Hybrid', 'Fleksibel', 'Apa yang paling susah bila kerja macam ni?'],
      ['KWSP', 'ASB', 'Simpanan', 'Bila kali terakhir kau semak baki benda ni?'],
      ['Ansuran Kereta', 'Sewa Rumah', 'Bulanan', 'Berapa hari lepas gaji duit ni dah keluar?'],
      ['Grab Driver', 'Rider Foodpanda', 'Aplikasi', 'Kenapa ramai orang pilih buat kerja ni?'],
      ['Abang Rider', 'Posmen', 'Depan pintu', 'Apa ayat standard kau cakap bila dia sampai depan pagar?']
    ]
  },
  {
    id: 'tech', group: 'harian', name: 'Gajet & Media Sosial', icon: 'cat_tech', desc: 'Apps, telefon & dunia online',
    words: [
      ['WhatsApp', 'Telegram', 'Mesej', 'Group apa paling bising dalam telefon kau?'],
      ['TikTok', 'Instagram Reels', 'Video', 'Berapa jam sehari kau rasa kau habiskan kat sini?'],
      ['Shopee', 'Lazada', 'Online', 'Barang paling pelik kau pernah beli kat sini?'],
      ['GrabFood', 'Foodpanda', 'Pesan', 'Kau order makanan apa paling kerap?'],
      ['iPhone', 'Samsung', 'Telefon', 'Kenapa orang setia dengan jenama ni?'],
      ['Power Bank', 'Charger Laju', 'Bateri', 'Siapa dalam geng ni selalu pinjam?'],
      ['Wi-Fi Rumah', 'Data Telefon', 'Internet', 'Apa yang kau buat bila benda ni lembab?'],
      ['Selfie', 'Wefie (Gambar Beramai)', 'Kamera', 'Berapa kali kau ambil sebelum puas hati?'],
      ['Status WhatsApp', 'Instagram Story', '24 jam', 'Apa jenis benda paling kerap kau post?'],
      ["Touch 'n Go eWallet", 'DuitNow QR', 'Bayar', 'Pernah tak benda ni gagal masa nak bayar?'],
      ['YouTube', 'Netflix', 'Tontonan', 'Apa kau tengok sebelum tidur?'],
      ['Mobile Legends', 'PUBG Mobile', 'Game', 'Siapa dalam geng ni paling kuat main?'],
      ['Earphone Berwayar', 'Earbuds Wireless', 'Telinga', 'Berapa kali kau dah hilangkan benda ni?']
    ]
  },
  {
    id: 'haiwan', group: 'harian', name: 'Haiwan & Alam', icon: 'cat_haiwan', desc: 'Haiwan, cuaca & alam sekitar',
    words: [
      ['Kucing Oyen', 'Anjing Kejar Motor', 'Nakal', 'Kalau terserempak dengan dia dekat luar, kau buat apa?'],
      ['Monyet Curi Makanan', 'Biawak Masuk Rumah', 'Kecoh', 'Kalau jumpa dia, kau call siapa?'],
      ['Nyamuk Aedes', 'Lalat', 'Serangga', 'Cara paling berkesan nak hapuskan benda ni?'],
      ['Lipas Terbang', 'Cicak Jatuh', 'Menjerit', 'Apa reaksi pertama kau bila jumpa?'],
      ['Harimau', 'Gajah', 'Hutan', 'Kat mana kau pernah tengok haiwan ni?'],
      ['Orang Utan', 'Monyet Belanda', 'Borneo', 'Apa yang paling unik pasal haiwan ni?'],
      ['Penyu', 'Ikan Lumba-Lumba', 'Laut', 'Kat mana tempat nak tengok haiwan ni?'],
      ['Ayam Kampung', 'Itik Serati', 'Ternakan', 'Bunyi dia macam mana?'],
      ['Musim Hujan', 'Musim Jerebu', 'Cuaca', 'Apa barang wajib kau bawa waktu ni?'],
      ['Banjir Kilat', 'Tanah Runtuh', 'Bencana', 'Apa persediaan paling penting?'],
      ['Bunga Raya', 'Bunga Orkid', 'Bunga', 'Warna bunga ni selalunya apa?'],
      ['Pokok Kelapa', 'Pokok Kelapa Sawit', 'Pokok', 'Apa hasil yang kita dapat dari pokok ni?']
    ]
  },
  {
    id: 'budaya', group: 'budaya', name: 'Raya & Budaya', icon: 'cat_budaya', desc: 'Perayaan, kenduri & adat kita',
    words: [
      ['Duit Raya', 'Angpau', 'Sampul', 'Paling banyak kau pernah dapat dalam satu sampul berapa?'],
      ['Khemah Kenduri', 'Rumah Terbuka', 'Makan free', 'Kau pergi majlis ni duduk lama-lama atau makan terus balik?'],
      ['Ketupat', 'Lemang', 'Pagi raya', 'Benda ni dimakan dengan lauk apa?'],
      ['Baju Melayu', 'Baju Kurung', 'Pakaian', 'Warna tema raya keluarga kau tahun ni?'],
      ['Balik Kampung', 'Jem Raya', 'Perjalanan', 'Berapa jam paling lama kau pernah ambil?'],
      ['Pelita', 'Mercun', 'Menyala', 'Ada kenangan kelakar dengan benda ni?'],
      ['Kuih Kapit', 'Muruku', 'Rangup', 'Benda ni rasa macam mana?'],
      ['Bersanding', 'Akad Nikah', 'Kahwin', 'Apa perasaan pengantin masa ni?'],
      ['Bunga Telur', 'Doorgift Kenduri', 'Cenderahati', 'Kau simpan benda ni ke terus buang?'],
      ['Kompang', 'Gendang Silat', 'Bunyi', 'Bila bunyi ni kedengaran, maksudnya apa?'],
      ['Rewang', 'Gotong-Royong', 'Beramai', 'Tugasan apa yang semua orang nak elak?']
    ]
  },
  {
    id: 'hiburan', group: 'budaya', name: 'Hiburan & Ikon', icon: 'cat_hiburan', desc: 'Artis, kartun, filem & TV',
    words: [
      ['Siti Nurhaliza', 'Ziana Zain', 'Penyanyi', 'Cuba sebut satu ciri paling ikonik pasal figura ni!'],
      ['Upin & Ipin', 'BoBoiBoy', 'Kartun', 'Siapa watak sampingan paling kelakar dalam cerita ni?'],
      ['P. Ramlee', 'Sudirman', 'Legenda', 'Karya dia yang mana satu paling melekat dalam kepala kau?'],
      ['Keluang Man', 'Cicakman', 'Adiwira', 'Kuasa atau gaya dia berlawan macam mana?'],
      ['Ejen Ali', 'Mechamato', 'Animasi', 'Gajet atau kuasa apa yang paling kau suka?'],
      ['Raja Lawak', 'Maharaja Lawak Mega', 'Lawak', 'Siapa juara yang paling kau ingat?'],
      ['Akademi Fantasia', 'Gegar Vaganza', 'Realiti TV', 'Peserta mana yang kau paling minat?'],
      ['Drama Melayu Pukul 7', 'Sinetron Indonesia', 'Drama', 'Jalan cerita klise apa yang selalu ada?'],
      ['Pak Pandir', 'Si Tanggang', 'Cerita rakyat', 'Apa pengajaran cerita ni?'],
      ['Anugerah Juara Lagu', 'Anugerah Bintang Popular', 'Anugerah', 'Siapa yang kau ingat pernah menang?'],
      ['Mat Kilau', 'Polis Evo', 'Filem', 'Babak mana yang paling diingati?'],
      ['Era FM', 'Hot FM', 'Radio', 'DJ mana yang kau selalu dengar?']
    ]
  },
  {
    id: 'sukan', group: 'budaya', name: 'Sukan & Riadah', icon: 'cat_sukan', desc: 'Atlet, permainan & aktiviti luar',
    words: [
      ['Lee Chong Wei', 'Azizulhasni Awang', 'Atlet', 'Waktu tengok dia bertanding dekat TV, macam mana perasaan rakyat?'],
      ['Sepak Takraw', 'Bola Tampar', 'Jaring', 'Kedudukan mana paling susah dalam sukan ni?'],
      ['Futsal', 'Bola Sepak', 'Bola', 'Siapa dalam kumpulan ni selalu jadi penjaga gol?'],
      ['Badminton', 'Pingpong', 'Raket', 'Kau main cara serius atau suka-suka?'],
      ['Harimau Malaya', 'Liga Super Malaysia', 'Pasukan', 'Perlawanan mana yang paling kau ingat?'],
      ['Joging Petang', 'Senamrobik', 'Senaman', 'Berapa lama kau tahan buat sebelum berhenti?'],
      ['Gym', 'Yoga', 'Badan', 'Apa alasan paling biasa untuk ponteng?'],
      ['Basikal Lajak', 'Skuter Elektrik', 'Laju', 'Kenapa benda ni selalu buat orang risau?'],
      ['Silat', 'Taekwondo', 'Bertarung', 'Kau pernah belajar? Sampai tahap mana?'],
      ['Larian Marathon', 'Fun Run', 'Lari', 'Kenapa orang suka masuk acara ni?'],
      ['Memancing', 'Menjala Ikan', 'Air', 'Berapa lama kau sanggup tunggu sebelum dapat?'],
      ['Gasing', 'Wau', 'Main kampung', 'Negeri mana paling terkenal dengan benda ni?']
    ]
  },
  {
    id: 'seram', group: 'budaya', name: 'Seram & Mitos', icon: 'cat_seram', desc: 'Hantu, cerita misteri & legenda',
    words: [
      ['Pocong', 'Pontianak', 'Hantu', 'Kalau ikut cerita orang tua-tua, macam mana cara dia muncul?'],
      ['Toyol', 'Hantu Raya', 'Makhluk halus', 'Apa tanda-tanda dia ada dekat rumah?'],
      ['Orang Minyak', 'Orang Bunian', 'Misteri', 'Macam mana orang kata kita boleh kesan dia?'],
      ['Penanggal', 'Langsuir', 'Terbang', 'Apa orang tua-tua suruh buat untuk halau dia?'],
      ['Rumah Usang', 'Hospital Lama', 'Tempat seram', 'Siapa dalam geng ni paling berani masuk sini?'],
      ['Kubur Malam Jumaat', 'Hutan Tebal', 'Malam', 'Kalau terpaksa lalu sini sorang, kau buat apa?'],
      ['Kena Sampuk', 'Histeria', 'Pelik', 'Apa yang orang buat bila benda ni berlaku?'],
      ['Bau Bunga Melur', 'Bau Kemenyan', 'Bau', 'Kalau tiba-tiba bau ni waktu malam, reaksi kau?'],
      ['Mimpi Ngeri', 'Kena Tindih Masa Tidur', 'Tidur', 'Kau pernah alami? Apa yang kau nampak?'],
      ['Bigfoot Johor', 'Naga Tasik Chini', 'Pernah nampak', 'Kau percaya ke cerita pasal benda ni?']
    ]
  },
  {
    id: 'pedas', group: 'lepak', name: 'Edisi Pedas (Lepak)', icon: 'cat_pedas', desc: 'Perangai member, cinta & rahsia',
    words: [
      ['Pinjam Duit Buat Lupa', 'Lepak Tinggal Dompet', 'Duit', 'Dalam kumpulan kita sekarang, siapa paling berpotensi buat perangai ni?'],
      ['Stalk Ex Waktu Malam', 'Tersuka Kawan Sendiri', 'Rahsia', 'Apa tanda-tanda seseorang tu tengah terjebak dengan benda ni?'],
      ['Koyak / Sentap', 'Merajuk Tak Bertempat', 'Emosi', 'Selalunya lepas berapa lama baru orang tu elok balik?'],
      ['Sembang Kari', 'Palatau (Buat-Buat Tahu)', 'Cakap besar', 'Macam mana cara kita nak patahkan hujah orang macam ni?'],
      ['Takut Bini / Awek', 'Kaki Report', 'Pasangan', 'Ayat apa yang dia selalu guna bila nak minta diri balik awal?'],
      ['Gaji Masuk Terus Habis', 'Hujung Bulan Makan Maggi', 'Dompet', 'Benda paling tak berfaedah apa yang buat duit tu lesap?'],
      ['Membawang', 'Kaki Kipas', 'Mulut', 'Macam mana gaya percakapan orang yang tengah buat benda ni?'],
      ['Janji Melayu', 'Sidai Kawan', 'Lambat', 'Apa alasan paling klise orang bagi bila buat perangai ni?'],
      ['Bluetick Tak Balas', 'Sorok Last Seen', 'Chat', 'Apa yang kau fikir bila kawan buat macam ni?'],
      ['Kawan Datang Lambat', 'Kawan Cancel Last Minit', 'Plan lepak', 'Alasan paling klise yang pernah kau dengar?'],
      ['Beli Kopi Mahal Tiap Hari', 'Checkout Shopee Tengah Malam', 'Belanja', 'Siapa dalam geng ni paling teruk bab ni?'],
      ['Crush Tak Layan', 'Kena Friendzone', 'Cinta', 'Apa tanda awal yang kita patut perasan?'],
      ['Ex Contact Balik', 'Ex Dah Kahwin', 'Bekas', 'Reaksi pertama kau bila dapat tahu?']
    ]
  }
];

const TWISTS = {
  Santai: [
    'Satu Patah Kata: Setiap pemain hanya boleh sebut 1 patah perkataan sahaja sebagai klu!',
    'Pantang Orang Putih: Haram guna sebarang perkataan Bahasa Inggeris masa bagi klu & debat!',
    'Klu Soalan: Klu wajib diberikan dalam bentuk ayat tanya sahaja!',
    'Tanpa Nama Benda: Klu hanya boleh guna kata sifat (Contoh: Panas, Manis, Bising, Mahal).',
    'Tanpa Warna: Haram sebut nama warna masa bagi klu & debat!',
    'Tiga Perkataan: Setiap klu mesti tepat 3 patah perkataan — tak lebih, tak kurang!',
    'Klu Bunyi: Klu hanya boleh dalam bentuk ajuk bunyi (cth: "Sssss", "Krup krap", "Vroom").',
    'Klu Peribahasa: Klu wajib guna peribahasa atau simpulan bahasa (cth: "Bagai aur dengan tebing").'
  ],
  Kecoh: [
    'Makcik Bawang: Semua orang wajib bagi klu dan berdebat sambil berbisik-bisik!',
    'Abang Garang: Wajib bagi klu dan menuduh kawan dalam nada marah atau tegas!',
    'Muka Ketat: Sesiapa yang senyum atau tergelak masa bagi klu automatik nampak mencurigakan!',
    'Loghat Negeri: Wajib bercakap guna loghat negeri (Utara/Kelantan/Nismilan) pusingan ini!',
    'Hos TV Terlebih Semangat: Bagi klu macam pengacara rancangan TV yang sangat teruja!',
    'Mak Membebel: Bagi klu dengan nada mak membebel suruh anak kemas bilik!',
    'Iklan Raya: Bagi klu macam pelakon iklan raya yang sangat sebak & dramatik.',
    'Robot Rosak: Wajib cakap tersekat-sekat macam robot rosak sepanjang pusingan!'
  ]
};

// 3 tahap denda — boleh pilih lebih dari satu (multi-pilih) di Tetapan
const DENDA_TIERS = ['Santai', 'Sporting', 'Koyak'];
const DENDA = {
  // Santai: dalam permainan & ringan — 0 duit, 0 privasi
  Santai: [
    'Moderator Pusingan: Jadi tukang pegang & edar telefon untuk pusingan seterusnya.',
    'Pembuka Tirai: Kena mula bagi klu pertama pada pusingan seterusnya!',
    'Puji Melambung: Puji pemain sebelah kanan selama 15 saat dengan muka paling ikhlas.',
    'Bahasa Baku TV3: Wajib cakap Bahasa Melayu baku sepenuhnya sepanjang pusingan depan.',
    'Panggilan Hormat: Wajib panggil semua orang "Yang Berhormat" atau "Bosku" pusingan depan.',
    'Patung Cendana: Tak boleh gerak tangan langsung masa bagi klu & berdebat pusingan depan.',
    'Pantang Ganti Nama: Haram sebut "aku / saya / kau" masa debat pusingan depan — sebut nama sendiri!',
    'Tukang Semangat: Setiap kali orang lain habis bagi klu pusingan depan, wajib tepuk tangan bersemangat.'
  ],
  // Sporting: lakonan & gelagat gamat — 0 duit, 0 privasi
  Sporting: [
    'Ulasan Sukan RTM: Ulas 15 saat gaya pengulas bola kenapa pasukan kau kalah tadi.',
    'Promoter Live: Jual satu barang depan mata (cawan, tisu, selipar) gaya live selling selama 20 saat.',
    'Loghat Negeri: Wajib cakap loghat pilihan pemenang (Utara / Kelantan / Nismilan / Sabah) pusingan depan.',
    'Berita Pukul 8: Baca semula perkataan pusingan tadi gaya pembaca berita yang sangat cemas.',
    'Pakar Motivasi: Bagi ucapan semangat 15 saat kepada semua gaya penceramah motivasi.',
    'Pantun Dua Kerat: Cipta 1 pantun spontan untuk memuji pemenang pusingan tadi.',
    'Sidang Media Artis: Jawab 2 soalan spontan pemenang gaya artis baru menang anugerah.',
    'Gerak Slow-Mo: Bercakap & bergerak dalam mod slow-motion selama 20 saat pertama pusingan depan.'
  ],
  // Koyak: mod pedajal member — untuk geng yang betul-betul sporting
  Koyak: [
    'Belanja air untuk seorang pemain yang paling tepat meneka tadi!',
    'Ceritakan satu pengalaman paling memalukan zaman sekolah.',
    'Tunjuk gambar ke-5 paling terkini dalam galeri telefon kepada semua orang.',
    'Biar pemenang taip 1 status pelik di WhatsApp/IG Story kau selama 10 minit!',
    'Tukar gambar profil WhatsApp kepada gambar pilihan pemenang selama 1 jam.',
    'Hantar voice note nyanyi 10 saat lagu pilihan pemenang dalam group chat geng ni.',
    'Pemenang pilih nama panggilan baru untuk kau — semua wajib guna sepanjang sesi ni!',
    'Call / voice note mak atau ayah, cakap "Sayang mak/ayah" depan semua orang.'
  ]
};

const AVATARS = ['oyen','kapcai','tudung','polis','spek','boba','gitar','hantu','harimau','topi','kuali','gamepad','musang','katak','tengkolok','tembikai','wau','tapir','cili','mikrofon'];
const COLORS = ['#e63946','#2a9d8f','#3a86ff','#8338ec','#e76f51','#6d597a','#fb5607','#06a77d','#d6336c','#1d7fa8','#c77d00','#5f4bb6'];
const MAX_PLAYERS = 12;
const CHAOS_CHANCE = 0.15;
const STORE_KEY = 'serkap.v2';

// ================= KEADAAN SISTEM (STATE) =================
const DEFAULT_SETTINGS = {
  version: 'balance', // 'balance' | 'free'
  mode: 1,            // 1 = Lalang, 2 = Kaki Goreng
  imposters: 1,
  blurs: 0,
  hint: false,
  duration: 120,      // 0 = Tanpa Had
  twistMode: 'Campur', // 'Off' | 'Santai' | 'Kecoh' | 'Campur'
  dendaModes: ['Santai'], // Multi-pilih: gabungan 'Santai' | 'Sporting' | 'Koyak'; [] = Off
  chaos: false,
  sound: true,        // Kesan bunyi & getaran
  selectedCats: CATEGORIES.map(c => c.id) // Boleh pilih lebih dari satu; 'custom' = Dek Kustom
};

const normalizeAvatar = a => {
  const mapped = LEGACY_ICON_MAP[a] || a;
  return AVATARS.includes(mapped) ? mapped : AVATARS[0];
};

const newPlayer = (name, avatar, color) => ({
  name,
  avatar: normalizeAvatar(avatar),
  color,
  score: 0,
  impWins: 0,
  detWins: 0,
  fitnah: 0
});

const MAX_GROUPS = 10;
const newGroupId = () => 'g' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
const defaultPlayers = () => [
  newPlayer('Salim', 'spek', '#e63946'),
  newPlayer('Amir', 'kapcai', '#2a9d8f'),
  newPlayer('Siti', 'tudung', '#3a86ff'),
  newPlayer('Razi', 'oyen', '#8338ec')
];

const firstGroup = { id: newGroupId(), name: 'Geng Utama', players: defaultPlayers() };

let state = {
  groups: [firstGroup],        // Senarai geng tersimpan (setiap geng ada pemain & markah sendiri)
  activeGroup: firstGroup.id,
  players: firstGroup.players, // Alias kepada pemain geng aktif (rujukan array yang sama)
  customWords: [],
  set: { ...DEFAULT_SETTINGS },
  usedWords: {}
};

let round = null; // Pusingan aktif
let timer = { id: null, left: 0, total: 0, paused: false };
let asyncTimers = { reveal: null, lastStand: null, denda: null, countdown: [] };
let spinning = false;
let currentScreen = 'scr-menu';
let customBack = 'scr-menu';
let lastCatId = null;

// ================= UTILITI =================
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const fmt = sec => `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;

// Fisher-Yates: rawak sebenar, tak berat sebelah macam sort(Math.random)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function vibrate(pattern) {
  if (state.set.sound === false) return;
  try { navigator.vibrate && navigator.vibrate(pattern); } catch (e) {}
}

function clearAsyncTimers() {
  if (asyncTimers.reveal) { clearTimeout(asyncTimers.reveal); asyncTimers.reveal = null; }
  if (asyncTimers.lastStand) { clearTimeout(asyncTimers.lastStand); asyncTimers.lastStand = null; }
  if (asyncTimers.denda) { clearTimeout(asyncTimers.denda); asyncTimers.denda = null; }
  if (asyncTimers.countdown.length) {
    asyncTimers.countdown.forEach(id => clearTimeout(id));
    asyncTimers.countdown = [];
  }
  spinning = false;
  const ov = $('countdown-overlay');
  if (ov) ov.classList.remove('active');
}

function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify({
      groups: state.groups,
      activeGroup: state.activeGroup,
      customWords: state.customWords,
      set: state.set,
      usedWords: state.usedWords
    }));
  } catch (e) {}
}

function sanitizePlayers(list) {
  return list.slice(0, MAX_PLAYERS).map((p, i) => ({
    ...newPlayer(String(p.name || `Pemain ${i + 1}`).slice(0, 15), p.avatar || AVATARS[i % AVATARS.length], p.color || COLORS[i % COLORS.length]),
    score: Number(p.score) || 0,
    impWins: Number(p.impWins) || 0,
    detWins: Number(p.detWins) || 0,
    fitnah: Number(p.fitnah) || 0
  }));
}

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return;
    const d = JSON.parse(raw);

    if (Array.isArray(d.groups) && d.groups.length) {
      const groups = d.groups
        .filter(g => g && Array.isArray(g.players) && g.players.length >= 3)
        .slice(0, MAX_GROUPS)
        .map((g, i) => ({ id: /^[a-z0-9]{1,24}$/i.test(String(g.id)) ? String(g.id) : newGroupId(), name: String(g.name || `Geng ${i + 1}`).slice(0, 20), players: sanitizePlayers(g.players) }));
      if (groups.length) {
        state.groups = groups;
        state.activeGroup = groups.some(g => g.id === d.activeGroup) ? d.activeGroup : groups[0].id;
      }
    } else if (Array.isArray(d.players) && d.players.length >= 3) {
      // Migrasi versi lama: senarai pemain tunggal -> "Geng Utama"
      state.groups = [{ id: newGroupId(), name: 'Geng Utama', players: sanitizePlayers(d.players) }];
      state.activeGroup = state.groups[0].id;
    }
    state.players = activeGroupObj().players;

    if (Array.isArray(d.customWords)) {
      state.customWords = d.customWords.filter(w => Array.isArray(w) && w.length >= 2 && w[0] && w[1]);
    }
    if (d.set) {
      state.set = { ...DEFAULT_SETTINGS, ...d.set };
      // Migrasi versi lama (satu kategori sahaja)
      if (!Array.isArray(d.set.selectedCats) && d.set.selectedCat && d.set.selectedCat !== 'all') {
        state.set.selectedCats = [d.set.selectedCat];
      }
      delete state.set.selectedCat;
      // Migrasi Roda Denda lama (pilihan tunggal) -> multi-pilih
      if (!Array.isArray(d.set.dendaModes)) {
        const old = d.set.dendaMode;
        state.set.dendaModes = old === 'Off' ? [] : old === 'Koyak' ? ['Koyak'] : ['Santai'];
      }
      state.set.dendaModes = state.set.dendaModes.filter((m, i, a) => DENDA_TIERS.includes(m) && a.indexOf(m) === i);
      delete state.set.dendaMode;
    }
    if (d.usedWords && typeof d.usedWords === 'object') state.usedWords = d.usedWords;
  } catch (e) {}
  cleanSelectedCats();
}

// ================= SIMPANAN GENG PEMAIN =================
function activeGroupObj() {
  return state.groups.find(g => g.id === state.activeGroup) || state.groups[0];
}

function switchGroup(id) {
  const g = state.groups.find(x => x.id === id);
  if (!g || g.id === state.activeGroup) return;
  state.activeGroup = g.id;
  state.players = g.players;
  clampSettings();
  save();
  renderPlayers();
  toast(`Tukar ke ${g.name} (${g.players.length} pemain)`, 'users');
}

function askText(title, msg, placeholder, initial, yesLabel, onYes) {
  $('modal-box').innerHTML = `
    <div style="font-size:2.4rem; color:var(--accent); display:grid; place-items:center;">${ico('users')}</div>
    <h3 class="title" style="margin:6px 0 4px;">${esc(title)}</h3>
    <p class="sub">${esc(msg)}</p>
    <input type="text" id="modal-input" maxlength="20" placeholder="${esc(placeholder)}" value="${esc(initial)}" style="margin-top:14px;">
    <div class="row" style="margin-top:14px;">
      <button class="btn btn-ghost" onclick="closeModal()">Batal</button>
      <button class="btn" id="modal-yes">${esc(yesLabel)}</button>
    </div>`;
  const inp = $('modal-input');
  const submit = () => {
    const v = inp.value.trim().replace(/\s+/g, ' ');
    if (!v) return toast('Sila isi nama geng!', 'warning');
    closeModal();
    onYes(v);
  };
  $('modal-yes').onclick = submit;
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
  $('modal').classList.add('active');
  setTimeout(() => { inp.focus(); inp.select(); }, 50);
}

function promptNewGroup() {
  if (state.groups.length >= MAX_GROUPS) return toast(`Maksimum ${MAX_GROUPS} geng!`, 'warning');
  askText('Geng Baru', 'Mula dengan 3 pemain contoh — tukar nama ikut member geng ni.', 'cth: Geng Ofis', '', 'Cipta', name => {
    if (state.groups.some(g => g.name.toLowerCase() === name.toLowerCase())) return toast('Nama geng tu dah ada!', 'warning');
    const g = {
      id: newGroupId(),
      name,
      players: [newPlayer('Pemain 1', AVATARS[0], COLORS[0]), newPlayer('Pemain 2', AVATARS[1], COLORS[1]), newPlayer('Pemain 3', AVATARS[2], COLORS[2])]
    };
    state.groups.push(g);
    state.activeGroup = g.id;
    state.players = g.players;
    clampSettings();
    save();
    renderPlayers();
    toast(`${name} dicipta`, 'check');
  });
}

// Senarai semua geng: tekan nama untuk guna, ikon pensel untuk tukar nama, ikon tong sampah untuk padam
function openGangManager() {
  const canDelete = state.groups.length > 1;
  $('modal-box').innerHTML = `
    <div style="font-size:2.2rem; color:var(--accent); display:grid; place-items:center;">${ico('users')}</div>
    <h3 class="title" style="margin:6px 0 2px;">Urus Geng</h3>
    <p class="tiny">Tekan nama geng untuk guna.</p>
    <div class="gm-list">${state.groups.map(g => `
      <div class="gm-row ${g.id === state.activeGroup ? 'active' : ''}">
        <button class="gm-name" onclick="switchGroup('${g.id}'); closeModal();">
          <strong class="ellipsis">${esc(g.name)}</strong>
          <span class="tiny">${g.players.length} pemain${g.id === state.activeGroup ? ' · sedang guna' : ''}</span>
        </button>
        <button class="x-btn" onclick="renameGroup('${g.id}')" aria-label="Tukar nama ${esc(g.name)}">${ico('edit', 'sm')}</button>
        ${canDelete ? `<button class="x-btn danger" onclick="deleteGroup('${g.id}')" aria-label="Padam ${esc(g.name)}">${ico('trash', 'sm')}</button>` : ''}
      </div>`).join('')}
    </div>
    <div class="row" style="margin-top:14px;">
      <button class="btn btn-ghost" onclick="closeModal()">Tutup</button>
      ${state.groups.length < MAX_GROUPS ? `<button class="btn" style="white-space:nowrap;" onclick="promptNewGroup()">${ico('plus', 'sm')} Geng Baru</button>` : ''}
    </div>`;
  $('modal').classList.add('active');
}

function renameGroup(id) {
  const g = state.groups.find(x => x.id === id);
  if (!g) return;
  askText('Tukar Nama Geng', 'Nama baru untuk geng ni:', 'cth: Geng Mamak', g.name, 'Simpan', name => {
    if (state.groups.some(x => x !== g && x.name.toLowerCase() === name.toLowerCase())) return toast('Nama geng tu dah ada!', 'warning');
    g.name = name;
    save();
    renderPlayers();
    openGangManager();
  });
}

function deleteGroup(id) {
  const g = state.groups.find(x => x.id === id);
  if (!g) return;
  if (state.groups.length <= 1) return toast('Mesti ada sekurang-kurangnya 1 geng!', 'warning');
  askConfirm(`Padam ${g.name}?`, `${g.players.length} pemain & markah geng ni akan hilang terus.`, 'Ya, Padam', () => {
    state.groups = state.groups.filter(x => x !== g);
    if (state.activeGroup === g.id) {
      state.activeGroup = state.groups[0].id;
      state.players = state.groups[0].players;
      clampSettings();
    }
    save();
    renderPlayers();
    toast(`${g.name} dipadam`, 'check');
    openGangManager();
  });
}

function renderGroupBar() {
  $('geng-bar').innerHTML = state.groups.map(g => `
    <button class="geng-pill ${g.id === state.activeGroup ? 'active' : ''}" onclick="switchGroup('${g.id}')">
      ${ico('users', 'sm')} ${esc(g.name)} <span style="opacity:.6;">${g.players.length}</span>
    </button>`).join('') +
    (state.groups.length < MAX_GROUPS ? `<button class="geng-pill add" onclick="promptNewGroup()">${ico('plus', 'sm')} Geng Baru</button>` : '');
  // Pastikan pil geng aktif kelihatan bila senarai panjang
  const active = $('geng-bar').querySelector('.geng-pill.active');
  if (active) active.scrollIntoView({ block: 'nearest', inline: 'center' });
}

// Buang id kategori yang dah tak wujud; kalau kosong (dan tak dibenarkan kosong), pilih semua
function cleanSelectedCats(allowEmpty = false) {
  const valid = id => id === 'custom' ? state.customWords.length > 0 : CATEGORIES.some(c => c.id === id);
  let sel = (state.set.selectedCats || []).filter((id, i, a) => valid(id) && a.indexOf(id) === i);
  if (sel.length === 0 && !allowEmpty) sel = CATEGORIES.map(c => c.id);
  state.set.selectedCats = sel;
}

let toastTimer;
function toast(msg, iconKey = '') {
  const t = $('toast');
  t.innerHTML = `${iconKey ? ico(iconKey, 'sm') : ''}<span>${esc(msg)}</span>`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2300);
}

function askConfirm(title, msg, yesLabel, onYes) {
  $('modal-box').innerHTML = `
    <div style="font-size:2.6rem; color:var(--accent); display:grid; place-items:center;">${ico('question_face')}</div>
    <h3 class="title" style="margin:6px 0 4px;">${esc(title)}</h3>
    <p class="sub">${esc(msg)}</p>
    <div class="row" style="margin-top:18px;">
      <button class="btn btn-ghost" onclick="closeModal()">Batal</button>
      <button class="btn" id="modal-yes">${esc(yesLabel)}</button>
    </div>`;
  $('modal-yes').onclick = () => { closeModal(); onYes(); };
  $('modal').classList.add('active');
}
function closeModal() { $('modal').classList.remove('active'); }

// ================= AUDIO SINTETIK (WEB AUDIO API) =================
let audioCtx = null;
function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended' || audioCtx.state === 'interrupted') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

function tone(freq, start, dur, { type = 'sine', vol = 0.2, endFreq = null } = {}) {
  const ctx = ensureAudio();
  const osc = ctx.createOscillator(), gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (endFreq) osc.frequency.exponentialRampToValueAtTime(endFreq, start + dur);
  gain.gain.setValueAtTime(vol, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + dur);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.onended = () => {
    try { osc.disconnect(); gain.disconnect(); } catch (e) {}
  };
  osc.start(start);
  osc.stop(start + dur + 0.02);
}

// force = true untuk butang soundboard (pemain sengaja tekan, jadi tetap berbunyi walaupun bunyi auto dimatikan)
function playSFX(type, force = false) {
  if (!force && state.set.sound === false) return;
  try {
    const ctx = ensureAudio();
    const now = ctx.currentTime;
    if (type === 'cricket') {
      for (let i = 0; i < 4; i++) tone(4200, now + i * 0.12, 0.08, { vol: 0.15 });
    } else if (type === 'siren') {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.25);
      osc.frequency.linearRampToValueAtTime(440, now + 0.5);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.55);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.onended = () => { try { osc.disconnect(); gain.disconnect(); } catch (e) {} };
      osc.start(now);
      osc.stop(now + 0.55);
    } else if (type === 'gavel') {
      [0, 0.22].forEach(o => tone(160, now + o, 0.16, { type: 'triangle', vol: 0.4, endFreq: 40 }));
    } else if (type === 'tick') {
      tone(1100, now, 0.05, { type: 'square', vol: 0.06 });
    } else if (type === 'drum') {
      for (let i = 0; i < 10; i++) tone(110, now + i * 0.11, 0.09, { type: 'triangle', vol: 0.25 + i * 0.02, endFreq: 60 });
    } else if (type === 'win') {
      [523, 659, 784, 1047].forEach((f, i) => tone(f, now + i * 0.11, 0.22, { type: 'triangle', vol: 0.22 }));
    }
  } catch (e) {}
}

function confetti() {
  const colors = ['#d94a3d', '#e0a35c', '#f6ead8', '#3aa17e', '#f6c27a', '#c23a2f'];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    const w = 6 + Math.random() * 6;
    c.style.cssText = `left:${Math.random() * 100}vw; width:${w}px; height:${w * 1.5}px; background:${pick(colors)}; animation-duration:${2 + Math.random() * 1.8}s; animation-delay:${Math.random() * 0.5}s;`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4500);
  }
}

// ================= NAVIGASI SKRIN =================
const NAV_SCREENS = ['scr-menu', 'scr-players', 'scr-settings', 'scr-score'];
const RENDERERS = {
  'scr-menu': renderMenu,
  'scr-players': renderPlayers,
  'scr-settings': syncSettings,
  'scr-score': renderScore,
  'scr-custom': renderCustom,
  'scr-categories': renderCategories
};

function go(id) {
  if (id !== 'scr-reveal' && id !== 'scr-laststand' && id !== 'scr-result' && id !== 'scr-vote') {
    clearAsyncTimers();
  }
  if (RENDERERS[id]) RENDERERS[id]();
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  currentScreen = id;
  document.body.classList.toggle('in-game', !NAV_SCREENS.includes(id));
  if (id !== 'scr-menu') armBackTrap();
  setWakeLock(GAME_SCREENS.includes(id));
  document.querySelectorAll('.nav button').forEach(b => b.classList.toggle('active', b.dataset.go === id));
  window.scrollTo(0, 0);
}

// ================= BUTANG BACK TELEFON & SKRIN SENTIASA HIDUP =================
// Skrin permainan sebenar (pemain sedang main) — skrin tak padam & Back minta pengesahan
const GAME_SCREENS = ['scr-pass', 'scr-debate', 'scr-vote', 'scr-reveal', 'scr-laststand', 'scr-result'];
let backTrap = false;

// Simpan satu entri sejarah supaya butang Back telefon tak terus keluar dari halaman
function armBackTrap() {
  if (backTrap) return;
  try { history.pushState({ serkap: 1 }, ''); backTrap = true; } catch (e) {}
}

function handleBack() {
  backTrap = false;
  if ($('modal').classList.contains('active')) { closeModal(); armBackTrap(); return; }
  if ($('countdown-overlay').classList.contains('active')) { cancelCountdown(); armBackTrap(); return; }
  if (currentScreen === 'scr-menu') return; // Back dari menu utama = keluar seperti biasa
  if (GAME_SCREENS.includes(currentScreen) && round) {
    armBackTrap();
    if (round.finished) endToMenu();
    else quitGame();
    return;
  }
  go(currentScreen === 'scr-custom' ? customBack : 'scr-menu');
}

let wakeLock = null;
async function setWakeLock(on) {
  try {
    if (on && !wakeLock && 'wakeLock' in navigator && document.visibilityState === 'visible') {
      wakeLock = await navigator.wakeLock.request('screen');
      wakeLock.addEventListener('release', () => { wakeLock = null; });
    } else if (!on && wakeLock) {
      const w = wakeLock;
      wakeLock = null;
      await w.release();
    }
  } catch (e) { wakeLock = null; }
}

function goPlay() {
  if (state.players.length < 3) {
    toast('Minimum 3 pemain diperlukan!', 'warning');
    return go('scr-players');
  }
  go('scr-categories');
}

function openCustom(from) { customBack = from; go('scr-custom'); }

// ================= MENU UTAMA (PANEL PERSEDIAAN PANTAS) =================
const QUICK_TIMES = [60, 90, 120, 180, 240, 300, 0]; // 0 = Tanpa had

function dendaSummary() {
  const m = state.set.dendaModes;
  if (!m.length) return 'Denda Off';
  if (m.length === DENDA_TIERS.length) return 'Semua Tahap';
  return m.join(' + ');
}

function renderMenu() {
  clampSettings();
  const s = state.set, n = state.players.length, lim = limits();
  const isBal = s.version === 'balance';

  $('home-ver-btn').innerHTML = isBal ? `${ico('scale', 'sm')} Balance` : `${ico('flame', 'sm')} Bebas`;
  $('hm-mode-1').classList.toggle('active', s.mode === 1);
  $('hm-mode-2').classList.toggle('active', s.mode === 2);

  $('hm-geng-lbl').textContent = activeGroupObj().name;
  $('hm-players-val').innerHTML = `${ico('users', 'sm')} ${n} Pemain`;

  $('hm-imp-val').textContent = s.imposters;
  $('hm-imp-lbl').textContent = s.blurs ? `+${s.blurs} Blur` : 'Orang';
  $('hm-imp-minus').disabled = s.imposters <= 1;
  $('hm-imp-plus').disabled = s.imposters >= lim.impMax;

  $('hm-time-val').innerHTML = `${ico('clock', 'sm')} ${s.duration === 0 ? 'Tanpa Had' : fmt(s.duration)}`;
  $('hm-extra-val').innerHTML = `${esc(dendaSummary())}<span class="tiny ellipsis" style="display:block; font-weight:600;">Twist: ${esc(s.twistMode)}</span>`;

  $('tile-custom').textContent = state.customWords.length ? `${state.customWords.length} pasangan kata` : 'Perkataan sendiri';
}

function quickToggleVersion() {
  setOption('version', state.set.version === 'balance' ? 'free' : 'balance');
  toast(state.set.version === 'balance' ? 'Balance: nisbah adil automatik' : 'Bebas: semua had dibuka', state.set.version === 'balance' ? 'scale' : 'flame');
}

function cycleQuickTime() {
  const s = state.set;
  const i = QUICK_TIMES.indexOf(s.duration);
  s.duration = QUICK_TIMES[(i + 1) % QUICK_TIMES.length];
  syncSettings();
}

// ================= RODA DENDA (MULTI-PILIH) =================
function toggleDendaMode(tier) {
  const m = state.set.dendaModes;
  state.set.dendaModes = m.includes(tier) ? m.filter(x => x !== tier) : DENDA_TIERS.filter(t => t === tier || m.includes(t));
  syncSettings();
}

function toggleAllDenda() {
  state.set.dendaModes = state.set.dendaModes.length === DENDA_TIERS.length ? [] : [...DENDA_TIERS];
  syncSettings();
}

// ================= PENGURUSAN PEMAIN =================
function renamePlayer(i) {
  const p = state.players[i];
  if (!p) return;
  askText('Tukar Nama Pemain', 'Nama baru untuk member ni:', 'Nama member', p.name, 'Simpan', name => {
    name = name.slice(0, 15);
    if (state.players.some((x, j) => j !== i && x.name.toLowerCase() === name.toLowerCase())) return toast(`Nama "${name}" dah ada!`, 'warning');
    p.name = name;
    save();
    renderPlayers();
  });
}

function renderPlayers() {
  renderGroupBar();
  const n = state.players.length;
  $('pl-count').textContent = `${n} / ${MAX_PLAYERS}`;
  $('player-list').innerHTML = state.players.map((p, i) => `
    <div class="player-item">
      <button class="avatar" style="background:${p.color};" onclick="cycleAvatar(${i})" aria-label="Tukar avatar">${ico(p.avatar)}</button>
      <button class="info name-btn" onclick="renamePlayer(${i})" aria-label="Tukar nama ${esc(p.name)}">
        <div class="ellipsis" style="font-weight:800;">${esc(p.name)} <span style="color:var(--dim);">${ico('edit', 'sm')}</span></div>
        <div class="tiny" style="color:var(--accent);">${p.score} mata</div>
      </button>
      ${n > 3 ? `<button class="x-btn" onclick="removePlayer(${i})" aria-label="Buang">${ico('close', 'sm')}</button>` : ''}
    </div>`).join('');
}

function addPlayer() {
  const inp = $('inp-player');
  const name = inp.value.trim().replace(/\s+/g, ' ');
  if (!name) return;
  if (state.players.length >= MAX_PLAYERS) return toast(`Maksimum ${MAX_PLAYERS} pemain!`, 'warning');
  if (state.players.some(p => p.name.toLowerCase() === name.toLowerCase())) return toast(`Nama "${name}" dah ada!`, 'warning');
  const usedA = state.players.map(p => p.avatar), usedC = state.players.map(p => p.color);
  const avatar = AVATARS.find(a => !usedA.includes(a)) || pick(AVATARS);
  const color = COLORS.find(c => !usedC.includes(c)) || pick(COLORS);
  state.players.push(newPlayer(name, avatar, color));
  inp.value = '';
  save();
  renderPlayers();
  inp.focus();
}

function cycleAvatar(i) {
  const used = state.players.filter((_, j) => j !== i).map(p => p.avatar);
  let k = AVATARS.indexOf(normalizeAvatar(state.players[i].avatar));
  for (let step = 0; step < AVATARS.length; step++) {
    k = (k + 1) % AVATARS.length;
    if (!used.includes(AVATARS[k])) break;
  }
  state.players[i].avatar = AVATARS[k];
  save();
  renderPlayers();
}

function removePlayer(i) {
  if (state.players.length <= 3) return toast('Minimum 3 pemain!', 'warning');
  state.players.splice(i, 1);
  clampSettings();
  save();
  renderPlayers();
}

function resetScores() {
  askConfirm(`Reset mata ${activeGroupObj().name}?`, 'Mata & statistik Sijil Lepak pemain geng ni akan jadi kosong. Geng lain tak terjejas.', 'Ya, Reset', () => {
    state.players.forEach(p => { p.score = 0; p.impWins = 0; p.detWins = 0; p.fitnah = 0; });
    save();
    if (RENDERERS[currentScreen]) RENDERERS[currentScreen]();
    toast('Semua mata dah direset', 'check');
  });
}

// ================= LOGIK TETAPAN (BALANCE VS BEBAS) =================
// Balance: Rakyat sentiasa majoriti (penyamar + blur <= separuh tolak 1).
// Bebas: sekurang-kurangnya 1 penyamar & 1 Rakyat.
function limits() {
  const n = state.players.length, s = state.set;
  if (s.version === 'balance') {
    const maxBad = Math.max(1, Math.floor((n - 1) / 2));
    return { impMax: maxBad, blurMax: n >= 5 ? clamp(maxBad - s.imposters, 0, 1) : 0 };
  }
  return { impMax: Math.max(1, n - 1), blurMax: Math.max(0, n - 1 - s.imposters) };
}

function clampSettings() {
  const s = state.set;
  s.imposters = clamp(s.imposters, 1, limits().impMax);
  s.blurs = clamp(s.blurs, 0, limits().blurMax);
}

function recommendedImposters(n) {
  return Math.min(n >= 9 ? 3 : n >= 6 ? 2 : 1, Math.max(1, Math.floor((n - 1) / 2)));
}

function syncSettings() {
  clampSettings();
  const s = state.set, n = state.players.length, isBal = s.version === 'balance';
  const lim = limits();

  document.querySelectorAll('.seg[data-key]').forEach(seg => {
    seg.querySelectorAll('button').forEach(b => b.classList.toggle('active', String(s[seg.dataset.key]) === b.dataset.val));
  });

  $('ver-badge').innerHTML = isBal ? `${ico('scale', 'sm')} Auto Adil` : `${ico('flame', 'sm')} 100% Terbuka`;
  $('ver-desc').textContent = isBal
    ? 'Sistem kawal nisbah supaya Rakyat sentiasa majoriti, dan watak tanpa perkataan dilindungi daripada giliran pertama.'
    : 'Semua had dibuka! Bebas laras watak, susunan giliran rawak penuh & boleh aktifkan Kejutan Pusingan Gila.';
  $('mode-desc').textContent = s.mode === 1
    ? 'Penyamar (Lalang) dapat perkataan yang hampir sama — dan dia sendiri tak tahu dia penyamar!'
    : 'Penyamar (Kaki Goreng) tahu dia penyamar & tiada perkataan. Kena goreng hidup-hidup!';

  $('val-imp').textContent = s.imposters;
  $('rec-imp').textContent = `Disyorkan: ${recommendedImposters(n)} untuk ${n} pemain`;
  $('imp-minus').disabled = s.imposters <= 1;
  $('imp-plus').disabled = s.imposters >= lim.impMax;

  $('val-blur').textContent = s.blurs;
  $('blur-minus').disabled = s.blurs <= 0;
  $('blur-plus').disabled = s.blurs >= lim.blurMax;
  if (isBal && n < 5) $('blur-desc').textContent = 'Perlu sekurang-kurangnya 5 pemain';
  else if (isBal && lim.blurMax === 0 && s.blurs === 0) $('blur-desc').textContent = 'Kurangkan penyamar dulu untuk tambah Si Blur';
  else $('blur-desc').textContent = s.mode === 1 ? 'Tiada perkataan langsung, sebelah penyamar' : 'Dapat perkataan Lalang (hampir sama)';

  // Hint cuma relevan untuk watak tanpa perkataan: Kaki Goreng (Mod 2) atau Si Blur (Mod 1)
  $('row-hint').hidden = !(s.mode === 2 || (s.mode === 1 && s.blurs > 0));
  $('sw-hint').classList.toggle('on', s.hint);

  $('val-time').textContent = s.duration === 0 ? '∞ Tanpa Had' : fmt(s.duration);

  $('row-chaos').hidden = isBal;
  $('sw-chaos').classList.toggle('on', s.chaos);
  $('sw-sound').classList.toggle('on', s.sound !== false);
  $('lbl-sound-set').innerHTML = `${ico(s.sound !== false ? 'volume_on' : 'volume_off', 'sm')} Bunyi &amp; Getaran`;

  // Roda Denda multi-pilih
  document.querySelectorAll('#denda-pills .mpill').forEach(b => b.classList.toggle('on', s.dendaModes.includes(b.dataset.denda)));
  $('btn-denda-toggle-all').textContent = s.dendaModes.length === DENDA_TIERS.length ? 'Kosongkan' : 'Semua';

  if (currentScreen === 'scr-menu') renderMenu();
  save();
}

function setOption(key, raw) {
  const s = state.set;
  const val = key === 'mode' ? Number(raw) : raw;
  s[key] = val;
  if (key === 'mode') s.hint = (val === 2); // Kaki Goreng: hint ON secara lalai
  syncSettings();
}

function adjSetting(key, delta) { state.set[key] += delta; syncSettings(); }
function toggleSetting(key) { state.set[key] = !state.set[key]; syncSettings(); }

function adjTime(delta) {
  const s = state.set;
  if (s.duration === 0) { if (delta > 0) s.duration = 30; }
  else if (s.duration === 30 && delta < 0) s.duration = 0;
  else s.duration = clamp(s.duration + delta, 30, 600);
  syncSettings();
}

// ================= KATEGORI (MULTI-PILIH) =================
const allCatIds = () => [...CATEGORIES.map(c => c.id), ...(state.customWords.length ? ['custom'] : [])];
const catWordCount = id => id === 'custom' ? state.customWords.length : (CATEGORIES.find(c => c.id === id) || { words: [] }).words.length;
const catNamePlain = id => id === 'custom' ? 'Dek Kustom' : (CATEGORIES.find(c => c.id === id) || { name: id }).name;

function renderCategories() {
  cleanSelectedCats(true);
  const sel = state.set.selectedCats;
  const allIds = allCatIds();
  const allOn = allIds.length > 0 && allIds.every(id => sel.includes(id));
  const totalPairs = sel.reduce((a, id) => a + catWordCount(id), 0);

  $('cat-summary').innerHTML = `
    <div class="row">
      <div style="min-width:0;">
        <strong style="display:flex; align-items:center; gap:6px;">${sel.length === 0 ? 'Belum pilih kategori' : allOn ? `${ico('dice', 'sm')} Campur Semua Kategori` : `${sel.length} kategori dipilih`}</strong>
        <div class="tiny">${sel.length ? `${totalPairs} pasangan kata · kategori dirawak setiap pusingan` : 'Pilih sekurang-kurangnya satu kategori'}</div>
      </div>
      <span class="badge">${sel.length}/${allIds.length}</span>
    </div>
    <div class="quick-row">
      <button class="qbtn ${allOn ? 'on' : ''}" onclick="selectAllCats()">${ico('check', 'sm')} Semua</button>
      <button class="qbtn" onclick="randomCats(2)">${ico('dice', 'sm')} Rawak 2</button>
      <button class="qbtn" onclick="randomCats(3)">${ico('dice', 'sm')} Rawak 3</button>
      <button class="qbtn" onclick="clearCats()">${ico('close', 'sm')} Kosong</button>
    </div>`;

  const card = c => `
    <button class="cat ${sel.includes(c.id) ? 'selected' : ''}" onclick="toggleCategory('${c.id}')">
      <span class="c-icon">${ico(c.icon)}</span>
      <strong>${esc(c.name)}</strong>
      <span class="tiny">${c.words.length} pasangan · ${esc(c.desc)}</span>
    </button>`;

  let html = CATEGORY_GROUPS.map(g => {
    const cats = CATEGORIES.filter(c => c.group === g.id);
    const groupOn = cats.every(c => sel.includes(c.id));
    return `<div class="cat-group"><span class="label">${ico(g.icon, 'sm')} ${esc(g.name)}</span>
      <button class="group-toggle" onclick="toggleGroup('${g.id}')">${groupOn ? 'Buang semua' : 'Pilih semua'}</button></div>` + cats.map(card).join('');
  }).join('');

  html += `<div class="cat-group"><span class="label">${ico('sparkles', 'sm')} Dek Kustom</span>
    ${state.customWords.length ? `<button class="group-toggle" onclick="openCustom('scr-categories')">${ico('edit', 'sm')} Urus</button>` : ''}</div>`;
  html += state.customWords.length ? `
    <button class="cat wide ${sel.includes('custom') ? 'selected' : ''}" onclick="toggleCategory('custom')">
      <span class="c-icon">${ico('sparkles')}</span>
      <span><strong>Dek Kustom Korang</strong><br><span class="tiny">${state.customWords.length} pasangan kata dalaman geng</span></span>
    </button>` : `
    <button class="cat wide dashed" onclick="openCustom('scr-categories')">
      <span class="c-icon">${ico('plus')}</span>
      <span><strong>Buat Dek Kustom</strong><br><span class="tiny">Masukkan perkataan dalaman geng korang</span></span>
    </button>`;
  $('cat-list').innerHTML = html;

  const btn = $('btn-start');
  btn.disabled = sel.length === 0;
  btn.innerHTML = sel.length === 0
    ? 'PILIH KATEGORI DULU'
    : `MULA AGIH RAHSIA ${ico('arrow_right', 'sm')}`;
}

function setSelectedCats(ids) {
  state.set.selectedCats = ids;
  save();
  renderCategories();
}

function toggleCategory(id) {
  const sel = state.set.selectedCats;
  setSelectedCats(sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id]);
}

function toggleGroup(groupId) {
  const ids = CATEGORIES.filter(c => c.group === groupId).map(c => c.id);
  const sel = state.set.selectedCats;
  const allOn = ids.every(id => sel.includes(id));
  setSelectedCats(allOn ? sel.filter(id => !ids.includes(id)) : [...new Set([...sel, ...ids])]);
}

function selectAllCats() { setSelectedCats(allCatIds()); }
function clearCats() { setSelectedCats([]); }

function randomCats(n) {
  const ids = shuffle(allCatIds()).slice(0, n);
  setSelectedCats(ids);
  toast(ids.map(catNamePlain).join(' + '), 'dice');
}

function wordKey(item) { return `${item.catId}:${item.data[0]}`; }

function pickWordPair() {
  cleanSelectedCats();
  const pool = [];
  state.set.selectedCats.forEach(id => {
    if (id === 'custom') state.customWords.forEach(w => pool.push({ catId: 'custom', catName: 'Dek Kustom', data: w }));
    else {
      const c = CATEGORIES.find(x => x.id === id);
      if (c) c.words.forEach(w => pool.push({ catId: c.id, catName: c.name, data: w }));
    }
  });
  const isUnused = item => !state.usedWords[wordKey(item)] && !state.usedWords[item.data[0]];
  if (!pool.some(isUnused)) {
    pool.forEach(item => {
      delete state.usedWords[wordKey(item)];
      delete state.usedWords[item.data[0]];
    });
  }

  // Rawak ikut KATEGORI dulu (adil walaupun saiz dek berbeza), elak kategori sama dua kali berturut
  const byCat = {};
  pool.filter(isUnused).forEach(item => (byCat[item.catId] = byCat[item.catId] || []).push(item));
  let catIds = Object.keys(byCat);
  if (catIds.length > 1) catIds = catIds.filter(id => id !== lastCatId);
  const catId = pick(catIds);
  const picked = pick(byCat[catId]);
  lastCatId = catId;
  state.usedWords[wordKey(picked)] = true;
  return picked;
}

// ================= MULA PUSINGAN =================
function startGame() {
  clearAsyncTimers();
  stopTimer();
  if (state.players.length < 3) return goPlay();
  cleanSelectedCats(true);
  if (state.set.selectedCats.length === 0) {
    toast('Pilih sekurang-kurangnya satu kategori!', 'warning');
    return go('scr-categories');
  }
  clampSettings();
  const s = state.set, n = state.players.length;
  const picked = pickWordPair();

  let chaos = null;
  if (s.version === 'free' && s.chaos && Math.random() < CHAOS_CHANCE) {
    chaos = Math.random() < 0.5 ? 'ALL_IMPOSTER' : 'ALL_RAKYAT';
  }

  const roles = new Array(n).fill('rakyat');
  if (chaos === 'ALL_IMPOSTER') {
    roles.fill('goreng');
  } else if (!chaos) {
    const idx = shuffle([...Array(n).keys()]);
    let ptr = 0;
    for (let i = 0; i < s.imposters; i++) roles[idx[ptr++]] = s.mode === 1 ? 'lalang' : 'goreng';
    for (let i = 0; i < s.blurs; i++) roles[idx[ptr++]] = s.mode === 1 ? 'blur' : 'lalang';
  }

  round = {
    pair: picked.data, // [Rakyat, Lalang, Hint, Soalan]
    catId: picked.catId,
    catName: picked.catName,
    chaos,
    mode: s.mode,
    hint: s.hint,
    assign: state.players.map((p, i) => ({ playerIdx: i, name: p.name, role: roles[i], out: false })),
    passIndex: 0,
    peeked: false,
    voteNo: 1,
    order: [],
    twist: '',
    selected: null,
    suspect: null,
    lsChoices: [],
    lsDone: false
  };
  save();
  renderPass();
  go('scr-pass');
}

function quitGame() {
  askConfirm('Tamatkan pusingan?', 'Pusingan ni akan dibatalkan dan mata takkan dikira.', 'Ya, Tamatkan', () => {
    clearAsyncTimers();
    stopTimer();
    round = null;
    go('scr-menu');
  });
}

function endToMenu() {
  clearAsyncTimers();
  stopTimer();
  round = null;
  go('scr-menu');
}

// ================= FASA PASS-THE-PHONE (HOLD TO PEEK) =================
function renderPass() {
  const cur = round.assign[round.passIndex];
  const p = state.players[cur.playerIdx];
  const total = round.assign.length;
  $('pass-badge').textContent = `PEMAIN ${round.passIndex + 1} / ${total}`;
  $('pass-dots').innerHTML = round.assign.map((_, i) =>
    `<span class="dot ${i < round.passIndex ? 'done' : i === round.passIndex ? 'now' : ''}"></span>`).join('');
  $('pass-avatar').style.background = p.color;
  $('pass-avatar').innerHTML = ico(p.avatar);
  $('pass-name').textContent = cur.name;
  round.peeked = false;
  const btn = $('btn-next-player');
  btn.disabled = true;
  btn.className = 'btn btn-ghost';
  btn.innerHTML = `${ico('lock', 'sm')} Tahan kad di atas dahulu`;
  showSecret(false);
}

function showSecret(show) {
  const peek = $('peek'), inst = $('peek-inst'), cont = $('peek-content');
  if (!show || !round) {
    peek.classList.remove('revealing');
    inst.hidden = false;
    cont.hidden = true;
    cont.innerHTML = ''; // Kosongkan supaya rahsia tak tertinggal dalam DOM
    return;
  }

  const cur = round.assign[round.passIndex];
  const [wordMain, wordAlt, hintText] = round.pair;
  // Mesej Rakyat & Lalang mesti SAMA supaya Lalang tak dapat agak dia lain
  const wordMsg = round.mode === 1
    ? 'Hafal perkataan ni! Bagi klu yang tak terlalu ketara.'
    : 'Hafal perkataan ni! Ada Kaki Goreng tanpa perkataan — serkap dia!';
  const effectiveHint = hintText && hintText !== 'Tiada klu tambahan'
    ? hintText
    : (round.catName ? `Berkaitan kategori ${round.catName}` : '');
  const hintHtml = round.hint && effectiveHint
    ? `<div class="hint-box">${ico('bulb', 'sm')} <span>Hint bayangan: “${esc(effectiveHint)}”</span></div>`
    : '';

  let html = `<span class="badge">${esc(round.catName.toUpperCase())}</span>`;
  if (cur.role === 'rakyat' || cur.role === 'lalang') {
    html += `<div class="secret-word">${esc(cur.role === 'rakyat' ? wordMain : wordAlt)}</div><p class="secret-sub">${wordMsg}</p>`;
  } else if (cur.role === 'goreng') {
    html += `<div class="secret-word" style="color:var(--danger);">${ico('goreng')} <span>KAU PENYAMAR!</span></div>
             <p class="secret-sub">Kau tiada perkataan. Dengar klu orang lain &amp; goreng sampai lepas!</p>${hintHtml}`;
  } else if (cur.role === 'blur') {
    html += `<div class="secret-word" style="color:var(--teal);">${ico('blur')} <span>KAU SI BLUR!</span></div>
             <p class="secret-sub">Kau tiada perkataan langsung. Pandai-pandai menyamar &amp; bantu penyamar!</p>${hintHtml}`;
  }
  cont.innerHTML = html;
  inst.hidden = true;
  cont.hidden = false;
  peek.classList.add('revealing');

  if (!round.peeked) {
    round.peeked = true;
    vibrate(15);
    const btn = $('btn-next-player');
    btn.disabled = false;
    btn.className = 'btn';
    const next = round.assign[round.passIndex + 1];
    btn.innerHTML = next
      ? `SELESAI — SERAH PADA ${esc(next.name.toUpperCase())} ${ico('arrow_right', 'sm')}`
      : `SEMUA DAH TENGOK — MULA DEBAT! ${ico('arrow_right', 'sm')}`;
  }
}

function nextPass() {
  if (!round || !round.peeked) return;
  showSecret(false);
  if (round.passIndex + 1 < round.assign.length) {
    round.passIndex++;
    renderPass();
  } else {
    startDebate(false);
  }
}

// ================= FASA DEBAT & PEMASA =================
function startDebate(isContinue) {
  const s = state.set;
  $('deb-cat').textContent = round.catName;
  $('deb-mode').innerHTML = round.mode === 1
    ? `${ico('lalang', 'sm')} Mod Lalang`
    : `${ico('kuali', 'sm')} Kaki Goreng`;
  $('deb-round').textContent = `UNDI #${round.voteNo}`;

  if (!isContinue) {
    round.twist = s.twistMode === 'Off' ? '' : rollTwist();
    // Balance: lindungi watak TANPA perkataan (goreng / blur) daripada menjadi orang pertama (#1),
    // tetapi benarkan Lalang (yang ada perkataan) atau Rakyat menjadi #1 supaya orang #1 tidak automatik terbukti Rakyat!
    const order = shuffle(round.assign);
    if (s.version === 'balance') {
      const hasWord = r => r.role === 'rakyat' || r.role === 'lalang';
      const i = order.findIndex(hasWord);
      if (i > 0) order.unshift(order.splice(i, 1)[0]);
    }
    round.order = order.map(r => r.playerIdx);
  }

  $('deb-twist-box').hidden = !round.twist;
  $('deb-twist-text').textContent = round.twist;

  const active = round.order.map(idx => round.assign[idx]).filter(r => !r.out);
  $('deb-order').innerHTML = active.map((r, i) =>
    `<span class="o ${i === 0 ? 'first' : ''}"><b>${i + 1}</b>${esc(r.name)}</span>`).join('');
  $('deb-prompt').textContent = `“${round.pair[3]}”`;

  const caught = round.assign.filter(r => r.out);
  const remaining = remainingBad().length;
  $('deb-status').hidden = caught.length === 0;
  if (caught.length) {
    $('deb-status').innerHTML = `<strong style="display:inline-flex; align-items:center; gap:6px;">${ico('warning', 'sm')} Masih ada ${remaining} penyamar dalam kalangan korang!</strong>
      <div class="tiny" style="margin-top:4px;">${ico('lock', 'sm')} Dah diserkap: ${caught.map(r => esc(r.name)).join(', ')}</div>`;
  }

  startTimer();
  go('scr-debate');
}

function rollTwist() {
  const mode = state.set.twistMode;
  const pool = mode === 'Santai' ? TWISTS.Santai : mode === 'Kecoh' ? TWISTS.Kecoh : [...TWISTS.Santai, ...TWISTS.Kecoh];
  const options = pool.filter(t => t !== (round && round.twist));
  return pick(options.length ? options : pool);
}

function rerollTwist() {
  if (!round) return;
  round.twist = rollTwist();
  $('deb-twist-text').textContent = round.twist;
}

function startTimer() {
  stopTimer();
  const d = state.set.duration;
  timer.left = d;
  timer.total = d;
  timer.paused = false;
  $('btn-pause').innerHTML = `${ico('pause', 'sm')} Jeda`;
  $('timer-controls').hidden = d === 0;
  updateTimer();
  // Interval kekal berjalan walaupun masa 0, supaya +30 Saat boleh sambung semula
  if (d > 0) timer.id = setInterval(tick, 1000);
}

function tick() {
  if (timer.paused || timer.left <= 0) return;
  timer.left--;
  if (timer.left > 0 && timer.left <= 5) playSFX('tick');
  if (timer.left === 0) {
    playSFX('gavel');
    vibrate([200, 100, 200]);
    toast('Masa tamat! Jom undi!', 'clock');
  }
  updateTimer();
}

function stopTimer() { clearInterval(timer.id); timer.id = null; }

function updateTimer() {
  const unlimited = state.set.duration === 0;
  const C = 464.96;
  $('timer-text').textContent = unlimited ? '∞' : fmt(timer.left);
  $('timer-ring').style.strokeDashoffset = unlimited ? 0 : C * (1 - timer.left / Math.max(1, timer.total));
  $('timer-wrap').classList.toggle('low', !unlimited && timer.left <= 15);
  $('timer-wrap').classList.toggle('paused', timer.paused);
}

function toggleTimer() {
  timer.paused = !timer.paused;
  $('btn-pause').innerHTML = timer.paused ? `${ico('play', 'sm')} Sambung` : `${ico('pause', 'sm')} Jeda`;
  updateTimer();
}

function addExtraTime() {
  if (state.set.duration === 0) return;
  timer.left += 30;
  timer.total = Math.max(timer.total, timer.left);
  updateTimer();
}

// ================= FASA UNDIAN =================
function goVote() {
  if (!round) return;
  timer.paused = true;
  round.selected = null;
  $('vote-title').textContent = `Undian #${round.voteNo}`;
  $('btn-confirm-vote').disabled = true;
  $('vote-grid').classList.remove('has-sel');
  $('vote-grid').innerHTML = round.assign.filter(r => !r.out).map(r => {
    const p = state.players[r.playerIdx];
    return `<div class="p-card" id="vcard-${r.playerIdx}" style="background:${p.color};" onclick="selectSuspect(${r.playerIdx})">
      <span class="sel-badge">${ico('target', 'sm')}</span>
      <span class="pa">${ico(p.avatar)}</span>
      <div class="ellipsis">${esc(r.name)}</div>
    </div>`;
  }).join('');
  go('scr-vote');
}

function backToDebate() {
  cancelCountdown();
  timer.paused = false;
  $('btn-pause').innerHTML = `${ico('pause', 'sm')} Jeda`;
  updateTimer();
  go('scr-debate');
}

function selectSuspect(idx) {
  if (!round) return;
  round.selected = idx;
  document.querySelectorAll('.p-card').forEach(c => c.classList.toggle('selected', c.id === `vcard-${idx}`));
  $('vote-grid').classList.add('has-sel');
  $('btn-confirm-vote').disabled = false;
}

function cancelCountdown() {
  if (asyncTimers.countdown.length) {
    asyncTimers.countdown.forEach(id => clearTimeout(id));
    asyncTimers.countdown = [];
  }
  $('countdown-overlay').classList.remove('active');
}

function countdown() {
  cancelCountdown();
  const ov = $('countdown-overlay'), holder = $('count-holder');
  const seq = [
    { html: '3', sfx: 'tick', small: false },
    { html: '2', sfx: 'tick', small: false },
    { html: '1', sfx: 'tick', small: false },
    { html: `TUNJUK! ${ico('point_right')}`, sfx: 'gavel', small: true }
  ];
  holder.innerHTML = '';
  ov.classList.add('active');
  seq.forEach((item, i) => {
    const id = setTimeout(() => {
      holder.innerHTML = `<div class="count-num" style="${item.small ? 'font-size:3.4rem;' : ''}">${item.html}</div>`;
      playSFX(item.sfx);
    }, i * 800);
    asyncTimers.countdown.push(id);
  });
  const endId = setTimeout(() => cancelCountdown(), seq.length * 800 + 300);
  asyncTimers.countdown.push(endId);
}

function submitVote() {
  if (!round || round.selected === null || currentScreen !== 'scr-vote') return;
  clearAsyncTimers();
  stopTimer();
  const sus = round.assign[round.selected];
  round.suspect = sus;
  $('reveal-actions').innerHTML = '';
  $('reveal-stage').innerHTML = `
    <p class="label">Identiti sebenar</p>
    <h2 class="title" style="font-size:2rem;">${esc(sus.name)} ialah…</h2>
    <div class="suspense">${ico('drum', 'xl')}</div>`;
  playSFX('drum');
  go('scr-reveal');
  asyncTimers.reveal = setTimeout(() => {
    asyncTimers.reveal = null;
    if (round && round.suspect === sus) showRevealResult(sus);
  }, 1500);
}

// ================= DEDAH IDENTITI =================
function roleInfo(role) {
  if (role === 'rakyat') return { icon: 'rakyat', label: 'Rakyat', cls: 'good', desc: 'Dia pegang perkataan sebenar!' };
  if (role === 'lalang') return { icon: 'lalang', label: 'Lalang', cls: 'bad', desc: 'Dia pegang perkataan lain tanpa sedar!' };
  if (role === 'goreng') return { icon: 'goreng', label: round && round.chaos ? 'Penyamar' : 'Kaki Goreng', cls: 'bad', desc: 'Dia memang tiada perkataan dari awal!' };
  return { icon: 'blur', label: 'Si Blur', cls: 'bad', desc: 'Dia tiada perkataan langsung!' };
}

function remainingBad() { return round ? round.assign.filter(r => r.role !== 'rakyat' && !r.out) : []; }

function roleCard(sus, cls, badgeHtml) {
  const info = roleInfo(sus.role);
  return `${badgeHtml}
    <div class="role-card ${cls}">
      <div class="role-emoji">${ico(info.icon)}</div>
      <div class="label" style="margin-top:8px;">${esc(sus.name)} ialah</div>
      <div class="role-name">${info.label}</div>
      <p class="sub" style="margin-top:6px;">${info.desc}</p>
    </div>`;
}

function showRevealResult(sus) {
  const stage = $('reveal-stage'), act = $('reveal-actions');

  if (round.chaos) {
    stage.innerHTML = roleCard(sus, 'prank', `<span class="badge">${ico('question_face', 'sm')} EH KEJAP…</span>`) +
      `<p class="sub">Macam ada sesuatu yang pelik pusingan ni…</p>`;
    act.innerHTML = `<button class="btn btn-lg" onclick="finalize('chaos')">LIHAT KEPUTUSAN ${ico('arrow_right', 'sm')}</button>`;
    playSFX('siren');
    return;
  }

  if (sus.role === 'rakyat') {
    stage.innerHTML = roleCard(sus, 'good', `<span class="badge red">${ico('siren', 'sm')} SALAH TANGKAP!</span>`) +
      `<p class="sub">Korang dah fitnah orang tak bersalah…</p>`;
    act.innerHTML = `<button class="btn btn-lg" onclick="finalize('fail')">LIHAT KEPUTUSAN ${ico('arrow_right', 'sm')}</button>`;
    playSFX('siren');
    vibrate([100, 60, 100]);
    return;
  }

  sus.out = true;
  playSFX('gavel');
  vibrate(120);
  stage.innerHTML = roleCard(sus, 'bad', `<span class="badge teal">${ico('target', 'sm')} DISERKAP!</span>`);

  // Cuma watak TANPA perkataan (Kaki Goreng / Si Blur) dapat Teka & Curi
  if (sus.role === 'goreng' || sus.role === 'blur') {
    stage.innerHTML += `<p class="sub">Tapi dia ada satu peluang terakhir…</p>`;
    act.innerHTML = `<button class="btn btn-lg shine" onclick="setupLastStand()">PELUANG TERAKHIR: TEKA &amp; CURI ${ico('arrow_right', 'sm')}</button>`;
  } else {
    renderAfterCatchActions();
  }
}

function renderAfterCatchActions() {
  const rem = remainingBad().length;
  const activeRakyat = round.assign.filter(r => r.role === 'rakyat' && !r.out).length;
  // Jika tiada penyamar berbaki -> Rakyat menang
  if (rem === 0) {
    $('reveal-actions').innerHTML = `<button class="btn btn-lg btn-teal" onclick="finalize('win')">LIHAT KEPUTUSAN ${ico('arrow_right', 'sm')}</button>`;
    return;
  }
  $('reveal-actions').innerHTML = `
    <div class="card notice">
      <strong style="display:inline-flex; align-items:center; gap:6px;">${ico('warning', 'sm')} Masih ada ${rem} penyamar lagi!</strong>
      <p class="tiny" style="margin-top:4px;">${activeRakyat} Rakyat vs ${rem} Penyamar berbaki — sambung debat &amp; undi sekali lagi.</p>
    </div>
    <button class="btn btn-lg" onclick="continueRound()">SAMBUNG DEBAT ${ico('arrow_right', 'sm')}</button>`;
}

function continueRound() {
  if (!round || round.finished || currentScreen !== 'scr-reveal') return;
  round.voteNo++;
  startDebate(true);
}

// ================= TEKA & CURI =================
function setupLastStand() {
  if (!round || !round.suspect || round.finished || currentScreen !== 'scr-reveal') return;
  const sus = round.suspect;
  const [correct, alt] = round.pair;
  $('ls-name').textContent = `${sus.name} Diserkap!`;

  const remBad = remainingBad();
  const hasRemainingLalang = remBad.some(r => r.role === 'lalang');
  const note = $('ls-privacy-note');
  if (remBad.length > 0) {
    note.hidden = false;
    note.innerHTML = `<span class="tiny" style="color:var(--accent); font-weight:700;">${ico('lock', 'sm')} Masih ada penyamar lain! Biar ${esc(sus.name)} sahaja tengok skrin ini semasa memilih.</span>`;
  } else {
    note.hidden = true;
  }

  // Umpan: jangan bocorkan perkataan Lalang jika masih ada Lalang belum ditangkap
  let sameCat = [];
  if (round.catId === 'custom') sameCat = state.customWords.map(w => w[0]);
  else {
    const cat = CATEGORIES.find(c => c.id === round.catId);
    if (cat) sameCat = cat.words.map(w => w[0]);
  }
  const others = CATEGORIES.flatMap(c => c.words.map(w => w[0]));
  const decoys = [];
  const primaryDecoy = hasRemainingLalang ? [] : [alt];
  [primaryDecoy, shuffle(sameCat), shuffle(others)].forEach(list => list.forEach(w => {
    if (decoys.length < 3 && w && w !== correct && (!hasRemainingLalang || w !== alt) && !decoys.includes(w)) {
      decoys.push(w);
    }
  }));

  round.lsChoices = shuffle([correct, ...decoys]);
  round.lsDone = false;
  $('ls-options').innerHTML = round.lsChoices.map((w, i) => `
    <button class="btn btn-ghost ls-opt" onclick="checkLastStand(${i})"><span class="ls-n">${'ABCD'[i]}</span>${esc(w)}</button>`).join('');
  go('scr-laststand');
}

function checkLastStand(i) {
  if (!round || round.lsDone) return;
  round.lsDone = true;
  const sus = round.suspect;
  const btns = document.querySelectorAll('#ls-options .ls-opt');
  const correctIdx = round.lsChoices.indexOf(round.pair[0]);

  if (i === correctIdx) {
    btns[i].classList.add('correct');
    playSFX('win');
    asyncTimers.lastStand = setTimeout(() => {
      asyncTimers.lastStand = null;
      finalize('steal');
    }, 1100);
    return;
  }

  btns[i].classList.add('wrong');
  playSFX('siren');
  const rem = remainingBad().length;
  // Jangan dedahkan jawapan betul kalau pusingan masih bersambung
  if (rem === 0 && btns[correctIdx]) btns[correctIdx].classList.add('correct');
  asyncTimers.lastStand = setTimeout(() => {
    asyncTimers.lastStand = null;
    if (!round) return;
    if (rem === 0) return finalize('win');
    $('reveal-stage').innerHTML = `
      <div class="role-emoji" style="color:var(--danger);">${ico('close')}</div>
      <h2 class="title" style="font-size:1.9rem;">${esc(sus.name)} gagal curi!</h2>
      <p class="sub">Teka salah. Tapi permainan belum habis…</p>`;
    renderAfterCatchActions();
    go('scr-reveal');
  }, 1300);
}

// ================= FASA KEPUTUSAN & RODA DENDA =================
function finalize(outcome) {
  // Elak mata diberi dua kali kalau butang ditekan berganda
  if (!round || round.finished) return;
  round.finished = true;
  clearAsyncTimers();
  stopTimer();
  const sus = round.suspect;
  const delta = {};
  const award = (r, pts, stat) => {
    const p = state.players[r.playerIdx];
    p.score += pts;
    if (stat) p[stat]++;
    delta[r.playerIdx] = (delta[r.playerIdx] || 0) + pts;
  };
  const rakyat = round.assign.filter(r => r.role === 'rakyat');
  const bad = round.assign.filter(r => r.role !== 'rakyat');
  const semuaRakyat = `Semua Rakyat (${rakyat.map(r => r.name).join(', ')})`;
  let theme, iconKey, badgeIcon, badgeText, headline, sub, dendaTarget;

  if (outcome === 'chaos') {
    theme = 'prank'; iconKey = 'bolt'; badgeIcon = 'bolt'; badgeText = 'PUSINGAN PRANK!';
    if (round.chaos === 'ALL_IMPOSTER') {
      headline = 'SEMUA ORANG PENYAMAR!';
      sub = 'Tiada siapa pun dapat perkataan! Korang goreng sesama sendiri dari tadi!';
    } else {
      headline = 'TAK ADA PENYAMAR!';
      sub = 'Semua orang pegang perkataan yang sama. Korang tuduh-menuduh sia-sia je!';
    }
    dendaTarget = 'Semua orang!';
  } else if (outcome === 'win') {
    rakyat.forEach(r => award(r, 1, 'detWins'));
    theme = 'win'; iconKey = 'party'; badgeIcon = 'target'; badgeText = 'TEPAT SEKALI!'; headline = 'RAKYAT MENANG!';
    sub = bad.length === 1
      ? `${bad[0].name} memang ${roleInfo(bad[0].role).label}! Semua Rakyat dapat +1 mata.`
      : `Kesemua ${bad.length} penyamar berjaya diserkap! Semua Rakyat dapat +1 mata.`;
    dendaTarget = bad.map(r => r.name).join(', ');
    playSFX('win');
    confetti();
  } else if (outcome === 'steal') {
    award(sus, 3, 'impWins');
    theme = 'steal'; iconKey = 'steal_mask'; badgeIcon = 'flame'; badgeText = 'CURI KEMENANGAN!';
    headline = `${sus.name.toUpperCase()} MENANG!`;
    sub = `Walaupun kantoi, ${sus.name} tepat meneka perkataan Rakyat ("${round.pair[0]}")! +3 mata.`;
    dendaTarget = semuaRakyat;
    confetti();
  } else {
    // Salah tuduh: penyamar yang belum kantoi menang, SEMUA Rakyat kalah & kena denda
    state.players[sus.playerIdx].fitnah++;
    const winners = bad.filter(r => !r.out);
    winners.forEach(r => award(r, 3, 'impWins'));
    theme = 'lose'; iconKey = 'clown'; badgeIcon = 'siren'; badgeText = 'SALAH TANGKAP!'; headline = 'PENYAMAR LOLOS!';
    sub = `Korang tuduh ${sus.name} — Rakyat yang tak bersalah! ${winners.map(r => r.name).join(' & ')} dapat +3 mata, dan semua Rakyat kena denda.`;
    dendaTarget = semuaRakyat;
    playSFX('siren');
  }

  $('res-hero').className = `res-hero ${theme}`;
  $('res-emoji').innerHTML = ico(iconKey);
  $('res-badge').innerHTML = `${ico(badgeIcon, 'sm')} ${esc(badgeText)}`;
  $('res-headline').textContent = headline;
  $('res-sub').textContent = sub;

  const hasLalang = round.assign.some(r => r.role === 'lalang');
  $('res-words').className = hasLalang ? 'words' : 'words single';
  $('res-words').innerHTML = `
    <div class="word-tile"><span class="tiny">Perkataan Rakyat</span><strong style="color:var(--teal);">${esc(round.pair[0])}</strong></div>
    ${hasLalang ? `<div class="word-tile"><span class="tiny">Perkataan Lalang</span><strong style="color:var(--accent);">${esc(round.pair[1])}</strong></div>` : ''}`;

  $('res-roles').innerHTML = `<div class="label" style="margin-bottom:4px;">Siapa Sebenarnya</div>` + round.assign.map(r => {
    const p = state.players[r.playerIdx], info = roleInfo(r.role);
    const pts = delta[r.playerIdx];
    return `<div class="role-line">
      <span class="avatar" style="background:${p.color};">${ico(p.avatar)}</span>
      <span style="flex:1; min-width:0;"><span class="ellipsis" style="display:block; font-weight:700;">${esc(r.name)}</span>
        ${r.out ? `<span class="tiny">${ico('lock', 'sm')} diserkap</span>` : (r === sus && r.role === 'rakyat' ? `<span class="tiny">${ico('sad_fitnah', 'sm')} kena fitnah</span>` : '')}</span>
      <span class="role-chip ${info.cls}">${ico(info.icon, 'sm')} ${info.label}</span>
      <span class="pts">${pts ? `+${pts}` : ''}</span>
    </div>`;
  }).join('');

  const dBox = $('res-denda');
  dBox.hidden = state.set.dendaModes.length === 0;
  $('denda-target').innerHTML = `${ico('wheel', 'sm')} Denda untuk: ${esc(dendaTarget)}`;
  $('denda-text').classList.remove('spinning');
  $('denda-text').textContent = 'Tekan butang untuk pusing roda denda!';
  const spinBtn = $('btn-spin');
  spinBtn.disabled = false;
  spinBtn.innerHTML = `${ico('dice', 'sm')} Pusing Roda Denda`;

  save();
  go('scr-result');
}

function spinDenda() {
  if (spinning) return;
  spinning = true;
  // Gabung semua tahap yang dipilih; setiap denda bawa label tahap dia
  const tiers = state.set.dendaModes.length ? state.set.dendaModes : ['Santai'];
  const pool = tiers.flatMap(tier => DENDA[tier].map(text => ({ tier, text })));
  const tierTag = d => `<span class="badge ${d.tier === 'Koyak' ? 'red' : d.tier === 'Sporting' ? '' : 'teal'}" style="margin-right:4px;">${d.tier}</span>`;
  const el = $('denda-text'), btn = $('btn-spin');
  btn.disabled = true;
  el.classList.add('spinning');
  let t = 0;
  const steps = 14;
  const step = () => {
    el.textContent = pick(pool).text;
    playSFX('tick');
    if (++t < steps) {
      asyncTimers.denda = setTimeout(step, 60 + t * 18);
      return;
    }
    asyncTimers.denda = null;
    el.classList.remove('spinning');
    const final = pick(pool);
    el.innerHTML = `<span>${tierTag(final)}${esc(final.text)}</span>`;
    playSFX('gavel');
    btn.disabled = false;
    btn.innerHTML = `${ico('dice', 'sm')} Pusing Semula`;
    spinning = false;
  };
  step();
}

// ================= PAPAN MARKAH & SIJIL LEPAK =================
function sortPlayersByRank() {
  return [...state.players].sort((a, b) =>
    b.score - a.score ||
    (b.impWins + b.detWins) - (a.impWins + a.detWins) ||
    a.fitnah - b.fitnah
  );
}

function renderScore() {
  $('score-badge').innerHTML = `${ico('users', 'sm')} ${esc(activeGroupObj().name)}`;
  const sorted = sortPlayersByRank();
  const podiumOrder = [
    [sorted[1], 'p2', 'medal_silver', '#e3e6ef'],
    [sorted[0], 'p1', 'crown', '#ffd43b'],
    [sorted[2], 'p3', 'medal_bronze', '#eba574']
  ];
  $('podium').innerHTML = podiumOrder.map(([p, cls, medalIcon, col]) => p ? `
    <div class="pod ${cls}">
      <div class="medal-ico" style="color:${col};">${ico(medalIcon)}</div>
      <div class="avatar" style="background:${p.color};">${ico(p.avatar)}</div>
      <div class="pn ellipsis">${esc(p.name)}</div>
      <div class="bar">${p.score}</div>
    </div>` : '<div></div>').join('');

  $('score-rest').innerHTML = sorted.slice(3).map((p, i) => `
    <div class="player-item">
      <span style="width:22px; text-align:center; font-weight:800; color:var(--muted);">${i + 4}</span>
      <span class="avatar" style="background:${p.color}; width:38px; height:38px; font-size:1.15rem; border-radius:12px;">${ico(p.avatar)}</span>
      <span class="ellipsis" style="flex:1; font-weight:700;">${esc(p.name)}</span>
      <strong style="color:var(--accent);">${p.score} mata</strong>
    </div>`).join('');

  const top = key => {
    const max = Math.max(...state.players.map(p => p[key]));
    if (max === 0) return '–';
    return `${state.players.filter(p => p[key] === max).map(p => esc(p.name)).join(', ')} (${max}x)`;
  };
  $('awards').innerHTML = `
    <div class="award"><span class="ai">${ico('crown')}</span><div><strong>Raja Kencing</strong><p class="tiny">Paling banyak lolos sebagai penyamar: ${top('impWins')}</p></div></div>
    <div class="award"><span class="ai">${ico('goreng')}</span><div><strong>Detektif Malaya</strong><p class="tiny">Paling banyak menang sebagai Rakyat: ${top('detWins')}</p></div></div>
    <div class="award"><span class="ai">${ico('sad_fitnah')}</span><div><strong>Mangsa Fitnah</strong><p class="tiny">Paling kerap kena salah tuduh: ${top('fitnah')}</p></div></div>`;
}

// ================= DEK KUSTOM =================
function renderCustom() {
  const list = state.customWords;
  $('cust-count').textContent = `Dek Korang (${list.length})`;
  $('custom-list').innerHTML = list.length === 0
    ? `<div class="card" style="text-align:center;"><div style="font-size:2.2rem; color:var(--accent); margin-bottom:4px;">${ico('edit')}</div><p class="sub">Belum ada perkataan kustom. Tambah pasangan pertama korang kat atas!</p></div>`
    : list.map((w, i) => `
      <div class="player-item">
        <div class="info">
          <div style="font-weight:800;"><span style="color:var(--teal);">${esc(w[0])}</span> <span style="color:var(--muted);">↔</span> <span style="color:var(--accent);">${esc(w[1])}</span></div>
          <div class="tiny ellipsis">${ico('bulb', 'sm')} ${w[2] ? esc(w[2]) : 'Tiada hint'}</div>
        </div>
        <button class="x-btn" onclick="deleteCustom(${i})" aria-label="Padam">${ico('close', 'sm')}</button>
      </div>`).join('');
}

function saveCustomWord() {
  const w1 = $('cust-w1').value.trim().replace(/\s+/g, ' ');
  const w2 = $('cust-w2').value.trim().replace(/\s+/g, ' ');
  const h = $('cust-hint').value.trim().replace(/\s+/g, ' ');
  const q = $('cust-q').value.trim().replace(/\s+/g, ' ') || 'Ceritakan pengalaman korang dengan benda ni!';
  if (!w1 || !w2) return toast('Sila isi kedua-dua perkataan!', 'warning');
  if (w1.toLowerCase() === w2.toLowerCase()) return toast('Perkataan Rakyat & Lalang mesti berbeza!', 'warning');
  const dup = state.customWords.some(w =>
    (w[0].toLowerCase() === w1.toLowerCase() && w[1].toLowerCase() === w2.toLowerCase()) ||
    w[0].toLowerCase() === w1.toLowerCase()
  );
  if (dup) return toast('Perkataan tu dah ada dalam dek!', 'warning');
  state.customWords.push([w1, w2, h, q]);
  if (!state.set.selectedCats.includes('custom')) state.set.selectedCats.push('custom');
  ['cust-w1', 'cust-w2', 'cust-hint', 'cust-q'].forEach(id => $(id).value = '');
  save();
  renderCustom();
  toast('Pasangan kata disimpan', 'check');
  $('cust-w1').focus();
}

function deleteCustom(i) {
  state.customWords.splice(i, 1);
  if (state.customWords.length === 0) cleanSelectedCats();
  save();
  renderCustom();
}

// ================= SUNTIKAN IKON STATIK ANTARAMUKA =================
function hydrateStaticIcons() {
  $('bg-floaties').innerHTML = `
    <span class="floaty" style="top:12%; left:8%;">${ico('search')}</span>
    <span class="floaty" style="top:30%; right:10%; animation-delay:-4s;">${ico('goreng')}</span>
    <span class="floaty" style="top:58%; left:12%; animation-delay:-8s;">${ico('lalang')}</span>
    <span class="floaty" style="top:78%; right:16%; animation-delay:-2s;">${ico('kuali')}</span>
    <span class="floaty" style="top:45%; left:46%; animation-delay:-11s;">${ico('shush')}</span>`;

  // Lambang papan tanda: serkap buluh + kanta penyiasat
  $('hero-logo-icon').innerHTML = logoSVG();
  if ($('splash-logo')) $('splash-logo').innerHTML = logoSVG();
  $('btn-main-play').innerHTML = `${ico('play', 'sm')} PILIH KATEGORI &amp; MULA`;
  $('ti-custom').innerHTML = ico('sparkles');
  $('ti-howto').innerHTML = ico('book');
  $('lbl-home-setup').innerHTML = `${ico('settings', 'sm')} Mod &amp; Tetapan Pantas`;
  $('lbl-geng-bar').innerHTML = `${ico('users', 'sm')} Senarai Geng Lepak`;
  $('btn-rename-geng').innerHTML = `${ico('edit', 'sm')} Urus Geng`;

  $('btn-pl-play').innerHTML = `${ico('play', 'sm')} Main Dengan Geng Ni`;
  $('btn-pl-reset').innerHTML = `${ico('refresh', 'sm')} Reset Mata Geng Ini`;

  $('seg-ver-bal').innerHTML = `${ico('scale', 'sm')} Balance`;
  $('seg-ver-free').innerHTML = `${ico('flame', 'sm')} Bebas`;
  $('seg-mode-1').innerHTML = `${ico('lalang', 'sm')} Mod Lalang`;
  $('seg-mode-2').innerHTML = `${ico('kuali', 'sm')} Kaki Goreng`;
  $('lbl-twist-set').innerHTML = `${ico('bolt', 'sm')} Kad Cabaran (Plot Twist)`;
  $('lbl-denda-set').innerHTML = `${ico('wheel', 'sm')} Roda Denda`;
  $('lbl-chaos-set').innerHTML = `${ico('bolt', 'sm')} Kejutan Pusingan Gila`;
  $('btn-set-play').innerHTML = `${ico('play', 'sm')} Main Dengan Tetapan Ni`;

  $('btn-sc-reset').innerHTML = `${ico('refresh', 'sm')} Reset Mata Geng Ini`;

  ['btn-cust-back', 'btn-howto-back', 'btn-cat-back', 'btn-vote-back'].forEach(id => $(id).innerHTML = ico('arrow_left'));
  ['btn-pass-quit', 'btn-deb-quit'].forEach(id => $(id).innerHTML = ico('close'));

  $('howto-roles').innerHTML = `
    <div class="award"><span class="ai">${ico('rakyat')}</span><div><strong>Rakyat</strong><p class="tiny">Dapat perkataan sebenar. Kena serkap semua penyamar.</p></div></div>
    <div class="award"><span class="ai">${ico('lalang')}</span><div><strong>Lalang</strong><p class="tiny">Dapat perkataan yang hampir sama, tapi tak tahu dia lain daripada orang lain!</p></div></div>
    <div class="award"><span class="ai">${ico('goreng')}</span><div><strong>Kaki Goreng</strong><p class="tiny">Tahu dia penyamar dan tiada perkataan. Kena goreng ikut klu orang lain.</p></div></div>
    <div class="award"><span class="ai">${ico('blur')}</span><div><strong>Si Blur</strong><p class="tiny">Watak tambahan dalam Mod Lalang. Tiada perkataan, berpihak kepada penyamar.</p></div></div>`;

  $('howto-rules').innerHTML = `
    <div class="award"><span class="ai">${ico('target')}</span><div><strong>Rakyat menang (+1 setiap Rakyat)</strong><p class="tiny">Bila semua penyamar berjaya diserkap. Kalau ada lebih seorang, debat &amp; undi diteruskan.</p></div></div>
    <div class="award"><span class="ai">${ico('clown')}</span><div><strong>Salah tangkap (+3 penyamar)</strong><p class="tiny">Tuduh Rakyat tak bersalah = penyamar terus menang, dan semua Rakyat kena denda.</p></div></div>
    <div class="award"><span class="ai">${ico('steal_mask')}</span><div><strong>Curi kemenangan (+3)</strong><p class="tiny">Penyamar yang kantoi tapi berjaya teka perkataan Rakyat.</p></div></div>`;

  $('peek-finger').innerHTML = ico('finger_tap');
  $('lbl-deb-twist').innerHTML = `${ico('bolt', 'sm')} Syarat Plot Twist`;
  $('btn-reroll-twist').innerHTML = `${ico('dice', 'sm')} Tukar`;
  $('lbl-deb-order').innerHTML = `${ico('speech', 'sm')} Susunan Giliran Bagi Klu`;
  $('lbl-deb-prompt').innerHTML = `${ico('bulb', 'sm')} Soalan pemicu debat:`;
  $('sfx-cricket').innerHTML = ico('cricket');
  $('sfx-siren').innerHTML = ico('siren');
  $('sfx-gavel').innerHTML = ico('gavel');
  $('btn-go-vote').innerHTML = `UNDI SEKARANG — SERKAP! ${ico('arrow_right', 'sm')}`;
  $('btn-countdown').innerHTML = `${ico('clock', 'sm')} 3-2-1`;
  $('ls-badge').innerHTML = `${ico('target', 'sm')} DISERKAP!`;
  $('btn-next-round').innerHTML = `PUSINGAN SETERUSNYA ${ico('arrow_right', 'sm')}`;
  $('btn-res-menu').innerHTML = `${ico('home', 'sm')} Menu`;

  $('ni-home').innerHTML = ico('home');
  $('ni-players').innerHTML = ico('users');
  $('ni-settings').innerHTML = ico('settings');
  $('ni-score').innerHTML = ico('trophy');
}

// ================= INISIALISASI =================
function init() {
  hydrateStaticIcons();
  load();

  document.querySelectorAll('.seg[data-key]').forEach(seg => {
    seg.querySelectorAll('button').forEach(b => b.addEventListener('click', () => setOption(seg.dataset.key, b.dataset.val)));
  });

  // Pointer & Keyboard events untuk Hold-to-Peek dengan PointerCapture supaya stabil pada skrin sentuh
  const peek = $('peek');
  peek.addEventListener('pointerdown', e => {
    e.preventDefault();
    try { peek.setPointerCapture(e.pointerId); } catch (err) {}
    showSecret(true);
  });
  const endPeek = e => {
    if (e && e.pointerId !== undefined) {
      try { if (peek.hasPointerCapture(e.pointerId)) peek.releasePointerCapture(e.pointerId); } catch (err) {}
    }
    showSecret(false);
  };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(ev => peek.addEventListener(ev, endPeek));
  peek.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      showSecret(true);
    }
  });
  ['keyup', 'blur'].forEach(ev => peek.addEventListener(ev, () => showSecret(false)));
  peek.addEventListener('contextmenu', e => e.preventDefault());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) showSecret(false);
    else setWakeLock(GAME_SCREENS.includes(currentScreen)); // Sistem lepaskan wake lock bila app ditutup sekejap
  });
  window.addEventListener('popstate', handleBack);
  // Amaran sebelum tutup/muat semula tab ketika pusingan masih berjalan
  window.addEventListener('beforeunload', e => {
    if (round && !round.finished) { e.preventDefault(); e.returnValue = ''; }
  });

  $('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  ['cust-w1', 'cust-w2', 'cust-hint', 'cust-q'].forEach(id =>
    $(id).addEventListener('keydown', e => { if (e.key === 'Enter') saveCustomWord(); }));

  go('scr-menu');
  hideSplash();
  registerServiceWorker();
}

init();
