import React from 'react';
import style from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ children }) {
  return <ul className={style.list}>{children}</ul>;
}

ContactList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContactList;