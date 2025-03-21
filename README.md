# Eric Terpstra's Portfolio

A minimalist portfolio website built with 11ty, showcasing Eric Terpstra's projects.

## Features

- Responsive grid layout for projects
- Dark theme with monospace typography
- Minimal design focused on showcasing projects
- Optimized for performance and accessibility
- Automatic deployment to Cloudflare Pages

## Tech Stack

- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **CSS**: Custom CSS with modern features (CSS Grid, Flexbox, Variables)
- **Deployment**: GitHub → Cloudflare Pages
- **Image Optimization**: 11ty Image plugin

## Development

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ericterpstra/ericterpstradotcom.git
   cd ericterpstradotcom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `_site` directory.

## Deployment

This site is automatically deployed to Cloudflare Pages when changes are pushed to the main branch.

### Manual Deployment

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Pages using Wrangler:
   ```bash
   npx wrangler pages publish _site --project-name=ericterpstradotcom
   ```

## Customization

### Adding Projects

To add or modify projects, edit the `src/_data/projects.json` file.

### Modifying Styles

The CSS files are located in `src/assets/css/`:
- `reset.css`: CSS reset
- `typography.css`: Typography styles
- `grid.css`: Grid layout
- `main.css`: Main styles and components

### Changing Site Information

Site information is stored in `src/_data/site.json`.

## License

MIT
