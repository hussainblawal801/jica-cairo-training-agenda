const eventStart = new Date("2026-06-16T09:00:00+09:00");

const course = {
  officialName: "Project for Transport Infrastructure Development Strategy in the Greater Cairo Metropolitan Area and Surrounding Regions - Training in Japan",
  nameEn: "Greater Cairo Transport Infrastructure Strategy Training in Japan",
  participants: "15",
  period: "June 16-28, 2026",
  source: "Training_0519.xlsx"
};

const agenda = [
  {
    day: "Jun 16",
    date: "Tue, Jun 16",
    theme: "Travel from Cairo",
    summary: "Participants depart Cairo and travel via the transit city toward Japan.",
    location: "Cairo / transit",
    sessions: [
      {
        time: "All day",
        title: "Cairo to Transit Point",
        body: "Travel from Cairo to the transit point.",
        lead: "",
        place: "",
        type: "Travel"
      }
    ]
  },
  {
    day: "Jun 17",
    date: "Wed, Jun 17",
    theme: "Arrival in Tokyo",
    summary: "Participants arrive in Japan from the transit city.",
    location: "Tokyo",
    sessions: [
      {
        time: "All day",
        title: "Arrival: Transit Point to Tokyo",
        body: "Arrival route from the transit point to Tokyo.",
        lead: "",
        place: "Tokyo",
        type: "Arrival"
      }
    ]
  },
  {
    day: "Jun 18",
    date: "Thu, Jun 18",
    theme: "Briefing, Orientation, and Kansai Transport Policy",
    summary: "Arrival briefing, program orientation, lecture on Kansai metropolitan transport planning, and first workshop.",
    location: "JICA Tokyo 403",
    sessions: [
      {
        time: "10:00-11:00",
        title: "Arrival Briefing",
        body: "Arrival briefing for the training group.",
        lead: "JICA",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Briefing"
      },
      {
        time: "11:00-12:30",
        title: "Lunch",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Meal"
      },
      {
        time: "12:30-14:00",
        title: "Program Orientation",
        body: "Confirm the expected outputs and objectives of the Japan training program, and share basic knowledge on relevant Japanese systems.",
        lead: "Masaya Nakano / Li Shuai, PCKK",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Lecture"
      },
      {
        time: "14:00-14:10",
        title: "Break",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Break"
      },
      {
        time: "14:10-16:10",
        title: "Transport Planning and Policy in the Kansai Metropolitan Area",
        body: "Examples of metropolitan-level transport policies and measures.",
        lead: "Yasuhiro Shiomi, Professor, Department of Civil and Environmental Engineering, Ritsumeikan University",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Lecture"
      },
      {
        time: "16:10-16:20",
        title: "Break",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Break"
      },
      {
        time: "16:20-17:20",
        title: "Workshop",
        body: "Form group-work teams and identify key issues for the training program.",
        lead: "Masaya Nakano / Li Shuai, PCKK",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Discussion"
      }
    ]
  },
  {
    day: "Jun 19",
    date: "Fri, Jun 19",
    theme: "National Planning Systems and Metropolitan Development",
    summary: "National-level land use and transport strategy lectures, capital region planning, discussion, and stay allowance arrangements.",
    location: "JICA Tokyo 403",
    sessions: [
      {
        time: "10:00-12:00",
        title: "Location Optimization Act and Urban/Regional Transport Strategy",
        body: "Examples of national-level land-use planning and policy.",
        lead: "MLIT Urban Bureau, Street and Transport Facilities Division / City Planning Division",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Lecture"
      },
      {
        time: "12:00-13:00",
        title: "Lunch",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Meal"
      },
      {
        time: "13:00-14:30",
        title: "Capital Region Development Plan",
        body: "Japan's policy direction for capital function relocation and capital region development.",
        lead: "Kyoko Itsuki, Senior Research Officer, Comprehensive Planning Division, MLIT National Spatial Planning and Regional Policy Bureau",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Lecture"
      },
      {
        time: "14:30-14:40",
        title: "Break",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Break"
      },
      {
        time: "14:40-15:10",
        title: "Discussion",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Discussion"
      },
      {
        time: "15:30-16:30",
        title: "Stay Allowance Withdrawal",
        body: "Administrative arrangement for stay allowance withdrawal.",
        lead: "",
        place: "Tokyo",
        type: "Admin"
      }
    ]
  },
  {
    day: "Jun 20",
    date: "Sat, Jun 20",
    theme: "Holiday",
    summary: "No formal training sessions are scheduled.",
    location: "",
    sessions: [
      {
        time: "All day",
        title: "Rest Day",
        body: "",
        lead: "",
        place: "",
        type: "Holiday"
      }
    ]
  },
  {
    day: "Jun 21",
    date: "Sun, Jun 21",
    theme: "Holiday",
    summary: "No formal training sessions are scheduled.",
    location: "",
    sessions: [
      {
        time: "All day",
        title: "Rest Day",
        body: "",
        lead: "",
        place: "",
        type: "Holiday"
      }
    ]
  },
  {
    day: "Jun 22",
    date: "Mon, Jun 22",
    theme: "Tokyo Metropolitan Planning and PCKK Workshop",
    summary: "Urban and transport planning lecture, Tokyo Metropolitan Government visit, PCKK workshop, and networking event.",
    location: "Tokyo",
    sessions: [
      {
        time: "09:30-11:30",
        title: "Integrated Urban and Transport Planning for the Capital Region",
        body: "Planning-system design tailored to regional characteristics.",
        lead: "Fumihiko Seta, Associate Professor, Department of Urban Engineering, The University of Tokyo",
        place: "JICA Tokyo, Annex 1F Rooms C/D",
        note: "JICA Tokyo Main Building 4F Room 403 is also waitlisted.",
        type: "Lecture"
      },
      {
        time: "11:30-12:30",
        title: "Lunch",
        body: "",
        lead: "",
        place: "",
        type: "Meal"
      },
      {
        time: "12:30-13:00",
        title: "Bus Transfer: JICA Tokyo to Tokyo Metropolitan Government",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      },
      {
        time: "13:00-15:00",
        title: "Promotion of Tokyo's Comprehensive Transport Policy",
        body: "Examples of transport policies and measures in a major metropolitan area.",
        lead: "Transport Planning Division, Urban Infrastructure Department, Tokyo Metropolitan Government Bureau of Urban Development",
        place: "Tokyo Metropolitan Government Building",
        type: "Lecture"
      },
      {
        time: "15:00-15:30",
        title: "Bus Transfer: Tokyo Metropolitan Government to PCKK",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      },
      {
        time: "15:30-17:00",
        title: "PCKK Visit and Workshop",
        body: "Discussion on the project with members of the study team.",
        lead: "Masaya Nakano / Li Shuai, PCKK",
        place: "PCKK Headquarters",
        type: "Workshop"
      },
      {
        time: "17:00-19:00",
        title: "Networking Reception",
        body: "",
        lead: "",
        place: "PCKK Headquarters",
        type: "Reception"
      },
      {
        time: "19:00-20:00",
        title: "Transfer: PCKK to JICA Tokyo",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      }
    ]
  },
  {
    day: "Jun 23",
    date: "Tue, Jun 23",
    theme: "Embassy Visit, Tokyu Railway, and TOD Field Learning",
    summary: "Egyptian Embassy visit, Tokyu Railway lecture, and TOD site observations at Futako-Tamagawa and Tama-Plaza.",
    location: "Tokyo / Kanagawa",
    sessions: [
      {
        time: "08:30-09:00",
        title: "Bus Transfer: JICA Tokyo to the Embassy",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      },
      {
        time: "09:00-10:00",
        title: "Visit to the Egyptian Embassy in Japan",
        body: "",
        lead: "Egyptian Embassy in Japan",
        place: "Egyptian Embassy in Japan",
        type: "Visit"
      },
      {
        time: "10:00-10:30",
        title: "Bus Transfer: Embassy to Tokyu Corporation Headquarters",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      },
      {
        time: "10:30-12:30",
        title: "Den-en-toshi Line and Next-Generation Suburban Town Development",
        body: "Promotion of residential land development and town development centered on railway stations.",
        lead: "Tomoyuki Yamashita / Toshio Kajitani, Tokyu Corporation",
        place: "Tokyu Corporation Headquarters, Shibuya",
        type: "Lecture"
      },
      {
        time: "12:30-13:30",
        title: "Lunch",
        body: "",
        lead: "",
        place: "Box lunch in the Tokyu meeting room",
        type: "Meal"
      },
      {
        time: "13:30-14:30",
        title: "Bus Transfer: Shibuya to Futako-Tamagawa Station",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      },
      {
        time: "14:30-15:30",
        title: "Futako-Tamagawa TOD Site Visit",
        body: "",
        lead: "Toshio Kajitani, Tokyu Corporation",
        place: "Around Futako-Tamagawa Station, to be confirmed",
        type: "Visit"
      },
      {
        time: "15:30-16:30",
        title: "Bus Transfer: Futako-Tamagawa Station to Tama-Plaza Station",
        body: "",
        lead: "",
        place: "Kanagawa",
        type: "Transit"
      },
      {
        time: "16:30-17:30",
        title: "Tama-Plaza TOD Site Visit",
        body: "This visit may be omitted depending on coordination.",
        lead: "Toshio Kajitani, Tokyu Corporation",
        place: "Around Tama-Plaza Station, to be confirmed",
        type: "Visit"
      },
      {
        time: "17:30-18:30",
        title: "Bus Transfer: Tama-Plaza Station to JICA Tokyo",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Transit"
      }
    ]
  },
  {
    day: "Jun 24",
    date: "Wed, Jun 24",
    theme: "JICA Headquarters and Yokohama Transit Development",
    summary: "JICA headquarters visit, JICA urban and transport initiatives, Minatomirai Line financing and integrated station development, and Yokohama field visit.",
    location: "Tokyo / Yokohama",
    sessions: [
      {
        time: "08:30-09:00",
        title: "Bus Transfer: JICA Tokyo to JICA Headquarters",
        body: "",
        lead: "",
        place: "",
        type: "Transit"
      },
      {
        time: "09:00-09:30",
        title: "JICA Headquarters Visit and Greeting",
        body: "",
        lead: "JICA",
        place: "JICA Headquarters",
        note: "The headquarters meeting room reservation is handled separately.",
        type: "Visit"
      },
      {
        time: "09:30-09:40",
        title: "Break",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Break"
      },
      {
        time: "09:40-11:10",
        title: "JICA Initiatives in Urban and Transport Fields",
        body: "",
        lead: "Misaki Funabashi, JICA Infrastructure Management Department, Urban and Regional Development Group",
        place: "JICA Headquarters",
        type: "Lecture"
      },
      {
        time: "11:10-12:10",
        title: "Lunch",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Meal"
      },
      {
        time: "12:10-13:30",
        title: "Bus Transfer: JICA Headquarters to Shin-Takashima",
        body: "",
        lead: "",
        place: "Kanagawa",
        type: "Transit"
      },
      {
        time: "13:30-15:00",
        title: "Development of the Minatomirai Line",
        body: "Examples of financing schemes through operator coordination, integrated development of stations and surrounding buildings, and project cost reduction.",
        lead: "Katsuhiko Hashizume, Director and General Manager of Corporate Management Department, Yokohama Minatomirai Railway Company",
        place: "Yokohama Minatomirai Railway meeting room, Shin-Takashima Station",
        type: "Lecture"
      },
      {
        time: "15:00-17:30",
        title: "Minatomirai Line and Yokohama Air Cabin Site Visit",
        body: "Ride the Minatomirai Line from Shin-Takashima Station to Minatomirai Station, move toward Sakuragicho Station, ride the Yokohama Air Cabin, and board the bus near World Porters.",
        lead: "Katsuhiko Hashizume, Yokohama Minatomirai Railway Company",
        place: "Minatomirai area",
        type: "Visit"
      },
      {
        time: "17:30-18:30",
        title: "Bus Transfer: Minatomirai Area to JICA Tokyo",
        body: "",
        lead: "",
        place: "",
        type: "Transit"
      }
    ]
  },
  {
    day: "Jun 25",
    date: "Thu, Jun 25",
    theme: "Tsukuba Express and Kashiwa-no-ha Smart City",
    summary: "Rail-oriented urban development lecture and Kashiwa-no-ha Smart City field visit.",
    location: "Tokyo / Chiba",
    sessions: [
      {
        time: "09:00-11:00",
        title: "Town Development along the Tsukuba Express Line",
        body: "Integrated promotion of residential land development and railway business along the Tsukuba Express Line, with development of a research and academic city.",
        lead: "Takehito Ito / Kenichi Kojima",
        place: "JICA Tokyo, Main Building 4F Room 403, online",
        note: "The JICA Tokyo room has limited online-meeting equipment, mainly a web-conference microphone and speaker.",
        type: "Lecture"
      },
      {
        time: "11:00-12:30",
        title: "Bus Transfer: JICA Tokyo to Kashiwa-no-ha Campus Station",
        body: "",
        lead: "",
        place: "Chiba",
        type: "Transit"
      },
      {
        time: "12:30-13:30",
        title: "Lunch, TBD",
        body: "",
        lead: "",
        place: "Chiba",
        type: "Meal"
      },
      {
        time: "13:30-16:30",
        title: "Kashiwa-no-ha Smart City Site Visit",
        body: "Smart-city tour of about 120 minutes, followed by 30-60 minutes of Q&A and discussion with Mitsui Fudosan staff.",
        lead: "Toshiyuki Yamanaka / Hideaki Dazai, Mitsui Fudosan",
        place: "Kashiwa-no-ha Conference Center",
        type: "Visit"
      },
      {
        time: "16:30-18:00",
        title: "Bus Transfer: Kashiwa-no-ha to JICA Tokyo",
        body: "",
        lead: "",
        place: "Chiba",
        type: "Transit"
      }
    ]
  },
  {
    day: "Jun 26",
    date: "Fri, Jun 26",
    theme: "Reflection, Presentations, and Closing",
    summary: "Training reflection, workshop, team presentations, evaluation meeting, and closing ceremony.",
    location: "JICA Tokyo 403",
    sessions: [
      {
        time: "09:00-09:40",
        title: "Training Reflection",
        body: "Review lecture content, key questions, and main discussion points from the program.",
        lead: "Masaya Nakano / Li Shuai, PCKK",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Lecture"
      },
      {
        time: "09:40-09:50",
        title: "Break",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Break"
      },
      {
        time: "09:50-11:30",
        title: "Workshop",
        body: "Discuss the issues set on the first day of training and prepare presentations based on lessons learned during the program.",
        lead: "Masaya Nakano / Li Shuai, PCKK",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Discussion"
      },
      {
        time: "11:30-12:30",
        title: "Lunch",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Meal"
      },
      {
        time: "12:30-14:00",
        title: "Training Output Sharing",
        body: "Three teams present for 10 minutes each, with 60 minutes including interpretation, followed by 30 minutes of Q&A and discussion.",
        lead: "Masaya Nakano / Li Shuai, PCKK",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Presentation"
      },
      {
        time: "14:00-14:30",
        title: "Break",
        body: "",
        lead: "",
        place: "Tokyo",
        type: "Break"
      },
      {
        time: "14:30-15:30",
        title: "Evaluation Meeting and Closing Ceremony",
        body: "",
        lead: "JICA",
        place: "JICA Tokyo, Main Building 4F Room 403",
        type: "Closing"
      }
    ]
  },
  {
    day: "Jun 27",
    date: "Sat, Jun 27",
    theme: "Departure from Tokyo",
    summary: "Participants depart Tokyo toward the transit point.",
    location: "Tokyo / transit",
    sessions: [
      {
        time: "All day",
        title: "Departure: Tokyo to Transit Point",
        body: "Departure from Tokyo to the transit point.",
        lead: "",
        place: "",
        type: "Departure"
      }
    ]
  },
  {
    day: "Jun 28",
    date: "Sun, Jun 28",
    theme: "Return to Cairo",
    summary: "Participants complete the return route to Cairo.",
    location: "Transit / Cairo",
    sessions: [
      {
        time: "All day",
        title: "Transit Point to Cairo",
        body: "Return from the transit point to Cairo.",
        lead: "",
        place: "",
        type: "Travel"
      }
    ]
  }
];

