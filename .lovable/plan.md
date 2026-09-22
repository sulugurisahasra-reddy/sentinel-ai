# MPLADS AI Sentinel Prototype

## Goal
Build a polished, frontend-only monitoring workspace for SIH 2026 Problem Statement 26102, using realistic mock MPLADS project data and simulated explainable-risk logic.

## Experience
- Responsive government monitoring shell with navy navigation, saffron status accents, global search, notifications, officer profile, demo labels, and the official-verification disclaimer.
- Full page navigation for Dashboard, Projects, Risk Analysis, Anomaly Detection, Geographic View, Reports, Alerts, and Verification Queue.
- Complete demo journey from high-risk discovery to project explanation, evidence, recommended action, verification assignment, and updated monitoring counts.

## Core Screens
- Dashboard with six summary indicators, AI monitoring summary, four analytical charts, state risk summary, quality metrics, and attention table.
- Projects workspace with 24 realistic records, searching, filtering, sorting, responsive table behavior, and clickable details.
- Project details with funding, progress, risk breakdown, timeline, anomalies, evidence, AI explanation, actions, audit trail, and verification controls.
- Risk and anomaly workspaces with score-factor analysis, anomaly category cards, and similar-project comparisons.
- Geographic workspace with an interactive India-style state visualization and state-to-district-to-project drill-down.
- Reports with multi-filter preview and downloadable mock report.
- Alerts with read and verification actions.
- Verification Queue with status progression, officer assignment, due dates, notes, and field-inspection actions.

## Interaction and State
- Keep shared prototype state in React so alert, verification, status, assignment, and count changes appear throughout the experience.
- Provide working global search, menus, filters, sorting, tabs, dialogs, empty states, loading feedback, tooltips, and report download.
- Use cautious language throughout: risk indicators and possible anomalies, never confirmed fraud.

## Technical Details
- TanStack Start/React 19 with TypeScript, Tailwind CSS v4 semantic tokens, Lucide icons, Recharts, and existing interface primitives.
- Create distinct route files and unique metadata for each shareable screen.
- Store mock datasets and state logic in client-safe modules; no database, login, external services, or server code.
- Validate representative desktop and mobile flows in the running preview, including the MP-1024 verification journey.
