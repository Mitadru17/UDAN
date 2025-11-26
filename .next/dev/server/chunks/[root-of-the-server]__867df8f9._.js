module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/mock-data.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockClinicsAndHospitals",
    ()=>mockClinicsAndHospitals,
    "mockHealthAnalysis",
    ()=>mockHealthAnalysis,
    "mockPharmacies",
    ()=>mockPharmacies,
    "mockReports",
    ()=>mockReports,
    "mockRoadAnalysis",
    ()=>mockRoadAnalysis,
    "mockRoadHazards",
    ()=>mockRoadHazards,
    "mockSafetyCenters",
    ()=>mockSafetyCenters,
    "mockWaterAnalysis",
    ()=>mockWaterAnalysis,
    "mockWaterSuppliers",
    ()=>mockWaterSuppliers
]);
const mockReports = [
    {
        id: "1",
        type: "road",
        severity: "high",
        status: "open",
        title: "Major landslide near Tehri Dam Road",
        description: "Large rocks blocking the main road, vehicles cannot pass",
        advice: "Avoid this route completely. Use the alternate path via Chamba. Contact local authorities. Do not attempt to clear debris yourself.",
        locationName: "Tehri Dam Road, Tehri Garhwal",
        lat: 30.3782,
        lng: 78.4808,
        createdAt: new Date("2024-11-26T10:30:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "blocked"
        }
    },
    {
        id: "2",
        type: "water",
        severity: "medium",
        status: "open",
        title: "Contaminated water source in village school",
        description: "Water tank appears muddy after recent rainfall",
        advice: "Do not drink water directly. Boil water before use. Clean the tank. Contact district water department.",
        locationName: "Government School, Pithoragarh",
        lat: 29.5829,
        lng: 80.2182,
        createdAt: new Date("2024-11-25T15:45:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "contaminated"
        }
    },
    {
        id: "3",
        type: "health",
        severity: "low",
        status: "resolved",
        title: "Minor burn injury - First aid provided",
        description: "Student received minor burn from cooking accident",
        advice: "Cool the burn under running water. Apply clean bandage. Monitor for infection. Seek medical help if pain persists.",
        locationName: "Chamoli District School",
        lat: 30.4025,
        lng: 79.3213,
        createdAt: new Date("2024-11-24T09:20:00"),
        createdByUserId: null,
        categoryDetails: {
            healthIssue: "burn"
        }
    },
    {
        id: "4",
        type: "road",
        severity: "medium",
        status: "open",
        title: "Road cracks developing near bridge",
        description: "Visible cracks forming on road surface near the main bridge",
        advice: "Drive carefully at reduced speed. Avoid heavy vehicles. Report to PWD. Use alternate route if possible.",
        locationName: "Rudraprayag Bridge",
        lat: 30.2844,
        lng: 78.9802,
        createdAt: new Date("2024-11-24T14:10:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "cracked"
        }
    },
    {
        id: "5",
        type: "water",
        severity: "high",
        status: "open",
        title: "Complete water supply disruption",
        description: "Main water pipeline damaged by landslide",
        advice: "Use stored water sparingly. Collect rainwater safely. Contact emergency services. Do not use untreated stream water.",
        locationName: "Joshimath Town",
        lat: 30.5578,
        lng: 79.564,
        createdAt: new Date("2024-11-23T08:00:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "supply_disrupted"
        }
    },
    {
        id: "6",
        type: "road",
        severity: "high",
        status: "open",
        title: "Massive rockfall on Badrinath Highway",
        description: "Multiple boulders blocking NH-7, emergency clearance in progress",
        advice: "Road completely impassable. Take Karnaprayag alternate route. Expected clearance in 48 hours. Contact SDRF for updates.",
        locationName: "Badrinath Highway, Chamoli",
        lat: 30.7333,
        lng: 79.4906,
        createdAt: new Date("2024-11-26T06:15:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "blocked"
        }
    },
    {
        id: "7",
        type: "health",
        severity: "medium",
        status: "open",
        title: "Multiple insect bites at trekking camp",
        description: "Several hikers reporting bee stings and mosquito bites with swelling",
        advice: "Apply ice to reduce swelling. Take antihistamine if available. Monitor for allergic reactions. Contact nearest PHC if symptoms worsen.",
        locationName: "Valley of Flowers Base Camp",
        lat: 30.7184,
        lng: 79.6008,
        createdAt: new Date("2024-11-26T07:45:00"),
        createdByUserId: null,
        categoryDetails: {
            healthIssue: "bite"
        }
    },
    {
        id: "8",
        type: "water",
        severity: "low",
        status: "resolved",
        title: "Turbid water at community tap",
        description: "Slightly cloudy water observed, cleared after flushing",
        advice: "Flush taps for 2-3 minutes. Boil water as precaution. Water quality restored. Regular monitoring continues.",
        locationName: "Pauri Village Center",
        lat: 30.1534,
        lng: 78.7759,
        createdAt: new Date("2024-11-25T11:20:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "unclear"
        }
    },
    {
        id: "9",
        type: "road",
        severity: "medium",
        status: "in_progress",
        title: "Pothole cluster near school",
        description: "Five large potholes formed after heavy rain, repairs scheduled",
        advice: "Drive carefully at 20 km/h. PWD repairs starting tomorrow. Avoid during school hours (8 AM - 2 PM).",
        locationName: "Ranikhet Main Road",
        lat: 29.6418,
        lng: 79.4321,
        createdAt: new Date("2024-11-25T16:30:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "damaged"
        }
    },
    {
        id: "10",
        type: "health",
        severity: "low",
        status: "resolved",
        title: "Ankle sprain during hiking",
        description: "Tourist twisted ankle on uneven trail, first aid provided",
        advice: "Rest and ice applied. Ankle wrapped. Pain medication given. Monitor for 24 hours. Advised against further hiking.",
        locationName: "Nainital Lake Trail",
        lat: 29.3919,
        lng: 79.4542,
        createdAt: new Date("2024-11-25T14:00:00"),
        createdByUserId: null,
        categoryDetails: {
            healthIssue: "sprain"
        }
    },
    {
        id: "11",
        type: "water",
        severity: "medium",
        status: "open",
        title: "Water storage tank leakage",
        description: "Community water tank showing cracks, water wastage ongoing",
        advice: "Store water in clean containers at home. Report to Jal Sansthan. Avoid direct consumption. Repairs expected this week.",
        locationName: "Almora District Hospital",
        lat: 29.5971,
        lng: 79.6591,
        createdAt: new Date("2024-11-25T09:00:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "supply_disrupted"
        }
    },
    {
        id: "12",
        type: "road",
        severity: "low",
        status: "open",
        title: "Minor road subsidence observed",
        description: "Small depression forming on road edge, monitoring required",
        advice: "Stay in center of road. Avoid parking near edge. PWD notified for assessment. Use caution during rain.",
        locationName: "Kausani-Bageshwar Road",
        lat: 29.8391,
        lng: 79.6089,
        createdAt: new Date("2024-11-24T17:45:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "damaged"
        }
    },
    {
        id: "13",
        type: "health",
        severity: "medium",
        status: "open",
        title: "Food poisoning at community event",
        description: "Several villagers experiencing stomach pain after meal",
        advice: "Stay hydrated with boiled water. ORS recommended. Rest advised. Medical team dispatched. Call 108 if severe vomiting.",
        locationName: "Bageshwar Community Hall",
        lat: 29.8391,
        lng: 79.7733,
        createdAt: new Date("2024-11-26T12:00:00"),
        createdByUserId: null,
        categoryDetails: {
            healthIssue: "minor_injury"
        }
    },
    {
        id: "14",
        type: "water",
        severity: "high",
        status: "open",
        title: "Spring water source dried up",
        description: "Main village spring completely dry, 200 families affected",
        advice: "Emergency tanker service arranged. Collect from distribution point at 6 AM and 6 PM. Conserve water strictly.",
        locationName: "Munsiyari Village",
        lat: 30.0676,
        lng: 80.2372,
        createdAt: new Date("2024-11-26T05:30:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "supply_disrupted"
        }
    },
    {
        id: "15",
        type: "road",
        severity: "low",
        status: "resolved",
        title: "Fallen tree branch cleared",
        description: "Large branch blocked half road, removed by locals",
        advice: "Road now clear. Drive carefully as small debris may remain. Forest department notified to trim nearby trees.",
        locationName: "Bhimtal-Naukuchiatal Road",
        lat: 29.3489,
        lng: 79.5616,
        createdAt: new Date("2024-11-24T08:15:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "safe"
        }
    },
    {
        id: "16",
        type: "health",
        severity: "high",
        status: "in_progress",
        title: "Severe allergic reaction to plant",
        description: "Hiker developed rash and breathing difficulty after touching unknown plant",
        advice: "Emergency: Patient transported to hospital. Administered antihistamine. In ICU observation. Family notified. Update: Stable now.",
        locationName: "Chopta Forest Area",
        lat: 30.4611,
        lng: 79.0289,
        createdAt: new Date("2024-11-26T11:20:00"),
        createdByUserId: null,
        categoryDetails: {
            healthIssue: "bite"
        }
    },
    {
        id: "17",
        type: "road",
        severity: "medium",
        status: "open",
        title: "Foggy conditions causing visibility issues",
        description: "Dense fog on mountain road, multiple near-miss incidents",
        advice: "Use fog lights. Reduce speed to 20 km/h. Avoid travel after 6 PM. Consider overnight stay. Fog expected till noon.",
        locationName: "Dhanaulti-Mussoorie Road",
        lat: 30.4242,
        lng: 78.2585,
        createdAt: new Date("2024-11-26T06:00:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "wet"
        }
    },
    {
        id: "18",
        type: "water",
        severity: "medium",
        status: "in_progress",
        title: "Algae growth in overhead tank",
        description: "Green algae visible in community water tank, cleaning scheduled",
        advice: "Boil water thoroughly before use. Avoid drinking directly. Tank cleaning on Nov 28. Use alternative sources if possible.",
        locationName: "Lansdowne Cantonment Area",
        lat: 29.8416,
        lng: 78.6799,
        createdAt: new Date("2024-11-25T13:30:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "contaminated"
        }
    },
    {
        id: "19",
        type: "health",
        severity: "low",
        status: "resolved",
        title: "Minor cut from farming tool",
        description: "Farmer sustained small cut while working, cleaned and bandaged",
        advice: "Wound cleaned with antiseptic. Tetanus shot given. Bandage changed daily. Watch for infection. Healing well.",
        locationName: "Pithoragarh Agricultural Field",
        lat: 29.5829,
        lng: 80.2182,
        createdAt: new Date("2024-11-24T10:00:00"),
        createdByUserId: null,
        categoryDetails: {
            healthIssue: "minor_injury"
        }
    },
    {
        id: "20",
        type: "road",
        severity: "high",
        status: "open",
        title: "Bridge support damage detected",
        description: "Cracks found in bridge pillar during inspection, load restrictions imposed",
        advice: "Heavy vehicles banned. Max 2 tons allowed. One vehicle at a time. Engineers assessing. Alternate bridge 12 km ahead.",
        locationName: "Alaknanda River Bridge, Srinagar",
        lat: 30.2234,
        lng: 78.7794,
        createdAt: new Date("2024-11-26T08:00:00"),
        createdByUserId: null,
        categoryDetails: {
            roadCondition: "damaged"
        }
    }
];
const mockRoadAnalysis = {
    type: "road",
    severity: "medium",
    title: "Road surface damage detected",
    advice: "1. Drive slowly and carefully in this area.\n2. Avoid this route during heavy rain.\n3. Report to local PWD office.\n4. Use alternate routes if available.\n5. Do not stop vehicle on damaged sections.",
    categoryDetails: {
        roadCondition: "damaged"
    }
};
const mockWaterAnalysis = {
    type: "water",
    severity: "medium",
    title: "Water quality concerns observed",
    advice: "1. Do not drink this water directly.\n2. Boil water for at least 5 minutes before use.\n3. Use water purification tablets if available.\n4. Report to local health department.\n5. Store clean water separately.",
    categoryDetails: {
        waterIssue: "unclear"
    }
};
const mockHealthAnalysis = {
    type: "health",
    severity: "low",
    title: "Minor injury assessment",
    advice: "1. Clean the affected area with clean water.\n2. Apply antiseptic if available.\n3. Cover with clean bandage.\n4. Monitor for signs of infection.\n5. Seek medical help if symptoms worsen.\n6. Call 108 for serious emergencies.",
    categoryDetails: {
        healthIssue: "minor_injury"
    }
};
const mockClinicsAndHospitals = [
    {
        id: "h1",
        name: "District Hospital Dehradun",
        type: "hospital",
        address: "Clock Tower, Dehradun",
        distance: "2.5 km",
        phone: "0135-2712345",
        hours: "24/7 Emergency",
        lat: 30.3165,
        lng: 78.0322
    },
    {
        id: "h2",
        name: "Community Health Center",
        type: "clinic",
        address: "Rajpur Road, Dehradun",
        distance: "1.2 km",
        phone: "0135-2656789",
        hours: "8 AM - 8 PM",
        lat: 30.3245,
        lng: 78.0412
    },
    {
        id: "h3",
        name: "Primary Health Center Mussoorie",
        type: "clinic",
        address: "Mall Road, Mussoorie",
        distance: "4.8 km",
        phone: "0135-2632456",
        hours: "9 AM - 5 PM",
        lat: 30.4598,
        lng: 78.0644
    },
    {
        id: "h4",
        name: "Tehri Government Hospital",
        type: "hospital",
        address: "New Tehri Town",
        distance: "8.2 km",
        phone: "01376-232100",
        hours: "24/7 Emergency",
        lat: 30.3782,
        lng: 78.4808
    },
    {
        id: "h5",
        name: "Himalayan Medical Institute",
        type: "hospital",
        address: "Jolly Grant, Dehradun",
        distance: "5.1 km",
        phone: "0135-2471771",
        hours: "24/7 Emergency",
        lat: 30.3255,
        lng: 78.0501
    },
    {
        id: "h6",
        name: "Rishikesh AIIMS",
        type: "hospital",
        address: "Veerbhadra Road, Rishikesh",
        distance: "25.3 km",
        phone: "0135-2462042",
        hours: "24/7 All Departments",
        lat: 30.0869,
        lng: 78.2676
    },
    {
        id: "h7",
        name: "Uttarakhand Ayurved University Clinic",
        type: "clinic",
        address: "Harawala, Dehradun",
        distance: "6.8 km",
        phone: "0135-2771133",
        hours: "9 AM - 6 PM",
        lat: 30.2847,
        lng: 78.0956
    },
    {
        id: "h8",
        name: "Base Hospital Haldwani",
        type: "hospital",
        address: "Rampur Road, Haldwani",
        distance: "65 km",
        phone: "05946-228200",
        hours: "24/7 Emergency",
        lat: 29.2183,
        lng: 79.5130
    }
];
const mockPharmacies = [
    {
        id: "p1",
        name: "Jan Aushadhi Kendra",
        type: "pharmacy",
        address: "Clock Tower, Dehradun",
        distance: "0.8 km",
        phone: "0135-2654321",
        hours: "8 AM - 10 PM",
        lat: 30.3175,
        lng: 78.0332
    },
    {
        id: "p2",
        name: "Apollo Pharmacy",
        type: "pharmacy",
        address: "Rajpur Road",
        distance: "1.5 km",
        phone: "0135-2987654",
        hours: "24/7",
        lat: 30.3255,
        lng: 78.0422
    },
    {
        id: "p3",
        name: "Government Medical Store",
        type: "pharmacy",
        address: "District Hospital Complex",
        distance: "2.5 km",
        phone: "0135-2712346",
        hours: "9 AM - 6 PM",
        lat: 30.3168,
        lng: 78.0325
    },
    {
        id: "p4",
        name: "MedPlus Pharmacy",
        type: "pharmacy",
        address: "Gandhi Road, Dehradun",
        distance: "1.8 km",
        phone: "0135-2756543",
        hours: "8 AM - 11 PM",
        lat: 30.3189,
        lng: 78.0389
    },
    {
        id: "p5",
        name: "Himalaya Medical Store",
        type: "pharmacy",
        address: "Mussoorie Diversion",
        distance: "3.2 km",
        phone: "0135-2782456",
        hours: "7 AM - 10 PM",
        lat: 30.3298,
        lng: 78.0512
    },
    {
        id: "p6",
        name: "LifeCare Pharmacy",
        type: "pharmacy",
        address: "Haridwar Road",
        distance: "4.5 km",
        phone: "0135-2723456",
        hours: "24/7",
        lat: 30.3089,
        lng: 78.0245
    }
];
const mockWaterSuppliers = [
    {
        id: "w1",
        name: "Jal Sansthan Water Tank",
        type: "water_supplier",
        address: "Rajpur Road, Dehradun",
        distance: "1.0 km",
        phone: "0135-2711234",
        hours: "6 AM - 6 PM",
        lat: 30.32,
        lng: 78.038
    },
    {
        id: "w2",
        name: "Municipal Water Supply Point",
        type: "water_supplier",
        address: "Clock Tower Area",
        distance: "0.5 km",
        phone: "0135-2711235",
        hours: "7 AM - 7 PM",
        lat: 30.317,
        lng: 78.0315
    },
    {
        id: "w3",
        name: "Clean Water Distribution Center",
        type: "water_supplier",
        address: "Nehru Colony",
        distance: "2.2 km",
        phone: "0135-2711236",
        hours: "8 AM - 5 PM",
        lat: 30.312,
        lng: 78.029
    },
    {
        id: "w4",
        name: "Emergency Water Tanker Service",
        type: "water_supplier",
        address: "City Center",
        distance: "3.0 km",
        phone: "1800-123-4567",
        hours: "24/7 Emergency",
        lat: 30.315,
        lng: 78.035
    },
    {
        id: "w5",
        name: "Community Water Purification Plant",
        type: "water_supplier",
        address: "Sahastradhara Road",
        distance: "5.5 km",
        phone: "0135-2711237",
        hours: "6 AM - 8 PM",
        lat: 30.3612,
        lng: 78.0856
    },
    {
        id: "w6",
        name: "Tehri Dam Water Authority",
        type: "water_supplier",
        address: "New Tehri",
        distance: "45 km",
        phone: "01376-233444",
        hours: "9 AM - 5 PM",
        lat: 30.3782,
        lng: 78.4808
    },
    {
        id: "w7",
        name: "Village Water Cooperative",
        type: "water_supplier",
        address: "Raipur, Dehradun",
        distance: "6.8 km",
        phone: "0135-2711238",
        hours: "5 AM - 9 PM",
        lat: 30.2989,
        lng: 78.0145
    }
];
const mockSafetyCenters = [
    {
        id: "s1",
        name: "SDRF Control Room",
        type: "safety_center",
        address: "SDRF Headquarters, Dehradun",
        distance: "3.5 km",
        phone: "1070",
        hours: "24/7",
        lat: 30.31,
        lng: 78.04
    },
    {
        id: "s2",
        name: "District Emergency Operations Center",
        type: "safety_center",
        address: "Collectorate, Dehradun",
        distance: "2.8 km",
        phone: "0135-2712000",
        hours: "24/7",
        lat: 30.318,
        lng: 78.034
    },
    {
        id: "s3",
        name: "ITBP Rescue Base",
        type: "safety_center",
        address: "Seemadwar, Dehradun",
        distance: "7.2 km",
        phone: "0135-2785566",
        hours: "24/7 Emergency Response",
        lat: 30.3456,
        lng: 78.0789
    },
    {
        id: "s4",
        name: "Police Control Room",
        type: "safety_center",
        address: "Rajpur Road, Dehradun",
        distance: "1.9 km",
        phone: "100",
        hours: "24/7",
        lat: 30.3234,
        lng: 78.0398
    },
    {
        id: "s5",
        name: "Fire Station Central",
        type: "safety_center",
        address: "Gandhi Road, Dehradun",
        distance: "2.1 km",
        phone: "101",
        hours: "24/7 Emergency",
        lat: 30.3189,
        lng: 78.0356
    }
];
const mockRoadHazards = [
    {
        id: "r1",
        name: "Landslide Zone - Tehri Road",
        type: "hazard",
        address: "NH-94, Tehri Garhwal",
        distance: "15 km",
        lat: 30.3782,
        lng: 78.4808
    },
    {
        id: "r2",
        name: "Road Cracks - Rudraprayag Bridge",
        type: "hazard",
        address: "Near Rudraprayag Bridge",
        distance: "45 km",
        lat: 30.2844,
        lng: 78.9802
    },
    {
        id: "r3",
        name: "Blocked Path - Mussoorie Road",
        type: "hazard",
        address: "Mussoorie Bypass",
        distance: "8 km",
        lat: 30.45,
        lng: 78.06
    },
    {
        id: "r4",
        name: "Rockfall Area - Badrinath Highway",
        type: "hazard",
        address: "NH-7, Chamoli",
        distance: "95 km",
        lat: 30.7333,
        lng: 79.4906
    },
    {
        id: "r5",
        name: "Pothole Cluster - Ranikhet Road",
        type: "hazard",
        address: "Main Road, Ranikhet",
        distance: "78 km",
        lat: 29.6418,
        lng: 79.4321
    },
    {
        id: "r6",
        name: "Bridge Damage - Alaknanda River",
        type: "hazard",
        address: "Srinagar, Garhwal",
        distance: "102 km",
        lat: 30.2234,
        lng: 78.7794
    },
    {
        id: "r7",
        name: "Fog Zone - Dhanaulti Road",
        type: "hazard",
        address: "Dhanaulti-Mussoorie Stretch",
        distance: "22 km",
        lat: 30.4242,
        lng: 78.2585
    }
];
}),
"[project]/app/api/analyze-road/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const formData = await request.formData();
        const image = formData.get("image");
        const description = formData.get("description");
        const locationName = formData.get("locationName");
        // Check for Gemini API key
        const apiKey = process.env.GEMINI_API_KEY || "AIzaSyA-X-0mRg2OeQccMaLdQ1LawLDyUYbN5XM";
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!image) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Image is required"
            }, {
                status: 400
            });
        }
        // Convert image to base64
        const bytes = await image.arrayBuffer();
        const base64Image = Buffer.from(bytes).toString("base64");
        // Call Gemini Vision API
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: `You are a road safety expert for the Uttarakhand hill region. Analyze this image of a road or path and provide safety assessment.

Context: ${description || "No additional context provided"}
Location: ${locationName || "Unknown location in Uttarakhand"}

Analyze the image and respond with ONLY valid JSON in this exact format:
{
  "type": "road",
  "severity": "low" | "medium" | "high",
  "title": "Brief title describing the road condition",
  "advice": "1. First safety step\\n2. Second safety step\\n3. Third safety step\\n4. Fourth safety step\\n5. Fifth safety step",
  "categoryDetails": {
    "roadCondition": "blocked" | "cracked" | "wet" | "damaged" | "safe" | "unclear"
  }
}

Consider: landslides, road cracks, blocked paths, wet surfaces, collapsing edges.
Provide practical advice for villagers and travelers in hill regions.`
                            },
                            {
                                inline_data: {
                                    mime_type: image.type,
                                    data: base64Image
                                }
                            }
                        ]
                    }
                ]
            })
        });
        const data = await response.json();
        if (!response.ok) {
            console.error("Gemini API error:", data);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockRoadAnalysis"]);
        }
        // Parse the response
        const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textContent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockRoadAnalysis"]);
        }
        // Extract JSON from response
        const jsonMatch = textContent.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockRoadAnalysis"]);
        }
        const result = JSON.parse(jsonMatch[0]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error("Road analysis error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockRoadAnalysis"]);
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__867df8f9._.js.map