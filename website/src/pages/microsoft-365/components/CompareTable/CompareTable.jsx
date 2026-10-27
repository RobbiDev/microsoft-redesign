import styles from './CompareTable.module.css';

const Cell = ({ value }) => {
  if (value === true) return <span className={styles.yes} aria-label="Included" />;
  if (value === false) return <span className={styles.no} aria-label="Not included">—</span>;
  return <span>{value}</span>;
};

export default function CompareTable({ title, columns, groups }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.scroll}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col"><span className="sr-only">Feature</span></th>
                {columns.map((c) => <th key={c} scope="col">{c}</th>)}
              </tr>
            </thead>
            {groups.map((g) => (
              <tbody key={g.title}>
                <tr className={styles.group}><th colSpan={columns.length + 1} scope="colgroup">{g.title}</th></tr>
                {g.rows.map(([label, ...values]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {values.map((v, i) => <td key={i}><Cell value={v} /></td>)}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
