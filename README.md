# Prepwise

An AI-powered job interview preparation platform built with Next.js, Firebase, Vapi AI, and Google Gemini.

## Live Demo

**Live Demo:** `PASTE_YOUR_LIVE_LINK_HERE`

## Introduction

Prepwise helps users practice job interviews using AI voice agents.

Users can create interviews, answer questions through an AI voice assistant, and receive feedback based on their performance.

## Tech Stack

- Next.js
- Firebase
- Tailwind CSS
- Vapi AI
- shadcn/ui
- Google Gemini
- Zod

## Features

- **Authentication** — Sign up and sign in using Firebase authentication.
- **Create Interviews** — Generate technical, behavioral, or mixed interviews.
- **AI Voice Interviews** — Practice interviews with an AI voice agent.
- **AI Feedback** — Get feedback and scores after completing an interview.
- **Interview Transcripts** — Review the interview conversation.
- **Dashboard** — Manage and track your interviews.
- **Responsive Design** — Works across desktop, tablet, and mobile devices.
- **Modern UI** — Clean and user-friendly interface.

## Getting Started

### Prerequisites

Make sure you have installed:

- Git
- Node.js
- npm

### Installation

Clone the project and enter the project directory:

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Add your own credentials to the environment variables.

### Run the Project

Start the development server:

```bash
npm run dev
```

Then open the local development address shown in your terminal.

## Project Overview

Prepwise provides an interactive interview experience where users can:

1. Create an interview.
2. Select the job role and interview type.
3. Answer questions using an AI voice agent.
4. Complete the interview.
5. Receive an AI-generated performance report.
6. Review strengths and areas for improvement.

## Feedback System

After an interview, Prepwise evaluates the candidate based on:

- Communication Skills
- Technical Knowledge
- Problem-Solving
- Cultural & Role Fit
- Confidence & Clarity

Each category receives a score along with feedback and suggestions for improvement.

## License

This project is for educational and development purposes.
