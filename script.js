"use strict";

/* =========================================================
   1. CONFIGURATION
   ========================================================= */

const CONFIG = {
  email: "ziapishnahad@gmail.com",

  // Change ONLY this value when the real WhatsApp Channel URL is available.
  whatsappChannelUrl: "YOUR_WHATSAPP_CHANNEL_URL",

  storageKeys: {
    language: "zia-language",
    mode: "zia-theme-mode",
    colorTheme: "zia-color-theme"
  },

  supportedLanguages: ["en", "fa", "ar"],
  supportedColorThemes: ["emerald", "aqua", "forest", "mint"]
};

/* =========================================================
   2. TRANSLATION SYSTEM
   ========================================================= */

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      expertise: "Expertise",
      contact: "Contact"
    },

    hero: {
      eyebrow: "INSTRUMENTATION ENGINEERING",
      title: "Professional Instrumentation Engineer",
      description:
        "Precision-focused instrumentation expertise covering calibration, loop checking, installation, commissioning, operation, procurement, and equipment trading.",
      primary: "Contact Me",
      secondary: "Download Resume",
      signature: "Precision • Measurement • Control • Reliability",
      scroll: "Scroll to explore"
    },

    visual: {
      precision: "PRECISION SYSTEM"
    },

    about: {
      eyebrow: "PROFESSIONAL IDENTITY",
      title: "Built around precision.",
      lead:
        "Zia Pishnahad is a Professional Instrumentation Engineer focused on practical, accurate, and reliable instrumentation work.",
      text:
        "The professional scope covers instrumentation calibration, loop checking, installation, commissioning, operation, procurement, and equipment trading — with an emphasis on dependable measurement and technically sound execution.",
      identityLabel: "PROFESSIONAL",
      identityTitle: "Instrumentation Engineer"
    },

    tags: {
      instrumentation: "Instrumentation",
      calibration: "Calibration",
      commissioning: "Commissioning",
      control: "Control",
      precision: "Precision"
    },

    expertise: {
      eyebrow: "TECHNICAL CAPABILITIES",
      title: "Professional Expertise",
      intro:
        "Focused instrumentation capabilities from field installation and verification to equipment procurement and trading.",

      cards: {
        calibration: {
          title: "Calibration",
          text:
            "Calibration of instrumentation equipment with focus on accuracy and reliable measurement."
        },
        loop: {
          title: "Loop Check",
          text:
            "Checking instrumentation loops and verifying correct signal transmission and functionality."
        },
        installation: {
          title: "Installation",
          text:
            "Installation and integration of instrumentation equipment."
        },
        commissioning: {
          title: "Commissioning",
          text:
            "Commissioning instrumentation systems and preparing equipment for operation."
        },
        operation: {
          title: "Operation",
          text:
            "Instrumentation operation and practical technical support."
        },
        trading: {
          title: "Equipment Trading",
          text:
            "Buying and selling instrumentation equipment."
        },
        procurement: {
          title: "Procurement",
          text:
            "Professional sourcing and purchasing of instrumentation equipment."
        }
      }
    },

    contact: {
      eyebrow: "GET IN TOUCH",
      title: "Let's connect.",
      description:
        "For instrumentation expertise, equipment support, or professional inquiries, feel free to get in touch.",

      whatsapp: {
        label: "WHATSAPP CHANNEL",
        title: "Stay connected",
        text:
          "Follow the WhatsApp Channel for professional contact and updates.",
        button: "Visit WhatsApp Channel"
      },

      youtube: {
  label: "YOUTUBE CHANNEL",
  title: "Watch & Follow",
  text: "Follow the YouTube channel for professional content, updates, and videos.",
  button: "Visit YouTube Channel"
},

      email: {
        label: "EMAIL",
        text:
          "For direct professional inquiries, send an email or copy the address.",
        send: "Send Email",
        copy: "Copy Email"
      }
    },

    footer: {
      title: "Phone Num. : 09155185653"
    },

    themes: {
      emerald: "Emerald",
      aqua: "Aqua",
      forest: "Forest",
      mint: "Mint"
    },

    accessibility: {
      darkMode: "Toggle dark mode",
      lightMode: "Toggle light mode",
      chooseTheme: "Choose color theme",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      backToTop: "Back to top"
    },

    feedback: {
      copied: "Copied!"
    }
  },

  fa: {
    nav: {
      home: "خانه",
      about: "درباره",
      expertise: "تخصص",
      contact: "تماس"
    },

    hero: {
      eyebrow: "مهندسی ابزار دقیق",
      title: "مهندس حرفه‌ای ابزار دقیق",
      description:
        "ارائه تخصص در حوزه ابزار دقیق با تمرکز بر کالیبراسیون، لوپ‌چک، نصب، راه‌اندازی، بهره‌برداری، تأمین و خرید و فروش تجهیزات ابزار دقیق.",
      primary: "تماس با من",
      secondary: "دانلود رزومه",
      signature: "دقت • اندازه‌گیری • کنترل • قابلیت اطمینان",
      scroll: "برای مشاهده بیشتر اسکرول کنید"
    },

    visual: {
      precision: "سیستم دقیق"
    },

    about: {
      eyebrow: "هویت حرفه‌ای",
      title: "بر پایه دقت.",
      lead:
        "ضیا پیشنهاد، مهندس حرفه‌ای ابزار دقیق، با تمرکز بر اجرای عملی، دقیق و قابل‌اعتماد فعالیت‌های ابزار دقیق است.",
      text:
        "حوزه فعالیت شامل کالیبراسیون تجهیزات ابزار دقیق، لوپ‌چک، نصب، راه‌اندازی، بهره‌برداری، تأمین و خرید و فروش تجهیزات است؛ با تأکید بر اندازه‌گیری قابل‌اعتماد و اجرای فنی صحیح. مدیر عامل شرکت صنعتی طاها سنجش پارس",
      identityLabel: "حرفه‌ای",
      identityTitle: "مهندس ابزار دقیق"
    },

    tags: {
      instrumentation: "ابزار دقیق",
      calibration: "کالیبراسیون",
      commissioning: "راه‌اندازی",
      control: "کنترل",
      precision: "دقت"
    },

    expertise: {
      eyebrow: "توانمندی‌های فنی",
      title: "تخصص حرفه‌ای",
      intro:
        "توانمندی‌های تخصصی ابزار دقیق از نصب و بررسی تجهیزات تا تأمین و خرید و فروش تجهیزات.",

      cards: {
        calibration: {
          title: "کالیبراسیون",
          text:
            "کالیبره کردن تجهیزات ابزار دقیق با تمرکز بر دقت و اندازه‌گیری قابل‌اعتماد."
        },
        loop: {
          title: "لوپ‌چک",
          text:
            "بررسی لوپ‌های ابزار دقیق و اطمینان از انتقال صحیح سیگنال و عملکرد تجهیزات."
        },
        installation: {
          title: "نصب",
          text:
            "نصب و یکپارچه‌سازی تجهیزات ابزار دقیق."
        },
        commissioning: {
          title: "راه‌اندازی",
          text:
            "راه‌اندازی سیستم‌های ابزار دقیق و آماده‌سازی تجهیزات برای بهره‌برداری."
        },
        operation: {
          title: "بهره‌برداری",
          text:
            "بهره‌برداری از تجهیزات ابزار دقیق و پشتیبانی فنی عملیاتی."
        },
        trading: {
          title: "خرید و فروش تجهیزات",
          text:
            "خرید و فروش تجهیزات ابزار دقیق."
        },
        procurement: {
          title: "تأمین تجهیزات",
          text:
            "تأمین و خرید حرفه‌ای تجهیزات ابزار دقیق."
        }
      }
    },

    contact: {
      eyebrow: "ارتباط",
      title: "در ارتباط باشیم.",
      description:
        "برای تخصص ابزار دقیق، پشتیبانی تجهیزات یا درخواست‌های حرفه‌ای، می‌توانید در تماس باشید.",

      whatsapp: {
        label: "کانال واتساپ",
        title: "در ارتباط بمانید",
        text:
          "برای ارتباط حرفه‌ای و دریافت به‌روزرسانی‌ها، کانال واتساپ را دنبال کنید.",
        button: "مشاهده کانال واتساپ"
      },

      youtube: {
  label: "کانال یوتیوب",
  title: "تماشا و دنبال کنید",
  text: "برای مشاهده ویدیوها، محتوای تخصصی و آخرین به‌روزرسانی‌ها، کانال یوتیوب را دنبال کنید.",
  button: "مشاهده کانال یوتیوب"
},

      email: {
        label: "ایمیل",
        text:
          "برای درخواست‌های حرفه‌ای مستقیم، ایمیل ارسال کنید یا آدرس را کپی کنید.",
        send: "ارسال ایمیل",
        copy: "کپی ایمیل"
      }
    },

    footer: {
      title: "شماره تماس : 09155185653"
    },

    themes: {
      emerald: "زمردی",
      aqua: "آبی",
      forest: "جنگلی",
      mint: "نعنایی"
    },

    accessibility: {
      darkMode: "فعال‌سازی حالت تاریک",
      lightMode: "فعال‌سازی حالت روشن",
      chooseTheme: "انتخاب تم رنگی",
      openMenu: "باز کردن منوی ناوبری",
      closeMenu: "بستن منوی ناوبری",
      backToTop: "بازگشت به بالا"
    },

    feedback: {
      copied: "کپی شد!"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "نبذة",
      expertise: "الخبرات",
      contact: "تواصل"
    },

    hero: {
      eyebrow: "هندسة الأجهزة والقياس",
      title: "مهندس أجهزة وقياس محترف",
      description:
        "خبرة مهنية في مجال الأجهزة والقياس تشمل المعايرة، فحص الحلقات، التركيب، التشغيل الأولي، التشغيل، التوريد، وشراء وبيع معدات الأجهزة.",
      primary: "تواصل معي",
      secondary: "تحميل السيرة الذاتية",
      signature: "الدقة • القياس • التحكم • الموثوقية",
      scroll: "مرر للاستكشاف"
    },

    visual: {
      precision: "نظام دقيق"
    },

    about: {
      eyebrow: "الهوية المهنية",
      title: "الدقة هي الأساس.",
      lead:
        "ضياء بيشنهاد مهندس أجهزة وقياس محترف يركز على التنفيذ العملي والدقيق والموثوق لأعمال الأجهزة والقياس.",
      text:
        "يشمل نطاق العمل معايرة معدات الأجهزة والقياس، وفحص الحلقات، والتركيب، والتشغيل الأولي، والتشغيل، والتوريد، وشراء وبيع المعدات، مع التركيز على القياس الموثوق والتنفيذ الفني السليم.",
      identityLabel: "محترف",
      identityTitle: "مهندس أجهزة وقياس"
    },

    tags: {
      instrumentation: "الأجهزة والقياس",
      calibration: "المعايرة",
      commissioning: "التشغيل الأولي",
      control: "التحكم",
      precision: "الدقة"
    },

    expertise: {
      eyebrow: "القدرات الفنية",
      title: "الخبرات المهنية",
      intro:
        "قدرات متخصصة في مجال الأجهزة والقياس، من تركيب وفحص المعدات إلى توريدها وشرائها وبيعها.",

      cards: {
        calibration: {
          title: "المعايرة",
          text:
            "معايرة معدات الأجهزة والقياس مع التركيز على الدقة والقياس الموثوق."
        },
        loop: {
          title: "فحص الحلقات",
          text:
            "فحص حلقات الأجهزة والقياس والتحقق من صحة نقل الإشارة ووظائف المعدات."
        },
        installation: {
          title: "التركيب",
          text:
            "تركيب ودمج معدات الأجهزة والقياس."
        },
        commissioning: {
          title: "التشغيل الأولي",
          text:
            "التشغيل الأولي لأنظمة الأجهزة والقياس وتجهيز المعدات للتشغيل."
        },
        operation: {
          title: "التشغيل",
          text:
            "تشغيل معدات الأجهزة والقياس والدعم الفني العملي."
        },
        trading: {
          title: "تجارة المعدات",
          text:
            "شراء وبيع معدات الأجهزة والقياس."
        },
        procurement: {
          title: "التوريد",
          text:
            "توفير وشراء معدات الأجهزة والقياس بشكل مهني."
        }
      }
    },

    contact: {
      eyebrow: "تواصل",
      title: "لنتواصل.",
      description:
        "للاستفسارات المتعلقة بخبرات الأجهزة والقياس أو دعم المعدات أو الطلبات المهنية، يمكنكم التواصل.",

      whatsapp: {
        label: "قناة واتساب",
        title: "ابقَ على تواصل",
        text:
          "تابع قناة واتساب للتواصل المهني والحصول على التحديثات.",
        button: "زيارة قناة واتساب"
      },

       youtube: {
  label: "قناة يوتيوب",
  title: "شاهد وتابع",
  text: "تابع قناة يوتيوب لمشاهدة المحتوى المتخصص والتحديثات ومقاطع الفيديو.",
  button: "زيارة قناة يوتيوب"
},

      email: {
        label: "البريد الإلكتروني",
        text:
          "للاستفسارات المهنية المباشرة، أرسل بريداً إلكترونياً أو انسخ العنوان.",
        send: "إرسال بريد",
        copy: "نسخ البريد"
      }
    },

    footer: {
      title: "رقم الاتصال : 09155185653"
    },

    themes: {
      emerald: "زمردي",
      aqua: "أكوا",
      forest: "غابة",
      mint: "نعناعي"
    },

    accessibility: {
      darkMode: "تفعيل الوضع الداكن",
      lightMode: "تفعيل الوضع الفاتح",
      chooseTheme: "اختيار سمة الألوان",
      openMenu: "فتح قائمة التنقل",
      closeMenu: "إغلاق قائمة التنقل",
      backToTop: "العودة إلى الأعلى"
    },

    feedback: {
      copied: "تم النسخ!"
    }
  }
};

