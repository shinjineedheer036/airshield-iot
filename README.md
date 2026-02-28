# AirShield Frontend

Next-Gen Environmental Security Interface. Built with React, Vite, and Tailwind CSS.

## Project Structure

```text
Frontend/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation with glassmorphism
│   │   ├── Hero.jsx       # Landing hero section
│   │   ├── Features.jsx   # IoT capabilities cards
│   │   ├── CTA.jsx        # Action section
│   │   └── Footer.jsx     # Navigation footer
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Assembled Landing Page
│   │   ├── Login.jsx      # Authentication
│   │   └── Signup.jsx     # Registration
│   ├── App.jsx            # Main app & routing
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles & Tailwind
├── tailwind.config.js      # Design tokens
└── index.html             # HTML entry & Fonts
```

## Getting Started

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Design System

- **Primary Color:** `#0df280` (Neon Green)
- **Background:** `#000000` (Deep Black)
- **Typography:** Space Grotesk
- **Icons:** Material Symbols Outlined
