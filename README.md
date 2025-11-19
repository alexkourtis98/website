# Personal Portfolio Website

A minimal, elegant portfolio website with a modern monochrome design and vibrant blue accents.

## 🎨 Design Features

- **Monochrome Color Palette**: Black, white, and grayscale tones with vibrant blue (#0066FF) accents
- **Modern Typography**: Clean Inter font family with proper hierarchy
- **Smooth Animations**: Fade-in effects on scroll, hover transitions, and interactive elements
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Accessibility Focused**: Semantic HTML, keyboard navigation, and reduced motion support

## 📁 File Structure

```
mynewwebsite/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── script.js       # Animations and interactive functionality
└── README.md       # This file
```

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in your web browser. No build process required!

### Option 2: Local Server
For a better development experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## ✏️ Customizing Your Content

### 1. Personal Information (Hero Section)
Edit the hero section in `index.html`:

```html
<h1 class="hero-title fade-in">Your Name</h1>
<p class="hero-subtitle fade-in">they/them · Location</p>
<p class="hero-description fade-in">Your professional title and introduction</p>
```

### 2. About Section
Replace the placeholder text with your professional summary:

```html
<div class="about-content fade-in">
    <p>Your professional background and expertise...</p>
</div>
```

### 3. Work Experience
Update each experience item with your actual work history:

```html
<div class="experience-item fade-in">
    <div class="experience-header">
        <h3 class="experience-title">Your Job Title</h3>
        <span class="experience-date">2023 - Present</span>
    </div>
    <p class="experience-company">
        <a href="https://company.com">Company Name</a>
    </p>
    <ul class="experience-list">
        <li>Your achievements and responsibilities</li>
    </ul>
</div>
```

### 4. Skills
Customize the skills section with your actual skills:

```html
<div class="skill-tags">
    <span class="skill-tag">Your Skill</span>
    <!-- Add more skill tags -->
</div>
```

### 5. Education
Update with your educational background:

```html
<div class="education-item fade-in">
    <div class="education-header">
        <h3 class="education-degree">Your Degree</h3>
        <span class="education-date">Year</span>
    </div>
    <p class="education-institution">University Name</p>
</div>
```

### 6. Contact Links
Replace placeholder URLs with your actual profiles:

```html
<a href="mailto:your.email@example.com" class="contact-link">Email</a>
<a href="https://github.com/yourusername" class="contact-link">GitHub</a>
```

## 🎨 Customizing Colors

### Changing the Accent Color
In `styles.css`, find the `:root` section and modify:

```css
--color-accent: #0066FF;        /* Main accent color */
--color-accent-light: #3385FF;  /* Lighter variant */
--color-accent-dark: #0052CC;   /* Darker variant */
```

### Popular Color Schemes
- **Blue** (current): `#0066FF`
- **Teal**: `#00CED1`
- **Purple**: `#8B5CF6`
- **Green**: `#10B981`
- **Coral**: `#FF6B6B`

### Changing Background/Text Colors
Modify the grayscale palette in the `:root` section:

```css
--color-black: #000000;
--color-gray-900: #1a1a1a;
/* ... etc */
```

## 🔧 Advanced Customization

### Optional Features
In `script.js`, uncomment these functions at the bottom to enable:

```javascript
// initSkillTagShuffle();     // Animated skill tags on hover
// initParallaxEffect();      // Parallax scrolling in hero
// initTypingAnimation();     // Typing effect for hero title
// initActiveNavHighlight();  // Highlight active section in nav
```

### Changing Fonts
Replace the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font family in `styles.css`:

```css
--font-family: 'YourFont', sans-serif;
```

### Adjusting Spacing
Modify spacing variables in `styles.css`:

```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
/* ... etc */
```

### Changing Animation Speed
Adjust transition durations:

```css
--transition-fast: 0.15s ease;
--transition-base: 0.3s ease;
--transition-slow: 0.5s ease;
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Adjust breakpoints in the media queries section of `styles.css`.

## ♿ Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion support for users who prefer it
- High contrast color combinations

## 🌐 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourrepo.git
   git push -u origin main
   ```
3. Go to Settings > Pages
4. Select "main" branch and save
5. Your site will be live at `https://yourusername.github.io/yourrepo`

### Netlify
1. Drag and drop your folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site is live instantly!

### Vercel
```bash
npm i -g vercel
vercel
```

## 📝 Content Checklist

Before deploying, make sure you've updated:

- [ ] Personal name and title
- [ ] Professional summary
- [ ] Work experience (all entries)
- [ ] Skills and technologies
- [ ] Education details
- [ ] Contact email
- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] Any other social media links
- [ ] Page title in `<title>` tag
- [ ] Meta description
- [ ] Footer copyright year

## 🔍 SEO Optimization

Update the meta tags in `index.html`:

```html
<title>Your Name - Job Title</title>
<meta name="description" content="Your professional summary in 150-160 characters">
<meta name="keywords" content="your, relevant, keywords">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
```

## 📄 License

This template is free to use for personal and commercial projects.

---

**Need help?** Feel free to customize this template to match your personal brand and style!
