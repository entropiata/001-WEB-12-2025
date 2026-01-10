# Image Cleanup System

Automatic system to detect and delete unused images from the articles upload directory.

## Features

- 🔍 **Smart Detection**: Scans both featured images and inline content images
- 📊 **Statistics**: View storage usage and cleanup potential
- 🔒 **Safe Preview**: Dry-run mode to see what will be deleted
- 🗑️ **Manual Cleanup**: Remove unused images with one command
- ⏰ **Automatic Cleanup**: Scheduled task runs automatically (configurable)
- 🌐 **API Endpoints**: Admin-protected REST API for cleanup operations

## Automatic Cleanup

The system can automatically delete unused images on a schedule.

### Configuration

Add these environment variables to your `.env` file:

```env
# Enable automatic cleanup (default: false)
AUTO_CLEANUP_ENABLED=true

# Cleanup schedule in cron format (default: 0 2 * * * = daily at 2 AM)
AUTO_CLEANUP_SCHEDULE=0 2 * * *
```

### Cron Schedule Examples

```
0 2 * * *     # Daily at 2:00 AM
0 3 * * 0     # Weekly on Sunday at 3:00 AM
0 4 1 * *     # Monthly on the 1st at 4:00 AM
0 */6 * * *   # Every 6 hours
```

### When Does It Run?

- **If enabled**: Runs automatically according to `AUTO_CLEANUP_SCHEDULE`
- **Default**: Daily at 2:00 AM (when server is running)
- **If disabled**: Only runs when manually triggered

## How It Works

The system identifies unused images by:

1. **Scanning uploads directory** - Gets all image files in `/uploads/articles/`
2. **Checking database** - Retrieves all articles and their content
3. **Extracting references** - Finds images in:
   - Featured image field (`image` column)
   - HTML img tags in content (`<img src="...">`)
   - Markdown images in content (`![alt](url)`)
4. **Comparing** - Identifies files not referenced anywhere
5. **Deleting** - Removes unused files (when not in dry-run mode)

## Usage

### 1. Command Line (Manual)

#### Preview what will be deleted (safe):
```bash
npm run cleanup-images -- --dry-run
```

#### Actually delete unused images:
```bash
npm run cleanup-images -- --force
```

#### Direct node command:
```bash
node scripts/cleanupImages.js --dry-run
node scripts/cleanupImages.js --force
```

### 2. API Endpoints (Admin Only)

All endpoints require authentication token.

#### Get cleanup statistics
```http
GET /api/cleanup/stats
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "total": 50,
    "referenced": 35,
    "unused": 15,
    "unusedFiles": ["image1.jpg", "image2.png", ...],
    "totalSizeBytes": 12582912,
    "totalSizeKB": "12288.00",
    "totalSizeMB": "12.00"
  }
}
```

#### Preview cleanup (dry run)
```http
GET /api/cleanup/preview
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Preview completed",
  "data": {
    "total": 50,
    "referenced": 35,
    "unused": 15,
    "unusedFiles": ["image1.jpg", "image2.png", ...],
    "deleted": 0,
    "deletedFiles": ["image1.jpg", "image2.png", ...],
    "errors": [],
    "dryRun": true
  }
}
```

#### Get scheduled cleanup status
```http
GET /api/cleanup/status
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "enabled": true,
    "schedule": "0 2 * * *",
    "running": true,
    "nextRun": "Check cron schedule"
  }
}
```

#### Execute cleanup
```http
POST /api/cleanup/execute
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully deleted 15 unused image(s)",
  "data": {
    "total": 50,
    "referenced": 35,
    "unused": 15,
    "unusedFiles": ["image1.jpg", "image2.png", ...],
    "deleted": 15,
    "deletedFiles": ["image1.jpg", "image2.png", ...],
    "errors": [],
    "dryRun": false
  }
}
```

## Example Output

```
🧹 Starting Image Cleanup Process...

============================================================

📊 Analyzing images...

Statistics:
  Total images in uploads: 50
  Referenced in articles: 35
  Unused images: 15
  Total unused size: 12.50 MB (12800.00 KB)

📋 Unused files:
  1. old-banner-1234567890.jpg
  2. deleted-article-9876543210.png
  3. test-image-1111111111.webp
  ...

============================================================
⚠️  WARNING: This will permanently delete unused images!
============================================================

🗑️  FORCE MODE - Deleting unused images...

✅ Deleted: old-banner-1234567890.jpg
✅ Deleted: deleted-article-9876543210.png
✅ Deleted: test-image-1111111111.webp
...

🎉 Cleanup complete! Deleted 15 file(s)

============================================================
📈 Cleanup Results:
  Files deleted: 15
  Errors: 0
============================================================
```

## Best Practices

1. **Always run dry-run first** to preview what will be deleted
2. **Backup your uploads directory** before running cleanup
3. **Run cleanup periodically** (e.g., weekly or monthly) to save storage
4. **Check the preview** to ensure no important images are marked for deletion

## When Images Are Considered Unused

An image is marked as unused when:
- ❌ Not set as a featured image in any article
- ❌ Not embedded in any article content (HTML or Markdown)
- ❌ Not referenced anywhere in the articles table

## Safety Features

- ✅ **Dry-run mode** - Preview before deleting
- ✅ **Explicit confirmation** - Requires `--force` flag
- ✅ **Error handling** - Continues even if some files fail to delete
- ✅ **Detailed logging** - Shows exactly what's happening
- ✅ **Admin-only API** - Protected by authentication middleware

## Troubleshooting

### "No unused images found"
All images are being used. Nothing to clean up!

### "Failed to delete [filename]"
The file might be locked or you don't have permission. Check file permissions.

### Images still showing as unused after being added to article
Make sure the article is saved and the image URL matches the format:
- `/uploads/articles/filename.jpg`
- `http://localhost:5000/uploads/articles/filename.jpg`

## Integration with Admin Panel

You can integrate the cleanup API into your admin panel:

```javascript
// Get statistics
const stats = await fetch('/api/cleanup/stats', {
  headers: { 'Authorization': `Bearer ${token}` }
});

// Preview cleanup
const preview = await fetch('/api/cleanup/preview', {
  headers: { 'Authorization': `Bearer ${token}` }
});

// Execute cleanup
const result = await fetch('/api/cleanup/execute', {
  method: 'POST',
  headers: { 'Authorization': `Bearer ${token}` }
});
```

## Files

- `services/imageCleanup.js` - Core cleanup service
- `scripts/cleanupImages.js` - CLI script
- `routes/cleanup.js` - API endpoints
- `CLEANUP.md` - This documentation
