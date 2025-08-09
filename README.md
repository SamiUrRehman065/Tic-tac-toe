# 🎮 Tic‑Tac‑Toe  Web‑Based Game with Turn Timer

## 📌 Project Overview
This is a fully interactive **Tic‑Tac‑Toe** game built with **HTML**, **CSS**, and **JavaScript** — enhanced with a **turn‑based countdown timer** for extra challenge.  
Players take turns as `"O"` and `"X"`, racing against the clock to make their move before the timer hits zero.  
The game features win detection, draw handling, and replay options for a smooth, replayable experience.

---

## ✨ Features
- **Two‑Player Gameplay** — Alternates turns between O and X.
- **⏳ Turn Timer** — Each player gets 10 seconds to make a move.
- **🏆 Win Detection** — Highlights the winner and stops the game.
- **🤝 Draw Handling** — Declares a draw if the board fills with no winner.
- **🔄 Reset/New Game Buttons** — Quickly start over without reloading.
- **📱 Responsive Layout** — Game board scales for mobile and desktop.
- **Clean UI/UX** — Visual feedback with hover effects, box shadows, and easy‑to‑read typography.

---

## 🗂 Project Structure
```plaintext
TIC-TAC-TOE/
│
├── index.html      # Game layout and structure
├── style.css       # Styling and responsive design
└── script.js       # Game logic and timer mechanics
```

---

## 🖼 UI Layout
- **Title/Header** → Centered game name for identity.
- **Timer Display** → Shows the countdown for the active player's turn.
- **3×3 Game Grid** → Interactive buttons to mark moves.
- **Message Container** → Displays winner or draw message.
- **Control Buttons** → `Reset Game` and `New Game`.

---

## ⚙️ How It Works
1. **Game Start**  
   - O begins first by default.  
   - The timer starts counting down from `10` seconds for the current turn.

2. **Player Move**  
   - Click an empty box to place your symbol (O/X).  
   - That box becomes disabled for the rest of the game.  
   - Timer resets for the next turn.

3. **Win Check**  
   - After every move, the game checks all winning patterns.  
   - If a win is found, the game stops and displays the winner.

4. **Draw Check**  
   - If all 9 boxes are filled with no winner, the game declares a draw.

5. **Timer Expiry**  
   - If the player doesn’t move in time, the turn auto‑switches to the other player.

---

## 📜 JavaScript Highlights
- **State Management**
  - `turn` → Tracks whose turn it is.
  - `count` → Counts moves to detect draw.
  - `remainingTime` & `timerInterval` → Control the per‑turn countdown.
- **Win Patterns**
  ```js
  const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
  ];
  ```
- **Key Functions**
  - `startTimer()` → Starts/reset turn countdown.
  - `checkWinner()` → Detects and announces the winner.
  - `showWinner(player)` → Updates the UI with winner info.
  - `resetGame()` → Clears the board & restarts the game.
  - `gameDraw()` → Ends game if draw is detected.

---

## 🎨 CSS Highlights
- **Responsive Units** — Uses `vmin` for scalable board sizing.
- **Flexbox** — Centers grid and elements neatly on all devices.
- **Button Styling** — Rounded, shadowed, and interactive hover states.
- **Timer Styling** — Clear visibility, with potential warning/danger colors.

---

## 🚀 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/SamiUrRehman065/Tic-tac-toe.git
   ```
2. Navigate to the project folder:
   ```bash
   cd TIC-TAC-TOE
   ```
3. Open `index.html` in your browser.

---

## 💡 Possible Improvements
- Highlight winning cells with a different color.
- Add sound effects for clicks, wins, and draws.
- Track and display running scores.
- Animate box filling for smoother experience.
- Add single‑player mode with basic AI.

---

## 🧑‍💻 Author
**Name:** Sami Ur Rehman  
**Location:** Karachi, Pakistan  
**Background:** First‑semester Computer Programming student actively building a portfolio of beginner C++ and web projects.  
**GitHub:** [SamiUrRehman065](https://github.com/SamiUrRehman065)  

---

## 🪞 Developer Reflection
Building this project was more than just creating a game — it was an exercise in **structuring code, managing state, and designing for usability**.

- **What I learned:**  
  I practiced breaking down a larger problem (an interactive game) into manageable parts — HTML for structure, CSS for appearance, and JavaScript for logic. Implementing the per‑turn timer taught me how to control game flow with `setInterval` and how to keep UI updates in sync with state changes.

- **Challenges I faced:**  
  At first, integrating the timer without breaking turn order was tricky. I also had to ensure that the game handled win, draw, and timeout conditions consistently without leaving “loopholes” where a player could still interact after the result.

- **How I solved them:**  
  I separated DOM control functions (`enableBoxes`, `disableBoxes`, `updateTimerDisplay`) from core game logic (`checkWinner`, `switchTurns`), which made debugging much easier. Testing edge cases — like the last‑second move — helped me polish the behavior.

- **Why it matters for my portfolio:**  
  This project demonstrates my ability to take a familiar game concept, add a unique twist (turn timer), and implement it cleanly with reusable code. It reflects my commitment to both **technical correctness** and **user experience**.
