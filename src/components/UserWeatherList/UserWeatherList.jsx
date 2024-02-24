import { UserWeatherItem } from 'components/UserWeatherItem/UserWeatherItem';
import { StyledCarList } from './UserWeatherList.styled';
// import { useDispatch } from 'react-redux';
// import { exactCarThunk } from '../../redux/usersWeatherOperations';

export const UserWeatherList = ({ openModal, users }) => {
  // const disputch = useDispatch();

  // const vievModal = id => {
  //   disputch(exactCarThunk(id));
  //   openModal();
  // };

  return (
    <StyledCarList>
      {users !== null &&
        users.map(user => {
          return (
            <UserWeatherItem
              userItemData={user}
              key={user.login.uuid}
              // openModal={() => vievModal(user.id)}
            />
          );
        })}
    </StyledCarList>
  );
};
