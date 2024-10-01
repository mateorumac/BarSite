import React from 'react';
import { motion } from 'framer-motion';

const Notification = ({ message, visible }) => {
  return (
    <motion.div
      className="notification"
      initial={{ opacity: 0, y: -50 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      style={styles.notification}
    >
      {message}
    </motion.div>
  );
};

const styles = {
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#D4AF37',
    color: '#004D4D',
    padding: '10px 20px',
    borderRadius: '5px',
    zIndex: 1000,
  },
};

export default Notification;
