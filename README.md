# AI HR Recruiter

AI-powered HR screening application for automated CV evaluation and candidate follow-up.

The system analyzes uploaded CVs, ranks candidates against a job description, and automatically generates follow-up questions for promising profiles. Candidate responses are collected via a secure link and stored for review.

## Key Features

- AI-based CV parsing (structured candidate profiles)
- Automated candidate ranking (score + recommendation)
- Automatic follow-up question generation for *Consider* candidates
- Email-based follow-up workflow
- Admin dashboard for reviewing candidates and answers
- Clean SaaS-style frontend UI

## Architecture

- **Frontend:** React (Vite), modern SaaS UI
- **Backend:** FastAPI, OpenAI API, SMTP email
- **Database:** SQLite

> **Note:** `main.py` (backend entry file) is intentionally **not included** in this repository due to licensing and API key usage.  
> This repository serves as a **presentation project**, not a runnable production setup.

## Purpose

This project demonstrates:
- Practical AI integration (LLMs in business workflows)
- Backend–frontend communication
- Automated decision support systems
- End-to-end product thinking (UX + logic + automation)

