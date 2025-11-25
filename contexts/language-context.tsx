"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "hi" : "en"))
  }

  const t = (key: string) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const translations: Record<Language, Record<string, string>> = {
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
  },
}
