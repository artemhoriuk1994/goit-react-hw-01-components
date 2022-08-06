import style from '../Statistics/Statistic.module.css';

const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.stats}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={style.item}
            key={id}
            style={{ background: getRandomColor() }}
          >
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export default Statistics;
