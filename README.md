# 🌍 World Visualizer

![Status](https://img.shields.io/badge/Status-Cancelled-red)
![License](https://img.shields.io/badge/License-MIT-yellow)

An interactive 3D globe visualization application for exploring world data through an immersive educational experience. Discover countries, their demographics, and educational statistics in a beautiful and engaging interface.

## ✨ Features

- **Interactive 3D Globe**: Explore the world with a realistic Earth texture and night sky background
- **Country Data Visualization**: Click on any country to reveal detailed information including demographics, economy, and geography
- **Educational Content**: Focus on Early Childhood Development programs and educational statistics
- **Screenshot Capture**: Real-time capture of selected countries for documentation purposes
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Modern UI**: Clean interface built with NextUI components and Tailwind CSS
- **Toggle Views**: Switch between interactive globe and list view perspectives

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **3D Visualization**: React Globe.gl powered by Three.js
- **Data Processing**: D3.js for geographic data transformations
- **UI Components**: NextUI for modern React components
- **Styling**: Tailwind CSS for responsive design
- **Icons**: FontAwesome for comprehensive iconography
- **Animations**: Framer Motion for smooth transitions
- **Screenshots**: HTML2Canvas for image capture functionality

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/world-visualizer.git
cd world-visualizer
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── MyGlobe.tsx     # Main 3D globe component
│   ├── GlobeModal.tsx  # Country information modal
│   ├── CountryInfo.tsx # Country details display
│   └── ...             # Additional UI components
├── hooks/              # Custom React hooks
│   ├── useColorScale.ts # Color scaling for data visualization
│   └── useScreenshot.ts # Screenshot capture functionality
├── lib/                # Utility functions
└── countries.ts        # Geographic and demographic data
```

## 🎯 Usage

1. **Explore the Globe**: The globe auto-rotates by default. Use your mouse to manually rotate and zoom
2. **Select Countries**: Click on any country to view detailed information
3. **View Details**: A modal will open showing country statistics, demographics, and educational data
4. **Toggle Views**: Use the toggle button to switch between globe and list view
5. **Capture Screenshots**: Screenshots are automatically taken when viewing country details

## 🌟 Key Components

### MyGlobe Component

The core 3D globe visualization featuring:

- Interactive country polygons with hover effects
- Color-coded visualization based on data metrics
- Smooth auto-rotation with manual controls
- Click handlers for country selection

### GlobeModal Component

Comprehensive country information display including:

- Country overview and statistics
- Educational program data
- Interactive accordion panels
- Screenshot integration

## 📊 Data Sources

The application uses comprehensive country data including:

- Geographic boundaries and coordinates
- Population and demographic statistics
- Economic indicators (GDP, income groups)
- Educational development metrics
- Early Childhood Development program information

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.