const tabs = document.querySelector("#dayTabs");
const panel = document.querySelector("#agendaPanel");
const stats = document.querySelector("#agendaStats");
const searchInput = document.querySelector("#agendaSearch");
const filterButtons = document.querySelectorAll("[data-filter]");
const countdownValue = document.querySelector("#countdownValue");
const countdownLabel = document.querySelector("#countdownLabel");
const printBtn = document.querySelector("#printBtn");
const languageButtons = document.querySelectorAll("[data-lang]");

const state = {
  selectedDay: -1,
  filter: "all",
  query: "",
  lang: localStorage.getItem("trainingLang") || "en"
};

const filterGroups = {
  all: [],
  lecture: ["Lecture", "Briefing"],
  visit: ["Visit"],
  workshop: ["Workshop", "Discussion", "Presentation", "Closing"],
  move: ["Travel", "Transit", "Arrival", "Departure"],
  logistics: ["Meal", "Break", "Admin", "Holiday", "Reception"]
};

const typeCategories = {
  Lecture: "lecture",
  Briefing: "lecture",
  Visit: "visit",
  Workshop: "workshop",
  Discussion: "workshop",
  Presentation: "workshop",
  Closing: "workshop",
  Travel: "move",
  Transit: "move",
  Arrival: "move",
  Departure: "move",
  Meal: "logistics",
  Break: "logistics",
  Admin: "logistics",
  Holiday: "logistics",
  Reception: "logistics"
};

