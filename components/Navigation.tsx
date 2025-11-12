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
    { code: 'import blog', href: '#blog', language: 'python' },
    { code: 'Contact()', href: '#contact', language: 'r' },
  ];

  return (
    <Navbar
      expand="lg"
      sticky="top"
      style={{
        background: '#252526',
        borderBottom: '1px solid #3e3e42',
        padding: '0.5rem 0'
      }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: 'var(--font-geist-mono)' }}>
          <SyntaxHighlighter
            language="r"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '0.25rem 0.75rem',
              background: 'transparent',
              fontSize: '1.1rem',
              display: 'inline-block'
            }}
            showLineNumbers={false}
          >
            {'# Prof. Karim AI'}
          </SyntaxHighlighter>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            borderColor: '#4ec9b0',
            filter: 'brightness(1.2)'
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            {navItems.map((item, index) => (
              <Nav.Link
                key={index}
                href={item.href}
                style={{
                  padding: '0.25rem 0.75rem',
                  margin: '0 0.25rem'
                }}
              >
                <SyntaxHighlighter
                  language={item.language}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: '0.25rem 0.5rem',
                    background: '#1e1e1e',
                    fontSize: '0.9rem',
                    display: 'inline-block',
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
