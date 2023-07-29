import PropTypes from 'prop-types';

import { READ, UNREAD } from '../constants';

import { HiMail, HiOutlineMailOpen  } from 'react-icons/hi';

function List({ messages, setMessageStatus }) {
  return (
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === READ
          ? 'message-read'
          : 'message-unread';

        return (
          <li key={ message.id }>
            <p
              className={ `message-title ${messageClass}` }
            >
              {message.title}
            </p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={ () => setMessageStatus(message.id, READ) }
              >
                <HiOutlineMailOpen  />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, UNREAD) }
              >
                <HiMail />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
};

export default List;