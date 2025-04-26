🚨 AI Safety Incident Dashboard
Platform: Web
Framework: React + TypeScript
Styling: Tailwind CSS + shadcn/ui
State Management: React Hooks
Form Handling & Validation: React Hook Form + Zod
Icons: Lucide React
Build Tool: Vite
Dark/Light Theme Support: Fully implemented with toggle and system preference sync

🧠 Overview
This project is a submission for the Frontend Intern Take-Home Assignment at HumanChain, designed to demonstrate core frontend engineering skills aligned with real-world product development.

The dashboard allows users to view, filter, sort, and report AI safety incidents in a responsive, accessible, and user-friendly interface.

✨ Features
🔍 View Incident List
Displays incidents with Title, Severity, and Reported Date in a card layout.

🧮 Sort & Filter

Filter by Severity: All / Low / Medium / High

Sort by Date: Newest First / Oldest First

🧾 Incident Details
Each incident card includes a “View Details” toggle to show/hide full description.

📝 Report New Incident Form

Inputs: Title, Description, Severity (Dropdown)

Form validation: Required fields enforced via Zod schema

Upon submit: New incident is added to the list in-memory

🌓 Dark Mode / Light Mode

Toggle between light and dark themes

Auto-syncs with system preference

Includes fallback + user override

📱 Responsive Design

Fully responsive using Flexbox and Grid

Optimized for desktop and mobile layouts

🖼️ Visual Design

Clean, modern design with subtle animations

Severity-based color accents

Custom fonts and logo for brand personality

🛠️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/ai-safety-dashboard.git
cd ai-safety-dashboard
2. Install dependencies
bash
Copy
Edit
npm install
# or
yarn
3. Run locally
bash
Copy
Edit
npm run dev
# or
yarn dev
The app will be available at:
🔗 http://localhost:5173/

📁 Folder Structure
cpp
Copy
Edit
src/
├── components/       
├── pages/            
├── types/           
├── lib/              
├── assets/           
├── theme/            
└── App.tsx          

🧩 Design Considerations
User Experience: Prioritized intuitive controls and information hierarchy

Scalability: Modular architecture for adding more filters, fields, or views

Accessibility: Semantic HTML, focus-visible states, and keyboard accessibility

Responsiveness: Ensured layout adapts gracefully across screen sizes

🤔 Challenges & Solutions

Challenge	Solution
Theme toggle mismatch	Used attribute="class" on ThemeProvider and added useHasMounted() check to prevent hydration errors
Styling severity colors in dark mode	Created custom color utilities and conditional styles based on theme context
Form validation for dynamically added incidents	Used Zod + React Hook Form for schema-based validation and state-safe handling

👨‍💻 Author
Aditya Yadav