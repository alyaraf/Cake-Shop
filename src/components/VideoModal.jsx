import React from 'react';
import styles from '../styles/VideoModal.module.css';

const VideoModal = ({ show, onClose, videoUrl }) => {
  if (!show) return null;

  return (
    <div className={`${styles.modal} ${show ? styles.show : ''}`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h5 className={styles.modalTitle}>Youtube Video</h5>
          <button
            className={styles.modalClose}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.videoContainer}>
            <iframe
              src={`${videoUrl}?autoplay=1&modestbranding=1&showinfo=0`}
              title="YouTube video"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
