# Pixels - Collaborative Educational Platform

A modern, pixel-art inspired educational platform featuring a unique version control system for learning resources. Built with vanilla HTML, CSS, and JavaScript.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Features

- **Browse & Search** - Explore educational courses and resources across multiple subjects
- **Create Content** - Build new courses, notes, and cheat sheets with a rich text editor
- **Version Control** - Fork and improve existing content with full version history
- **Community Discussions** - Engage with learners and contributors
- **Leaderboard & Achievements** - Earn badges and track your contributions
- **Dark/Light Theme** - Toggle between themes for comfortable learning
- **Responsive Design** - Works seamlessly across all devices

## Quick Start

### Prerequisites

- Any modern web browser
- Python 3.x (for local server) or any static file server

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hossem2003/pixels.git
   cd pixels
   ```

2. **Start a local server:**
   ```bash
   python -m http.server 8080
   ```

3. **Open your browser:**
   Navigate to `http://localhost:8080`

## Project Structure

```
pixels/
├── index.html              # Homepage with featured courses
├── browse.html             # Browse all resources
├── course.html             # Course content viewer
├── create.html             # Content creation editor
├── improve.html            # Fork & improve interface
├── versions.html           # Version history
├── compare.html            # Version comparison
├── profile.html            # User profile
├── discussions.html        # Community discussions
├── leaderboard.html        # Top contributors
├── workflow.html           # Platform workflow guide
├── settings.html           # User preferences
├── notifications.html      # Activity notifications
├── help.html               # Help documentation
├── about.html              # About the platform
├── contributions.html      # User contributions list
├── sitemap.html           # Site navigation map
├── login.html             # Authentication page
├── styles/
│   ├── main.css           # Core styles & variables
│   └── *.css              # Page-specific styles
└── scripts/
    ├── main.js            # Core functionality
    ├── course.js          # Course interactions
    ├── improve.js         # Editor functionality
    └── *.js               # Page-specific scripts
```

## Key Pages

### Home (`index.html`)
Featured courses and subject categories with quick navigation

### Browse (`browse.html`)
Comprehensive resource listing with filtering and search capabilities

### Course Viewer (`course.html`)
Interactive course content with table of contents and version info

### Create (`create.html`)
Rich text editor for creating new educational content

### Improve (`improve.html`)
Fork existing content, make improvements, and submit new versions

### Discussions (`discussions.html`)
Community discussions with threads, replies, and voting

### Leaderboard (`leaderboard.html`)
Top contributors ranked by community score and achievements

## Design System

### Color Palette
- **Primary**: Cyan (#00ffff) - Main brand color
- **Secondary**: Magenta (#ff00ff) - Accent color
- **Background**: Dark (#0a0a1e) / Light (#f5f5f5)
- **Surface**: Slightly lighter variations for cards and panels

### Typography
- **Display Font**: Press Start 2P (Google Fonts) - Pixel art aesthetic
- **Body Font**: System font stack for readability

### Icons
- Font Awesome 6.5.1 for consistent iconography

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **JavaScript** - Vanilla JS (no frameworks)
- **Font Awesome** - Icon library
- **Google Fonts** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Walkthrough

### 1. Creating Content
Navigate to the Create page, choose your content type (Course/Notes/Cheat Sheet), and use the rich text editor to build your content.

### 2. Improving Versions
Find a resource, click "Improve This Version", make your changes, describe them, and submit a new version.

### 3. Version Control
Each resource maintains a complete version history. Compare versions side-by-side and see what changed.

### 4. Community Engagement
Participate in discussions, upvote helpful contributions, and earn achievements.

## Contributing

This is a demo/portfolio project, but contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Hossem Pixel** ([@hossem2003](https://github.com/hossem2003))

## Acknowledgments

- Font Awesome for the icon library
- Google Fonts for Press Start 2P typeface
- Inspired by collaborative learning platforms and version control systems

## Contact

For questions or feedback, feel free to reach out or open an issue!

---

**Star this repo if you find it helpful!**
