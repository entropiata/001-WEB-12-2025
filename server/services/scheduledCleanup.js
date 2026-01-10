const cron = require('node-cron');
const imageCleanupService = require('../services/imageCleanup');

/**
 * Scheduled task to automatically clean up unused images
 * Runs daily at 2:00 AM by default
 */
class ScheduledCleanup {
    constructor() {
        this.isEnabled = process.env.AUTO_CLEANUP_ENABLED === 'true';
        this.schedule = process.env.AUTO_CLEANUP_SCHEDULE || '0 2 * * *'; // Default: 2 AM daily
        this.task = null;
    }

    /**
     * Start the scheduled cleanup task
     */
    start() {
        if (!this.isEnabled) {
            console.log('⏸️  Automatic image cleanup is disabled');
            console.log('   Set AUTO_CLEANUP_ENABLED=true in .env to enable');
            return;
        }

        console.log('⏰ Scheduling automatic image cleanup...');
        console.log(`   Schedule: ${this.schedule} (cron format)`);
        console.log('   Status: Active');

        this.task = cron.schedule(this.schedule, async () => {
            console.log('\n' + '='.repeat(60));
            console.log('🧹 Running scheduled image cleanup...');
            console.log('   Time:', new Date().toISOString());
            console.log('='.repeat(60));

            try {
                const result = await imageCleanupService.cleanupUnusedImages(false);

                console.log('\n📊 Cleanup Results:');
                console.log(`   Total images: ${result.total}`);
                console.log(`   Referenced: ${result.referenced}`);
                console.log(`   Unused: ${result.unused}`);
                console.log(`   Deleted: ${result.deleted}`);

                if (result.errors.length > 0) {
                    console.log(`   Errors: ${result.errors.length}`);
                    result.errors.forEach(err => {
                        console.log(`   ❌ ${err.filename}: ${err.error}`);
                    });
                }

                console.log('\n✅ Scheduled cleanup completed successfully');
                console.log('='.repeat(60) + '\n');
            } catch (error) {
                console.error('\n❌ Scheduled cleanup failed:', error.message);
                console.error('='.repeat(60) + '\n');
            }
        });

        console.log('✅ Automatic cleanup scheduled successfully\n');
    }

    /**
     * Stop the scheduled cleanup task
     */
    stop() {
        if (this.task) {
            this.task.stop();
            console.log('⏹️  Automatic image cleanup stopped');
        }
    }

    /**
     * Get the current schedule status
     */
    getStatus() {
        return {
            enabled: this.isEnabled,
            schedule: this.schedule,
            running: this.task ? true : false,
            nextRun: this.task ? 'Check cron schedule' : null
        };
    }
}

module.exports = new ScheduledCleanup();
