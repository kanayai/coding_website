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
npm start
```

## Adding Blog Posts

**This is super easy!** Follow these steps:

1. Open the file: `data/blogPosts.ts`
2. Find the template at the bottom (in comments)
3. Copy the template and remove the `/*` and `*/` around it
4. Fill in your post details:
   - **id**: unique-post-name (use hyphens)
   - **title**: Your post title
   - **date**: "2024-11-15" (YYYY-MM-DD format)
   - **excerpt**: Brief summary (1-2 sentences)
   - **content**: Full post content
   - **codeSnippet** (optional): R or Python code
   - **tags** (optional): ["tag1", "tag2"]
5. Place your new post at the TOP of the array
6. Save the file - done!

**See `HOW_TO_ADD_BLOG_POSTS.md` for detailed instructions and examples.**

## Customizing Content

### Update Course Information
Edit: `app/page.tsx`
- Find the "Teaching Section" (around line 83)
- Modify the `CodeCard` components with your actual courses

### Update Research Projects
Edit: `app/page.tsx`
- Find the "Research Section" (around line 174)
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
├── app/
│   ├── page.tsx          # Main page with all sections
│   ├── layout.tsx        # Site-wide layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Top navigation bar
│   ├── CodeHeading.tsx   # Code-styled headings
│   ├── CodeButton.tsx    # Code-styled buttons
│   ├── CodeCard.tsx      # Code-styled cards
│   └── BlogCard.tsx      # Blog post display
├── data/
│   └── blogPosts.ts      # ALL YOUR BLOG POSTS HERE
├── HOW_TO_ADD_BLOG_POSTS.md  # Blog post guide
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
- Single file to edit (`data/blogPosts.ts`)
- Automatic sorting by date
- Code snippet support
- Expandable post cards

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
- **Bootstrap Docs**: https://getbootstrap.com/docs
- **React Syntax Highlighter**: https://github.com/react-syntax-highlighter/react-syntax-highlighter

## Development Tips

- The dev server auto-reloads when you save files
- Check the terminal for any errors
- Use browser DevTools (F12) to inspect elements
- All content is in `app/page.tsx` and `data/blogPosts.ts`

## Deployment Options

When ready to publish online:
- **Vercel** (Recommended - built by Next.js creators): https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: Requires additional configuration

---

Enjoy your new code-themed website! 🚀