/* =========================================================
   3. DOM REFERENCES
   ========================================================= */

const html = document.documentElement;

const siteHeader = document.getElementById("siteHeader");
const themeToggle = document.getElementById("themeToggle");
const themePickerButton = document.getElementById("themePickerButton");
const themePicker = document.getElementById("themePicker");

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileNav = document.getElementById("mobileNav");

const scrollProgress = document.getElementById("scrollProgress");
const backToTop = document.getElementById("backToTop");

const copyEmailButton = document.getElementById("copyEmailButton");
const copyStatus = document.getElementById("copyStatus");

const currentYear = document.getElementById("currentYear");

const languageButtons = document.querySelectorAll(".language-button");
const navLinks = document.querySelectorAll("[data-nav]");
const sections = document.querySelectorAll("main section[id]");
const revealElements = document.querySelectorAll(".reveal");

const whatsappLinks = document.querySelectorAll(
  'a[href="YOUR_WHATSAPP_CHANNEL_URL"]'
);

/* =========================================================
   4. HELPER FUNCTIONS
   ========================================================= */

function getNestedTranslation(object, path) {
  return path.split(".").reduce((current, key) => {
    return current?.[key];
  }, object);
}

function setTranslatedText(language) {
  const languagePack = translations[language];

  if (!languagePack) {
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = getNestedTranslation(languagePack, key);

    if (typeof value === "string") {
      element.textContent = value;
    }
  });
}

