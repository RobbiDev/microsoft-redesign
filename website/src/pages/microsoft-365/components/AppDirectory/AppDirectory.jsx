import { appGroups, apps, appsInGroup, platforms } from '@/pages/microsoft-365/apps.js';
import styles from './AppDirectory.module.css';
import Link from '@/components/ui/Link/Link.jsx';

const AppIcon = ({ app, size = 40 }) =>
  app.icon ? (
    <img src={app.icon} alt="" width={size} height={size} />
  ) : (
    <span className={styles.letter} style={{ '--c': app.color, width: size, height: size }} aria-hidden="true">{app.name.replace('Microsoft ', '')[0]}</span>
  );

// Every app on one page: an index of chips, then a section per app (linkable as #<id>).
export default function AppDirectory() {
  return (
    <>
      <nav className={styles.index} aria-label="Apps">
        {apps.map((app) => (
          <Link key={app.id} href={`#${app.id}`}><AppIcon app={app} size={22} /> {app.name}</Link>
        ))}
      </nav>
      {appGroups.map((group) => (
        <section key={group.id} className={styles.group}>
          <h2 className={styles.groupTitle}>{group.label}</h2>
          {appsInGroup(group.id).map((app) => (
            <article key={app.id} id={app.id} className={styles.app}>
              <AppIcon app={app} size={48} />
              <div className={styles.text}>
                <h3>{app.name} <span>{app.tagline}</span></h3>
                <p>{app.body}</p>
                {app.points.length > 0 && <ul>{app.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
                <p className={styles.included}><strong>Included in:</strong> {app.includedIn}</p>
                {app.useCases && <p className={styles.included}><strong>Used for:</strong> {app.useCases.join(', ')}</p>}
                {app.features.length > 0 && (
                  <div className={styles.features}>
                    {app.features.map((f) => (
                      <figure key={f.title}>
                        <img src={f.image} alt="" loading="lazy" decoding="async" />
                        <figcaption><strong>{f.title}</strong> {f.body}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>
      ))}
      <p className={styles.platforms}><strong>Available on</strong> {platforms.join(' · ')}</p>
    </>
  );
}
