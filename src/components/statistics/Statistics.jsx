const Statistics = ({ stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">{stats[0].label}</span>
          <span class="percentage">{stats[0].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{stats[1].label}</span>
          <span class="percentage">{stats[1].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{stats[2].label}</span>
          <span class="percentage">{stats[2].percentage}%</span>
        </li>
        <li class="item">
          <span class="label">{stats[3].label}</span>
          <span class="percentage">{stats[3].percentage}%</span>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