function detectBrowserLanguage() {
  const browserLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const browserLanguage of browserLanguages) {
    const languageCode = browserLanguage.toLowerCase().split("-")[0];

    if (CONFIG.supportedLanguages.includes(languageCode)) {
      return languageCode;
    }
  }

  return "en";
}

/* =========================================================
   5. LANGUAGE MANAGER
   ========================================================= */

let currentLanguage = "en";

function updateLanguageButtons(language) {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;

    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function updateDocumentDirection(language) {
  const rtlLanguages = ["fa", "ar"];
  const isRTL = rtlLanguages.includes(language);

  html.lang = language;
  html.dir = isRTL ? "rtl" : "ltr";
}

function setLanguage(language, save = true) {
  if (!CONFIG.supportedLanguages.includes(language)) {
    language = "en";
  }

  currentLanguage = language;

  updateDocumentDirection(language);
  setTranslatedText(language);
  updateLanguageButtons(language);
  updateAccessibilityLabels();

  if (save) {
    localStorage.setItem(CONFIG.storageKeys.language, language);
  }

  closeMobileNavigation();
  closeThemePicker();

  requestAnimationFrame(() => {
    document.body.classList.add("language-ready");
  });
}

function initializeLanguage() {
  const savedLanguage = localStorage.getItem(CONFIG.storageKeys.language);

  const language =
    savedLanguage && CONFIG.supportedLanguages.includes(savedLanguage)
      ? savedLanguage
      : detectBrowserLanguage();

  setLanguage(language, false);
}

/* =========================================================
   6. ACCESSIBILITY LABELS
   ========================================================= */

function updateAccessibilityLabels() {
  const languagePack = translations[currentLanguage];

  const isDark = html.dataset.theme === "dark";

  themeToggle.setAttribute(
    "aria-label",
    isDark
      ? languagePack.accessibility.lightMode
      : languagePack.accessibility.darkMode
  );

  themePickerButton.setAttribute(
    "aria-label",
    languagePack.accessibility.chooseTheme
  );

  mobileMenuButton.setAttribute(
    "aria-label",
    mobileMenuButton.classList.contains("open")
      ? languagePack.accessibility.closeMenu
      : languagePack.accessibility.openMenu
  );

  backToTop.setAttribute(
    "aria-label",
    languagePack.accessibility.backToTop
  );
}

/* =========================================================
   7. THEME MANAGER
   ========================================================= */

function applyThemeMode(mode, save = true) {
  const normalizedMode = mode === "dark" ? "dark" : "light";

  html.dataset.theme = normalizedMode;

  themeToggle.setAttribute(
    "aria-pressed",
    String(normalizedMode === "dark")
  );

  if (save) {
    localStorage.setItem(CONFIG.storageKeys.mode, normalizedMode);
  }

  updateAccessibilityLabels();
}

function initializeThemeMode() {
  const savedMode = localStorage.getItem(CONFIG.storageKeys.mode);

  if (savedMode === "dark" || savedMode === "light") {
    applyThemeMode(savedMode, false);
    return;
  }

  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  applyThemeMode(prefersDark ? "dark" : "light", false);
}

function applyColorTheme(theme, save = true) {
  if (!CONFIG.supportedColorThemes.includes(theme)) {
    theme = "emerald";
  }

  html.dataset.colorTheme = theme;

  if (save) {
    localStorage.setItem(CONFIG.storageKeys.colorTheme, theme);
  }

  document
    .querySelectorAll("[data-color-theme]")
    .forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.colorTheme === theme)
      );
    });
}

