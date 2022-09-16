import PropTypes from "prop-types";


const MessageHistory = ({messages ,user}) => {
    return (
        <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === user.username
                ? "message sender"
                : "message recipient"
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    )
}

MessageHistory.prototype={
messages: PropTypes.array.isRequired,
user :    PropTypes.object.isRequired,
}
export default MessageHistory;