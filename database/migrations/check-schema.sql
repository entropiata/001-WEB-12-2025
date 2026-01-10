-- Quick check: Run this in MySQL Workbench or phpMyAdmin
USE puskesmas_db;

-- Check current table structure
DESCRIBE articles;

-- Check if slug column exists
SHOW COLUMNS FROM articles LIKE 'slug';

-- If slug doesn't exist, run the migration:
-- Copy and paste the contents of add_article_fields.sql