function initializeColorTheme() {
  const savedTheme = localStorage.getItem(CONFIG.storageKeys.colorTheme);

  applyColorTheme(
    CONFIG.supportedColorThemes.includes(savedTheme)
      ? savedTheme
      : "emerald",
    false
  );
}

function toggleThemeMode() {
  const nextMode =
    html.dataset.theme === "dark"
      ? "light"
      : "dark";

  applyThemeMode(nextMode);
}

/* =========================================================
   8. THEME PICKER
   ========================================================= */

function openThemePicker() {
  themePicker.classList.add("open");
  themePicker.setAttribute("aria-hidden", "false");
  themePickerButton.setAttribute("aria-expanded", "true");
}

function closeThemePicker() {
  themePicker.classList.remove("open");
  themePicker.setAttribute("aria-hidden", "true");
  themePickerButton.setAttribute("aria-expanded", "false");
}

function toggleThemePicker() {
  if (themePicker.classList.contains("open")) {
    closeThemePicker();
  } else {
    openThemePicker();
  }
}

/* =========================================================
   9. MOBILE NAVIGATION
   ========================================================= */

function openMobileNavigation() {
  mobileNav.classList.add("open");
  mobileMenuButton.classList.add("open");
  mobileMenuButton.setAttribute("aria-expanded", "true");
  mobileNav.setAttribute("aria-hidden", "false");
  updateAccessibilityLabels();
}

