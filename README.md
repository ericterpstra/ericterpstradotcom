# Eric Terpstra's Portfolio

A minimalist portfolio website built with 11ty, showcasing Eric Terpstra's projects.

## Features

- Responsive grid layout for projects
- Dark theme with monospace typography
- Minimal design focused on showcasing projects
- Optimized for performance and accessibility
- Direct deployment to Cloudflare Pages

## Tech Stack

- **Static Site Generator**: [11ty (Eleventy)](https://www.11ty.dev/)
- **CSS**: Custom CSS with modern features (CSS Grid, Flexbox, Variables)
- **Deployment**: Cloudflare Pages with built-in 11ty support
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

## Deployment to Cloudflare Pages

Cloudflare Pages has built-in support for 11ty projects, making deployment simple:

1. Push your code to a GitHub repository
2. Log in to your Cloudflare dashboard
3. Navigate to Pages > Create a project
4. Connect your GitHub account and select your repository
5. Configure the build settings:
   - Framework preset: Eleventy
   - Build command: `npm run build`
   - Build output directory: `_site`
6. Click "Save and Deploy"
7. Once deployed, you can configure your custom domain in the Cloudflare Pages settings

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
