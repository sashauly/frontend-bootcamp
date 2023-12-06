import PropTypes from 'prop-types';

export default function SomeList({ times }) {
  return (
    <div>
      <h2>Times</h2>
      <ul>
        {times.map((time, index) => (
          <li key={index}>
            {new Date(time * 1000).toISOString().substr(11, 8)}
          </li>
        ))}
      </ul>
    </div>
  );
}

SomeList.propTypes = {
  times: PropTypes.array.isRequired,
};
