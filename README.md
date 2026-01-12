# Macfolio 🍎

A stunning, interactive portfolio website inspired by the macOS user interface. Built with **React**, **TypeScript**, and **Vite**, offering a unique and engaging way to showcase projects and skills.

![Macfolio Preview](/public/images/wallpaper.jpg)

## 🚀 Features

- **MacOS Desktop Experience**: Fully interactive desktop environment with a functional Dock and Menubar.
- **Draggable Windows**: Open, minimize, maximize, and drag application windows just like a real OS.
- **Apps & Utilities**:
  - **Finder**: Browse projects (SolUPI, Coinverse) and personal info files.
  - **Safari**: "Bio & Experience" browser with resume and social links.
  - **Terminal**: Interactive shell displaying technical skills and dev tools.
  - **Photos**: Dynamic gallery viewer using Vite's glob imports.
  - **Contact**: Quick access to email and social profiles.
- **Smooth Animations**: Powered by **Framer Motion** for fluid window transitions and interactions.
- **State Management**: **Zustand** store for managing window states (open, focus, z-index).
- **Responsive Design**: Optimized for different screen sizes (with limitations on very small mobile screens).

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [GSAP](https://gsap.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/naveenkumar29052006/Macfolio.git
    cd Macfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── components/     # UI components (Dock, Navbar, Window controls)
├── constants/      # App data (socials, project details, tech stack)
├── hoc/            # Higher-Order Components (WindowWrapper)
├── store/          # Zustand stores (window management, location)
├── windows/        # Application windows (Finder, Safari, Terminal, etc.)
└── App.tsx         # Main entry point with desktop layout
```

## 👨‍💻 Author

**Naveen Kumar**
- [GitHub](https://github.com/naveenkumar29052006)
- [LinkedIn](https://www.linkedin.com/in/naveen-kumar-4217931ab/)
- [Portfolio](https://macfolio-tau.vercel.app/)

---
*Inspired by the clean and intuitive design of macOS.*
