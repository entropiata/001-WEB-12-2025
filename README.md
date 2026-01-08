# Puskesmas Pasongsongan Website

A modern, responsive website for Puskesmas Pasongsongan built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, and Vite for fast development
- **Responsive Design**: Mobile-first design that works on all devices
- **UI Components**: Comprehensive set of UI components using Radix UI primitives
- **Routing**: Client-side routing with React Router
- **Styling**: Tailwind CSS with custom theme and dark mode support
- **Type Safety**: Full TypeScript support for better developer experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository (if not already cloned):
```bash
git clone <repository-url>
cd 001-WEB-12-2025
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode
Start the development server with hot reload:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
001-WEB-12-2025/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (buttons, cards, etc.)
│   │   ├── pages/        # Page components (Home, Profil, etc.)
│   │   ├── figma/        # Figma-exported components
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── Footer.tsx    # Footer component
│   ├── styles/
│   │   └── globals.css   # Global styles and Tailwind imports
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Application entry point
├── index.html            # HTML entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── eslint.config.js      # ESLint configuration
```

## 🎨 Available Pages

- **Home** (`/`) - Landing page with services overview
- **Profil** (`/profil`) - About the Puskesmas
- **Pelayanan** (`/pelayanan`) - Services listing
- **Pelayanan Detail** (`/pelayanan/:slug`) - Individual service details
- **Artikel** (`/artikel`) - Articles and news
- **Artikel Detail** (`/artikel/:slug`) - Individual article details
- **Inovasi** (`/inovasi`) - Innovations showcase
- **Inovasi Detail** (`/inovasi/:slug`) - Individual innovation details
- **Hubungi Kami** (`/hubungi-kami`) - Contact page

## 🔧 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Slick** - Carousel component
- **Class Variance Authority** - Component variants

## 📝 Configuration Files

- **vite.config.ts**: Vite configuration with React plugin and path aliases
- **tsconfig.json**: TypeScript compiler options
- **tailwind.config.js**: Tailwind CSS theme customization
- **eslint.config.js**: ESLint rules for code quality
- **postcss.config.js**: PostCSS plugins configuration

## 🎯 Development Tips

1. **Path Aliases**: Use `@/` to import from the `src` directory
2. **Component Structure**: UI components are in `src/components/ui/`
3. **Styling**: Use Tailwind utility classes for styling
4. **Icons**: Import icons from `lucide-react`
5. **Type Safety**: All components are fully typed with TypeScript

## 🐛 Troubleshooting

If you encounter issues:

1. **Clear node_modules and reinstall**:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. **Clear Vite cache**:
```bash
rm -rf node_modules/.vite
npm run dev
```

3. **Check Node version**:
```bash
node --version  # Should be 18 or higher
```

## 📄 License

See the LICENSE file for details.

## 👥 Contributing

This project was generated from a Figma export. All UI components have been configured and are ready to use.

---

Built with ❤️ for Puskesmas Pasongsongan