const uiText = {
  en: {
    pageTitle: "JICA Cairo Transport Strategy Japan Training",
    brand: "Cairo Transport Strategy Training",
    navOverview: "Overview",
    navAgenda: "Agenda",
    navRoutes: "Study Routes",
    navLogistics: "Logistics",
    navContact: "Contact",
    heroEyebrow: "June 16-28, 2026 | Japan program",
    heroTitle: "JICA Japan Training for the Greater Cairo Transport Strategy Project",
    heroText:
      "A working agenda for the project on transport infrastructure strategy in the Greater Cairo metropolitan area and surrounding regions, built from the official training schedule workbook.",
    openAgenda: "Open Agenda",
    printProgram: "Print Program",
    factDatesLabel: "Program Window",
    factDatesValue: "June 16-28, 2026",
    factGroupLabel: "Delegation",
    factGroupValue: "15 participants from the Greater Cairo transport strategy project",
    factBaseLabel: "Training Base",
    factBaseValue: "JICA Tokyo with field visits in Tokyo, Kanagawa, and Chiba",
    factFocusLabel: "Focus",
    factFocusValue: "Metropolitan transport planning, TOD, rail corridors, and smart-city practice",
    purposeKicker: "Program Purpose",
    purposeTitle: "Translate Japanese urban transport practice into options for Greater Cairo.",
    purposeText:
      "The program combines lectures, site visits, discussions, and project workshops. Its focus is integrated land-use and transport planning, metropolitan policy, transit-oriented development, corridor development, smart-city operations, financing approaches, and follow-up action planning for the Cairo transport strategy project.",
    outputsTitle: "Expected Outputs",
    output1: "Shared understanding of Japan's metropolitan planning and transport policy tools.",
    output2: "Practical lessons from Tokyo, Yokohama, Tokyu corridor, Tsukuba Express, and Kashiwa-no-ha.",
    output3: "Project discussion notes with PCKK and JICA teams.",
    output4: "Three team presentations summarizing lessons and application ideas.",
    focus1Title: "Metropolitan Policy",
    focus1Text: "National, regional, and Tokyo metropolitan planning systems.",
    focus2Title: "TOD and Rail Corridors",
    focus2Text: "Station-centered development, suburban growth, and railway-led area management.",
    focus3Title: "Implementation Finance",
    focus3Text: "Public-private coordination, station integration, and cost reduction cases.",
    focus4Title: "Project Application",
    focus4Text: "Workshops link Japanese lessons to the Greater Cairo strategy project.",
    agendaKicker: "Interactive Agenda",
    agendaTitle: "Daily program",
    agendaText: "Select a day, filter by activity type, or search for a venue, lecturer, route, or topic.",
    searchLabel: "Search agenda",
    searchPlaceholder: "Try TOD, JICA HQ, Tokyo, workshop...",
    filterAll: "All",
    filterLectures: "Lectures",
    filterVisits: "Visits",
    filterWorkshops: "Workshops",
    filterTravel: "Travel",
    filterLogistics: "Logistics",
    routesKicker: "Study Routes",
    routesTitle: "Field learning sequence",
    routesText: "The agenda links classroom policy topics with observed urban transport corridors and development districts.",
    route1Label: "Tokyo",
    route1Title: "Government and project coordination",
    route1Text: "JICA Tokyo, Tokyo Metropolitan Government, JICA Headquarters, PCKK, and the Egyptian Embassy in Japan.",
    route2Label: "Tokyu Corridor",
    route2Title: "Railway-led suburban development",
    route2Text: "Tokyu headquarters, Futako-Tamagawa TOD, and Tama-Plaza TOD as examples of station-area development.",
    route3Label: "Yokohama",
    route3Title: "Integrated rail and waterfront development",
    route3Text: "Minatomirai Line, station-building integration, and Yokohama Air Cabin field observation.",
    route4Label: "Chiba",
    route4Title: "Smart-city district management",
    route4Text: "Kashiwa-no-ha Smart City tour and discussion at Kashiwa-no-ha Conference Center.",
    logisticsKicker: "Participant Notes",
    logisticsTitle: "Coordination checklist",
    logistics1Title: "Travel Window",
    logistics1Text: "Cairo departure is scheduled for June 16, arrival in Tokyo for June 17, and return travel begins June 27.",
    logistics2Title: "Working Base",
    logistics2Text: "Most classroom sessions are at JICA Tokyo, with scheduled movement to ministries, operators, and field sites.",
    logistics3Title: "Preparation",
    logistics3Text: "Bring project questions, corridor planning issues, and examples from Greater Cairo for the workshops and final presentations.",
    contactKicker: "Coordination",
    contactTitle: "Prepare a participant email",
    contactText:
      "Use this helper to draft a quick note about travel status, organization, and any questions for the program coordination team.",
    formName: "Name",
    formNamePlaceholder: "Participant name",
    formOrg: "Organization",
    formOrgPlaceholder: "Agency or department",
    formEmail: "Email",
    formNote: "Coordination note",
    formNotePlaceholder: "Travel status, topic interest, or project question",
    prepareEmail: "Prepare Email",
    footerTitle: "JICA Cairo Transport Strategy Japan Training",
    footerNote: "One-time training agenda, June 16-28, 2026",
    all: "All",
    fullProgram: "Full Program",
    visibleItems: "visible items",
    lectures: "lectures",
    siteVisits: "site visits",
    workshops: "workshops",
    noMatchesTitle: "No matching entries",
    noMatchesText: "Try another day, clear the search, or switch the filter back to All.",
    note: "Note",
    daysToStart: "days to start",
    dayToStart: "day to start",
    live: "Live",
    programWindow: "program window",
    mailSubject: "JICA Cairo Transport Strategy Japan Training - Coordination Note",
    mailPeriod: "Period",
    mailName: "Name",
    mailOrganization: "Organization",
    mailEmail: "Email",
    mailNote: "Coordination note"
  },
  ja: {
    pageTitle: "JICA大カイロ交通戦略本邦研修",
    brand: "カイロ交通戦略研修",
    navOverview: "概要",
    navAgenda: "日程",
    navRoutes: "視察ルート",
    navLogistics: "参加案内",
    navContact: "連絡",
    heroEyebrow: "2026年6月16日-28日 | 本邦研修",
    heroTitle: "大カイロ交通戦略プロジェクト JICA本邦研修",
    heroText:
      "大カイロ都市圏および周辺地域の交通インフラ整備戦略プロジェクトのための研修日程です。公式日程表に基づいて構成しています。",
    openAgenda: "日程を見る",
    printProgram: "印刷",
    factDatesLabel: "実施期間",
    factDatesValue: "2026年6月16日-28日",
    factGroupLabel: "参加者",
    factGroupValue: "大カイロ交通戦略プロジェクト関係者15名",
    factBaseLabel: "研修拠点",
    factBaseValue: "JICA東京、東京都・神奈川県・千葉県での視察",
    factFocusLabel: "主なテーマ",
    factFocusValue: "都市圏交通計画、TOD、鉄道沿線開発、スマートシティ実務",
    purposeKicker: "研修目的",
    purposeTitle: "日本の都市交通実務を大カイロへの実践的な選択肢につなげる。",
    purposeText:
      "本研修は、講義、視察、討議、プロジェクトワークショップで構成されます。土地利用と交通の一体的計画、都市圏政策、TOD、沿線開発、スマートシティ運営、資金調達、カイロ交通戦略プロジェクトの行動計画を扱います。",
    outputsTitle: "期待される成果",
    output1: "日本の都市圏計画および交通政策ツールへの共通理解。",
    output2: "東京、横浜、東急沿線、つくばエクスプレス、柏の葉からの実践的教訓。",
    output3: "PCKKおよびJICAチームとのプロジェクト討議メモ。",
    output4: "教訓と適用案をまとめた3チームの発表。",
    focus1Title: "都市圏政策",
    focus1Text: "国、地域、東京都の都市圏計画制度。",
    focus2Title: "TODと鉄道沿線",
    focus2Text: "駅を中心とした開発、郊外成長、鉄道主導のエリアマネジメント。",
    focus3Title: "事業化と資金調達",
    focus3Text: "官民連携、駅との一体整備、コスト縮減の事例。",
    focus4Title: "プロジェクトへの適用",
    focus4Text: "ワークショップで日本の教訓を大カイロ交通戦略へ結び付けます。",
    agendaKicker: "インタラクティブ日程",
    agendaTitle: "日別プログラム",
    agendaText: "日付を選択し、活動種別で絞り込み、会場・講師・ルート・テーマを検索できます。",
    searchLabel: "日程検索",
    searchPlaceholder: "例: TOD、JICA本部、東京、ワークショップ",
    filterAll: "すべて",
    filterLectures: "講義",
    filterVisits: "視察",
    filterWorkshops: "ワークショップ",
    filterTravel: "移動",
    filterLogistics: "運営",
    routesKicker: "視察ルート",
    routesTitle: "現地学習の流れ",
    routesText: "教室での政策テーマと、都市交通回廊や開発地区の視察を結び付けます。",
    route1Label: "東京",
    route1Title: "行政機関とプロジェクト調整",
    route1Text: "JICA東京、東京都庁、JICA本部、PCKK、在日エジプト大使館。",
    route2Label: "東急沿線",
    route2Title: "鉄道主導の郊外開発",
    route2Text: "東急本社、二子玉川TOD、たまプラーザTODを駅周辺開発の事例として学びます。",
    route3Label: "横浜",
    route3Title: "鉄道とウォーターフロントの一体開発",
    route3Text: "みなとみらい線、駅と建物の一体整備、Yokohama Air Cabinの視察。",
    route4Label: "千葉",
    route4Title: "スマートシティの地区運営",
    route4Text: "柏の葉スマートシティツアーと柏の葉カンファレンスセンターでの討議。",
    logisticsKicker: "参加者向け情報",
    logisticsTitle: "調整チェックリスト",
    logistics1Title: "渡航期間",
    logistics1Text: "6月16日にカイロを出発し、6月17日に東京到着、6月27日から帰国移動を開始します。",
    logistics2Title: "活動拠点",
    logistics2Text: "講義の多くはJICA東京で行い、省庁、事業者、視察先へ移動します。",
    logistics3Title: "準備事項",
    logistics3Text: "ワークショップと最終発表のため、プロジェクト上の質問、回廊計画の課題、大カイロの事例を準備してください。",
    contactKicker: "連絡調整",
    contactTitle: "参加者メールを作成",
    contactText: "渡航状況、所属、プログラム調整チームへの質問を簡単にまとめるための入力欄です。",
    formName: "氏名",
    formNamePlaceholder: "参加者氏名",
    formOrg: "所属",
    formOrgPlaceholder: "機関または部署",
    formEmail: "メール",
    formNote: "連絡事項",
    formNotePlaceholder: "渡航状況、関心テーマ、プロジェクト上の質問",
    prepareEmail: "メールを作成",
    footerTitle: "JICA大カイロ交通戦略本邦研修",
    footerNote: "一回限りの研修日程、2026年6月16日-28日",
    all: "すべて",
    fullProgram: "全プログラム",
    visibleItems: "表示項目",
    lectures: "講義",
    siteVisits: "視察",
    workshops: "ワークショップ",
    noMatchesTitle: "該当する項目がありません",
    noMatchesText: "検索条件を変更するか、フィルターをすべてに戻してください。",
    note: "備考",
    daysToStart: "開始までの日数",
    dayToStart: "開始まで1日",
    live: "実施中",
    programWindow: "研修期間",
    mailSubject: "JICA大カイロ交通戦略本邦研修 - 連絡事項",
    mailPeriod: "期間",
    mailName: "氏名",
    mailOrganization: "所属",
    mailEmail: "メール",
    mailNote: "連絡事項"
  },
  ar: {
    pageTitle: "تدريب جايكا في اليابان لاستراتيجية النقل في القاهرة الكبرى",
    brand: "تدريب استراتيجية النقل في القاهرة",
    navOverview: "نظرة عامة",
    navAgenda: "البرنامج",
    navRoutes: "مسارات الزيارات",
    navLogistics: "معلومات المشاركين",
    navContact: "التواصل",
    heroEyebrow: "16-28 يونيو 2026 | برنامج اليابان",
    heroTitle: "تدريب جايكا في اليابان لمشروع استراتيجية النقل في القاهرة الكبرى",
    heroText:
      "برنامج عمل لمشروع استراتيجية تطوير البنية التحتية للنقل في منطقة القاهرة الكبرى والمناطق المحيطة، مبني على جدول التدريب الرسمي.",
    openAgenda: "عرض البرنامج",
    printProgram: "طباعة البرنامج",
    factDatesLabel: "فترة البرنامج",
    factDatesValue: "16-28 يونيو 2026",
    factGroupLabel: "الوفد",
    factGroupValue: "15 مشاركا من مشروع استراتيجية النقل في القاهرة الكبرى",
    factBaseLabel: "قاعدة التدريب",
    factBaseValue: "جايكا طوكيو مع زيارات ميدانية في طوكيو وكاناغاوا وتشيبا",
    factFocusLabel: "المحاور",
    factFocusValue: "تخطيط النقل الحضري، TOD، محاور السكك الحديدية، وتطبيقات المدن الذكية",
    purposeKicker: "هدف البرنامج",
    purposeTitle: "تحويل خبرات اليابان في النقل الحضري إلى خيارات عملية للقاهرة الكبرى.",
    purposeText:
      "يجمع البرنامج بين المحاضرات والزيارات الميدانية والنقاشات وورش عمل المشروع. ويركز على التكامل بين استخدامات الأراضي والنقل، وسياسات المناطق الحضرية، والتطوير الموجه بالنقل، وتنمية المحاور، وتشغيل المدن الذكية، وآليات التمويل، وخطة العمل لمشروع استراتيجية النقل في القاهرة.",
    outputsTitle: "المخرجات المتوقعة",
    output1: "فهم مشترك لأدوات التخطيط الحضري وسياسات النقل في اليابان.",
    output2: "دروس عملية من طوكيو ويوكوهاما ومحور توكيو وتسوكوبا إكسبريس وكاشيوا-نو-ها.",
    output3: "ملاحظات نقاش المشروع مع فرق PCKK وجايكا.",
    output4: "ثلاثة عروض فرق تلخص الدروس وأفكار التطبيق.",
    focus1Title: "سياسات المناطق الحضرية",
    focus1Text: "أنظمة التخطيط الوطنية والإقليمية والحضرية في طوكيو.",
    focus2Title: "TOD ومحاور السكك الحديدية",
    focus2Text: "التطوير حول المحطات، نمو الضواحي، وإدارة المناطق بقيادة السكك الحديدية.",
    focus3Title: "التمويل والتنفيذ",
    focus3Text: "التنسيق بين القطاعين العام والخاص، تكامل المحطات، وحالات خفض التكلفة.",
    focus4Title: "تطبيقات المشروع",
    focus4Text: "تربط ورش العمل دروس اليابان بمشروع استراتيجية النقل في القاهرة الكبرى.",
    agendaKicker: "برنامج تفاعلي",
    agendaTitle: "البرنامج اليومي",
    agendaText: "اختر يوما، أو رشح حسب نوع النشاط، أو ابحث عن موقع أو محاضر أو مسار أو موضوع.",
    searchLabel: "بحث في البرنامج",
    searchPlaceholder: "جرب TOD، مقر جايكا، طوكيو، ورشة عمل...",
    filterAll: "الكل",
    filterLectures: "محاضرات",
    filterVisits: "زيارات",
    filterWorkshops: "ورش عمل",
    filterTravel: "انتقال",
    filterLogistics: "تنظيم",
    routesKicker: "مسارات الزيارات",
    routesTitle: "تسلسل التعلم الميداني",
    routesText: "يربط البرنامج موضوعات السياسات داخل القاعة بالممرات الحضرية ومناطق التطوير التي تتم زيارتها.",
    route1Label: "طوكيو",
    route1Title: "الجهات الحكومية وتنسيق المشروع",
    route1Text: "جايكا طوكيو، حكومة طوكيو الحضرية، مقر جايكا، PCKK، والسفارة المصرية في اليابان.",
    route2Label: "محور توكيو",
    route2Title: "تنمية الضواحي بقيادة السكك الحديدية",
    route2Text: "مقر توكيو، وفوتاكو-تاماغاوا TOD، وتاما-بلازا TOD كنماذج لتطوير مناطق المحطات.",
    route3Label: "يوكوهاما",
    route3Title: "تكامل السكك الحديدية والواجهة المائية",
    route3Text: "خط ميناتوميراي، تكامل المحطات مع المباني، وزيارة Yokohama Air Cabin.",
    route4Label: "تشيبا",
    route4Title: "إدارة مناطق المدن الذكية",
    route4Text: "جولة مدينة كاشيوا-نو-ها الذكية ونقاش في مركز مؤتمرات كاشيوا-نو-ها.",
    logisticsKicker: "ملاحظات للمشاركين",
    logisticsTitle: "قائمة التحقق للتنسيق",
    logistics1Title: "فترة السفر",
    logistics1Text: "من المقرر مغادرة القاهرة في 16 يونيو، والوصول إلى طوكيو في 17 يونيو، وبدء رحلة العودة في 27 يونيو.",
    logistics2Title: "قاعدة العمل",
    logistics2Text: "تقام معظم الجلسات في جايكا طوكيو، مع انتقالات مجدولة إلى الوزارات والمشغلين ومواقع الزيارة.",
    logistics3Title: "التحضير",
    logistics3Text: "يرجى إحضار أسئلة المشروع وقضايا تخطيط المحاور وأمثلة من القاهرة الكبرى لاستخدامها في الورش والعروض النهائية.",
    contactKicker: "التنسيق",
    contactTitle: "إعداد رسالة للمشارك",
    contactText: "استخدم هذه الأداة لصياغة ملاحظة سريعة عن حالة السفر والجهة والأسئلة لفريق تنسيق البرنامج.",
    formName: "الاسم",
    formNamePlaceholder: "اسم المشارك",
    formOrg: "الجهة",
    formOrgPlaceholder: "الهيئة أو الإدارة",
    formEmail: "البريد الإلكتروني",
    formNote: "ملاحظة تنسيقية",
    formNotePlaceholder: "حالة السفر أو موضوع الاهتمام أو سؤال المشروع",
    prepareEmail: "إعداد البريد",
    footerTitle: "تدريب جايكا لاستراتيجية النقل في القاهرة الكبرى",
    footerNote: "برنامج تدريب لمرة واحدة، 16-28 يونيو 2026",
    all: "الكل",
    fullProgram: "البرنامج الكامل",
    visibleItems: "عناصر معروضة",
    lectures: "محاضرات",
    siteVisits: "زيارات ميدانية",
    workshops: "ورش عمل",
    noMatchesTitle: "لا توجد عناصر مطابقة",
    noMatchesText: "غير نص البحث أو اختر مرشحا آخر.",
    note: "ملاحظة",
    daysToStart: "يوما حتى البداية",
    dayToStart: "يوم واحد حتى البداية",
    live: "جار الآن",
    programWindow: "فترة البرنامج",
    mailSubject: "تدريب جايكا لاستراتيجية النقل في القاهرة الكبرى - ملاحظة تنسيقية",
    mailPeriod: "الفترة",
    mailName: "الاسم",
    mailOrganization: "الجهة",
    mailEmail: "البريد الإلكتروني",
    mailNote: "ملاحظة تنسيقية"
  }
};

