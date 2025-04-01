# Johnny's Portfolio Website

A modern, dark-themed portfolio website for a product designer, featuring smooth animations and a professional layout.

## Features

- Responsive design with mobile-first approach
- Dark theme with modern aesthetics
- Smooth scroll animations
- Interactive 3D object that rotates on scroll
- Comprehensive sections: Home, Portfolio, About, Career, FAQ, and Contact
- Clean, minimalist UI with focus on content and user experience

## Technologies Used

- React.js (v19)
- CSS3 with custom animations
- Intersection Observer API for scroll animations
- Responsive design principles

## Project Structure

```
my-website/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       └── 3d-object.png (you'll need to add this)
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Portfolio.js
│   │   ├── About.js
│   │   ├── Career.js
│   │   ├── FAQ.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── globals.css
│   │   └── animations.css
│   ├── App.js
│   ├── index.js
│   └── index.css
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone this repository
   ```bash
   git clone <repository-url>
   cd my-website
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Add necessary assets
   - Create an `assets` folder inside the `public` directory
   - Add a 3D object image named `3d-object.png` to the assets folder

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Building for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

The build files will be stored in the `build/` folder.

## Customization

- Replace placeholder images with your own project screenshots
- Update the content in each component to reflect your own experience and portfolio
- Modify the color scheme in `globals.css` by updating the CSS variables in the `:root` selector
- Add or remove sections as needed by modifying the `App.js` file

## Credits

- Design inspiration from Paul Smith's portfolio
- Implementation by Johnny
- Template created by Sebadam

## License

This project is licensed under the MIT License.