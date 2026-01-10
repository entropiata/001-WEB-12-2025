# Database Setup Guide

## Prerequisites
- MySQL Server installed and running on `localhost:3306`
- MySQL client or MySQL Workbench

## Setup Instructions

### 1. Import the Schema

**Using MySQL Command Line:**
```bash
mysql -u root -p < database/schema.sql
```

**Using MySQL Workbench:**
1. Open MySQL Workbench
2. Connect to `localhost:3306`
3. Go to File → Open SQL Script
4. Select `database/schema.sql`
5. Click Execute (⚡ icon)

### 2. Verify Database Creation

```sql
-- Show databases
SHOW DATABASES;

-- Use the database
USE puskesmas_db;

-- Show tables
SHOW TABLES;

-- Describe articles table structure
DESCRIBE articles;

-- View sample data
SELECT * FROM articles;
```

## Database Schema

### Database: `puskesmas_db`
- Character Set: `utf8mb4`
- Collation: `utf8mb4_unicode_ci`

### Table: `articles`

| Field | Type | Null | Key | Default | Extra |
|-------|------|------|-----|---------|-------|
| id | INT UNSIGNED | NO | PRI | NULL | auto_increment |
| title | VARCHAR(255) | NO | | NULL | |
| content | TEXT | NO | | NULL | |
| image | VARCHAR(500) | YES | | NULL | |
| status | ENUM('draft','published') | NO | MUL | draft | |
| created_at | TIMESTAMP | NO | MUL | CURRENT_TIMESTAMP | |
| updated_at | TIMESTAMP | NO | | CURRENT_TIMESTAMP | on update CURRENT_TIMESTAMP |

### Indexes
- `PRIMARY KEY` on `id`
- `idx_status` on `status` - for filtering by status
- `idx_created_at` on `created_at` - for sorting by date
- `idx_status_created` on `(status, created_at)` - composite index for common queries

## Best Practices Implemented

✅ **UTF8MB4 Character Set** - Supports all Unicode characters including emojis  
✅ **Auto-incrementing Primary Key** - Efficient unique identifier  
✅ **ENUM for Status** - Ensures data integrity with predefined values  
✅ **Automatic Timestamps** - `created_at` and `updated_at` managed automatically  
✅ **Proper Indexing** - Optimized for common query patterns  
✅ **InnoDB Engine** - ACID compliance and foreign key support  
✅ **NOT NULL Constraints** - Prevents incomplete data  
✅ **Default Values** - Sensible defaults for optional fields  

## Common Queries

### Get all published articles
```sql
SELECT * FROM articles 
WHERE status = 'published' 
ORDER BY created_at DESC;
```

### Get article by ID
```sql
SELECT * FROM articles WHERE id = 1;
```

### Create new article
```sql
INSERT INTO articles (title, content, image, status) 
VALUES (
  'Article Title',
  'Article content here...',
  '/path/to/image.jpg',
  'draft'
);
```

### Update article
```sql
UPDATE articles 
SET title = 'Updated Title', 
    content = 'Updated content',
    status = 'published'
WHERE id = 1;
```

### Delete article
```sql
DELETE FROM articles WHERE id = 1;
```

## Connection Details

- **Host:** localhost
- **Port:** 3306
- **Database:** puskesmas_db
- **Default User:** root
- **Character Set:** utf8mb4
