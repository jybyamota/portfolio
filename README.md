# Personal Portfolio Website

A clean, modern personal portfolio website with a white background, bold yellow accents, and mobile-first design.

## Features

✨ **Design Features:**
- White background with bold yellow (#FFC300) accent color
- Single-column, centered layout with max-width of 375px (mobile-first)
- Smooth animations and transitions
- Fully responsive design
- Beautiful organic blob shapes with portrait photos
- Playful wave SVG footer
- Generous white space for a fresh, minimal aesthetic

📱 **Sections:**
1. **Navigation** - Name/logo on left, links (Home, Projects, Contact) on right
2. **Hero** - Large heading on left, yellow blob with portrait on right, bio, and CTA buttons
3. **About** - Profile photo in yellow blob, about text, resume button, social icons
4. **Projects** - Alternating project cards with descriptions and view buttons
5. **Contact** - Simple form with minimal border-bottom style inputs
6. **Footer** - Wave SVG shape, social icons, copyright text

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling (mobile-first responsive)
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

### 1. Basic Setup
- Open `index.html` in your browser to preview the site
- If using XAMPP, navigate to `http://localhost/portfolio`

### 2. Personalization

**Update Your Information:**
- Replace "Your Name" in the navigation logo (line 15)
- Update the hero heading "Hello, my name is [Name]" (line 32)
- Update your bio text (line 33)
- Modify the about section text (line 94)
- Update social media links (replace # with actual URLs)
- Update email link in footer and contact section

**Add Your Photos:**
- Replace placeholder images with your own:
  - `https://via.placeholder.com/220` - Hero portrait (220x220px recommended)
  - `https://via.placeholder.com/200` - About portrait (200x200px recommended)
  - `https://via.placeholder.com/180x160` - Project images

**Add Your Projects:**
- Update project names, descriptions, and links
- Add more project cards by duplicating the project-card HTML and changing alignment

**Customize Contact Form:**
- Update the form action or add backend integration
- Modify placeholder texts as needed

### 3. Color Customization

Primary colors are defined in CSS variables:
```css
:root {
    --primary-color: #FFC300;        /* Main yellow */
    --primary-dark: #FFB81C;         /* Hover state */
    --background-color: #FFFFFF;    /* White background */
    --text-color: #1a1a1a;          /* Dark text */
    --text-light: #666666;          /* Light gray text */
}
```

To change the color scheme, update these variables in `styles.css`.

## Customization Guide

### Adding New Sections
1. Add a new `<section>` with an id in index.html
2. Add styling in styles.css
3. Add navigation link in the navbar
4. Update the CSS max-width if needed

### Responsive Breakpoints
- **Large screens**: max-width 375px centered
- **480px and below**: Adjusted typography and spacing
- **375px and below**: Further optimized for small phones

### Interactive Features
- **Smooth scrolling**: Click nav links to smoothly scroll to sections
- **Form submission**: Contact form shows success message
- **Scroll animations**: Project cards fade in as they enter viewport
- **Hover effects**: Buttons and cards have smooth hover animations

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

### For Production:
1. Replace placeholder images with optimized versions
2. Consider using WebP format for images
3. Add image lazy loading by using `data-src` attribute
4. Minify CSS and JavaScript
5. Add a favicon
6. Set up proper SEO meta tags

### SEO Meta Tags (Add to `<head>`):
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
```

## Contact Form Backend Integration

To make the contact form functional, you'll need backend integration. Options:

1. **Using Formspree** (Simple, no backend needed):
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Using Node.js/Express**:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
})
```

3. **Using PHP**:
Create a `send-email.php` file and process the form data server-side.

## Customizing Blob Shapes

The blob shapes use CSS border-radius with animation. To customize:

```css
.blob {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
    animation: blobAnimation 7s infinite;
}
```

Visit [BlobMaker.app](https://www.blobmaker.app/) to generate custom blob shapes.

## Adding Social Links

Update these links in the HTML with your actual profiles:
- GitHub: `https://github.com/yourprofile`
- LinkedIn: `https://linkedin.com/in/yourprofile`
- Email: `mailto:your.email@example.com`

## Deployment

### Deploy to:
- **Netlify**: Connect your Git repo for automatic deployments
- **Vercel**: Deploy with one click for Next.js or static sites
- **GitHub Pages**: Free hosting for static sites
- **Your own server**: Upload files via FTP or deployment tool

## Tips for Best Results

1. **Use high-quality images**: Invest in professional photos
2. **Keep descriptions short**: Users scan, they don't read long blocks
3. **Keep projects limited**: Show 3-5 of your best projects
4. **Update regularly**: Keep portfolio fresh with recent work
5. **Test mobile**: Always test on real devices
6. **Fast loading**: Optimize images to keep site performant

## License

This portfolio template is free to use and modify for personal use.

## Support

For questions or issues:
1. Check the HTML/CSS comments
2. Review the responsive breakpoints
3. Test in different browsers
4. Validate HTML with W3C validator

---

**Happy building! 🚀**
