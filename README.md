# Student Companion — Pegasus AI Labs Starter

**AI App Builder Foundations · Lesson 1**

This repository is a **starter web app** for students who are new to programming. You will use it in **Pegasus AI Labs** to build your own **Student Companion** app across a six-lesson course.

Right now there is **no backend**, **no database**, **no login**, and **no API keys**. You get a simple, good-looking homepage you can run on your computer and change with small edits (or with help from an AI assistant).

---

## What you will do in Lesson 1

- Install the tools your instructor recommends (usually **Node.js** and a code editor).
- Open this project in your editor.
- Run the app locally and see it in your browser.
- Find the **“Student customization area”** on the page and the matching comments in the code.
- Make tiny changes to text or colors so the app starts to feel like yours.

**Ideas to try:** change the welcome message, rename a feature card, or pick a new gradient color on the main background.

---

## How to run the app

1. **Open a terminal** in this project folder (the same folder that contains `package.json`).

2. **Install dependencies** (only needed the first time, or after updates):

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open the site in your browser.**  
   The address is usually [http://localhost:3000](http://localhost:3000). If the terminal shows a different link, use that one instead.

5. **Stop the server** when you are done: click in the terminal and press **Ctrl + C** (Windows/Linux) or **Control + C** (Mac).

---

## Other useful commands

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Run the app locally while you work    |
| `npm run build`   | Check that the app builds for production |
| `npm run start`   | Run the production build (after `npm run build`) |
| `npm run lint`    | Run the linter to catch common issues |

---

## Simple troubleshooting

- **`npm: command not found`**  
  Node.js is not installed or not on your PATH. Install the current **LTS** version of Node.js from [https://nodejs.org](https://nodejs.org), then open a **new** terminal and try again.

- **Port 3000 is already in use**  
  Another app is using that port. Close the other app, or stop your other `npm run dev` window. Your instructor can also show you how to use a different port.

- **The page does not update after you save**  
  Make sure you saved the file, and that `npm run dev` is still running without errors in the terminal.

- **Errors after copying code**  
  Check that every opening `{` has a matching `}`, and that tags like `<div>` are closed with `</div>`. Compare with the original file if you need a clean starting point.

- **Editor warning about `routes.d.ts` in `next-env.d.ts`**  
  Run `npm run dev` or `npm run build` once. Next.js creates files inside the `.next` folder; after that, the warning usually goes away.

---

## Project layout (where things live)

| Path                 | What it is                                      |
| -------------------- | ----------------------------------------------- |
| `app/page.tsx`       | Homepage: hero, feature cards, footer           |
| `app/layout.tsx`     | Shared layout and page title for the browser tab |
| `app/globals.css`    | Global styles (Tailwind layers)                 |
| `components/`        | Reusable pieces: navbar, hero, cards, etc.     |

Look for comments that say **STUDENT CUSTOMIZATION AREA**, **CHANGE THIS TEXT**, or **TRY CHANGING THESE COLORS** — those are friendly signposts for your first edits.

---

## Branding

This starter is built for **Pegasus AI Labs** and the **Student Companion** course app. Have fun making it your own.

---

## License

See [LICENSE](./LICENSE) in this repository.
