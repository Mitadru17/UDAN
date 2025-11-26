module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/contexts/language-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("en");
    const toggleLanguage = ()=>{
        setLanguage((prev)=>prev === "en" ? "hi" : "en");
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            toggleLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/contexts/language-context.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
const translations = {
    en: {
        // Navbar
        "nav.home": "Home",
        "nav.report": "Report",
        "nav.checkSafety": "Check Safety",
        "nav.map": "Map",
        "nav.emergency": "Emergency",
        "nav.roadSafety": "Road Safety",
        "nav.waterSafety": "Water Safety",
        "nav.healthSafety": "Health Safety",
        "nav.dashboard": "Dashboard",
        "nav.community": "Community",
        "nav.chatbot": "AI Assistant",
        // Hero Section
        "hero.badge": "AI-Powered Disaster Aid",
        "hero.title": "UDAN – Uttarakhand Disaster Aid Network",
        "hero.subtitle": "AI support when help is far",
        "hero.checkSafetyBtn": "Check Safety Now",
        "hero.reportIssueBtn": "Report Issue",
        // Key Safety Services
        "services.title": "Key Safety Services",
        "services.roadSafety": "Road Safety",
        "services.roadSafetyDesc": "Check for road blockages or travel advisories in real-time.",
        "services.waterSafety": "Water Safety",
        "services.waterSafetyDesc": "Get the latest alerts on flood levels and water contamination.",
        "services.healthHelp": "Health Help",
        "services.healthHelpDesc": "Find the nearest medical aid centers and essential health guidance.",
        // Footer
        "footer.aboutUs": "About Us",
        "footer.contact": "Contact",
        "footer.faq": "FAQ",
        "footer.privacyPolicy": "Privacy Policy",
        "footer.copyright": "© 2024 Powered by UDAN Network. All rights reserved.",
        // Buttons
        "btn.learnMore": "Learn More",
        "btn.getStarted": "Get Started",
        "btn.openDashboard": "Open UDAN Dashboard",
        "btn.emergencyHelp": "Emergency Help",
        "btn.goToRoadSafety": "Go to Road Safety",
        "btn.goToWaterSafety": "Go to Water Safety",
        "btn.goToHealthSafety": "Go to Health Safety",
        // Three Pillars Section
        "pillars.title": "Three Safety Pillars",
        "pillars.subtitle": "Comprehensive protection for your community",
        "pillars.roadTitle": "Road Safety",
        "pillars.roadDesc": "Detect landslides, road cracks, blocked paths, and collapsing roads before they become dangerous.",
        "pillars.waterTitle": "Water Safety",
        "pillars.waterDesc": "Check water quality, identify contamination, and get guidance for safe drinking water in schools and villages.",
        "pillars.healthTitle": "Health Safety",
        "pillars.healthDesc": "Get first-aid guidance for injuries, burns, falls, and bites. Quick help when medical access is limited.",
        // Why UDAN Section
        "why.title": "Why UDAN?",
        "why.subtitle": "Built for the unique challenges of Uttarakhand",
        "why.landslideTitle": "Landslide Prone Region",
        "why.landslideDesc": "Hills and mountains make roads vulnerable. Get real-time safety updates and alternative routes.",
        "why.waterTitle": "Water Scarcity & Contamination",
        "why.waterDesc": "Monsoons bring contamination. AI helps identify unsafe water and provides purification guidance.",
        "why.healthTitle": "Remote Health Access",
        "why.healthDesc": "Medical facilities are far. First-aid guidance helps until professional help arrives.",
        // How It Works Section
        "howItWorks.title": "How It Works",
        "howItWorks.subtitle": "Simple steps to get safety guidance",
        "howItWorks.step1": "1. Capture",
        "howItWorks.step1Desc": "Take a photo or describe your situation",
        "howItWorks.step2": "2. AI Analysis",
        "howItWorks.step2Desc": "Our AI analyzes the risk level",
        "howItWorks.step3": "3. Get Guidance",
        "howItWorks.step3Desc": "Receive actionable safety steps",
        "howItWorks.step4": "4. Track & Share",
        "howItWorks.step4Desc": "Reports appear on the UDAN Dashboard",
        // Road Safety Page
        "road.title": "Road Safety & Hazard Detection",
        "road.subtitle": "AI-powered road analysis and landslide detection",
        "road.uploadTitle": "Upload Road Image for Analysis",
        "road.uploadDesc": "Get instant AI assessment of road conditions and potential hazards",
        "road.analyzing": "Analyzing Road Conditions...",
        "road.analyzeBtn": "Analyze Road Safety",
        "road.guidelinesTitle": "Upload Guidelines",
        "road.guidelinesDesc": "Examples for accurate road assessment",
        "road.goodExamples": "Good Examples",
        "road.badExamples": "Avoid These",
        "road.landslides": "Landslides & Rockfalls",
        "road.landslidesDesc": "Clear photos showing debris, rocks, or soil blocking the road",
        "road.cracks": "Road Cracks & Damage",
        "road.cracksDesc": "Visible cracks, potholes, or damaged road surfaces",
        "road.blocked": "Blocked Paths",
        "road.blockedDesc": "Roads blocked by fallen trees, vehicles, or obstacles",
        "road.erosion": "Erosion & Slopes",
        "road.erosionDesc": "Road edges eroding or unstable slopes near roads",
        "road.blurry": "Blurry Images",
        "road.blurryDesc": "Out of focus or motion-blurred photos reduce accuracy",
        "road.unrelated": "Unrelated Content",
        "road.unrelatedDesc": "Selfies, landscapes, or images without visible road conditions",
        "road.dark": "Too Dark/Bright",
        "road.darkDesc": "Ensure proper lighting - avoid night shots without flash",
        "road.distant": "Distant Views",
        "road.distantDesc": "Get closer to show details clearly - avoid far-away shots",
        "road.safetyTips": "🚗 Road Safety Tips",
        "road.tip1": "Always check weather forecasts before mountain travel",
        "road.tip2": "Avoid traveling during heavy rainfall or monsoon season",
        "road.tip3": "Keep emergency numbers saved (108, 1070)",
        "road.tip4": "Maintain safe distance from cliff edges and unstable slopes",
        "road.tip5": "Report road hazards immediately to local authorities",
        "road.recentReports": "Recent Road Reports",
        "road.noReports": "No road reports yet. Be the first to contribute!",
        "road.hazardsTitle": "Nearby Road Hazards",
        "road.safetyTitle": "Safety Centers & Help Points",
        // Water Safety Page
        "water.title": "Water Safety",
        "water.subtitle": "AI-powered water quality analysis and contamination detection",
        "water.uploadTitle": "Upload Water Image for Analysis",
        "water.uploadDesc": "Get instant AI assessment of water quality and purity",
        "water.analyzing": "Analyzing Water Quality...",
        "water.analyzeBtn": "Analyze Water Safety",
        "water.guidelinesTitle": "Upload Guidelines",
        "water.guidelinesDesc": "Examples for accurate water assessment",
        "water.goodExamples": "Good Examples",
        "water.badExamples": "Avoid These",
        "water.containers": "Water Containers",
        "water.containersDesc": "Clear glass/container showing water color and clarity",
        "water.tanks": "Water Tanks & Storage",
        "water.tanksDesc": "Photos of water tanks, pipes, or storage showing condition",
        "water.sources": "Water Sources",
        "water.sourcesDesc": "Wells, taps, or natural sources like streams and springs",
        "water.contamination": "Visible Contamination",
        "water.contaminationDesc": "Discolored, muddy, or contaminated water samples",
        "water.noVisible": "No Water Visible",
        "water.noVisibleDesc": "Empty containers or images where water isn't clearly visible",
        "water.poorLight": "Poor Lighting",
        "water.poorLightDesc": "Too dark or backlit - can't see water color/clarity",
        "water.reflective": "Reflective Containers",
        "water.reflectiveDesc": "Shiny metal containers that hide water appearance",
        "water.treated": "Treated Water Products",
        "water.treatedDesc": "Bottled water or packaged drinks - these are pre-treated",
        "water.safetyTips": "💧 Water Safety Tips",
        "water.tip1": "Always boil water for at least 5 minutes before drinking",
        "water.tip2": "Use water purification tablets when unsure about water quality",
        "water.tip3": "Store drinking water in clean, covered containers",
        "water.tip4": "Avoid water from unknown sources during monsoon season",
        "water.tip5": "Check for visible sediment, color changes, or unusual smell",
        "water.recentReports": "Recent Water Reports",
        "water.noReports": "No water reports yet. Be the first to contribute!",
        "water.suppliersTitle": "Nearest Water Suppliers",
        // Health Safety Page
        "health.title": "Health & First-Aid Support",
        "health.subtitle": "AI-powered guidance for injuries, burns, and medical emergencies",
        "health.alert": "For serious emergencies, always call 108 immediately.",
        "health.alertDesc": "This tool provides basic first-aid guidance only.",
        "health.uploadTitle": "Get First-Aid Guidance",
        "health.uploadDesc": "Describe your situation or upload a photo for AI assistance",
        "health.tabDescribe": "Describe",
        "health.tabPhoto": "With Photo",
        "health.whatHappened": "What happened?",
        "health.placeholder": "e.g., Child fell and scraped knee, minor bleeding, no broken bones...",
        "health.additionalDetails": "Additional Details (Optional)",
        "health.additionalPlaceholder": "Add any additional context about the injury...",
        "health.analyzing": "Getting First-Aid Advice...",
        "health.analyzeBtn": "Get AI First-Aid Advice",
        "health.guidelinesTitle": "Upload Guidelines",
        "health.guidelinesDesc": "Examples for accurate health assessment",
        "health.goodExamples": "Good Examples",
        "health.badExamples": "Call 108 Instead",
        "health.wounds": "Minor Wounds & Cuts",
        "health.woundsDesc": "Scrapes, small cuts, or minor bleeding injuries",
        "health.burns": "Burns (Minor)",
        "health.burnsDesc": "First or second degree burns, redness, or blisters",
        "health.bites": "Insect Bites & Stings",
        "health.bitesDesc": "Bee stings, mosquito bites, or allergic reactions",
        "health.sprains": "Sprains & Bruises",
        "health.sprainsDesc": "Swelling, discoloration, or minor joint injuries",
        "health.bleeding": "Severe Bleeding",
        "health.bleedingDesc": "Heavy bleeding that won't stop - call 108 immediately",
        "health.fractures": "Fractures & Breaks",
        "health.fracturesDesc": "Suspected broken bones require immediate medical attention",
        "health.severeBurns": "Severe Burns",
        "health.severeBurnsDesc": "Large or deep burns need professional medical care",
        "health.breathing": "Difficulty Breathing",
        "health.breathingDesc": "Any breathing problems require immediate emergency care",
        "health.emergency": "! Emergency",
        "health.emergencyContacts": "🚨 Emergency Contacts",
        "health.ambulance": "Ambulance",
        "health.police": "Police",
        "health.disaster": "Disaster Helpline",
        "health.facilities": "Nearest Medical Facilities",
        "health.facilitiesDesc": "Hospitals, clinics, and pharmacies near you",
        "health.clinics": "Hospitals & Clinics",
        "health.pharmacies": "Pharmacies",
        "health.medicalCenters": "Medical Centers",
        "health.medicineShops": "Medicine Shops",
        "health.recentReports": "Recent Health Reports",
        "health.noReports": "No health reports yet. Be the first to contribute!",
        // Common
        "common.upload": "Upload",
        "common.goodExample": "✓ Upload",
        "common.emergency": "! Emergency"
    },
    hi: {
        // Navbar
        "nav.home": "होम",
        "nav.report": "रिपोर्ट",
        "nav.checkSafety": "सुरक्षा जांचें",
        "nav.map": "मानचित्र",
        "nav.emergency": "आपातकाल",
        "nav.roadSafety": "सड़क सुरक्षा",
        "nav.waterSafety": "जल सुरक्षा",
        "nav.healthSafety": "स्वास्थ्य सुरक्षा",
        "nav.dashboard": "डैशबोर्ड",
        "nav.community": "समुदाय",
        "nav.chatbot": "एआई सहायक",
        // Hero Section
        "hero.badge": "एआई-संचालित आपदा सहायता",
        "hero.title": "उड़ान – उत्तराखंड आपदा सहायता नेटवर्क",
        "hero.subtitle": "जब मदद दूर हो तो एआई सहायता",
        "hero.checkSafetyBtn": "अभी सुरक्षा जांचें",
        "hero.reportIssueBtn": "समस्या रिपोर्ट करें",
        // Key Safety Services
        "services.title": "मुख्य सुरक्षा सेवाएं",
        "services.roadSafety": "सड़क सुरक्षा",
        "services.roadSafetyDesc": "वास्तविक समय में सड़क अवरोधों या यात्रा सलाह की जांच करें।",
        "services.waterSafety": "जल सुरक्षा",
        "services.waterSafetyDesc": "बाढ़ के स्तर और जल संदूषण पर नवीनतम अलर्ट प्राप्त करें।",
        "services.healthHelp": "स्वास्थ्य सहायता",
        "services.healthHelpDesc": "निकटतम चिकित्सा सहायता केंद्र और आवश्यक स्वास्थ्य मार्गदर्शन खोजें।",
        // Footer
        "footer.aboutUs": "हमारे बारे में",
        "footer.contact": "संपर्क करें",
        "footer.faq": "सामान्य प्रश्न",
        "footer.privacyPolicy": "गोपनीयता नीति",
        "footer.copyright": "© 2024 उड़ान नेटवर्क द्वारा संचालित। सर्वाधिकार सुरक्षित।",
        // Buttons
        "btn.learnMore": "और जानें",
        "btn.getStarted": "शुरू करें",
        "btn.openDashboard": "उड़ान डैशबोर्ड खोलें",
        "btn.emergencyHelp": "आपातकालीन सहायता",
        "btn.goToRoadSafety": "सड़क सुरक्षा पर जाएं",
        "btn.goToWaterSafety": "जल सुरक्षा पर जाएं",
        "btn.goToHealthSafety": "स्वास्थ्य सुरक्षा पर जाएं",
        // Three Pillars Section
        "pillars.title": "तीन सुरक्षा स्तंभ",
        "pillars.subtitle": "आपके समुदाय के लिए व्यापक सुरक्षा",
        "pillars.roadTitle": "सड़क सुरक्षा",
        "pillars.roadDesc": "भूस्खलन, सड़क में दरार, अवरुद्ध रास्ते और गिरती सड़कों का पता लगाएं इससे पहले कि वे खतरनाक हो जाएं।",
        "pillars.waterTitle": "जल सुरक्षा",
        "pillars.waterDesc": "जल गुणवत्ता की जांच करें, संदूषण की पहचान करें, और स्कूलों और गांवों में सुरक्षित पेयजल के लिए मार्गदर्शन प्राप्त करें।",
        "pillars.healthTitle": "स्वास्थ्य सुरक्षा",
        "pillars.healthDesc": "चोटों, जलन, गिरने और काटने के लिए प्राथमिक चिकित्सा मार्गदर्शन प्राप्त करें। जब चिकित्सा पहुंच सीमित हो तो त्वरित सहायता।",
        // Why UDAN Section
        "why.title": "उड़ान क्यों?",
        "why.subtitle": "उत्तराखंड की अनूठी चुनौतियों के लिए बनाया गया",
        "why.landslideTitle": "भूस्खलन प्रवण क्षेत्र",
        "why.landslideDesc": "पहाड़ और पर्वत सड़कों को कमजोर बनाते हैं। वास्तविक समय सुरक्षा अपडेट और वैकल्पिक मार्ग प्राप्त करें।",
        "why.waterTitle": "जल की कमी और संदूषण",
        "why.waterDesc": "मानसून संदूषण लाता है। एआई असुरक्षित पानी की पहचान करने और शुद्धिकरण मार्गदर्शन प्रदान करने में मदद करता है।",
        "why.healthTitle": "दूरस्थ स्वास्थ्य पहुंच",
        "why.healthDesc": "चिकित्सा सुविधाएं दूर हैं। पेशेवर मदद आने तक प्राथमिक चिकित्सा मार्गदर्शन मदद करता है।",
        // How It Works Section
        "howItWorks.title": "यह कैसे काम करता है",
        "howItWorks.subtitle": "सुरक्षा मार्गदर्शन प्राप्त करने के सरल चरण",
        "howItWorks.step1": "1. कैप्चर करें",
        "howItWorks.step1Desc": "एक फोटो लें या अपनी स्थिति का वर्णन करें",
        "howItWorks.step2": "2. एआई विश्लेषण",
        "howItWorks.step2Desc": "हमारी एआई जोखिम स्तर का विश्लेषण करती है",
        "howItWorks.step3": "3. मार्गदर्शन प्राप्त करें",
        "howItWorks.step3Desc": "कार्रवाई योग्य सुरक्षा कदम प्राप्त करें",
        "howItWorks.step4": "4. ट्रैक करें और साझा करें",
        "howItWorks.step4Desc": "रिपोर्ट उड़ान डैशबोर्ड पर दिखाई देती हैं",
        // Road Safety Page
        "road.title": "सड़क सुरक्षा और खतरा पहचान",
        "road.subtitle": "एआई-संचालित सड़क विश्लेषण और भूस्खलन पहचान",
        "road.uploadTitle": "विश्लेषण के लिए सड़क की छवि अपलोड करें",
        "road.uploadDesc": "सड़क की स्थिति और संभावित खतरों का तुरंत एआई मूल्यांकन प्राप्त करें",
        "road.analyzing": "सड़क की स्थिति का विश्लेषण हो रहा है...",
        "road.analyzeBtn": "सड़क सुरक्षा का विश्लेषण करें",
        "road.guidelinesTitle": "अपलोड दिशानिर्देश",
        "road.guidelinesDesc": "सटीक सड़क मूल्यांकन के लिए उदाहरण",
        "road.goodExamples": "अच्छे उदाहरण",
        "road.badExamples": "इनसे बचें",
        "road.landslides": "भूस्खलन और पत्थर गिरना",
        "road.landslidesDesc": "मलबा, पत्थर, या मिट्टी से सड़क अवरुद्ध दिखाने वाली स्पष्ट तस्वीरें",
        "road.cracks": "सड़क में दरारें और क्षति",
        "road.cracksDesc": "दिखाई देने वाली दरारें, गड्ढे, या क्षतिग्रस्त सड़क सतह",
        "road.blocked": "अवरुद्ध रास्ते",
        "road.blockedDesc": "गिरे हुए पेड़ों, वाहनों, या बाधाओं से अवरुद्ध सड़कें",
        "road.erosion": "कटाव और ढलान",
        "road.erosionDesc": "सड़क के किनारे कटाव या सड़कों के पास अस्थिर ढलान",
        "road.blurry": "धुंधली तस्वीरें",
        "road.blurryDesc": "फोकस से बाहर या गति-धुंधली तस्वीरें सटीकता कम करती हैं",
        "road.unrelated": "असंबंधित सामग्री",
        "road.unrelatedDesc": "सेल्फी, परिदृश्य, या सड़क की स्थिति के बिना छवियां",
        "road.dark": "बहुत अंधेरा/उज्ज्वल",
        "road.darkDesc": "उचित प्रकाश सुनिश्चित करें - फ्लैश के बिना रात की तस्वीरें से बचें",
        "road.distant": "दूर के दृश्य",
        "road.distantDesc": "विवरण स्पष्ट रूप से दिखाने के लिए करीब जाएं - दूर की तस्वीरों से बचें",
        "road.safetyTips": "🚗 सड़क सुरक्षा सुझाव",
        "road.tip1": "पहाड़ी यात्रा से पहले हमेशा मौसम पूर्वानुमान जांचें",
        "road.tip2": "भारी बारिश या मानसून के मौसम के दौरान यात्रा से बचें",
        "road.tip3": "आपातकालीन नंबर सहेजें (108, 1070)",
        "road.tip4": "चट्टान के किनारों और अस्थिर ढलानों से सुरक्षित दूरी बनाए रखें",
        "road.tip5": "सड़क के खतरों की तुरंत स्थानीय अधिकारियों को रिपोर्ट करें",
        "road.recentReports": "हाल की सड़क रिपोर्ट",
        "road.noReports": "अभी तक कोई सड़क रिपोर्ट नहीं। योगदान करने वाले पहले व्यक्ति बनें!",
        "road.hazardsTitle": "निकटवर्ती सड़क खतरे",
        "road.safetyTitle": "सुरक्षा केंद्र और सहायता बिंदु",
        // Water Safety Page
        "water.title": "जल सुरक्षा",
        "water.subtitle": "एआई-संचालित जल गुणवत्ता विश्लेषण और संदूषण पहचान",
        "water.uploadTitle": "विश्लेषण के लिए पानी की छवि अपलोड करें",
        "water.uploadDesc": "जल गुणवत्ता और शुद्धता का तुरंत एआई मूल्यांकन प्राप्त करें",
        "water.analyzing": "जल गुणवत्ता का विश्लेषण हो रहा है...",
        "water.analyzeBtn": "जल सुरक्षा का विश्लेषण करें",
        "water.guidelinesTitle": "अपलोड दिशानिर्देश",
        "water.guidelinesDesc": "सटीक जल मूल्यांकन के लिए उदाहरण",
        "water.goodExamples": "अच्छे उदाहरण",
        "water.badExamples": "इनसे बचें",
        "water.containers": "पानी के कंटेनर",
        "water.containersDesc": "पानी का रंग और स्पष्टता दिखाने वाला स्पष्ट गिलास/कंटेनर",
        "water.tanks": "पानी की टंकियां और भंडारण",
        "water.tanksDesc": "स्थिति दिखाने वाली पानी की टंकियों, पाइपों, या भंडारण की तस्वीरें",
        "water.sources": "जल स्रोत",
        "water.sourcesDesc": "कुएं, नल, या धाराओं और झरनों जैसे प्राकृतिक स्रोत",
        "water.contamination": "दृश्य संदूषण",
        "water.contaminationDesc": "मलिन, कीचड़युक्त, या दूषित पानी के नमूने",
        "water.noVisible": "कोई पानी दिखाई नहीं दे रहा",
        "water.noVisibleDesc": "खाली कंटेनर या छवियां जहां पानी स्पष्ट रूप से दिखाई नहीं दे रहा है",
        "water.poorLight": "खराब प्रकाश",
        "water.poorLightDesc": "बहुत अंधेरा या बैकलिट - पानी का रंग/स्पष्टता नहीं देख सकते",
        "water.reflective": "परावर्तक कंटेनर",
        "water.reflectiveDesc": "चमकदार धातु के कंटेनर जो पानी की उपस्थिति छिपाते हैं",
        "water.treated": "उपचारित जल उत्पाद",
        "water.treatedDesc": "बोतलबंद पानी या पैकेज्ड पेय - ये पूर्व-उपचारित हैं",
        "water.safetyTips": "💧 जल सुरक्षा सुझाव",
        "water.tip1": "पीने से पहले हमेशा कम से कम 5 मिनट के लिए पानी उबालें",
        "water.tip2": "जब पानी की गुणवत्ता के बारे में अनिश्चित हों तो जल शुद्धिकरण गोलियों का उपयोग करें",
        "water.tip3": "पीने के पानी को साफ, ढके हुए कंटेनरों में रखें",
        "water.tip4": "मानसून के मौसम के दौरान अज्ञात स्रोतों से पानी से बचें",
        "water.tip5": "दृश्य तलछट, रंग परिवर्तन, या असामान्य गंध की जांच करें",
        "water.recentReports": "हाल की जल रिपोर्ट",
        "water.noReports": "अभी तक कोई जल रिपोर्ट नहीं। योगदान करने वाले पहले व्यक्ति बनें!",
        "water.suppliersTitle": "निकटतम जल आपूर्तिकर्ता",
        // Health Safety Page
        "health.title": "स्वास्थ्य और प्राथमिक चिकित्सा सहायता",
        "health.subtitle": "चोटों, जलन और चिकित्सा आपात स्थितियों के लिए एआई-संचालित मार्गदर्शन",
        "health.alert": "गंभीर आपात स्थितियों के लिए, हमेशा तुरंत 108 पर कॉल करें।",
        "health.alertDesc": "यह उपकरण केवल बुनियादी प्राथमिक चिकित्सा मार्गदर्शन प्रदान करता है।",
        "health.uploadTitle": "प्राथमिक चिकित्सा मार्गदर्शन प्राप्त करें",
        "health.uploadDesc": "अपनी स्थिति का वर्णन करें या एआई सहायता के लिए एक फोटो अपलोड करें",
        "health.tabDescribe": "वर्णन करें",
        "health.tabPhoto": "फोटो के साथ",
        "health.whatHappened": "क्या हुआ?",
        "health.placeholder": "उदाहरण: बच्चा गिर गया और घुटने छिल गए, मामूली खून बह रहा है, कोई हड्डी नहीं टूटी...",
        "health.additionalDetails": "अतिरिक्त विवरण (वैकल्पिक)",
        "health.additionalPlaceholder": "चोट के बारे में कोई अतिरिक्त संदर्भ जोड़ें...",
        "health.analyzing": "प्राथमिक चिकित्सा सलाह प्राप्त कर रहे हैं...",
        "health.analyzeBtn": "एआई प्राथमिक चिकित्सा सलाह प्राप्त करें",
        "health.guidelinesTitle": "अपलोड दिशानिर्देश",
        "health.guidelinesDesc": "सटीक स्वास्थ्य मूल्यांकन के लिए उदाहरण",
        "health.goodExamples": "अच्छे उदाहरण",
        "health.badExamples": "इसके बजाय 108 पर कॉल करें",
        "health.wounds": "मामूली घाव और कटौती",
        "health.woundsDesc": "खरोंच, छोटी कटौती, या मामूली खून बहने की चोटें",
        "health.burns": "जलन (मामूली)",
        "health.burnsDesc": "प्रथम या द्वितीय डिग्री जलन, लालिमा, या छाले",
        "health.bites": "कीड़े के काटने और डंक",
        "health.bitesDesc": "मधुमक्खी के डंक, मच्छर के काटने, या एलर्जी प्रतिक्रियाएं",
        "health.sprains": "मोच और चोट",
        "health.sprainsDesc": "सूजन, रंग परिवर्तन, या मामूली जोड़ों की चोटें",
        "health.bleeding": "गंभीर खून बहना",
        "health.bleedingDesc": "भारी खून बहना जो रुक नहीं रहा है - तुरंत 108 पर कॉल करें",
        "health.fractures": "फ्रैक्चर और हड्डी टूटना",
        "health.fracturesDesc": "संदिग्ध टूटी हड्डियों को तत्काल चिकित्सा ध्यान की आवश्यकता है",
        "health.severeBurns": "गंभीर जलन",
        "health.severeBurnsDesc": "बड़ी या गहरी जलन को पेशेवर चिकित्सा देखभाल की आवश्यकता है",
        "health.breathing": "सांस लेने में कठिनाई",
        "health.breathingDesc": "किसी भी सांस लेने की समस्या को तत्काल आपातकालीन देखभाल की आवश्यकता है",
        "health.emergency": "! आपातकाल",
        "health.emergencyContacts": "🚨 आपातकालीन संपर्क",
        "health.ambulance": "एम्बुलेंस",
        "health.police": "पुलिस",
        "health.disaster": "आपदा हेल्पलाइन",
        "health.facilities": "निकटतम चिकित्सा सुविधाएं",
        "health.facilitiesDesc": "आपके पास अस्पताल, क्लीनिक और फार्मेसी",
        "health.clinics": "अस्पताल और क्लीनिक",
        "health.pharmacies": "फार्मेसी",
        "health.medicalCenters": "चिकित्सा केंद्र",
        "health.medicineShops": "दवा की दुकानें",
        "health.recentReports": "हाल की स्वास्थ्य रिपोर्ट",
        "health.noReports": "अभी तक कोई स्वास्थ्य रिपोर्ट नहीं। योगदान करने वाले पहले व्यक्ति बनें!",
        // Common
        "common.upload": "अपलोड",
        "common.goodExample": "✓ अपलोड",
        "common.emergency": "! आपातकाल"
    }
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__32e5e1e4._.js.map