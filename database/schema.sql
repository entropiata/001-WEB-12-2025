-- ============================================
-- Database Schema for Puskesmas Articles
-- ============================================

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS puskesmas_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

-- Use the database
USE puskesmas_db;

-- ============================================
-- Articles Table
-- ============================================
CREATE TABLE IF NOT EXISTS articles (
  -- Primary key
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  
  -- Article information
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  image VARCHAR(500) DEFAULT NULL COMMENT 'File path or URL to article image',
  
  -- Status management
  status ENUM('draft', 'published') NOT NULL DEFAULT 'draft',
  
  -- Timestamps
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  -- Indexes for better query performance
  INDEX idx_status (status),
  INDEX idx_created_at (created_at),
  INDEX idx_status_created (status, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Sample Data (Optional)
-- ============================================
INSERT INTO articles (title, content, image, status) VALUES
  (
    'Tips Menjaga Kesehatan di Musim Hujan',
    'Musim hujan telah tiba, dan penting bagi kita untuk menjaga kesehatan agar terhindar dari berbagai penyakit. Berikut adalah beberapa tips yang dapat membantu Anda tetap sehat selama musim hujan...',
    'https://images.unsplash.com/photo-1758691462126-2ee47c8bf9e7?w=400',
    'published'
  ),
  (
    'Pentingnya Imunisasi untuk Anak',
    'Imunisasi merupakan salah satu cara terbaik untuk melindungi anak dari berbagai penyakit berbahaya. Program imunisasi yang lengkap dan tepat waktu sangat penting untuk kesehatan anak...',
    'https://images.unsplash.com/photo-1618426372878-9d83ce534436?w=400',
    'published'
  ),
  (
    'Program Posyandu Lansia Bulan Desember',
    'Puskesmas Pasongsongan mengadakan program Posyandu Lansia pada bulan Desember ini. Program ini bertujuan untuk memantau kesehatan para lansia di wilayah kerja kami...',
    'https://images.unsplash.com/photo-1758575514487-0390fcacc339?w=400',
    'published'
  );
