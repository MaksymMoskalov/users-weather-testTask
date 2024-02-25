import { HourlyWeatherItem } from 'components/HourlyWeatherItem/HourlyWeatherItem';
import { CusromScroll, UwList } from './HourlyWeatherList.styled';
import 'simplebar-react/dist/simplebar.min.css';

export const HourlyWeatherList = ({ temperatures, time }) => {
  return (
    <CusromScroll>
      <UwList>
        {temperatures !== null &&
          temperatures.map((temperature, tempIndex) => {
            return (
              <HourlyWeatherItem
                temperature={temperature}
                time={time[tempIndex]}
                key={tempIndex}
              />
            );
          })}
      </UwList>
    </CusromScroll>
  );
};
