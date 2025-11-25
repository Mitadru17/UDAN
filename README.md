# UDAN - Uttarakhand Disaster Aid Network

AI-powered disaster aid platform for Uttarakhand that helps communities during natural disasters with road, water, and health safety guidance.

## Features

- **Road Safety**: Detect landslides, road cracks, and blocked paths using AI image analysis
- **Water Safety**: Check water quality and get purification guidance
- **Health Safety**: Get first-aid guidance for injuries, burns, and emergencies
- **Unified Dashboard**: View all reports on an interactive map with filters
- **Emergency Help**: Quick access to emergency numbers and AI safety instructions

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
npm install
\`\`\`

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`env
# Google Gemini API (for AI analysis)
GEMINI_API_KEY=your_gemini_api_key

# Firebase Configuration (for data storage)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
\`\`\`

### Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Create a `reports` collection
4. Copy your Firebase config to the environment variables

### Gemini API Setup

1. Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to your `.env.local` file

### Running the Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

\`\`\`
├── app/
│   ├── api/                    # API routes for AI analysis
│   │   ├── analyze-road/
│   │   ├── analyze-water/
│   │   ├── analyze-health/
│   │   ├── emergency-advice/
│   │   └── reports/
│   ├── dashboard/              # Unified dashboard
│   ├── road-safety/            # Road safety module
│   ├── water-safety/           # Water safety module
│   ├── health-safety/          # Health safety module
│   ├── emergency/              # Emergency help page
│   ├── report/                 # Manual report form
│   └── page.tsx                # Home page
├── components/                 # Reusable UI components
├── lib/                        # Utilities, types, Firebase config
└── README.md
\`\`\`

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Maps**: Leaflet with OpenStreetMap
- **AI**: Google Gemini API
- **Database**: Firebase Firestore

## Development Notes

- The app includes mock data for development when environment variables are not configured
- All AI API calls are server-side to protect API keys
- The map uses OpenStreetMap tiles (no API key required)

## Emergency Numbers

- Ambulance: 108
- Disaster Helpline: 1070
- Police: 100
- Fire: 101

---

Built for the people of Uttarakhand 🏔️