function closeMobileNavigation() {
  mobileNav.classList.remove("open");
  mobileMenuButton.classList.remove("open");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  mobileNav.setAttribute("aria-hidden", "true");
  updateAccessibilityLabels();
}

function toggleMobileNavigation() {
  if (mobileNav.classList.contains("open")) {
    closeMobileNavigation();
  } else {
    openMobileNavigation();
  }
}

/* =========================================================
   10. ACTIVE NAVIGATION
   ========================================================= */

function updateActiveNavigation(sectionId) {
  navLinks.forEach((link) => {
    const isActive = link.dataset.nav === sectionId;
    link.classList.toggle("active", isActive);
  });
}

function initializeActiveNavigation() {
  const observer = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibleSections.length > 0) {
        updateActiveNavigation(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.05, 0.2, 0.5]
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =========================================================
   11. SCROLL REVEAL
   ========================================================= */

function initializeScrollReveal() {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

/* =========================================================
   12. SCROLL PROGRESS / HEADER / BACK TO TOP
   ========================================================= */

function updateScrollUI() {
  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    documentHeight > 0
      ? Math.min((scrollTop / documentHeight) * 100, 100)
      : 0;

  scrollProgress.style.width = `${progress}%`;

  siteHeader.classList.toggle("scrolled", scrollTop > 20);

  backToTop.classList.toggle("visible", scrollTop > 500);
}

let scrollTicking = false;

function handleScroll() {
  if (!scrollTicking) {
    window.requestAnimationFrame(() => {
      updateScrollUI();
      scrollTicking = false;
    });

    scrollTicking = true;
  }
}

/* =========================================================
   13. COPY EMAIL
   ========================================================= */

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(CONFIG.email);
    showCopySuccess();
  } catch (error) {
    fallbackCopyEmail();
  }
}

