-- ============================================
-- Database Migration: Add Article Detail Fields
-- ============================================

USE puskesmas_db;

-- Add new columns to articles table
ALTER TABLE articles
  ADD COLUMN author VARCHAR(100) DEFAULT 'Tim Puskesmas Pasongsongan' AFTER title,
  ADD COLUMN category VARCHAR(50) DEFAULT 'Artikel' AFTER author,
  ADD COLUMN slug VARCHAR(255) UNIQUE AFTER category,
  ADD COLUMN excerpt TEXT AFTER content;

-- Add indexes for better query performance
ALTER TABLE articles
  ADD INDEX idx_slug (slug),
  ADD INDEX idx_category (category);

-- Update existing articles with auto-generated slugs
UPDATE articles 
SET slug = CONCAT(
  LOWER(
    REPLACE(
      REPLACE(
        REPLACE(
          REPLACE(
            REPLACE(title, ' ', '-'),
            '?', ''
          ),
          '!', ''
        ),
        ',', ''
      ),
      '.', ''
    )
  ),
  '-',
  id
)
WHERE slug IS NULL OR slug = '';

-- Verify the migration
SELECT id, title, author, category, slug, status FROM articles;

-- Show table structure
DESCRIBE articles;
