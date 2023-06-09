import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Spinner,
} from '@chakra-ui/react';
import styles from '@/styles/components/Profile.module.scss';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '@/features/authSlice';
import Router from 'next/router';

export default function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div className={styles.container}>
      <Menu>
        <MenuButton>
          <Avatar name={`${user?.first_name as string} ${user?.last_name}`} />
        </MenuButton>
        <MenuList>
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </>
          )}
        </MenuList>
      </Menu>
    </div>
  );
}
