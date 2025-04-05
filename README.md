## Features
- Feature icons displaying different aspects of AI learning
- Dynamic information display for each feature

## Technologies Used

- Next.js 13+ (App Router)
- React
- TypeScript
- Tailwind CSS

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/subigya-js/cognifynow.git
   ```
   
   ```
   cd cognifynow
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `src/app/page.tsx`: Main page component
- `src/app/layout.tsx`: Root layout component with font configurations
- `components/FeatureIcon.tsx`: Component for individual feature icons
- `components/FeatureInfo.tsx`: Component for displaying feature information
- `src/app/globals.css`: Global styles
- `public/assets/`: Directory containing SVG assets for the brain and feature icons

## API

The application fetches feature data from an API endpoint:

- `/api/cognify/key-features`: Returns the features data used in the application.