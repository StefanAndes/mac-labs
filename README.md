# Modern E-commerce Store

A modern, responsive e-commerce website built with React, Vite, and Tailwind CSS. Features a fluid, fast-loading design with smooth animations and excellent mobile/desktop experience.

## Features

- 🛍️ Modern, clean design with smooth animations
- 📱 Fully responsive (mobile and desktop)
- ⚡ Fast loading with Vite and code splitting
- 🎨 Beautiful UI with Tailwind CSS
- 🛒 Shopping cart with persistent storage
- 🔍 Product search and filtering
- 💳 Checkout flow with form validation
- 🎯 SEO optimized

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion
- **Icons:** React Icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd modern-ecommerce-store
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # Reusable components
│   ├── cart/          # Cart-related components
│   ├── common/        # Common UI components
│   ├── home/          # Homepage components
│   ├── layout/        # Layout components (Header, Footer)
│   └── products/      # Product-related components
├── context/           # React Context for state management
├── data/              # Mock product data
├── pages/             # Page components
├── App.jsx            # Main app component
├── main.jsx           # App entry point
└── index.css          # Global styles
```

## Features Overview

### Homepage
- Hero section with image carousel
- Featured products section
- Category showcase
- Promotional banners
- Newsletter signup

### Product Catalog
- Grid/list view of products
- Filtering by category, price range
- Sorting options
- Responsive product cards with hover effects

### Product Details
- Image gallery
- Size and color selection
- Add to cart functionality
- Related products

### Shopping Cart
- Slide-out cart drawer
- Quantity adjustment
- Remove items
- Persistent cart storage

### Checkout
- Multi-step checkout process
- Form validation
- Order summary
- Secure checkout indicators

## Performance Optimizations

- Lazy loading of routes
- Image optimization with lazy loading
- Code splitting for better performance
- Optimized bundle size with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License 