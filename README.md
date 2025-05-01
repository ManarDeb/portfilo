# Personal Portfolio Website

A modern, responsive portfolio website built with React and Material-UI, showcasing professional experience, skills, and projects.

## Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Smooth scrolling navigation
- Interactive project cards
- Contact form
- Timeline-based experience section
- Skills showcase with categorized sections
- Education timeline
- Social media integration

## Technologies Used

- React
- TypeScript
- Material-UI
- Framer Motion
- React Router
- Styled Components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Project Structure

```
src/
  ├── components/         # React components
  │   ├── About.tsx
  │   ├── Contact.tsx
  │   ├── Education.tsx
  │   ├── Experience.tsx
  │   ├── Hero.tsx
  │   ├── Navbar.tsx
  │   ├── Projects.tsx
  │   └── Skills.tsx
  ├── App.tsx            # Main App component
  ├── main.tsx          # Entry point
  └── index.css         # Global styles
```

## Customization

1. Update personal information in the respective component files
2. Modify the theme colors in `App.tsx`
3. Add or remove sections as needed
4. Update project images in the `public/projects` directory

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
