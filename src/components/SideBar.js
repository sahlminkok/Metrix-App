import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import dashboard from '../assets/menu.svg';
import orders from '../assets/orders.svg';
import customers from '../assets/customers.svg';
import inventory from '../assets/inventory.svg';
import conversations from '../assets/chat.svg';
import settings from '../assets/setting.svg';
import contact from '../assets/contact.svg';
import gift from '../assets/gift.svg';
import chevronRight from '../assets/chevron-right.svg';
import styles from '../styles/SideBar.module.css';
import logout from '../assets/logout.svg';

const SideBar = ({ children }) => {
  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: dashboard,
    },
    {
      path: '/orders',
      name: 'Orders',
      icon: orders,
    },
    {
      path: '/customers',
      name: 'Customers',
      icon: customers,
    },
    {
      path: '/inventory',
      name: 'Inventory',
      icon: inventory,
    },
    {
      path: '/conversations',
      name: 'Conversations',
      icon: conversations,
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: settings,
    },
  ];
  return (
    <section>
      <aside>
        <div className={styles.logoSection}>
          <img src={logo} alt="logo" />
          <h1>Metrix</h1>
        </div>
        <div className={styles.menuItems}>
          {menuItems.map((item) => (
            <Link to={item.path} key={item.name} className={styles.menuItem}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
        <div className={styles.contactSupport}>
          <img src={contact} alt="contact" />
          <p>Contact Support</p>
        </div>
        <div className={styles.reward}>
          <div className={styles.gift}>
            <img src={gift} alt="gift" />
            <p>Free Gift Awaits You!</p>
          </div>
          <div className={styles.upgrade}>
            <p>Upgrade Your Account</p>
            <img src={chevronRight} alt="chevron-right" />
          </div>
        </div>
        <div className={styles.logout}>
          <img src={logout} alt="logout" />
          <p>Logout</p>
        </div>
      </aside>
      <main>{children}</main>
    </section>
  );
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