function fallbackCopyEmail() {
  const textarea = document.createElement("textarea");

  textarea.value = CONFIG.email;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.pointerEvents = "none";

  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    showCopySuccess();
  } catch (error) {
    showCopyFailure();
  }

  document.body.removeChild(textarea);
}

function showCopySuccess() {
  copyStatus.textContent =
    translations[currentLanguage].feedback.copied;

  copyStatus.classList.add("show");

  window.clearTimeout(showCopySuccess.timeout);

  showCopySuccess.timeout = window.setTimeout(() => {
    copyStatus.classList.remove("show");
  }, 1800);
}

function showCopyFailure() {
  copyStatus.textContent =
    currentLanguage === "fa"
      ? "کپی انجام نشد."
      : currentLanguage === "ar"
        ? "تعذر النسخ."
        : "Copy failed.";

  copyStatus.classList.add("show");

  window.clearTimeout(showCopyFailure.timeout);

  showCopyFailure.timeout = window.setTimeout(() => {
    copyStatus.classList.remove("show");
  }, 2200);
}

/* =========================================================
   14. BACK TO TOP
   ========================================================= */

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* =========================================================
   15. EVENT LISTENERS
   ========================================================= */

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
  });
});

themeToggle.addEventListener("click", toggleThemeMode);

themePickerButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleThemePicker();
});

document.querySelectorAll("[data-color-theme]").forEach((button) => {
  button.addEventListener("click", () => {
    applyColorTheme(button.dataset.colorTheme);
    closeThemePicker();
  });
});

mobileMenuButton.addEventListener(
  "click",
  toggleMobileNavigation
);

document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileNavigation();
  });
});

document.querySelectorAll(".desktop-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    closeMobileNavigation();
  });
});

copyEmailButton.addEventListener("click", copyEmail);

backToTop.addEventListener("click", scrollToTop);

window.addEventListener("scroll", handleScroll, {
  passive: true
});

document.addEventListener("click", (event) => {
  if (
    !themePicker.contains(event.target) &&
    !themePickerButton.contains(event.target)
  ) {
    closeThemePicker();
  }

  if (
    !mobileNav.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    closeMobileNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeThemePicker();
    closeMobileNavigation();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    closeMobileNavigation();
  }
});

/* =========================================================
   16. WHATSAPP CONFIGURATION
   ========================================================= */

function initializeWhatsAppLink() {
  whatsappLinks.forEach((link) => {
    link.href = CONFIG.whatsappChannelUrl = "https://whatsapp.com/channel/0029VbDOn3tJUM2e9UwAyR35";
  });
}

/* =========================================================
   17. INITIALIZATION
   ========================================================= */

function initialize() {
  currentYear.textContent = new Date().getFullYear();

  initializeLanguage();
  initializeThemeMode();
  initializeColorTheme();
  initializeWhatsAppLink();

  initializeActiveNavigation();
  initializeScrollReveal();

  updateScrollUI();
  updateAccessibilityLabels();
}

initialize();
