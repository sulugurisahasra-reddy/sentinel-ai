# Sentinel AI

Build a polished, fully interactive frontend prototype for Smart India Hackathon 2026 – Problem Statement 26102, called “MPLADS AI Sentinel – AI-Powered Project Risk & Monitoring Platform.”

Create a professional Indian government/smart-governance monitoring platform, NOT a generic admin dashboard. Use React + TypeScript + Vite + Tailwind CSS + Recharts/Lucide icons. Frontend-only with realistic mock data and simulated AI logic; no backend required. Every navigation item, project, alert, filter and action must work.

DESIGN

Clean white interface, deep navy/blue primary color with subtle saffron accents, light grey sections, professional typography, modern cards, thin borders, subtle shadows, responsive desktop/tablet/mobile layout, minimal animations, no dark theme, no excessive gradients. Make it look suitable for SIH judges and government officials.

SIDEBAR

Dashboard • Projects • Risk Analysis • Anomaly Detection • Geographic View • Reports • Alerts • Verification Queue

Header: MPLADS AI Sentinel, search, notifications, Monitoring Officer profile, DEMO DATA badge.

Footer/banner:
“AI provides risk indicators; final verification remains with authorized officials.”

DASHBOARD

Show summary cards:

Total Projects: 12,540

Fund Utilization: ₹8,420 Cr

High Risk: 126

Delayed: 218

Possible Similar/Duplicate Works: 43

Requiring Verification: 169

Add AI Monitoring Summary, Risk Distribution donut chart (Low/Medium/High), Fund Utilization vs Physical Progress chart, Monthly Completion chart, State-wise Risk Distribution, 6-month Risk Trend and “Projects Requiring Attention” table.

PROJECTS

Searchable/filterable/sortable project table with:
Project ID, Name, State, District, Project Type, Approved Amount, Released Amount, Utilized Amount, Physical Progress, Risk Score, Risk Level, Status.

Use 20–30 realistic Indian MPLADS-style projects from Telangana, Andhra Pradesh, Maharashtra, Karnataka, Tamil Nadu, Uttar Pradesh, Rajasthan, Gujarat, Odisha and West Bengal with realistic districts and ₹ amounts.

Statuses: Not Started, In Progress, Delayed, Near Completion, Completed, Under Verification.

RISK ENGINE

Every project gets a simulated 0–100 risk score based on:
Cost Anomaly + Progress/Fund Mismatch + Delay + Payment Pattern + Similarity + Norm Deviation.

Risk levels:
0–39 LOW, 40–69 MEDIUM, 70–100 HIGH.

Show a clear risk-score breakdown chart.

IMPORTANT DEMO PROJECTS

MP-1024: Community Hall Construction, Hyderabad, Telangana — Approved ₹48L, Utilized ₹42.8L, Progress 35%, Risk 87 HIGH; anomalies: cost anomaly, progress-fund mismatch, delay, possible similar project.

MP-2045: Government School Renovation, Vijayawada, Andhra Pradesh — Risk 62 MEDIUM; project delay.

MP-3012: Community Centre Construction, Hyderabad, Telangana — Risk 81 HIGH; possible similar project.

PROJECT DETAILS

Clicking any project opens a detailed page with:
Overview • Location • Project Type • Implementing Agency • Approved/Released/Utilized/Remaining Amount • Physical vs Expected Progress • Expected Completion • Timeline • Risk Score • Risk Breakdown • Detected Anomalies • Supporting Evidence • AI Explanation • Recommended Actions • Audit Trail • Verification.

Include “Why was this flagged?” with explanations such as:

Cost utilization above benchmark

Physical progress below expected progress

Similar project detected nearby

Completion deadline approaching

Use “High-risk pattern detected”, “Possible anomaly”, “Requires official verification” — NEVER claim fraud is confirmed.

ANOMALY DETECTION

Create interactive cards/pages for:

Cost Anomaly

Progress-Fund Mismatch

Project Delay

Possible Duplicate/Similar Project

Unusual Payment Pattern

Norm Deviation

For similar projects show comparison, similarity percentage, location, type and amount. Never call it a confirmed duplicate.

PRACTICAL SOLUTIONS — CORE FEATURE

After detecting risk/anomalies, automatically show Recommended Practical Actions.

Examples:

Cost anomaly → Review estimates, work orders, bills and payments → Financial Verification

Progress/fund mismatch → Conduct site inspection → Field Verification

Delay → Request revised timeline and monitor milestone → Progress Monitoring

Similar project → Compare location, scope, beneficiary and sanction details → Duplicate Verification

Payment anomaly → Review payment sequence and documents → Payment Review

Norm deviation → Compare with applicable guidelines/approval conditions → Compliance Review

Show buttons:
Mark for Verification | Assign Officer | Schedule Field Visit | Add Follow-up | Compare Projects

VERIFICATION WORKFLOW

Create Verification Queue with:
Not Reviewed → Under Verification → Field Inspection Required → Documents Requested → Verified → Escalated → Closed.

Allow mock frontend actions:
assign officer, add note, set due date, change status and mark for verification. Update dashboard counts when actions occur.

GEOGRAPHIC VIEW

Create an India map-style visualization with state risk indicators. Clicking a state shows:
Total Projects, High-Risk Projects, Fund Utilization, Delayed Projects, Average Risk Score.
Allow State → District → Project drill-down.

ALERTS

Show realistic alerts:
HIGH — MP-1024 Cost anomaly
MEDIUM — MP-2045 Project delay
HIGH — MP-3012 Possible similar project

Buttons: View Project, Mark for Verification, Mark Read.

REPORTS

Filters:
State, District, Date Range, Risk Level, Project Type, Status, Anomaly Type.

Generate a mock report preview containing project count, funds, utilization, progress, risk, delays, anomalies and verification status. Add Download Report button.

SUPPORTING FEATURES

Add global search, notification dropdown, data-quality summary (records processed, missing values, potential duplicates, last refresh), project audit timeline, demo evidence/photo section, responsive tables, loading/empty states and professional tooltips.

COMPLETE DEMO FLOW

Dashboard → High Risk Projects → MP-1024 → Risk Score 87/100 → Risk Breakdown → “Why was this flagged?” → Supporting Evidence → Detected Anomalies → Recommended Practical Actions → Mark for Verification → Assign Field Inspection → Status changes to Under Verification → dashboard updates.

FINAL REQUIREMENT

Make the prototype feel like a complete AI-assisted government monitoring workflow:

MONITOR → DETECT → ANALYZE → EXPLAIN → RECOMMEND → VERIFY → TRACK

Use mock/simulated data only and clearly label DEMO DATA. Prioritize polished UI, realistic government workflow, explainable risk indicators and practical actions over decorative features.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f0ce8cae-c8fa-4201-bfb6-34bfe77171c7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
