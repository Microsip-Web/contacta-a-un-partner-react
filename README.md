# Partner Contact Component

A React application built with TypeScript and Vite for finding and contacting Microsip business partners across Mexico.

## Features

- Search and filter partners by location and services
- Interactive partner cards with contact information
- Lazy loading of components for better performance
- Material-UI components for consistent design
- Responsive layout for all devices

## Tech Stack

- React 18
- TypeScript
- Vite
- Material-UI v6
- ESLint for code quality

## Getting Started

### Prerequisites

- Node.js (latest LTS version)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
  ```bash
  npm install
  ```

### Development

Run the development server:
```bash
npm run dev
```

### Building for Production

Build the application:
```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable React components
├── data/          # Data sources and filters
├── assets/        # Static assets
├── theme/         # MUI theme configuration
└── typings/       # TypeScript type definitions
```

## Integration with Webflow
## Integration with Webflow

After running the build, follow these steps to integrate with Webflow:

1. Push the changes to the repository.
2. Ensure the repository is public.
3. Make sure the `dist` folder is pushed to GitHub.
4. In the `dist` folder, copy the content of `index.html`.
5. Paste the content into a Webflow custom code block.
6. Use jsDelivr to serve JavaScript and CSS files to Webflow:
  - In the `assets` folder, paste the corresponding JavaScript file URL from GitHub into the jsDelivr converter.
  - Copy the jsDelivr generated URL.
  - Paste the link into the Webflow custom code block.
  - Replace the local script link in the HTML with the jsDelivr generated URL.
  - Repeat the process for the CSS code and any other necessary files.

### Public Changes for Webflow

Repeat the above process for every change in this repository.
