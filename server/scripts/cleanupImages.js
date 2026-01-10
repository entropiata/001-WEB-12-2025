const imageCleanupService = require('../services/imageCleanup');
require('dotenv').config();

async function runCleanup() {
    console.log('🧹 Starting Image Cleanup Process...\n');
    console.log('='.repeat(60));

    try {
        // First, show statistics
        console.log('\n📊 Analyzing images...\n');
        const stats = await imageCleanupService.getCleanupStats();

        console.log('Statistics:');
        console.log(`  Total images in uploads: ${stats.total}`);
        console.log(`  Referenced in articles: ${stats.referenced}`);
        console.log(`  Unused images: ${stats.unused}`);
        console.log(`  Total unused size: ${stats.totalSizeMB} MB (${stats.totalSizeKB} KB)`);

        if (stats.unused === 0) {
            console.log('\n✅ All images are being used. Nothing to clean up!');
            process.exit(0);
        }

        console.log('\n📋 Unused files:');
        stats.unusedFiles.forEach((file, index) => {
            console.log(`  ${index + 1}. ${file}`);
        });

        console.log('\n' + '='.repeat(60));
        console.log('⚠️  WARNING: This will permanently delete unused images!');
        console.log('='.repeat(60));

        // Check for command line argument
        const args = process.argv.slice(2);
        const isDryRun = args.includes('--dry-run');
        const isForce = args.includes('--force');

        if (isDryRun) {
            console.log('\n🔍 DRY RUN MODE - No files will be deleted\n');
            const result = await imageCleanupService.cleanupUnusedImages(true);
            console.log('\nDry run complete. Use --force to actually delete files.');
        } else if (isForce) {
            console.log('\n🗑️  FORCE MODE - Deleting unused images...\n');
            const result = await imageCleanupService.cleanupUnusedImages(false);

            console.log('\n' + '='.repeat(60));
            console.log('📈 Cleanup Results:');
            console.log(`  Files deleted: ${result.deleted}`);
            console.log(`  Errors: ${result.errors.length}`);

            if (result.errors.length > 0) {
                console.log('\n❌ Errors encountered:');
                result.errors.forEach(err => {
                    console.log(`  - ${err.filename}: ${err.error}`);
                });
            }

            console.log('='.repeat(60));
        } else {
            console.log('\n💡 Usage:');
            console.log('  --dry-run : Preview what will be deleted (safe)');
            console.log('  --force   : Actually delete the unused images');
            console.log('\nExample: node scripts/cleanupImages.js --dry-run');
        }

    } catch (error) {
        console.error('\n❌ Cleanup failed:', error.message);
        console.error(error);
        process.exit(1);
    }
}

runCleanup();
