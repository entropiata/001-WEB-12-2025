# Article Not Found - Troubleshooting Guide

## Problem
Articles show "Article Not Found" when clicked.

## Most Likely Cause
The database migration hasn't been run yet, so the `slug` column doesn't exist in the `articles` table.

## Solution Steps

### Step 1: Run the Database Migration

**Option A: Using MySQL Workbench (Recommended)**
1. Open MySQL Workbench
2. Connect to `localhost:3306`
3. Open the file: `database/migrations/add_article_fields.sql`
4. Click Execute (⚡ icon) or press Ctrl+Shift+Enter
5. Check for success message

**Option B: Using phpMyAdmin**
1. Open phpMyAdmin
2. Select `puskesmas_db` database
3. Go to SQL tab
4. Copy and paste contents of `database/migrations/add_article_fields.sql`
5. Click "Go"

**Option C: Using Command Line (if MySQL is in PATH)**
```bash
mysql -u root -p < database\migrations\add_article_fields.sql
```

### Step 2: Verify Migration Success

Run this query in MySQL:
```sql
USE puskesmas_db;
DESCRIBE articles;
```

You should see these columns:
- id
- title
- **author** ← NEW
- **category** ← NEW
- **slug** ← NEW
- content
- **excerpt** ← NEW
- image
- status
- created_at
- updated_at

### Step 3: Update Existing Articles

After migration, existing articles won't have slugs. Run this:

```sql
UPDATE articles 
SET slug = CONCAT(
  LOWER(
    REPLACE(
      REPLACE(
        REPLACE(title, ' ', '-'),
        '?', ''
      ),
      '!', ''
    )
  ),
  '-',
  id
)
WHERE slug IS NULL OR slug = '';
```

### Step 4: Restart Backend Server

```bash
# In the server terminal, press Ctrl+C
# Then restart:
npm run dev
```

### Step 5: Test

1. Go to `http://localhost:5173/artikel`
2. Click on an article
3. Should now load properly!

## Alternative: Check Backend Logs

Look at the backend server terminal for errors like:
- `Unknown column 'slug'` ← Migration not run
- `Article not found` ← Slug doesn't match
- `ECONNREFUSED` ← Backend not running

## Quick Test

Open browser console (F12) and check Network tab:
1. Click on an article
2. Look for request to `/api/articles/slug/...`
3. Check the response:
   - 404 = Article not found (migration issue)
   - 500 = Server error (check backend logs)
   - 200 = Success (different issue)

## If Still Not Working

### Check 1: Is the backend running?
- Should see: `🚀 Puskesmas API Server` in terminal
- Test: Visit `http://localhost:5000/api/health`

### Check 2: Are there any articles?
```sql
SELECT id, title, slug, status FROM articles;
```

### Check 3: Are articles published?
Only articles with `status = 'published'` are visible.

```sql
UPDATE articles SET status = 'published' WHERE status = 'draft';
```

### Check 4: Check the slug format
Slugs should be lowercase with hyphens:
- ✅ Good: `tips-kesehatan-2024`
- ❌ Bad: `Tips Kesehatan 2024`

## Manual Fix for Existing Articles

If you have articles created before the migration:

1. Go to admin panel: `http://localhost:5173/admin`
2. Edit each article
3. The slug will auto-generate
4. Save the article
5. Now it should work!

## Contact Points

If none of the above works, check:
1. Browser console for JavaScript errors
2. Backend terminal for API errors
3. MySQL for database errors
