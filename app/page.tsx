import Image from 'next/image';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Navigation from '@/components/Navigation';
import CodeHeading from '@/components/CodeHeading';
import CodeButton from '@/components/CodeButton';
import CodeCard from '@/components/CodeCard';
import BlogSection from '@/components/BlogSection';
import { getSortedPostsData } from '@/lib/posts';

export default async function Home() {
  const blogPosts = await getSortedPostsData();

  return (
    <>
      <Navigation />

      <Container className="mt-4">
        <Alert variant="warning">
          This site has been completely vibe-coded and is under construction. Please bear with me while I upload real content rather than fake/hallucinated one.
        </Alert>
      </Container>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <CodeHeading
                code={`def introduce_myself():
    return {
        "name": "Prof. Karim AI (Anaya-Izquierdo)",
        "department": "Mathematical Sciences",
        "university": "University of Bath, UK",
        "specialties": ["R", "Python", "Statistics"]
    }`}
                language="python"
                size="h1"
              />
              <p style={{ fontSize: '1.1rem', marginTop: '2rem' }}>
                Welcome to my academic portfolio where code meets teaching. I work in the
                Department of Mathematical Sciences at the University of Bath, specializing in
                statistical computing and making complex concepts accessible through elegant code.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <CodeButton
                  code="View_Courses()"
                  language="r"
                  variant="primary"
                  href="#teaching"
                />
                <CodeButton
                  code="explore_research()"
                  language="python"
                  variant="secondary"
                  href="#research"
                />
                <CodeButton
                  code="read_blog()"
                  language="python"
                  variant="outline"
                  href="#blog"
                />
              </div>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
              <div className="card-container-secondary">
                <Image
                  src="/images/karim_blackboard.png"
                  alt="A photo of Prof. Karim AI (Anaya-Izquierdo)"
                  width={400}
                  height={400}
                  style={{
                    borderRadius: '50%',
                    border: '4px solid var(--accent-blue)',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ marginTop: '1.5rem' }}>
                  <SyntaxHighlighter
                    language="python"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: '0',
                      background: 'transparent',
                      fontSize: '1.4rem',
                      textAlign: 'center',
                      lineHeight: '0.7'
                    }}
                  >
                    # karim_blackboard.png
                  </SyntaxHighlighter>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="section section-primary">
        <Container>
          <CodeHeading
            code={`\\documentclass{article}
\\author{Prof. Karim AI (Anaya-Izquierdo)}
\\title{Teaching Portfolio}
\\date{2024}
\\begin{document}
\\maketitle`}
            language="latex"
            subtitle="Building the next generation of data scientists"
            size="h2"
          />

          <Row className="mt-5 g-4">
            <Col md={6} lg={4}>
              <CodeCard
                titleCode={`course_intro <- list(
  name = "Intro to R",
  level = "Undergraduate",
  focus = "Statistical Computing"
)`}
                language="r"
                description="Learn the fundamentals of R programming, data manipulation with tidyverse, and statistical visualization with ggplot2."
                accentColor="#4ec9b0"
              >
                <CodeButton
                  code="View_Syllabus()"
                  language="r"
                  variant="outline"
                />
              </CodeCard>
            </Col>

            <Col md={6} lg={4}>
              <CodeCard
                titleCode={`course_info = {
    "name": "Data Science with Python",
    "level": "Graduate",
    "tools": ["pandas", "sklearn", "pytorch"]
}`}
                language="python"
                description="Advanced data science techniques using Python. Covers machine learning, deep learning, and real-world applications."
                accentColor="#61dafb"
              >
                <CodeButton
                  code="view_materials()"
                  language="python"
                  variant="outline"
                />
              </CodeCard>
            </Col>

            <Col md={6} lg={4}>
              <CodeCard
                titleCode={`stats_ml <- function() {
  topics <- c(
    "Bayesian Methods",
    "Time Series",
    "Causal Inference"
  )
  return(topics)
}`}
                language="r"
                description="Advanced statistical methods and their implementation in R. Emphasis on modern computational approaches."
                accentColor="#ce9178"
              >
                <CodeButton
                  code="Explore_Topics()"
                  language="r"
                  variant="outline"
                />
              </CodeCard>
            </Col>
          </Row>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <CodeHeading
              code={`# Student Resources
resources <- c(
  "Office Hours: Mon/Wed 2-4pm",
  "Email: your.email@university.edu",
  "Office: Statistics Building, Room 101"
)`}
              language="r"
              size="h4"
            />
          </div>
        </Container>
      </section>

      {/* Research Section */}
      <section id="research" className="section section-secondary">
        <Container>
          <CodeHeading
            code={`---
title: "Research Interests"
author: "Prof. Karim AI (Anaya-Izquierdo)"
date: "2024-01-01"
tags:
  - "Statistical Machine Learning"
  - "Bayesian Computation"
  - "Causal Inference"
  - "High-Dimensional Statistics"
---`}
            language="yaml"
            subtitle="Pushing the boundaries of statistical methodology"
            size="h2"
          />

          <Row className="mt-5 g-4">
            <Col lg={6}>
              <CodeCard
                titleCode={`paper_1 <- list(
  title = "Novel Bayesian Methods",
  journal = "Journal of Stats",
  year = 2024,
  impact = "High"
)`}
                language="r"
                description="Developed new computational approaches for Bayesian inference in high-dimensional settings. Published in top-tier statistical journal."
                accentColor="#4ec9b0"
              >
                <div style={{ marginTop: '1rem' }}>
                  <CodeButton
                    code="read_paper()"
                    language="python"
                    variant="primary"
                  />
                </div>
              </CodeCard>
            </Col>

            <Col lg={6}>
              <CodeCard
                titleCode={`research_project = {
    "title": "Causal ML Framework",
    "funding": "NSF Grant",
    "status": "Ongoing",
    "team_size": 5
}`}
                language="python"
                description="Leading a funded research project developing machine learning methods for causal inference from observational data."
                accentColor="#61dafb"
              >
                <div style={{ marginTop: '1rem' }}>
                  <CodeButton
                    code="Learn_More()"
                    language="r"
                    variant="primary"
                  />
                </div>
              </CodeCard>
            </Col>
          </Row>

          <div style={{ marginTop: '4rem' }}>
            <CodeHeading
              code={`# Recent Publications
publications <- tibble(
  year = c(2024, 2024, 2023, 2023),
  title = c(
    "Bayesian Methods for Modern Data",
    "Causal Inference in Practice",
    "High-Dimensional Statistical Learning",
    "Computational Statistics Review"
  ),
  citations = c(45, 32, 78, 120)
) %>% arrange(desc(year))`}
              language="r"
              size="h3"
            />
            <div className="card-container-primary">
              <p className="text-muted-custom" style={{ marginBottom: '1.5rem' }}>
                View my complete publication list and research profiles
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <CodeButton
                  code='get_profile("Google Scholar")'
                  language="python"
                  variant="secondary"
                />
                <CodeButton
                  code="Visit_ResearchGate()"
                  language="r"
                  variant="secondary"
                />
                <CodeButton
                  code='check_orcid()'
                  language="python"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section section-primary">
        <Container>
          <CodeHeading
            code={`class Blog:
    def __init__(self):
        self.posts = load_posts()
        self.topics = ["Statistics", "R", "Python", "Teaching"]

    def get_latest(self):
        return sorted(self.posts, key=lambda x: x.date, reverse=True)`}
            language="python"
            subtitle="Thoughts on statistics, code, and teaching"
            size="h2"
          />

          <BlogSection posts={blogPosts} />
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-secondary">
        <Container>
          <CodeHeading
            code={`contact_info <- list(
  name = "Prof. Karim AI (Anaya-Izquierdo)",
  email = "kai21@bath.ac.uk",
  department = "Mathematical Sciences",
  university = "University of Bath",
  address = list(
    street = "Claverton Down",
    city = "Bath",
    postcode = "BA2 7AY",
    country = "United Kingdom"
  )
)`}
            language="r"
            subtitle="Get in touch"
            size="h2"
          />

          <Row className="mt-5">
            <Col md={6}>
              <CodeCard
                titleCode={`office_details <- data.frame(
  Location = "University of Bath",
  Building = "Mathematical Sciences",
  Address = "Claverton Down, Bath"
)`}
                language="r"
                description="Visit me at the Department of Mathematical Sciences, University of Bath."
                accentColor="#4ec9b0"
              />
            </Col>
            <Col md={6}>
              <CodeCard
                titleCode={`contact = {
    "email": "kai21@bath.ac.uk",
    "office_hours": "By appointment",
    "response_time": "1-2 business days"
}`}
                language="python"
                description="Feel free to reach out via email. I typically respond within 1-2 business days."
                accentColor="#61dafb"
              />
            </Col>
          </Row>

          <div className="card-container-primary" style={{ marginTop: '3rem' }}>
            <CodeHeading
              code={`# Connect with me
library(academic)
profiles <- c(
  "Google Scholar",
  "ResearchGate",
  "ORCID",
  "GitHub"
)`}
              language="r"
              size="h4"
            />
            <div style={{
              marginTop: '1.5rem',
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <CodeButton
                code='visit_profile("scholar")'
                language="python"
                variant="secondary"
              />
              <CodeButton
                code="GitHub_Profile()"
                language="r"
                variant="secondary"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="section-primary" style={{
        padding: '2rem 0',
        borderTop: '1px solid var(--border-color)',
        textAlign: 'center'
      }}>
        <Container>
          <p className="text-muted-custom" style={{ margin: 0 }}>
            © 2024 Prof. Karim AI (Anaya-Izquierdo) | University of Bath | Department of Mathematical Sciences
          </p>
          <p className="text-footer" style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
            Built with Next.js, TypeScript, and Bootstrap
          </p>
        </Container>
      </footer>
    </>
  );
}
