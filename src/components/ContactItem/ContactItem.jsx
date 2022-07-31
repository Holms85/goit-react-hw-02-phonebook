import PropTypes from 'prop-types';
import style from './ContactItem.module.css';

function ContactItem({ contacts, onDeleteContact }) {
  return contacts.map(({ name, number, id }) => (
    <li key={id} className={style.item}>
      {name} : <span className={style.item}>{number}</span>
      <button
        type="button"
        className={style.button}
        onClick={() => {
          onDeleteContact(id);
        }}
      >
        Delete
      </button>
    </li>
  ));
}

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;