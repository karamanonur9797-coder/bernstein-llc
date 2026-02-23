# Execution Scripts

This directory contains deterministic Python scripts (Layer 3 of the 3-layer architecture).

## Purpose
- API calls, data processing, file operations, database interactions
- Each script should be reliable, testable, and well-commented
- Called by the AI orchestrator (Layer 2) based on directives (Layer 1)

## Conventions
- Use `.env` for all API keys and secrets (never hardcode)
- Write intermediate files to `.tmp/`
- Deliverables go to cloud services (Google Sheets, Slides, etc.)
- Include error handling and logging in every script
