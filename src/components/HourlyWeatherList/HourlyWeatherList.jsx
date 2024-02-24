import { HourlyWeatherItem } from 'components/HourlyWeatherItem/HourlyWeatherItem';

export const HourlyWeatherList = ({ temperatures, time }) => {
  return (
    <ul>
      {temperatures !== null &&
        temperatures.map((temperature, index) => {
          return <HourlyWeatherItem temperature={temperature} key={index} />;
        })}
    </ul>
  );
};
