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
        createdAt: new Date("2024-01-15T10:30:00"),
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
        createdAt: new Date("2024-01-14T15:45:00"),
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
        createdAt: new Date("2024-01-13T09:20:00"),
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
        createdAt: new Date("2024-01-12T14:10:00"),
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
        createdAt: new Date("2024-01-11T08:00:00"),
        createdByUserId: null,
        categoryDetails: {
            waterIssue: "supply_disrupted"
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
    }
];
}),
"[project]/app/api/reports/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-route] (ecmascript)");
;
;
// In-memory storage for demo (would use Firestore in production)
const reports = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockReports"]
];
async function GET(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const severity = searchParams.get("severity");
    const status = searchParams.get("status");
    let filteredReports = [
        ...reports
    ];
    if (type && type !== "all") {
        filteredReports = filteredReports.filter((r)=>r.type === type);
    }
    if (severity && severity !== "all") {
        filteredReports = filteredReports.filter((r)=>r.severity === severity);
    }
    if (status && status !== "all") {
        filteredReports = filteredReports.filter((r)=>r.status === status);
    }
    // Sort by date, newest first
    filteredReports.sort((a, b)=>{
        const dateA = a.createdAt instanceof Date ? a.createdAt : a.createdAt.toDate();
        const dateB = b.createdAt instanceof Date ? b.createdAt : b.createdAt.toDate();
        return dateB.getTime() - dateA.getTime();
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(filteredReports);
}
async function POST(request) {
    try {
        const body = await request.json();
        const newReport = {
            id: Date.now().toString(),
            ...body,
            status: "open",
            createdAt: new Date(),
            createdByUserId: null
        };
        reports.unshift(newReport);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newReport, {
            status: 201
        });
    } catch (error) {
        console.error("Error creating report:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to create report"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2f8420b6._.js.map