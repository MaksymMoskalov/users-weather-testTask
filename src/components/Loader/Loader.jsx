import { Blocks } from 'react-loader-spinner';
import { LoaderOverlay, LoaderContent } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderContent>
        <Blocks
          height="150"
          width="150"
          color="#4fa94d"
          wrapperClass="blocks-wrapper"
        />
      </LoaderContent>
    </LoaderOverlay>
  );
};
