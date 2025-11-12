# Your Code-Themed Academic Website - User Guide

## Overview

Your website is now live with the following sections:
- **Home** - Introduction with your profile
- **Teaching** - Course information
- **Research** - Publications and projects
- **Blog** - Your blog posts (easy to update!)
- **Contact** - Full contact information

## Your Personal Information

All sections now include your details:
- **Name**: Prof. Karim AI (Anaya-Izquierdo)
- **Department**: Mathematical Sciences
- **University**: University of Bath, United Kingdom
- **Email**: kai21@bath.ac.uk
- **Address**: Claverton Down, Bath, BA2 7AY

## Running Your Website

### Development Mode (for editing)
```bash
cd "/Users/kai21/OneDrive - University of Bath/website/coding_website"
npm run dev
```
Then open: http://localhost:3000

### Stop the Server
Press `Ctrl + C` in the terminal

### Build for Production
```bash
npm run build
```

## Adding Blog Posts

**This is now automated!** You can write posts in Quarto (`.qmd`) and use a script to publish them.

1.  **Write:** Create a new `.qmd` file in the `_quarto_source` directory.
2.  **Publish:** Run the following command in your terminal:
    ```bash
    ./publish_post.sh _quarto_source/your-post-name.qmd
    ```
3.  **Commit:** The script prepares your post for the website. Just commit the new files in the `posts` and `public` directories.

**See `HOW_TO_ADD_BLOG_POSTS.md` for detailed instructions and examples.**

## Customizing Content

### Update Course Information
Edit: `app/page.tsx`
- Find the "Teaching Section"
- Modify the `CodeCard` components with your actual courses

### Update Research Projects
Edit: `app/page.tsx`
- Find the "Research Section"
- Update research projects and publications

### Change Colors
Edit: `app/globals.css`
```css
:root {
  --accent-r: #4ec9b0;        /* R programming color */
  --accent-python: #61dafb;   /* Python color */
  --accent-blue: #569cd6;     /* Link color */
}
```

### Modify Navigation
Edit: `components/Navigation.tsx`
- Update the `navItems` array to add/remove menu items

## Project Structure

```
coding_website/
├── _quarto_source/     # Source files for your blog posts (.qmd)
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Site-wide layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Top navigation bar
│   └── ...               # Other React components
├── posts/              # Generated HTML blog posts (managed by script)
├── public/             # Site assets (images, etc.)
├── publish_post.sh       # Script to publish blog posts
├── HOW_TO_ADD_BLOG_POSTS.md  # Detailed blog post guide
└── WEBSITE_GUIDE.md      # This file
```

## Key Features

### Code-Themed Design
- Syntax highlighting using VS Code Dark+ theme
- R and Python code snippets as UI elements
- Dark, modern aesthetic perfect for code

### Responsive Layout
- Works on desktop, tablet, and mobile
- Bootstrap grid system for flexibility

### Easy Blog Management
- Write posts in Quarto (`.qmd`)
- A script automates publishing, file moving, and path fixing.
- Handles images and other assets automatically.

## Common Tasks

### Add a New Course
1. Open `app/page.tsx`
2. Find the Teaching section
3. Copy an existing `<Col>` containing a `<CodeCard>`
4. Modify the code, description, and details
5. Save

### Add a Research Paper
1. Open `app/page.tsx`
2. Find the Research section
3. Copy an existing research `<CodeCard>`
4. Update with your paper details
5. Save

### Update Contact Links
1. Open `app/page.tsx`
2. Find the Contact section (near the bottom)
3. Update the `CodeButton` components with your actual profile URLs

### Change Your Name/Title
1. Open `components/Navigation.tsx` - update the navbar brand
2. Open `app/page.tsx` - update the hero section

## Need Help?

- **Next.js Docs**: https://nextjs.org/docs
- **Quarto Docs**: https://quarto.org/docs/guide/
- **Bootstrap Docs**: https://getbootstrap.com/docs

## Development Tips

- The dev server auto-reloads when you save files.
- Check the terminal for any errors.
- Use browser DevTools (F12) to inspect elements.
- All main page content is in `app/page.tsx`.
- Blog post source files are in `_quarto_source/`.

## Deployment Options

When ready to publish online:
- **Vercel** (Recommended - built by Next.js creators): https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: Requires additional configuration

---

Enjoy your new code-themed website! 🚀