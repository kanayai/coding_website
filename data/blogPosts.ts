export interface BlogPost {
  id: string;
  title: string;
  date: string; // Format: "YYYY-MM-DD"
  excerpt: string;
  content: string;
  codeSnippet?: {
    code: string;
    language: 'r' | 'python';
  };
  tags?: string[];
}

// ========================================
// ADD YOUR BLOG POSTS HERE
// ========================================
// To add a new post, copy the template below and fill in your details.
// Posts are displayed with the most recent first.

export const blogPosts: BlogPost[] = [
  {
    id: "welcome-post",
    title: "Welcome to My Code-Themed Blog",
    date: "2024-11-11",
    excerpt: "Exploring the intersection of statistics, R, Python, and teaching through a code-first lens.",
    content: `
      Welcome to my blog! Here I'll share insights about statistical computing,
      teaching experiences, research updates, and interesting findings from the
      world of data science.

      This blog combines my passion for R and Python with academic pursuits.
      Expect posts about:
      - Statistical methods and their implementation
      - Teaching tips for data science courses
      - Research updates and publications
      - Code snippets and tutorials
      - Thoughts on the evolving field of statistics
    `,
    codeSnippet: {
      code: `# Welcome function
welcome <- function() {
  message <- "Hello from R and Python!"
  cat(message, "\\n")
  return(message)
}

welcome()`,
      language: "r"
    },
    tags: ["welcome", "intro", "teaching"]
  },
  {
    id: "bayesian-computing",
    title: "Modern Bayesian Computing Techniques",
    date: "2024-11-10",
    excerpt: "A deep dive into contemporary approaches for Bayesian inference using Python and R.",
    content: `
      Bayesian statistics has seen remarkable advances in computational methods.
      In this post, I explore some of the modern techniques that make Bayesian
      inference more accessible and powerful than ever before.

      From MCMC to variational inference, these tools are transforming how we
      approach statistical problems in research and practice.
    `,
    codeSnippet: {
      code: `import pymc as pm
import numpy as np

# Simple Bayesian model
with pm.Model() as model:
    mu = pm.Normal('mu', mu=0, sigma=10)
    sigma = pm.HalfNormal('sigma', sigma=1)
    y_obs = pm.Normal('y_obs', mu=mu, sigma=sigma, observed=data)

    trace = pm.sample(2000, return_inferencedata=True)`,
      language: "python"
    },
    tags: ["bayesian", "python", "research"]
  },

  // ========================================
  // TEMPLATE FOR NEW POSTS
  // ========================================
  // Copy this template below and uncomment to add a new post:

  /*
  {
    id: "unique-post-id",  // Use lowercase-with-hyphens
    title: "Your Post Title",
    date: "2024-11-11",  // Format: YYYY-MM-DD
    excerpt: "A brief summary of your post (1-2 sentences).",
    content: `
      Write your full blog post content here.

      You can use multiple paragraphs.

      And include any text you'd like!
    `,
    codeSnippet: {  // Optional: Remove this section if no code snippet
      code: `# Your R or Python code here
print("Hello, World!")`,
      language: "python"  // or "r"
    },
    tags: ["tag1", "tag2", "tag3"]  // Optional: Remove if not needed
  },
  */
];
