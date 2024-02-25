import { HwItem, Temperature } from './HourlyWeatherItem.styled';

export const HourlyWeatherItem = ({ temperature, time }) => {
  const originalDate = new Date(time);

  return (
    <HwItem>
      <p>
        {originalDate.toLocaleTimeString('uk-UA', {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
      <Temperature>
        {temperature} {'\u2103'}
      </Temperature>
    </HwItem>
  );
};
