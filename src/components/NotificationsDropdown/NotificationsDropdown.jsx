import React, { useState, useEffect, useRef } from "react";
import "./NotificationsDropdown.css";
import notificationIcon from "./pictures/notification.png";

const NotificationsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Your Networking Group",
      text: " is networking event in your area",
      time: "1w",
      reactions: 15,
      comments: 2,
      unread: true,
    },
    {
      id: 2,
      user: "Bill Oodleton",
      text: ' added a new photo: "Happy 3rd anniversary..."',
      time: "1d",
      unread: true,
    },
  ]);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  return (
    <div className="notifications-container" ref={dropdownRef}>
      <button className="notification-icon" onClick={toggleDropdown}>
        <img
          src={notificationIcon}
          alt="Notifications"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
        <span className="badge">
          {notifications.filter((n) => n.unread).length}
        </span>
      </button>
      {isOpen && (
        <div className="dropdown">
          <div className="header">
            <span>Notifications</span>
          </div>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`notification-item ${notif.unread ? "unread" : ""}`}
                onClick={() => markAsRead(notif.id)}
              >
                <div className="profile-icon">👤</div>
                <div className="content">
                  <span className="user">{notif.user}:</span>
                  <span className="text">{notif.text}</span>
                  <div className="meta">
                    <span>{notif.time}</span>
                    {notif.reactions && (
                      <span>· {notif.reactions} Reactions</span>
                    )}
                    {notif.comments && <span>· {notif.comments} Comments</span>}
                  </div>
                </div>
                {notif.unread && <span className="dot"></span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsDropdown;
