import { useMemo, useState } from 'react';
import Icon from '@/components/ui/Icon/Icon.jsx';
import Link from '@/components/ui/Link/Link.jsx';
import { hrefFor, searchIndex, searchPopular } from '@/data/site.js';
import styles from './SearchBox.module.css';

const MAX_RESULTS = 8;

// Bolds the part of `text` that matches `query`.
function Highlight({ text, query }) {
  const i = text.toLowerCase().indexOf(query.toLowerCase());
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <mark>{text.slice(i, i + query.length)}</mark>
      {text.slice(i + query.length)}
    </>
  );
}

export default function SearchBox({ onClose, inline = false }) {
  const [query, setQuery] = useState('');
  const q = query.trim();
  const results = useMemo(
    () => (q ? searchIndex.filter((item) => item.toLowerCase().includes(q.toLowerCase())).slice(0, MAX_RESULTS) : null),
    [q],
  );

  return (
    <form role="search" className={`${styles.search} ${inline ? styles.inline : ''}`} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.row}>
        <div className={styles.field}>
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search or ask a question"
            aria-label="Search or ask a question"
          />
          <button type="submit" aria-label="Search"><Icon name="search" size={18} strokeWidth={1.5} /></button>
        </div>
        <button type="button" className={styles.cancel} onClick={onClose}>Cancel</button>
      </div>

      <div className={styles.suggestions}>
        {!results && <p className={styles.group}>Popular</p>}
        {(results ?? searchPopular).map((item) => (
          <Link key={item} href={hrefFor(item)}>{results ? <Highlight text={item} query={q} /> : item}</Link>
        ))}
        {results?.length === 0 && <p className={styles.empty}>No results for “{q}”</p>}
      </div>
    </form>
  );
}
