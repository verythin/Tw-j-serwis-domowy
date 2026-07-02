// Maksymilian — Złota rączka — skrypty strony (menu, odznaka, język, telefon)

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     TŁUMACZENIA — PL / UA / EN
     ========================================================= */
  const translations = {
    brand_sub: {
      pl: 'TWÓJ SERWIS DOMOWY',
      ua: 'ТВІЙ ДОМАШНІЙ СЕРВІС',
      en: 'YOUR HOME SERVICE'
    },
    nav_uslugi:     { pl: 'Usługi',        ua: 'Послуги',              en: 'Services' },
    nav_realizacje: { pl: 'Realizacje',    ua: 'Реалізації',          en: 'Our work' },
    nav_jak:        { pl: 'Jak pracuję',   ua: 'Як я працюю',         en: 'How I work' },
    nav_kontakt:    { pl: 'Kontakt',       ua: 'Контакти',            en: 'Contact' },
    mobile_call: {
      pl: 'Zadzwoń: 691 847 756',
      ua: 'Подзвонити: 691 847 756',
      en: 'Call: 691 847 756'
    },

    hero_eyebrow: {
      pl: 'SERWIS DOMOWY · WROCŁAW I OKOLICE',
      ua: 'ДОМАШНІЙ СЕРВІС · ВРОЦЛАВ І ОКОЛИЦІ',
      en: 'HOME SERVICE · WROCŁAW AREA'
    },
    hero_h1: {
      pl: 'Złota rączka do<br>każdej usterki w domu.',
      ua: 'Майстер на всі руки<br>для будь-якої несправності вдома.',
      en: 'A handyman for<br>every home repair.'
    },
    hero_lead: {
      pl: 'Montaż mebli, okien, drzwi i rolet. Drobne naprawy elektryczne i hydrauliczne. Solidnie, na czas i bez zbędnego bałaganu.',
      ua: 'Монтаж меблів, вікон, дверей і ролет. Дрібний ремонт електрики та сантехніки. Якісно, вчасно і без зайвого безладу.',
      en: 'Assembly of furniture, windows, doors and blinds. Minor electrical and plumbing repairs. Reliable, on time, no unnecessary mess.'
    },
    btn_call:     { pl: 'Zadzwoń teraz',      ua: 'Подзвонити зараз',       en: 'Call now' },
    btn_whatsapp: { pl: 'Napisz na WhatsApp', ua: 'Написати у WhatsApp',    en: 'Message on WhatsApp' },

    hero_fact1: { pl: '8 specjalizacji',          ua: '8 спеціалізацій',            en: '8 specialties' },
    hero_fact2: { pl: 'Wrocław i okolice',        ua: 'Вроцлав і околиці',          en: 'Wrocław & surroundings' },
    hero_fact3: { pl: 'Wycena bez zobowiązań',    ua: "Оцінка без зобов'язань",     en: 'Free, no-obligation quote' },

    badge_text: {
      pl: 'Twój serwis<br>domowy',
      ua: 'Твій сервіс<br>вдома',
      en: 'Your home<br>service'
    },

    services_eyebrow: { pl: 'CO ROBIĘ', ua: 'ЩО Я РОБЛЮ', en: 'WHAT I DO' },
    services_h2: {
      pl: 'Osiem fachów, jedna rączka.',
      ua: 'Вісім професій, одні вправні руки.',
      en: 'Eight trades, one handyman.'
    },

    service1_title: { pl: 'Montaż', ua: 'Монтаж', en: 'Assembly' },
    service1_desc: {
      pl: 'Meble, sprzęt AGD, karnisze, uchwyty TV — wszystko, co wymaga pewnej ręki i poziomicy.',
      ua: 'Меблі, побутова техніка, карнизи, кронштейни для телевізора — усе, що вимагає впевненої руки та рівня.',
      en: 'Furniture, appliances, curtain rods, TV mounts — anything that needs a steady hand and a spirit level.'
    },
    service2_title: { pl: 'Okna', ua: 'Вікна', en: 'Windows' },
    service2_desc: {
      pl: 'Regulacja, uszczelnianie i naprawa — koniec z przeciągami i zacinającymi się skrzydłami.',
      ua: 'Регулювання, ущільнення та ремонт — кінець протягам і заклинюванню стулок.',
      en: 'Adjustment, sealing and repair — no more draughts or sashes that stick.'
    },
    service3_title: { pl: 'Meble', ua: 'Меблі', en: 'Furniture' },
    service3_desc: {
      pl: 'Składanie i drobna naprawa mebli — od szafy z paczki po renowację starego stołu.',
      ua: "Складання та дрібний ремонт меблів — від шафи з коробки до реставрації старого столу.",
      en: 'Furniture assembly and small repairs — from a flat-pack wardrobe to restoring an old table.'
    },
    service4_title: { pl: 'Rolety', ua: 'Ролети', en: 'Blinds' },
    service4_desc: {
      pl: 'Montaż i serwis rolet oraz żaluzji — wewnętrznych i zewnętrznych.',
      ua: 'Монтаж і сервіс ролет та жалюзі — внутрішніх і зовнішніх.',
      en: 'Installation and servicing of roller blinds and shutters — indoor and outdoor.'
    },
    service5_title: { pl: 'Drzwi', ua: 'Двері', en: 'Doors' },
    service5_desc: {
      pl: 'Regulacja, wymiana zamków i naprawa drzwi wewnętrznych oraz wejściowych.',
      ua: 'Регулювання, заміна замків і ремонт внутрішніх та вхідних дверей.',
      en: 'Adjustment, lock replacement and repair of interior and entrance doors.'
    },
    service6_title: { pl: 'Serwis', ua: 'Сервіс', en: 'Maintenance' },
    service6_desc: {
      pl: 'Drobne naprawy i przeglądy — jeśli coś szwankuje, sprawdzę i naprawię.',
      ua: 'Дрібний ремонт і огляди — якщо щось не працює, перевірю і полагоджу.',
      en: "Minor repairs and check-ups — if something's not working, I'll find out why and fix it."
    },
    service7_title: { pl: 'Elektryka', ua: 'Електрика', en: 'Electrical' },
    service7_desc: {
      pl: 'Gniazdka, oświetlenie, drobne instalacje — bezpiecznie i zgodnie ze sztuką.',
      ua: 'Розетки, освітлення, дрібні електромонтажні роботи — безпечно і за всіма правилами.',
      en: 'Sockets, lighting, small installations — done safely and to code.'
    },
    service8_title: { pl: 'Hydraulika', ua: 'Сантехніка', en: 'Plumbing' },
    service8_desc: {
      pl: 'Naprawa cieknących kranów, wymiana syfonów, drobne prace hydrauliczne.',
      ua: 'Ремонт кранів, що протікають, заміна сифонів, дрібні сантехнічні роботи.',
      en: 'Fixing leaking taps, replacing siphons, minor plumbing jobs.'
    },

    process_eyebrow: { pl: 'JAK TO WYGLĄDA', ua: 'ЯК ЦЕ ВІДБУВАЄТЬСЯ', en: 'HOW IT WORKS' },
    process_h2: { pl: 'Trzy kroki do naprawy.', ua: 'Три кроки до ремонту.', en: 'Three steps to a fix.' },

    step1_title: { pl: 'Zadzwoń albo napisz', ua: 'Подзвони або напиши', en: 'Call or message' },
    step1_desc: {
      pl: 'Opisz problem — telefonicznie, SMS-em lub na WhatsApp. Odpowiadam w godzinach pracy.',
      ua: 'Опиши проблему — телефоном, SMS або в WhatsApp. Відповідаю в робочі години.',
      en: 'Describe the problem — by phone, text or WhatsApp. I reply during working hours.'
    },
    step2_title: { pl: 'Ustalamy termin i wycenę', ua: 'Узгоджуємо термін і вартість', en: 'We agree on time and price' },
    step2_desc: {
      pl: 'Wspólnie dobieramy dogodny termin. Wycena bez zobowiązań, zanim zabiorę się do pracy.',
      ua: "Разом підбираємо зручний час. Оцінка без зобов'язань — перед початком роботи.",
      en: 'Together we pick a convenient time. A no-obligation quote before I start.'
    },
    step3_title: { pl: 'Wykonuję pracę', ua: 'Виконую роботу', en: 'I do the work' },
    step3_desc: {
      pl: 'Solidnie, zgodnie z ustaleniami i posprzątane po sobie — jakby nikogo tu nie było.',
      ua: 'Якісно, згідно з домовленістю, і прибираю за собою — ніби мене тут і не було.',
      en: 'Reliably, as agreed, and I clean up after myself — as if I was never there.'
    },

    portfolio_eyebrow: { pl: 'REALIZACJE', ua: 'РЕАЛІЗАЦІЇ', en: 'OUR WORK' },
    portfolio_h2: { pl: 'Ostatnie prace.', ua: 'Останні роботи.', en: 'Recent work.' },
    portfolio_note: {
      pl: 'Zdjęcia i filmy z wykonanych realizacji pojawią się tutaj wkrótce.',
      ua: "Фото та відео виконаних робіт з'являться тут найближчим часом.",
      en: 'Photos and videos of completed work will appear here soon.'
    },
    portfolio_placeholder: { pl: 'ZDJĘCIE WKRÓTCE', ua: 'ФОТО НЕЗАБАРОМ', en: 'PHOTO COMING SOON' },

    contact_eyebrow: { pl: 'KONTAKT', ua: 'КОНТАКТИ', en: 'CONTACT' },
    contact_h2: { pl: 'Umówmy się na naprawę.', ua: 'Домовимось про ремонт.', en: "Let's schedule a repair." },
    label_phone:   { pl: 'Telefon', ua: 'Телефон', en: 'Phone' },
    label_whatsapp:{ pl: 'WhatsApp', ua: 'WhatsApp', en: 'WhatsApp' },
    label_address: { pl: 'Adres', ua: 'Адреса', en: 'Address' },
    whatsapp_link_text: { pl: 'Napisz wiadomość', ua: 'Написати повідомлення', en: 'Send a message' },
    hours_caption: { pl: 'GODZINY PRACY', ua: 'ГОДИНИ РОБОТИ', en: 'OPENING HOURS' },

    day1: { pl: 'Poniedziałek', ua: 'Понеділок', en: 'Monday' },
    day2: { pl: 'Wtorek',       ua: 'Вівторок',  en: 'Tuesday' },
    day3: { pl: 'Środa',        ua: 'Середа',    en: 'Wednesday' },
    day4: { pl: 'Czwartek',     ua: 'Четвер',    en: 'Thursday' },
    day5: { pl: 'Piątek',       ua: "П'ятниця",  en: 'Friday' },
    day6: { pl: 'Sobota',       ua: 'Субота',    en: 'Saturday' },
    day7: { pl: 'Niedziela',    ua: 'Неділя',    en: 'Sunday' },
    closed: { pl: 'Zamknięte', ua: 'Зачинено', en: 'Closed' },

    footer_brand: {
      pl: 'Maksymilian — Złota rączka · Wrocław',
      ua: 'Максиміліан — майстер на всі руки · Вроцлав',
      en: 'Maksymilian — Handyman services · Wrocław'
    },
    footer_top: { pl: 'Do góry ↑', ua: 'Нагору ↑', en: 'Back to top ↑' },

    toast_copied:   {
      pl: 'Numer skopiowany: {phone}',
      ua: 'Номер скопійовано: {phone}',
      en: 'Number copied: {phone}'
    },
    toast_fallback: {
      pl: 'Zadzwoń pod numer: {phone}',
      ua: 'Зателефонуйте на номер: {phone}',
      en: 'Call this number: {phone}'
    }
  };

  const SUPPORTED_LANGS = ['pl', 'ua', 'en'];
  let currentLang = 'pl';

  try {
    const saved = localStorage.getItem('ms_lang');
    if (saved && SUPPORTED_LANGS.includes(saved)) currentLang = saved;
  } catch (e) { /* localStorage niedostępny — zostaje domyślny PL */ }

  function applyLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;
    currentLang = lang;
    document.documentElement.lang = lang === 'ua' ? 'uk' : lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key] && translations[key][lang] !== undefined) {
        el.textContent = translations[key][lang];
      }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[key] && translations[key][lang] !== undefined) {
        el.innerHTML = translations[key][lang];
      }
    });
    document.querySelectorAll('.lang-switch button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem('ms_lang', lang); } catch (e) { /* ignoruj */ }
  }

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });

  applyLang(currentLang);

  // --- Rok w stopce ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Menu mobilne ---
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* =========================================================
     PRZYCISK „ZADZWOŃ" — na komputerze linki tel: często nie
     robią nic widocznego, więc na desktopie kopiujemy numer
     i pokazujemy go w powiadomieniu zamiast otwierać dialer.
     ========================================================= */
  const isTouchDevice =
    window.matchMedia('(pointer: coarse)').matches ||
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const toastEl = document.getElementById('toast');
  let toastTimer = null;

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 4200);
  }

  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const phone = link.getAttribute('href').replace('tel:', '');

      if (isTouchDevice) {
        // Na telefonie zostawiamy domyślne działanie — otworzy się dialer.
        return;
      }

      // Na komputerze: nie pozwalamy przeglądarce "zgubić" kliknięcia,
      // tylko kopiujemy numer i wyraźnie go pokazujemy.
      e.preventDefault();

      const t = translations;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(phone)
          .then(() => showToast(t.toast_copied[currentLang].replace('{phone}', phone)))
          .catch(() => showToast(t.toast_fallback[currentLang].replace('{phone}', phone)));
      } else {
        showToast(t.toast_fallback[currentLang].replace('{phone}', phone));
      }
    });
  });

  // --- Generowanie pierścienia narzędzi wokół odznaki w hero ---
  const badgeRing = document.getElementById('badgeRing');
  if (badgeRing) {
    const tools = [
      '<path d="M10 34 L26 18"/><path d="M22 14 L30 22 L26 26 L18 18 Z"/><circle cx="11" cy="35" r="2.6"/>',
      '<line x1="12" y1="34" x2="28" y2="18"/><rect x="26" y="10" width="6" height="10" rx="1" transform="rotate(45 29 15)"/>',
      '<circle cx="16" cy="16" r="7"/><line x1="21" y1="21" x2="32" y2="32"/><rect x="28" y="28" width="8" height="8" rx="1"/>',
      '<circle cx="20" cy="16" r="9"/><line x1="16" y1="30" x2="24" y2="30"/><line x1="17" y1="34" x2="23" y2="34"/>',
      '<path d="M8 20 h16 a8 8 0 0 1 8 8 v6"/><circle cx="32" cy="34" r="2"/>',
      '<circle cx="18" cy="18" r="10"/><line x1="18" y1="10" x2="18" y2="26"/><line x1="10" y1="18" x2="26" y2="18"/>'
    ];

    const count = 9;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * 360 + 14;
      const dist = 118 + (i % 3) * 12;
      const wrap = document.createElement('div');
      wrap.className = 'badge-tool';
      wrap.style.transform =
        `rotate(${angle}deg) translate(${dist}px) rotate(${-angle}deg) translate(-23px,-23px)`;
      wrap.innerHTML = `<svg viewBox="0 0 40 40">${tools[i % tools.length]}</svg>`;
      badgeRing.appendChild(wrap);
    }
  }

});
