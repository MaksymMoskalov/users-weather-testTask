import { ReactComponent as Sunny } from '../img/weatherSvg/Sun.svg';
import { ReactComponent as Clouds } from '../img/weatherSvg/Clouds.svg';
import { ReactComponent as CloudsSun } from '../img/weatherSvg/Clouds-sun.svg';
import { ReactComponent as Fog } from '../img/weatherSvg/Fog.svg';
import { ReactComponent as Rain } from '../img/weatherSvg/Rain.svg';
import { ReactComponent as Storm } from '../img/weatherSvg/Lightning-storm.svg';
import { ReactComponent as Shower } from '../img/weatherSvg/Shower.svg';
import { ReactComponent as Snow } from '../img/weatherSvg/Snow-ice.svg';

export const weatherIconSelector = number => {
  if (number === 0) {
    return <Sunny />;
  } else if (number >= 1 && number <= 3) {
    return <CloudsSun />;
  } else if (number === 3) {
    return <Clouds />;
  } else if (number >= 45 && number <= 57) {
    return <Fog />;
  } else if (number >= 61 && number <= 63) {
    return <Shower />;
  } else if (number >= 65 && number <= 67) {
    return <Rain />;
  } else if (number >= 71 && number <= 77) {
    return <Snow />;
  } else if (number >= 80 && number <= 82) {
    return <Shower />;
  } else if (number === 85 || number <= 86) {
    return <Snow />;
  } else if (number >= 95 && number <= 99) {
    return <Storm />;
  }
};
