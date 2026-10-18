<div align="center">

# 📱 Atharva Warankar — Interactive Developer Portfolio OS

**A virtual smartphone operating system built with React 19, TypeScript, and Framer Motion.**  
*Experience a developer portfolio not as a static page, but as a living, interactive device.*

[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-ff0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[✨ Live Demo](http://localhost:5173/) • [💼 View Resume](https://github.com/atharvaworkx) • [📫 Get in Touch](mailto:atharva.workx@gmail.com) • [🤝 Connect on LinkedIn](https://www.linkedin.com/in/atharvaw01)

</div>

---

## 🌟 Overview

**Portfolio OS** transforms the conventional personal website into an interactive virtual mobile operating system. Visitors hold a physical smartphone in their browser—complete with gestures, lock screen notifications, 3D tilted side panels, real-time wallpapers, and an interconnected app ecosystem.

Built specifically to showcase **production backend engineering, distributed data pipelines, and full-stack system architectures**.

---

## ⚡ Highlights & Key Features

### 📲 1. Realistic Hardware Chassis & Device Modes
* **Multi-Device Switcher**: Switch dynamically between **Apple iOS (Notch)**, **Android (Punch-Hole & Nav Keys)**, and **iPad / Tablet** viewport formats.
* **Physics-Driven Lock Screen**: Swipe up to unlock with Framer Motion spring kinematics, live digital clock, and interactive notification pills.
* **Ambient Side Panels**: 3D tilted glassmorphism companion panels that cast realistic shadows and adapt to viewport perspective.

### 🎨 2. "Paint the Sky" Dynamic Theme Engine
* 6 reactive gradient palettes (**Warm Sunset, Clear Horizon, Ocean Breeze, Twilight Dusk, Neon Orchid, Velvet Sunset**).
* Repaints wallpaper gradients, ambient chassis glows, and glassmorphic UI elements instantly.

### 📱 3. Built-In Smartphone Apps

| App | Description & Interactive Features |
| :--- | :--- |
| **About** | Sleek dark matte terminal with **real-time letter-shuffling decode animation** (`Atharva Warankar.`), monospace tags, and professional background. |
| **Education** | Clean white UI cards with glowing vertical accent bars, SPPU & S.G.B.A.U board recognition, and an **animated dropping books & leaning ladder SVG** with physics bounce. |
| **Experience** | In-depth breakdown of production backend engineering, distributed AWS S3 & FFmpeg media pipelines, and modular microservices. |
| **Projects** | Architectural deep-dives, live demos, and GitHub source links for flagship systems (**Red Thread, Ripple, CarePal, PocketOps**). |
| **Achievements** | Verified credentials for **Google Developers Hackathon (1st Place)**, **Cambridge English Linguaskill**, **Oracle**, and **Django Essentials (Udemy)** with **in-app PDF certificate preview & download**. |
| **Resume** | Direct ATS-friendly summary + embedded PDF viewer for [`Atharva_Warankar_AE.pdf`](public/assets/Atharva_Warankar_AE.pdf). |
| **Skills & Tech** | Filterable technical stack across backend microservices, async processing, databases, and cross-platform mobile frameworks. |
| **Contact** | 1-click clipboard email copy, fast mailto trigger, and direct social links (LinkedIn, GitHub, X). |

---

## 🛠️ Tech Stack & Architecture

### **Frontend & Rendering**
* **React 19** — State management, concurrent rendering, and modular component hierarchy.
* **TypeScript** — Strict type safety with zero `any` across all configs, apps, and device states.
* **Tailwind CSS** — Custom design tokens, glassmorphism utilities, and responsive chassis sizing.
* **Framer Motion** — Physics-based drag gestures, stagger-drop book animations, and smooth app transitions.
* **Lucide React** — Modern, lightweight iconography.

### **Engineering Core Data**
* **Red Thread** — Autonomous OSINT & graph intelligence synthesis engine (Django 5.1, PostgreSQL, Redis, React).
* **Ripple** — Autonomous code impact analysis platform inspecting Python ASTs and transitive call graphs before merging pull requests.
* **CarePal (AyuPilot)** — Cross-platform clinical companion & prescription monitoring platform built with Flutter & REST APIs.
* **PocketOps** — Mobile cloud infrastructure and Docker telemetry command center for SREs.

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** or **pnpm** or **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/atharvaworkx/Portfolio-Mobile.git

# 2. Navigate to the project directory
cd "Portfolio-Mobile"

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Visit `http://localhost:5173` in your browser to experience the operating system.

### Production Build

```bash
# Typecheck and compile production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```text
Portfolio Mobile/
├── public/
│   ├── assets/
│   │   └── Atharva_Warankar_AE.pdf       # ATS Engineering Resume
│   ├── certificates/
│   │   ├── Cambridge_Linguaskill.pdf     # Cambridge English Certification
│   │   ├── Django_Essentials_Udemy.pdf   # Udemy Django Essentials
│   │   ├── ExcelR_ChatGPT_AI.pdf         # AI & ChatGPT Specialist
│   │   └── HTML5_Python_Flask.pdf        # Flask & Python Microservices
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── apps/                         # Virtual Phone Apps
│   │   │   ├── AboutApp.tsx              # Letter shuffle & bio
│   │   │   ├── AchievementsApp.tsx       # Hackathons & in-app PDF cert viewer
│   │   │   ├── ContactApp.tsx            # Direct messaging & social links
│   │   │   ├── EducationApp.tsx          # Animated dropping books & academic cards
│   │   │   ├── ExperienceApp.tsx         # Backend & production systems
│   │   │   ├── ProjectDetailApp.tsx      # In-depth architectural inspection
│   │   │   ├── ProjectsApp.tsx           # Filterable projects catalog
│   │   │   ├── ResumeApp.tsx             # Interactive resume & PDF preview
│   │   │   └── SkillsApp.tsx             # Categorized technical arsenal
│   │   ├── panels/                       # Desktop 3D Tilted Panels
│   │   │   ├── DeveloperPanel.tsx        # Glossy name sweep & LeetCode matrix
│   │   │   ├── QuotePanel.tsx            # Baba Ranchhoddas wisdom card
│   │   │   ├── SocialPanel.tsx           # Floating say_hi dock
│   │   │   └── ThemePanel.tsx            # Paint the Sky palette switcher
│   │   └── phone/                        # Virtual Smartphone Chassis
│   │       ├── AppIcon.tsx               # Squircle launcher icons
│   │       ├── AppWindow.tsx             # Universal white UI window frame & close button
│   │       ├── HomeScreen.tsx            # 4-column app grid
│   │       ├── LockScreen.tsx            # Physics drag unlock gesture & notifications
│   │       └── PhoneFrame.tsx            # Dynamic notch, punch-hole, status bar & bezel
│   ├── config/
│   │   ├── apps.ts                       # App launcher manifest
│   │   └── portfolio.ts                  # Central source of truth for developer data
│   ├── types/
│   │   └── index.ts                      # Strict TypeScript interfaces
│   ├── App.tsx                           # Main layout & perspective 3D canvas
│   ├── index.css                         # Custom glossy sweep, glassmorphism & typography
│   └── main.tsx                          # App entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 👨‍💻 Developer Profile

**Atharva Warankar**  
*Backend & Systems Engineer • Full Stack Developer*  
📍 Pune / Bangalore, India

* 🌐 **GitHub:** [@atharvaworkx](https://github.com/atharvaworkx)
* 💼 **LinkedIn:** [linkedin.com/in/atharvaw01](https://www.linkedin.com/in/atharvaw01)
* 📧 **Email:** [atharva.workx@gmail.com](mailto:atharva.workx@gmail.com)

---

<div align="center">

*"Don't run after success. Run after perfection — success will follow."*  
— **Baba Ranchhoddas** *(3 Idiots)*

⭐ **Star this repository if you find the virtual phone OS concept inspiring!**

</div>
