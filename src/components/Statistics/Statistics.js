import style from '../Statistics/Statistic.module.css';
import PropTypes from 'prop-types';

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

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Statistics;