const phraseText = {
  ja: {
    "All day": "終日",
    "June 16-28, 2026": "2026年6月16日-28日",
    "Tue, Jun 16": "6月16日（火）",
    "Wed, Jun 17": "6月17日（水）",
    "Thu, Jun 18": "6月18日（木）",
    "Fri, Jun 19": "6月19日（金）",
    "Sat, Jun 20": "6月20日（土）",
    "Sun, Jun 21": "6月21日（日）",
    "Mon, Jun 22": "6月22日（月）",
    "Tue, Jun 23": "6月23日（火）",
    "Wed, Jun 24": "6月24日（水）",
    "Thu, Jun 25": "6月25日（木）",
    "Fri, Jun 26": "6月26日（金）",
    "Sat, Jun 27": "6月27日（土）",
    "Sun, Jun 28": "6月28日（日）",
    "Travel from Cairo": "カイロ出発",
    "Arrival in Tokyo": "東京到着",
    "Briefing, Orientation, and Kansai Transport Policy": "ブリーフィング、オリエンテーション、関西都市圏交通政策",
    "National Planning Systems and Metropolitan Development": "国土計画制度と都市圏整備",
    "Holiday": "休日",
    "Tokyo Metropolitan Planning and PCKK Workshop": "東京都市圏計画とPCKKワークショップ",
    "Embassy Visit, Tokyu Railway, and TOD Field Learning": "大使館訪問、東急鉄道、TOD視察",
    "JICA Headquarters and Yokohama Transit Development": "JICA本部と横浜交通開発",
    "Tsukuba Express and Kashiwa-no-ha Smart City": "つくばエクスプレスと柏の葉スマートシティ",
    "Reflection, Presentations, and Closing": "振り返り、発表、閉講",
    "Departure from Tokyo": "東京出発",
    "Return to Cairo": "カイロ帰着",
    "Participants depart Cairo and travel via the transit city toward Japan.": "参加者はカイロを出発し、経由地を通って日本へ向かいます。",
    "Participants arrive in Japan from the transit city.": "参加者は経由地から日本に到着します。",
    "Arrival briefing, program orientation, lecture on Kansai metropolitan transport planning, and first workshop.": "来日ブリーフィング、プログラムオリエンテーション、関西都市圏交通計画の講義、初回ワークショップを行います。",
    "National-level land use and transport strategy lectures, capital region planning, discussion, and stay allowance arrangements.": "国レベルの土地利用・交通戦略、首都圏整備計画、討議、滞在費手続きに関する日です。",
    "No formal training sessions are scheduled.": "正式な研修予定はありません。",
    "Urban and transport planning lecture, Tokyo Metropolitan Government visit, PCKK workshop, and networking event.": "都市・交通計画の講義、東京都庁訪問、PCKKワークショップ、懇親会を行います。",
    "Egyptian Embassy visit, Tokyu Railway lecture, and TOD site observations at Futako-Tamagawa and Tama-Plaza.": "在日エジプト大使館訪問、東急鉄道の講義、二子玉川とたまプラーザのTOD視察を行います。",
    "JICA headquarters visit, JICA urban and transport initiatives, Minatomirai Line financing and integrated station development, and Yokohama field visit.": "JICA本部訪問、JICAの都市・交通分野の取り組み、みなとみらい線の資金調達と駅一体開発、横浜視察を行います。",
    "Rail-oriented urban development lecture and Kashiwa-no-ha Smart City field visit.": "鉄道沿線まちづくりの講義と柏の葉スマートシティ視察を行います。",
    "Training reflection, workshop, team presentations, evaluation meeting, and closing ceremony.": "研修の振り返り、ワークショップ、チーム発表、評価会、閉講式を行います。",
    "Participants depart Tokyo toward the transit point.": "参加者は東京を出発し、経由地へ向かいます。",
    "Participants complete the return route to Cairo.": "参加者は経由地からカイロへ戻ります。",
    "Cairo / transit": "カイロ／経由地",
    "Tokyo": "東京",
    "JICA Tokyo 403": "JICA東京403",
    "Tokyo / Kanagawa": "東京／神奈川",
    "Tokyo / Yokohama": "東京／横浜",
    "Tokyo / Chiba": "東京／千葉",
    "Tokyo / transit": "東京／経由地",
    "Transit / Cairo": "経由地／カイロ",
    "Cairo to Transit Point": "カイロから経由地へ",
    "Travel from Cairo to the transit point.": "カイロから経由地へ移動します。",
    "Arrival: Transit Point to Tokyo": "来日：経由地から東京へ",
    "Arrival route from the transit point to Tokyo.": "経由地から東京へ到着します。",
    "Arrival Briefing": "来日ブリーフィング",
    "Arrival briefing for the training group.": "研修参加者向けの来日ブリーフィング。",
    "JICA Tokyo, Main Building 4F Room 403": "JICA東京 本館4階403号室",
    "Lunch": "昼食",
    "Program Orientation": "プログラムオリエンテーション",
    "Confirm the expected outputs and objectives of the Japan training program, and share basic knowledge on relevant Japanese systems.": "本邦研修の成果と目的を確認し、日本の関連制度に関する基礎知識を共有します。",
    "Masaya Nakano / Li Shuai, PCKK": "中野雅也／李帥、PCKK",
    "Break": "休憩",
    "Transport Planning and Policy in the Kansai Metropolitan Area": "関西都市圏の交通計画と政策",
    "Examples of metropolitan-level transport policies and measures.": "都市圏レベルの交通政策および施策の事例。",
    "Yasuhiro Shiomi, Professor, Department of Civil and Environmental Engineering, Ritsumeikan University": "塩見康博、立命館大学理工学部環境都市工学科 教授",
    "Workshop": "ワークショップ",
    "Form group-work teams and identify key issues for the training program.": "グループワークのチーム分けを行い、研修で扱う主要課題を抽出します。",
    "Location Optimization Act and Urban/Regional Transport Strategy": "立地適正化法と都市・地域総合交通戦略",
    "Examples of national-level land-use planning and policy.": "国レベルの土地利用計画・政策の事例。",
    "MLIT Urban Bureau, Street and Transport Facilities Division / City Planning Division": "国土交通省 都市局 街路交通施設課／都市計画課",
    "Capital Region Development Plan": "首都圏整備計画",
    "Japan's policy direction for capital function relocation and capital region development.": "首都機能移転と首都圏整備に関する日本の方針。",
    "Kyoko Itsuki, Senior Research Officer, Comprehensive Planning Division, MLIT National Spatial Planning and Regional Policy Bureau": "伊月恭子、国土交通省国土政策局総合計画課 専門調査官",
    "Discussion": "ディスカッション",
    "Stay Allowance Withdrawal": "滞在費の引き落とし",
    "Administrative arrangement for stay allowance withdrawal.": "滞在費引き落としのための事務手続き。",
    "Rest Day": "休日",
    "Integrated Urban and Transport Planning for the Capital Region": "首都圏の都市・交通の一体的な計画策定",
    "Planning-system design tailored to regional characteristics.": "地域特性に応じた計画制度設計。",
    "Fumihiko Seta, Associate Professor, Department of Urban Engineering, The University of Tokyo": "瀬田史彦、東京大学大学院工学系研究科都市工学専攻 准教授",
    "JICA Tokyo, Annex 1F Rooms C/D": "JICA東京 別館1階C/D",
    "JICA Tokyo Main Building 4F Room 403 is also waitlisted.": "JICA東京本館4階403号室もキャンセル待ち中です。",
    "Bus Transfer: JICA Tokyo to Tokyo Metropolitan Government": "バス移動：JICA東京から東京都庁へ",
    "Promotion of Tokyo's Comprehensive Transport Policy": "東京都の総合的な交通政策の推進",
    "Examples of transport policies and measures in a major metropolitan area.": "大都市圏における交通政策および施策の推進事例。",
    "Transport Planning Division, Urban Infrastructure Department, Tokyo Metropolitan Government Bureau of Urban Development": "東京都都市整備局 都市基盤部交通企画課",
    "Tokyo Metropolitan Government Building": "東京都庁",
    "Bus Transfer: Tokyo Metropolitan Government to PCKK": "バス移動：東京都庁からPCKKへ",
    "PCKK Visit and Workshop": "PCKK訪問とワークショップ",
    "Discussion on the project with members of the study team.": "調査団員を含めたプロジェクトに関する討議。",
    "PCKK Headquarters": "PCKK本社",
    "Networking Reception": "懇親会",
    "Transfer: PCKK to JICA Tokyo": "移動：PCKKからJICA東京へ",
    "Bus Transfer: JICA Tokyo to the Embassy": "バス移動：JICA東京から大使館へ",
    "Visit to the Egyptian Embassy in Japan": "在日エジプト大使館訪問",
    "Egyptian Embassy in Japan": "在日エジプト大使館",
    "Bus Transfer: Embassy to Tokyu Corporation Headquarters": "バス移動：大使館から東急電鉄本社へ",
    "Den-en-toshi Line and Next-Generation Suburban Town Development": "田園都市線沿線と次世代郊外まちづくり",
    "Promotion of residential land development and town development centered on railway stations.": "鉄道駅を中心とした宅地開発とまちづくりの推進。",
    "Tomoyuki Yamashita / Toshio Kajitani, Tokyu Corporation": "山下智幸／梶谷俊夫、東急電鉄",
    "Tokyu Corporation Headquarters, Shibuya": "東急電鉄本社（渋谷）",
    "Box lunch in the Tokyu meeting room": "東急会議室内で弁当",
    "Bus Transfer: Shibuya to Futako-Tamagawa Station": "バス移動：渋谷から二子玉川駅へ",
    "Futako-Tamagawa TOD Site Visit": "二子玉川TOD視察",
    "Toshio Kajitani, Tokyu Corporation": "梶谷俊夫、東急電鉄",
    "Around Futako-Tamagawa Station, to be confirmed": "二子玉川駅周辺（調整中）",
    "Bus Transfer: Futako-Tamagawa Station to Tama-Plaza Station": "バス移動：二子玉川駅からたまプラーザ駅へ",
    "Kanagawa": "神奈川",
    "Tama-Plaza TOD Site Visit": "たまプラーザTOD視察",
    "This visit may be omitted depending on coordination.": "調整状況により省略される場合があります。",
    "Around Tama-Plaza Station, to be confirmed": "たまプラーザ駅周辺（調整中）",
    "Bus Transfer: Tama-Plaza Station to JICA Tokyo": "バス移動：たまプラーザ駅からJICA東京へ",
    "Bus Transfer: JICA Tokyo to JICA Headquarters": "バス移動：JICA東京からJICA本部へ",
    "JICA Headquarters Visit and Greeting": "JICA本部訪問・挨拶",
    "JICA Headquarters": "JICA本部",
    "The headquarters meeting room reservation is handled separately.": "本部会議室の予約は別途調整されています。",
    "JICA Initiatives in Urban and Transport Fields": "都市・交通分野におけるJICAの取り組み",
    "Misaki Funabashi, JICA Infrastructure Management Department, Urban and Regional Development Group": "船橋岬、JICA社会基盤部 都市・地域開発グループ",
    "Bus Transfer: JICA Headquarters to Shin-Takashima": "バス移動：JICA本部から新高島へ",
    "Development of the Minatomirai Line": "みなとみらい線の整備",
    "Examples of financing schemes through operator coordination, integrated development of stations and surrounding buildings, and project cost reduction.": "事業者との連携による資金調達、駅と周辺建物の一体整備、事業費縮減の事例。",
    "Katsuhiko Hashizume, Director and General Manager of Corporate Management Department, Yokohama Minatomirai Railway Company": "橋詰勝彦、横浜高速鉄道株式会社 取締役経営管理部長",
    "Yokohama Minatomirai Railway meeting room, Shin-Takashima Station": "横浜高速鉄道会議室（新高島駅）",
    "Minatomirai Line and Yokohama Air Cabin Site Visit": "みなとみらい線・Yokohama Air Cabin視察",
    "Ride the Minatomirai Line from Shin-Takashima Station to Minatomirai Station, move toward Sakuragicho Station, ride the Yokohama Air Cabin, and board the bus near World Porters.": "新高島駅からみなとみらい駅まで乗車し、桜木町方面へ移動、Yokohama Air Cabinに乗車後、ワールドポーターズ付近でバスに乗車します。",
    "Katsuhiko Hashizume, Yokohama Minatomirai Railway Company": "橋詰勝彦、横浜高速鉄道株式会社",
    "Minatomirai area": "みなとみらい周辺",
    "Bus Transfer: Minatomirai Area to JICA Tokyo": "バス移動：みなとみらい周辺からJICA東京へ",
    "Town Development along the Tsukuba Express Line": "つくばエクスプレス沿線のまちづくり",
    "Integrated promotion of residential land development and railway business along the Tsukuba Express Line, with development of a research and academic city.": "つくばエクスプレス沿線における宅地開発と鉄道事業の一体的推進、研究学園都市の開発。",
    "Takehito Ito / Kenichi Kojima": "伊藤豪人／小島謙一",
    "JICA Tokyo, Main Building 4F Room 403, online": "JICA東京 本館4階403号室、オンライン",
    "The JICA Tokyo room has limited online-meeting equipment, mainly a web-conference microphone and speaker.": "JICA東京の会場はオンライン設備が限られており、主にウェブ会議用マイクスピーカーのみです。",
    "Bus Transfer: JICA Tokyo to Kashiwa-no-ha Campus Station": "バス移動：JICA東京から柏の葉キャンパス駅へ",
    "Chiba": "千葉",
    "Lunch, TBD": "昼食（未定）",
    "Kashiwa-no-ha Smart City Site Visit": "柏の葉スマートシティ視察",
    "Smart-city tour of about 120 minutes, followed by 30-60 minutes of Q&A and discussion with Mitsui Fudosan staff.": "約120分のスマートシティツアーの後、三井不動産社員との質疑応答・座談会を30-60分行います。",
    "Toshiyuki Yamanaka / Hideaki Dazai, Mitsui Fudosan": "山中俊幸／太宰秀章、三井不動産",
    "Kashiwa-no-ha Conference Center": "柏の葉カンファレンスセンター",
    "Bus Transfer: Kashiwa-no-ha to JICA Tokyo": "バス移動：柏の葉からJICA東京へ",
    "Training Reflection": "研修振り返り",
    "Review lecture content, key questions, and main discussion points from the program.": "講義内容、主要な質疑、ディスカッションの要点を振り返ります。",
    "Discuss the issues set on the first day of training and prepare presentations based on lessons learned during the program.": "研修初日に設定した課題について、研修での学びを踏まえて議論し、発表準備を行います。",
    "Training Output Sharing": "研修成果共有",
    "Three teams present for 10 minutes each, with 60 minutes including interpretation, followed by 30 minutes of Q&A and discussion.": "3チームが各10分発表し、通訳を含め60分、その後30分の質疑応答・討議を行います。",
    "Evaluation Meeting and Closing Ceremony": "評価会・閉講式",
    "Departure: Tokyo to Transit Point": "離日：東京から経由地へ",
    "Departure from Tokyo to the transit point.": "東京から経由地へ出発します。",
    "Transit Point to Cairo": "経由地からカイロへ",
    "Return from the transit point to Cairo.": "経由地からカイロへ戻ります。",
    "Lecture": "講義",
    "Briefing": "ブリーフィング",
    "Visit": "視察",
    "Workshop": "ワークショップ",
    "Discussion": "討議",
    "Presentation": "発表",
    "Closing": "閉講",
    "Travel": "移動",
    "Transit": "移動",
    "Arrival": "到着",
    "Departure": "出発",
    "Meal": "食事",
    "Break": "休憩",
    "Admin": "事務",
    "Holiday": "休日",
    "Reception": "懇親会"
  },
  ar: {
    "All day": "طوال اليوم",
    "June 16-28, 2026": "16-28 يونيو 2026",
    "Tue, Jun 16": "الثلاثاء، 16 يونيو",
    "Wed, Jun 17": "الأربعاء، 17 يونيو",
    "Thu, Jun 18": "الخميس، 18 يونيو",
    "Fri, Jun 19": "الجمعة، 19 يونيو",
    "Sat, Jun 20": "السبت، 20 يونيو",
    "Sun, Jun 21": "الأحد، 21 يونيو",
    "Mon, Jun 22": "الاثنين، 22 يونيو",
    "Tue, Jun 23": "الثلاثاء، 23 يونيو",
    "Wed, Jun 24": "الأربعاء، 24 يونيو",
    "Thu, Jun 25": "الخميس، 25 يونيو",
    "Fri, Jun 26": "الجمعة، 26 يونيو",
    "Sat, Jun 27": "السبت، 27 يونيو",
    "Sun, Jun 28": "الأحد، 28 يونيو",
    "Travel from Cairo": "السفر من القاهرة",
    "Arrival in Tokyo": "الوصول إلى طوكيو",
    "Briefing, Orientation, and Kansai Transport Policy": "إحاطة وتعريف وسياسات النقل في كانساي",
    "National Planning Systems and Metropolitan Development": "أنظمة التخطيط الوطنية والتنمية الحضرية",
    "Holiday": "يوم راحة",
    "Tokyo Metropolitan Planning and PCKK Workshop": "تخطيط طوكيو الحضرية وورشة PCKK",
    "Embassy Visit, Tokyu Railway, and TOD Field Learning": "زيارة السفارة وتوكيو للسكك الحديدية والتعلم الميداني حول TOD",
    "JICA Headquarters and Yokohama Transit Development": "مقر جايكا وتطوير النقل في يوكوهاما",
    "Tsukuba Express and Kashiwa-no-ha Smart City": "تسوكوبا إكسبريس ومدينة كاشيوا-نو-ها الذكية",
    "Reflection, Presentations, and Closing": "مراجعة وعروض وختام",
    "Departure from Tokyo": "المغادرة من طوكيو",
    "Return to Cairo": "العودة إلى القاهرة",
    "Participants depart Cairo and travel via the transit city toward Japan.": "يغادر المشاركون القاهرة ويتجهون إلى اليابان عبر مدينة العبور.",
    "Participants arrive in Japan from the transit city.": "يصل المشاركون إلى اليابان من مدينة العبور.",
    "Arrival briefing, program orientation, lecture on Kansai metropolitan transport planning, and first workshop.": "إحاطة الوصول، وتعريف بالبرنامج، ومحاضرة عن تخطيط النقل في منطقة كانساي، وورشة العمل الأولى.",
    "National-level land use and transport strategy lectures, capital region planning, discussion, and stay allowance arrangements.": "محاضرات عن استخدامات الأراضي واستراتيجية النقل على المستوى الوطني، وتخطيط منطقة العاصمة، ونقاشات وترتيبات بدل الإقامة.",
    "No formal training sessions are scheduled.": "لا توجد جلسات تدريب رسمية مقررة.",
    "Urban and transport planning lecture, Tokyo Metropolitan Government visit, PCKK workshop, and networking event.": "محاضرة عن التخطيط الحضري والنقل، وزيارة حكومة طوكيو، وورشة PCKK، وفعالية تواصل.",
    "Egyptian Embassy visit, Tokyu Railway lecture, and TOD site observations at Futako-Tamagawa and Tama-Plaza.": "زيارة السفارة المصرية، ومحاضرة توكيو للسكك الحديدية، وملاحظات ميدانية في فوتاكو-تاماغاوا وتاما-بلازا.",
    "JICA headquarters visit, JICA urban and transport initiatives, Minatomirai Line financing and integrated station development, and Yokohama field visit.": "زيارة مقر جايكا، ومبادرات جايكا في المدن والنقل، وتمويل خط ميناتوميراي وتطوير المحطات المتكامل، وزيارة ميدانية في يوكوهاما.",
    "Rail-oriented urban development lecture and Kashiwa-no-ha Smart City field visit.": "محاضرة عن التنمية الحضرية المرتبطة بالسكك الحديدية وزيارة ميدانية لمدينة كاشيوا-نو-ها الذكية.",
    "Training reflection, workshop, team presentations, evaluation meeting, and closing ceremony.": "مراجعة التدريب، وورشة عمل، وعروض الفرق، واجتماع تقييم، وحفل ختامي.",
    "Participants depart Tokyo toward the transit point.": "يغادر المشاركون طوكيو باتجاه نقطة العبور.",
    "Participants complete the return route to Cairo.": "يكمل المشاركون رحلة العودة إلى القاهرة.",
    "Cairo / transit": "القاهرة / عبور",
    "Tokyo": "طوكيو",
    "JICA Tokyo 403": "جايكا طوكيو 403",
    "Tokyo / Kanagawa": "طوكيو / كاناغاوا",
    "Tokyo / Yokohama": "طوكيو / يوكوهاما",
    "Tokyo / Chiba": "طوكيو / تشيبا",
    "Tokyo / transit": "طوكيو / عبور",
    "Transit / Cairo": "عبور / القاهرة",
    "Cairo to Transit Point": "من القاهرة إلى نقطة العبور",
    "Travel from Cairo to the transit point.": "السفر من القاهرة إلى نقطة العبور.",
    "Arrival: Transit Point to Tokyo": "الوصول: من نقطة العبور إلى طوكيو",
    "Arrival route from the transit point to Tokyo.": "مسار الوصول من نقطة العبور إلى طوكيو.",
    "Arrival Briefing": "إحاطة الوصول",
    "Arrival briefing for the training group.": "إحاطة الوصول لمجموعة التدريب.",
    "JICA Tokyo, Main Building 4F Room 403": "جايكا طوكيو، المبنى الرئيسي، الطابق الرابع، قاعة 403",
    "Lunch": "غداء",
    "Program Orientation": "تعريف بالبرنامج",
    "Confirm the expected outputs and objectives of the Japan training program, and share basic knowledge on relevant Japanese systems.": "تأكيد مخرجات وأهداف برنامج التدريب في اليابان ومشاركة معلومات أساسية عن الأنظمة اليابانية ذات الصلة.",
    "Masaya Nakano / Li Shuai, PCKK": "ماسايا ناكانو / لي شواي، PCKK",
    "Break": "استراحة",
    "Transport Planning and Policy in the Kansai Metropolitan Area": "تخطيط وسياسات النقل في منطقة كانساي الحضرية",
    "Examples of metropolitan-level transport policies and measures.": "أمثلة على سياسات وإجراءات النقل على مستوى المناطق الحضرية.",
    "Yasuhiro Shiomi, Professor, Department of Civil and Environmental Engineering, Ritsumeikan University": "ياسوهيرو شيومي، أستاذ، جامعة ريتسوميكان",
    "Workshop": "ورشة عمل",
    "Form group-work teams and identify key issues for the training program.": "تشكيل فرق العمل الجماعي وتحديد القضايا الرئيسية للبرنامج.",
    "Location Optimization Act and Urban/Regional Transport Strategy": "قانون تحسين المواقع واستراتيجية النقل الحضري والإقليمي",
    "Examples of national-level land-use planning and policy.": "أمثلة على تخطيط وسياسات استخدامات الأراضي على المستوى الوطني.",
    "MLIT Urban Bureau, Street and Transport Facilities Division / City Planning Division": "وزارة الأراضي والبنية التحتية والنقل والسياحة، مكتب المدن",
    "Capital Region Development Plan": "خطة تطوير منطقة العاصمة",
    "Japan's policy direction for capital function relocation and capital region development.": "اتجاه سياسة اليابان لنقل وظائف العاصمة وتنمية منطقة العاصمة.",
    "Kyoko Itsuki, Senior Research Officer, Comprehensive Planning Division, MLIT National Spatial Planning and Regional Policy Bureau": "كيوكو إيتسوكي، وزارة الأراضي والبنية التحتية والنقل والسياحة",
    "Discussion": "نقاش",
    "Stay Allowance Withdrawal": "سحب بدل الإقامة",
    "Administrative arrangement for stay allowance withdrawal.": "إجراء إداري لسحب بدل الإقامة.",
    "Rest Day": "يوم راحة",
    "Integrated Urban and Transport Planning for the Capital Region": "التخطيط المتكامل للمدن والنقل في منطقة العاصمة",
    "Planning-system design tailored to regional characteristics.": "تصميم نظام تخطيط ملائم للخصائص الإقليمية.",
    "Fumihiko Seta, Associate Professor, Department of Urban Engineering, The University of Tokyo": "فوميهكو سيتا، أستاذ مشارك، جامعة طوكيو",
    "JICA Tokyo, Annex 1F Rooms C/D": "جايكا طوكيو، الملحق، الطابق الأول، قاعتان C/D",
    "JICA Tokyo Main Building 4F Room 403 is also waitlisted.": "قاعة 403 في المبنى الرئيسي لجايكا طوكيو على قائمة الانتظار أيضا.",
    "Bus Transfer: JICA Tokyo to Tokyo Metropolitan Government": "انتقال بالحافلة: جايكا طوكيو إلى حكومة طوكيو الحضرية",
    "Promotion of Tokyo's Comprehensive Transport Policy": "تعزيز سياسة النقل الشاملة في طوكيو",
    "Examples of transport policies and measures in a major metropolitan area.": "أمثلة على سياسات وإجراءات النقل في منطقة حضرية كبرى.",
    "Transport Planning Division, Urban Infrastructure Department, Tokyo Metropolitan Government Bureau of Urban Development": "إدارة تخطيط النقل، حكومة طوكيو الحضرية",
    "Tokyo Metropolitan Government Building": "مبنى حكومة طوكيو الحضرية",
    "Bus Transfer: Tokyo Metropolitan Government to PCKK": "انتقال بالحافلة: حكومة طوكيو إلى PCKK",
    "PCKK Visit and Workshop": "زيارة PCKK وورشة عمل",
    "Discussion on the project with members of the study team.": "نقاش حول المشروع مع أعضاء فريق الدراسة.",
    "PCKK Headquarters": "مقر PCKK",
    "Networking Reception": "استقبال للتعارف",
    "Transfer: PCKK to JICA Tokyo": "انتقال: PCKK إلى جايكا طوكيو",
    "Bus Transfer: JICA Tokyo to the Embassy": "انتقال بالحافلة: جايكا طوكيو إلى السفارة",
    "Visit to the Egyptian Embassy in Japan": "زيارة السفارة المصرية في اليابان",
    "Egyptian Embassy in Japan": "السفارة المصرية في اليابان",
    "Bus Transfer: Embassy to Tokyu Corporation Headquarters": "انتقال بالحافلة: السفارة إلى مقر شركة توكيو",
    "Den-en-toshi Line and Next-Generation Suburban Town Development": "خط دين-إن-توشي وتطوير الضواحي من الجيل التالي",
    "Promotion of residential land development and town development centered on railway stations.": "تعزيز تطوير الأراضي السكنية وتنمية المدن حول محطات السكك الحديدية.",
    "Tomoyuki Yamashita / Toshio Kajitani, Tokyu Corporation": "تومويوكي ياماشيتا / توشيو كاجيتاني، شركة توكيو",
    "Tokyu Corporation Headquarters, Shibuya": "مقر شركة توكيو، شيبويا",
    "Box lunch in the Tokyu meeting room": "غداء صندوقي في قاعة اجتماعات توكيو",
    "Bus Transfer: Shibuya to Futako-Tamagawa Station": "انتقال بالحافلة: شيبويا إلى محطة فوتاكو-تاماغاوا",
    "Futako-Tamagawa TOD Site Visit": "زيارة موقع TOD في فوتاكو-تاماغاوا",
    "Toshio Kajitani, Tokyu Corporation": "توشيو كاجيتاني، شركة توكيو",
    "Around Futako-Tamagawa Station, to be confirmed": "حول محطة فوتاكو-تاماغاوا، يحدد لاحقا",
    "Bus Transfer: Futako-Tamagawa Station to Tama-Plaza Station": "انتقال بالحافلة: فوتاكو-تاماغاوا إلى تاما-بلازا",
    "Kanagawa": "كاناغاوا",
    "Tama-Plaza TOD Site Visit": "زيارة موقع TOD في تاما-بلازا",
    "This visit may be omitted depending on coordination.": "قد تلغى هذه الزيارة حسب التنسيق.",
    "Around Tama-Plaza Station, to be confirmed": "حول محطة تاما-بلازا، يحدد لاحقا",
    "Bus Transfer: Tama-Plaza Station to JICA Tokyo": "انتقال بالحافلة: تاما-بلازا إلى جايكا طوكيو",
    "Bus Transfer: JICA Tokyo to JICA Headquarters": "انتقال بالحافلة: جايكا طوكيو إلى مقر جايكا",
    "JICA Headquarters Visit and Greeting": "زيارة مقر جايكا والتحية",
    "JICA Headquarters": "مقر جايكا",
    "The headquarters meeting room reservation is handled separately.": "يتم تنسيق حجز قاعة الاجتماع في المقر بشكل منفصل.",
    "JICA Initiatives in Urban and Transport Fields": "مبادرات جايكا في مجالي المدن والنقل",
    "Misaki Funabashi, JICA Infrastructure Management Department, Urban and Regional Development Group": "ميساكي فوناباشي، جايكا",
    "Bus Transfer: JICA Headquarters to Shin-Takashima": "انتقال بالحافلة: مقر جايكا إلى شين-تاكاشيما",
    "Development of the Minatomirai Line": "تطوير خط ميناتوميراي",
    "Examples of financing schemes through operator coordination, integrated development of stations and surrounding buildings, and project cost reduction.": "أمثلة على آليات التمويل من خلال التنسيق مع المشغلين، والتطوير المتكامل للمحطات والمباني المحيطة، وخفض تكلفة المشروع.",
    "Katsuhiko Hashizume, Director and General Manager of Corporate Management Department, Yokohama Minatomirai Railway Company": "كاتسوهيكو هاشيزومي، شركة يوكوهاما ميناتوميراي للسكك الحديدية",
    "Yokohama Minatomirai Railway meeting room, Shin-Takashima Station": "قاعة اجتماعات يوكوهاما ميناتوميراي، محطة شين-تاكاشيما",
    "Minatomirai Line and Yokohama Air Cabin Site Visit": "زيارة خط ميناتوميراي وYokohama Air Cabin",
    "Ride the Minatomirai Line from Shin-Takashima Station to Minatomirai Station, move toward Sakuragicho Station, ride the Yokohama Air Cabin, and board the bus near World Porters.": "ركوب خط ميناتوميراي من شين-تاكاشيما إلى ميناتوميراي، ثم التحرك نحو ساكوراغيتشو وركوب Yokohama Air Cabin ثم ركوب الحافلة قرب World Porters.",
    "Katsuhiko Hashizume, Yokohama Minatomirai Railway Company": "كاتسوهيكو هاشيزومي، شركة يوكوهاما ميناتوميراي",
    "Minatomirai area": "منطقة ميناتوميراي",
    "Bus Transfer: Minatomirai Area to JICA Tokyo": "انتقال بالحافلة: ميناتوميراي إلى جايكا طوكيو",
    "Town Development along the Tsukuba Express Line": "تنمية المدن على امتداد خط تسوكوبا إكسبريس",
    "Integrated promotion of residential land development and railway business along the Tsukuba Express Line, with development of a research and academic city.": "تعزيز متكامل لتطوير الأراضي السكنية وأعمال السكك الحديدية على امتداد تسوكوبا إكسبريس مع تطوير مدينة بحثية وأكاديمية.",
    "Takehito Ito / Kenichi Kojima": "تاكيهيتو إيتو / كينيتشي كوجيما",
    "JICA Tokyo, Main Building 4F Room 403, online": "جايكا طوكيو، المبنى الرئيسي، الطابق الرابع، قاعة 403، عبر الإنترنت",
    "The JICA Tokyo room has limited online-meeting equipment, mainly a web-conference microphone and speaker.": "تتوفر في القاعة معدات محدودة للاجتماعات عبر الإنترنت، أساسا ميكروفون وسماعة للمؤتمرات.",
    "Bus Transfer: JICA Tokyo to Kashiwa-no-ha Campus Station": "انتقال بالحافلة: جايكا طوكيو إلى محطة كاشيوا-نو-ها كامبس",
    "Chiba": "تشيبا",
    "Lunch, TBD": "غداء، يحدد لاحقا",
    "Kashiwa-no-ha Smart City Site Visit": "زيارة مدينة كاشيوا-نو-ها الذكية",
    "Smart-city tour of about 120 minutes, followed by 30-60 minutes of Q&A and discussion with Mitsui Fudosan staff.": "جولة في المدينة الذكية لمدة نحو 120 دقيقة، يليها 30-60 دقيقة للأسئلة والنقاش مع موظفي ميتسوي فودوسان.",
    "Toshiyuki Yamanaka / Hideaki Dazai, Mitsui Fudosan": "توشيوكي ياماناكا / هيداكي دازاي، ميتسوي فودوسان",
    "Kashiwa-no-ha Conference Center": "مركز مؤتمرات كاشيوا-نو-ها",
    "Bus Transfer: Kashiwa-no-ha to JICA Tokyo": "انتقال بالحافلة: كاشيوا-نو-ها إلى جايكا طوكيو",
    "Training Reflection": "مراجعة التدريب",
    "Review lecture content, key questions, and main discussion points from the program.": "مراجعة محتوى المحاضرات والأسئلة الرئيسية ونقاط النقاش.",
    "Discuss the issues set on the first day of training and prepare presentations based on lessons learned during the program.": "مناقشة القضايا المحددة في اليوم الأول وإعداد العروض استنادا إلى الدروس المستفادة.",
    "Training Output Sharing": "عرض مخرجات التدريب",
    "Three teams present for 10 minutes each, with 60 minutes including interpretation, followed by 30 minutes of Q&A and discussion.": "تقدم ثلاثة فرق لمدة 10 دقائق لكل فريق، بإجمالي 60 دقيقة مع الترجمة، ثم 30 دقيقة للأسئلة والنقاش.",
    "Evaluation Meeting and Closing Ceremony": "اجتماع التقييم وحفل الختام",
    "Departure: Tokyo to Transit Point": "المغادرة: طوكيو إلى نقطة العبور",
    "Departure from Tokyo to the transit point.": "المغادرة من طوكيو إلى نقطة العبور.",
    "Transit Point to Cairo": "من نقطة العبور إلى القاهرة",
    "Return from the transit point to Cairo.": "العودة من نقطة العبور إلى القاهرة.",
    "Lecture": "محاضرة",
    "Briefing": "إحاطة",
    "Visit": "زيارة",
    "Workshop": "ورشة عمل",
    "Discussion": "نقاش",
    "Presentation": "عرض",
    "Closing": "ختام",
    "Travel": "سفر",
    "Transit": "انتقال",
    "Arrival": "وصول",
    "Departure": "مغادرة",
    "Meal": "وجبة",
    "Break": "استراحة",
    "Admin": "إداري",
    "Holiday": "راحة",
    "Reception": "استقبال"
  }
};

