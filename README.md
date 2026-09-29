# Nexus Finance

Nexus Finance is an AI-powered financial intelligence platform for understanding companies, financial markets, financial news, risks, and market movements through structured financial data and AI-driven analysis.

> Nexus Finance is an intelligence and analysis platform. It is not a trading platform, brokerage, or portfolio management application.

## Overview

Nexus Finance is designed to help users understand:

- What is happening in the market and why a company or market may be moving
- Which companies are performing strongly or experiencing weaknesses
- The risks and downside factors that could affect a company
- What is happening in financial news
- What AI analysis indicates and how that analysis can be understood
- Different possible scenarios and their potential effects

The project is being developed as a university team project, with work spanning web frontend, mobile development, backend development, machine learning and AI, and data engineering.

## Key Features

- Market intelligence and market movement analysis
- Company analysis and company comparison
- AI-powered financial insights
- Explainable AI analysis
- Financial news intelligence
- Company strengths and weaknesses
- Risk and downside analysis
- Market analytics
- Scenario and What-If analysis
- Company discovery
- Watchlists
- Economic calendar
- Notifications
- User accounts and personalized user preferences

## Application Areas

The planned application experience includes the following areas:

| Area                 | Purpose                                                     |
| -------------------- | ----------------------------------------------------------- |
| Landing Page         | Introduces the Nexus Finance platform.                      |
| Authentication       | Provides the entry point for user accounts.                 |
| Dashboard            | Brings together relevant financial intelligence for a user. |
| Explore              | Supports discovery of companies and market information.     |
| Companies            | Provides access to company-focused views.                   |
| Company Analysis     | Presents analysis of a selected company.                    |
| Company Comparison   | Supports comparison between companies.                      |
| AI Center            | Provides AI-powered and explainable financial insights.     |
| News Center          | Organizes financial news intelligence.                      |
| Market Analytics     | Presents market-level analysis and movement information.    |
| Risk Analysis        | Examines company risks and downside factors.                |
| What-If Scenarios    | Explores possible scenarios and their potential effects.    |
| Watchlists           | Supports tracking selected companies or market items.       |
| Economic Calendar    | Provides access to relevant economic events.                |
| Notifications        | Presents updates relevant to the user.                      |
| Profile and Settings | Manages account details and personalized preferences.       |

## Technology Stack

### Web Application

| Technology   | Role                                            |
| ------------ | ----------------------------------------------- |
| Next.js      | Web application framework.                      |
| React        | User interface library.                         |
| TypeScript   | Type-safe application development.              |
| Tailwind CSS | Utility-first styling.                          |
| shadcn/ui    | Planned component system for the web interface. |

The current web application in this repository is a Next.js project using React, TypeScript, and Tailwind CSS. The current `package.json` does not yet list `shadcn/ui` as a dependency.

## System Architecture

The platform architecture connects financial and economic data with data engineering, machine learning, AI services, and client applications:

```text
Financial APIs / News / Economic Data
                ↓
        Data Engineering
                ↓
       Azure Data Platform
                ↓
           ML Models
                ↓
       FastAPI AI Service
                ↓
      Spring Boot Backend
                ↓
        ┌───────┴───────┐
        ↓               ↓
     Next.js          Flutter
       Web             Mobile
```

## Web Frontend Structure

The intended Next.js frontend follows a feature-oriented structure similar to:

```text
src/
├── app/
├── components/
│   ├── ui/
│   ├── charts/
│   ├── tables/
│   ├── forms/
│   └── layout/
├── features/
├── hooks/
├── lib/
├── types/
└── public/
```

The current repository is an early web application scaffold organized under `src/`. The structure above represents the frontend organization as the application expands.

## Local Development

### Prerequisites

- Node.js with npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

The local development server runs at `http://localhost:3000` by default.

### Available scripts

```bash
npm run dev      # Start the development server
npm run build    # Create a production build
npm run start    # Start the production server
npm run lint     # Run ESLint
```

## Project Team and Development Areas

Nexus Finance is developed by a university team working across:

- Web Frontend
- Mobile Development
- Backend Development
- Machine Learning / AI
- Data Engineering

## Current Status

Nexus Finance is currently under development. This repository contains the early Next.js web application scaffold. The broader backend, AI and data platform, and Flutter mobile application are part of the project architecture and development scope.

## Project Usage

This repository is intended for the Nexus Finance university team project. No open-source license has been specified for the repository yet; usage and redistribution should therefore be treated as reserved to the project team until a license is added.
