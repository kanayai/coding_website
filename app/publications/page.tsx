import PublicationList from '@/components/PublicationList';
import publicationsData from '@/data/publications.json';

export default function PublicationsPage() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem'
    }}>
      <div style={{
        marginBottom: '2rem',
        fontFamily: 'var(--font-jetbrains-mono)',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #4a9eff 0%, #7b61ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {'// Publications'}
        </h1>
        <p style={{
          color: 'var(--foreground)',
          opacity: 0.7,
          fontSize: '1rem',
        }}>
          {'/* Research articles and book chapters */'}
        </p>
        <p style={{
          color: 'var(--foreground)',
          opacity: 0.6,
          fontSize: '0.9rem',
          marginTop: '0.5rem',
        }}>
          Total publications: {publicationsData.length}
        </p>
      </div>
      <PublicationList publications={publicationsData} />
    </div>
  );
}
