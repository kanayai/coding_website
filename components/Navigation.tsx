'use client';

import ThemeToggleButton from './ThemeToggleButton';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Navigation: React.FC = () => {
  const navItems = [
    { code: 'library(home)', href: '#home', language: 'r' },
    { code: 'import teaching', href: '#teaching', language: 'python' },
    { code: 'import research', href: '#research', language: 'python' },
    { code: 'import publications', href: '/publications', language: 'python' },
    { code: 'import blog', href: '#blog', language: 'python' },
    { code: 'Contact()', href: '#contact', language: 'r' },
  ];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="main-nav"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          <SyntaxHighlighter
            language="r"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '0.25rem 0.75rem',
              background: 'transparent',
              fontSize: '2.2rem',
              display: 'inline-block'
            }}
            showLineNumbers={false}
          >
            {'# Prof. Karim AI'}
          </SyntaxHighlighter>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                href={item.href}
                // Removed explicit padding and margin to allow Bootstrap to handle spacing
              >
                <SyntaxHighlighter
                  language={item.language}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '0.25rem 0.5rem',
                    background: 'var(--background)',
                    fontSize: '1.8em', // Use em for relative sizing
                    // Removed display: 'inline-block' to allow for better wrapping
                    borderRadius: '4px'
                  }}
                  showLineNumbers={false}
                >
                  {item.code}
                </SyntaxHighlighter>
              </Nav.Link>
            ))}
            <Nav.Item className="ms-lg-3">
              <ThemeToggleButton />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
