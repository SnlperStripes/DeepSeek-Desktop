# DeepSeek Chat App 🚀

DeepSeek Chat App is a cross‑platform desktop application built with [Tauri](https://tauri.app), Rust, and React. It loads a modern chat interface directly from [chat.deepseek.com](https://chat.deepseek.com) and is designed for performance, security, and ease of use.

## Features ✨

- **Cross-Platform:** Runs on Windows, macOS, and Linux with one unified codebase.
- **Modern Frontend:** Built with React and TypeScript for a dynamic, responsive UI.
- **Efficient Backend:** Powered by Rust and Tauri, delivering small binaries and high performance.
- **Session Persistence:** Native webview storage preserves sessions (cookies, localStorage) across restarts.
- **Easy to Build & Deploy:** Use Tauri’s built‑in bundling for creating production-ready installers.

## Pre-Built Releases 📦

You can download the pre-built releases from the [GitHub Releases](https://github.com/SnlperStripes/Deepseek-Desktop/releases) page and use them directly without needing to build the project yourself.

---

## Build from Source (Optional) 🛠

If you prefer to build the app yourself, follow these steps:

### Prerequisites

- [Node.js (v16+)](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Rust & Cargo](https://www.rust-lang.org/)
- [Tauri CLI](https://tauri.app/v2/guides/getting-started/setup)

### Clone and Install Dependencies

```bash
git clone https://github.com/SnlperStripes/Deepseek-Desktop.git
cd deepseek_app
pnpm install
