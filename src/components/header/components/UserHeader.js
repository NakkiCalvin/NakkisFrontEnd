import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import styles from '../stylesheets/userHeader.module.sass';
import Auth from '../../../modules/Auth';
import jumpTo from '../../../modules/Navigation';

export default function UserHeader({ user_token, logoutUser }) {
  console.log('User Header userToken', user_token);
  return (
    <div className={styles.outbox}>
      <div className={styles.tag} onClick={() => jumpTo('/bag')}>
        CART
      </div>
      {user_token && Object.keys(user_token).length > 0 ? (
        <div className={styles.loggout}>
          <NavDropdown title={`hello, ${user_token.user_name}`}>
            {user_token.roles[0] === 'Admin' ? (
              <NavDropdown.Item
                onClick={() => {
                  jumpTo('/admin_page');
                }}
              >
                Admin Panel
              </NavDropdown.Item>
            ) : null}
            <NavDropdown.Item
              onClick={() => {
                jumpTo('/history_page');
              }}
            >
              Order History
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                logoutUser();
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      ) : (
        <div className={styles.loggout}>
          <div className={styles.login} onClick={() => jumpTo('/login')}>
            Login
          </div>
        </div>
      )}
    </div>
  );
}
