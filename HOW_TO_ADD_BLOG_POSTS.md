# How to Add Blog Posts

This guide explains how to easily add new blog posts to your website.

## Quick Start

All blog posts are stored in a single file: `data/blogPosts.ts`

## Step-by-Step Instructions

### 1. Open the blog posts file
Navigate to: `/data/blogPosts.ts`

### 2. Find the template section
Scroll to the bottom of the file where you'll see a commented template that looks like this:

```typescript
/*
{
  id: "unique-post-id",
  title: "Your Post Title",
  date: "2024-11-11",
  excerpt: "A brief summary...",
  content: `Full content here...`,
  codeSnippet: { ... },
  tags: ["tag1", "tag2"]
},
*/
```

### 3. Copy and modify the template
- **Uncomment** the template (remove `/*` and `*/`)
- Fill in your details:

#### Required Fields:
- **id**: A unique identifier (use lowercase with hyphens, e.g., "my-new-post-2024")
- **title**: The title of your blog post
- **date**: Publication date in YYYY-MM-DD format (e.g., "2024-11-11")
- **excerpt**: A short 1-2 sentence summary (shown in the blog list)
- **content**: Your full blog post content (can be multiple paragraphs)

#### Optional Fields:
- **codeSnippet**: Add R or Python code to your post
  ```typescript
  codeSnippet: {
    code: `# Your R code here
library(ggplot2)
data %>% ggplot(aes(x, y)) + geom_point()`,
    language: "r"  // or "python"
  }
  ```
- **tags**: Categories for your post
  ```typescript
  tags: ["statistics", "teaching", "python"]
  ```

### 4. Position your post
Add your new post **at the top** of the `blogPosts` array (right after `export const blogPosts: BlogPost[] = [`). This ensures it appears first as the most recent post.

## Complete Example

```typescript
export const blogPosts: BlogPost[] = [
  // YOUR NEW POST HERE (most recent)
  {
    id: "tidyverse-tutorial",
    title: "Getting Started with Tidyverse",
    date: "2024-11-15",
    excerpt: "A comprehensive introduction to data manipulation using tidyverse in R.",
    content: `
      In this tutorial, we'll explore the core tidyverse packages and
      how they work together to make data analysis in R more intuitive.

      We'll cover dplyr for data manipulation, ggplot2 for visualization,
      and tidyr for data tidying.
    `,
    codeSnippet: {
      code: `library(tidyverse)

# Load and clean data
df <- read_csv("data.csv") %>%
  filter(!is.na(value)) %>%
  mutate(log_value = log(value)) %>%
  group_by(category) %>%
  summarize(mean_val = mean(log_value))

# Visualize
df %>%
  ggplot(aes(x = category, y = mean_val)) +
  geom_col(fill = "#4ec9b0") +
  theme_minimal()`,
      language: "r"
    },
    tags: ["R", "tidyverse", "tutorial", "data-science"]
  },

  // Other existing posts follow...
];
```

## Tips

1. **Dates**: Use YYYY-MM-DD format for dates (e.g., "2024-11-15")
2. **IDs**: Make them unique and descriptive (e.g., "python-pandas-tips-2024")
3. **Excerpts**: Keep them concise - they appear in the blog list view
4. **Content**: You can use multiple paragraphs - just separate them with blank lines
5. **Code**: Choose "r" or "python" for the language field
6. **Tags**: Use lowercase tags for consistency

## Removing the Code Snippet (Optional)

If your post doesn't need code, simply omit the `codeSnippet` field:

```typescript
{
  id: "teaching-reflections",
  title: "Reflections on Teaching Statistics",
  date: "2024-11-15",
  excerpt: "Thoughts on effective pedagogy in statistics education.",
  content: `Your content here...`,
  tags: ["teaching", "education"]
}
```

## After Adding a Post

1. Save the file (`data/blogPosts.ts`)
2. The website will automatically reload (if dev server is running)
3. Navigate to the Blog section to see your new post
4. Posts are automatically sorted by date (newest first)

## Troubleshooting

- **Post not showing**: Check that you removed the `/*` and `*/` comments
- **Syntax error**: Make sure all commas are in place and strings are properly quoted
- **Wrong order**: Posts are sorted by date automatically, not by position in the file

## Example: Adding Your First Post

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: "my-first-post",
    title: "Welcome to My Blog",
    date: "2024-11-15",
    excerpt: "Introducing my new code-themed academic blog.",
    content: `
      I'm excited to launch this blog where I'll share insights about
      statistics, R, Python, and teaching.

      Stay tuned for tutorials, research updates, and more!
    `,
    tags: ["welcome", "intro"]
  },
  // ... existing posts ...
];
```

That's it! Your blog is ready to grow with your content.
