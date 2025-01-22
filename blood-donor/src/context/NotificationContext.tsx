import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Notification, NotificationType } from "../types";

interface NotificationContextType {
  showNotification: (type: NotificationType, message: string) => void;
  hideNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (type: NotificationType, message: string) => {
    const id = Date.now().toString();
    setNotifications((prev) => [...prev, { id, type, message }]);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      hideNotification(id);
    }, 5000);
  };

  const hideNotification = (id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ showNotification, hideNotification }}
    >
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onClose={() => hideNotification(notification.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};

interface NotificationProps {
  notification: Notification;
  onClose: () => void;
}

const NotificationItem: React.FC<NotificationProps> = ({
  notification,
  onClose,
}) => {
  const bgColor = {
    success: "bg-green-50 border-green-600",
    error: "bg-red-50 border-red-600",
    warning: "bg-yellow-50 border-yellow-600",
    info: "bg-blue-50 border-blue-600",
  };

  const textColor = {
    success: "text-green-800",
    error: "text-red-800",
    warning: "text-yellow-800",
    info: "text-blue-800",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      className={`${bgColor[notification.type]} ${
        textColor[notification.type]
      } border rounded-lg shadow-lg p-4 min-w-[320px] max-w-md flex items-start justify-between`}
    >
      <p className="text-sm font-medium">{notification.message}</p>
      <button
        onClick={onClose}
        className={`ml-4 ${textColor[notification.type]} hover:opacity-70`}
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