function init() {
  if (!uiText[state.lang]) state.lang = "en";
  applyLanguage();
  renderTabs();
  renderAgenda();
  updateCountdown();
  window.setInterval(updateCountdown, 60 * 60 * 1000);
  document.querySelector("#mailBtn").addEventListener("click", prepareEmail);
  searchInput?.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderAgenda();
  });
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      renderAgenda();
    });
  });
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("trainingLang", state.lang);
      applyLanguage();
      renderTabs();
      renderAgenda();
      updateCountdown();
    });
  });
  printBtn?.addEventListener("click", () => window.print());
}

function renderTabs() {
  const allButton = `
    <button type="button" role="tab" aria-selected="true" class="active" data-day="-1">
      <span>${escapeHTML(t("all"))}</span>
      <strong>${escapeHTML(t("fullProgram"))}</strong>
    </button>
  `;

  tabs.innerHTML =
    allButton +
    agenda
      .map(
        (day, index) => `
          <button type="button" role="tab" aria-selected="false" data-day="${index}">
            <span>${escapeHTML(tx(day.date))}</span>
            <strong>${escapeHTML(tx(day.theme))}</strong>
          </button>
        `
      )
      .join("");

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-day]");
    if (!button) return;
    const index = Number(button.dataset.day);
    state.selectedDay = index;
    document.querySelectorAll(".day-tabs button").forEach((item) => {
      item.classList.toggle("active", item === button);
      item.setAttribute("aria-selected", item === button ? "true" : "false");
    });
    renderAgenda();
  });
}

