import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(item => (
          <li
            style={{
              backgroundColor: gatRandomColor(),
            }}
            className={css.item}
            key={item.id}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function gatRandomColor() {
  const backgroundColor = `rgb(${getRandom(0, 220)}, ${getRandom(
    0,
    220
  )}, ${getRandom(0, 220)})`;
  console.log('~ backgroundColor', backgroundColor);

  function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
  }
  return backgroundColor;
}
