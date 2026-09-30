# Prototype verification

## Completed in this environment
- [x] Design tokens and responsive CSS implemented.
- [x] Seven requested routes/screens implemented.
- [x] Three scripted watershed cases implemented.
- [x] Future API-shaped fixtures implemented on client and Express mock routes.
- [x] English/Hindi i18next switch implemented.
- [x] Timeline T0–T5 interaction implemented.
- [x] Photo-to-satellite evidence state implemented; mismatch and verified stamps are explicit.
- [x] Alerts for mismatch and no-photo coverage implemented.
- [x] Light field-paper report register implemented.
- [x] Keyboard focus, skip link, labels, status icon + text, reduced-motion support included.
- [x] Node syntax check passed for server files.
- [x] TypeScript source parse produced no syntax errors; unresolved external-module errors are expected because dependencies could not be installed in this runner.

## Not completed in this environment
- [ ] `npm install` / Vite production build: the environment cannot resolve `registry.npmjs.org`.
- [ ] Live browser verification and screenshots at 390px / 768px / 1440px: no browser-driving integration is available in this runner. Chromium is present, but the React/Vite dependency tree could not be installed.

## Local verification
```bash
npm run install:all
npm run dev
```
Then inspect at:
- 390 × 844 — phone / field verification
- 768 × 1024 — tablet
- 1440 × 900 — desktop review console

Suggested route checklist:
1. `/` — scan-line hero and CTA
2. `/selector` — three survey-stake cases
3. `/dashboard/WB-117` — mismatch fusion demo
4. `/dashboard/WB-042` — verified demo + timeline
5. `/dashboard/WB-209` — zero-photo data gap
6. `/feed` — filters
7. `/report/WB-042` — paper register
8. `/alerts` — mismatch + no-photo alerts
9. `/rollout` — national/state roll-up view
10. Toggle English/Hindi from the header and test keyboard focus order.
