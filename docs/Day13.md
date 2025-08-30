# Day 13 – React Developer Tools (Debugging)

This note gives you everything you need in a **simple, step‑by‑step way**:

---

## 1) Install React Developer Tools

### Chrome

1. Open **Chrome Web Store** → Search **React Developer Tools**.
2. Click **Add to Chrome** → **Add extension**.
3. Open your React app → Right‑click → Inspect → You should see **⚛️ Components** and **⚛️ Profiler** tabs.

### Firefox

1. Open **Firefox Add‑ons** → Search **React Developer Tools**.
2. Click **Add to Firefox**.
3. Open your React app → Inspect → Look for **Components** and **Profiler** tabs.

---

## 2) Get and Run the Demo

1. Clone or download your repo:

   ```bash
   git clone REPO_URL
   cd react-learning-journey
   ```

   Or download ZIP from GitHub → extract.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add the demo file:

   - `src/days/Day13/DevToolsDemo.jsx` (already written).
   - Import in `App.jsx`:

     ```jsx
     import DevToolsDemo from "./days/Day13/DevToolsDemo";

     export default function App() {
       return <DevToolsDemo />;
     }
     ```

4. Start the app:

   ```bash
   npm run dev   # (Vite)
   npm start     # (CRA)
   ```

   Open the shown localhost URL.

---

## 3) Explore with DevTools

### Components Tab

1. Open **Inspect → Components**.
2. Select `DevToolsDemo`.
3. See **Hooks** → `count`, `query` values.
4. Click **Increment** → watch state change live.
5. Type in filter → see `query` update.

### Profiler Tab

1. Go to **Profiler** → Click **Start profiling**.
2. Interact: click, type, scroll.
3. Stop profiling → Check which components re‑rendered and why.
4. Optional: In settings, enable **Highlight updates** to see borders flash.

---

## 4) Quick Experiments

**Experiment A: Inline callback**

- Change:

  ```jsx
  <ChildButton onIncrement={handleIncrement} label="Increment" />
  ```

  to

  ```jsx
  <ChildButton onIncrement={() => setCount((c) => c + 1)} label="Increment" />
  ```

- Profile → Notice ChildButton re‑renders every time.

**Experiment B: Remove useMemo**

- Replace:

  ```jsx
  const filtered = useMemo(
    () => numbers.filter((n) => String(n).includes(query)),
    [numbers, query]
  );
  ```

  with

  ```jsx
  const filtered = numbers.filter((n) => String(n).includes(query));
  ```

- Type in filter → Profiler shows heavier updates.

**Fix:** Restore `useCallback` and `useMemo`. Re‑profile → fewer renders.
