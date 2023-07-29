import PropTypes from 'prop-types';

import { HiMail, HiOutlineMailOpen  } from 'react-icons/hi';

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <HiOutlineMailOpen />
        Marcar todas como lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <HiMail />
        Marcar todas como não lida
      </button>
    </div>
  );
}

Controls.propTypes = {
  markAllAsRead: PropTypes.func.isRequired,
  markAllAsUnread: PropTypes.func.isRequired,
};

export default Controls;