function renderAgenda() {
  const sourceDays = state.selectedDay === -1 ? agenda : [agenda[state.selectedDay]];
  const visibleDays = sourceDays
    .map((day) => ({
      ...day,
      sessions: day.sessions.filter((session) => matchesFilters(day, session))
    }))
    .filter(matchesDay);

  renderStats(visibleDays);

  if (!visibleDays.length) {
    panel.innerHTML = renderEmptyState();
    return;
  }

  panel.innerHTML = visibleDays.map(renderDaySection).join("");
}

function matchesFilters(day, session) {
  const activeTypes = filterGroups[state.filter] || [];
  const matchesType = activeTypes.length === 0 || activeTypes.includes(session.type);
  const haystack = [
    session.title,
    tx(session.title),
    session.body,
    tx(session.body),
    session.lead,
    tx(session.lead),
    session.place,
    tx(session.place),
    session.type,
    tx(session.type),
    session.note,
    tx(session.note),
    day.theme,
    tx(day.theme),
    day.summary,
    tx(day.summary),
    day.location
    , tx(day.location)
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  const matchesQuery = !state.query || haystack.includes(state.query);
  return matchesType && matchesQuery;
}

function matchesDay(day) {
  if (day.sessions.length) return true;
  return (
    state.query &&
    [day.theme, tx(day.theme), day.summary, tx(day.summary), day.location, tx(day.location)]
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
      .includes(state.query)
  );
}

function renderStats(days) {
  if (!stats) return;
  const sessions = days.flatMap((day) => day.sessions);
  const counts = sessions.reduce(
    (total, session) => {
      const category = getTypeCategory(session.type);
      total[category] = (total[category] || 0) + 1;
      return total;
    },
    {}
  );

  stats.innerHTML = `
    <article><strong>${sessions.length}</strong><span>${escapeHTML(t("visibleItems"))}</span></article>
    <article><strong>${counts.lecture || 0}</strong><span>${escapeHTML(t("lectures"))}</span></article>
    <article><strong>${counts.visit || 0}</strong><span>${escapeHTML(t("siteVisits"))}</span></article>
    <article><strong>${counts.workshop || 0}</strong><span>${escapeHTML(t("workshops"))}</span></article>
  `;
}

function renderDaySection(day) {
  return `
    <section class="day-section">
      <div class="agenda-summary">
        <div>
          <p>${escapeHTML(tx(day.date))}</p>
          <h3>${escapeHTML(tx(day.theme))}</h3>
          <span>${escapeHTML(tx(day.summary))}</span>
        </div>
        <strong>${escapeHTML(tx(day.location || course.period))}</strong>
      </div>
      <div class="session-list">
        ${day.sessions.map(renderSession).join("")}
      </div>
    </section>
  `;
}

function renderSession(session) {
  const category = getTypeCategory(session.type);
  const detail = [
    session.body ? `<p>${escapeHTML(tx(session.body))}</p>` : "",
    session.note ? `<p class="session-notes">${escapeHTML(t("note"))}: ${escapeHTML(tx(session.note))}</p>` : "",
    session.lead || session.place
      ? `<div class="session-meta">${[session.lead, session.place].filter(Boolean).map(tx).map(escapeHTML).join(" | ")}</div>`
      : ""
  ].join("");

  return `
    <article class="session-card ${category}">
      <div class="session-time">${escapeHTML(tx(session.time))}</div>
      <div class="session-main">
        <div class="session-title-row">
          <h4>${escapeHTML(tx(session.title))}</h4>
          <span class="session-type">${escapeHTML(tx(session.type))}</span>
        </div>
        ${detail}
      </div>
    </article>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state">
      <h3>${escapeHTML(t("noMatchesTitle"))}</h3>
      <p>${escapeHTML(t("noMatchesText"))}</p>
    </div>
  `;
}

function getTypeCategory(type) {
  return typeCategories[type] || "logistics";
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function applyLanguage() {
  const isArabic = state.lang === "ar";
  document.documentElement.lang = state.lang;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isArabic);
  document.title = t("pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function t(key) {
  return uiText[state.lang]?.[key] || uiText.en[key] || key;
}

function tx(value) {
  if (!value) return "";
  return phraseText[state.lang]?.[value] || value;
}

function updateCountdown() {
  const now = new Date();
  const diff = eventStart.getTime() - now.getTime();

  if (diff <= 0) {
    countdownValue.textContent = t("live");
    countdownLabel.textContent = t("programWindow");
    return;
  }

  const days = Math.ceil(diff / 86400000);
  countdownValue.textContent = days;
  countdownLabel.textContent = days === 1 ? t("dayToStart") : t("daysToStart");
}

function prepareEmail() {
  const form = document.querySelector(".interest-form");
  const data = new FormData(form);
  const subject = encodeURIComponent(t("mailSubject"));
  const body = encodeURIComponent(
    [
      `${t("mailPeriod")}: ${tx(course.period)}`,
      "",
      `${t("mailName")}: ${data.get("name") || ""}`,
      `${t("mailOrganization")}: ${data.get("organization") || ""}`,
      `${t("mailEmail")}: ${data.get("email") || ""}`,
      "",
      `${t("mailNote")}:`,
      data.get("message") || ""
    ].join("\n")
  );
  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

init();
