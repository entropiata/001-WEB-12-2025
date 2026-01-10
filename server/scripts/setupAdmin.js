const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupAdmin() {
    let connection;

    try {
        console.log('🔧 Setting up admin user...\n');

        // Validate required environment variables
        const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
        const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

        if (missingVars.length > 0) {
            throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
        }

        // Connect to database - credentials from .env only
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });

        console.log('✅ Connected to database');

        // Create admin_users table if it doesn't exist
        await connection.query(`
      CREATE TABLE IF NOT EXISTS admin_users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_username (username)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);

        console.log('✅ Admin users table ready');

        // Hash password
        const username = process.env.ADMIN_USERNAME || 'admin';
        const password = process.env.ADMIN_PASSWORD || 'admin123';
        const passwordHash = await bcrypt.hash(password, 10);

        console.log('✅ Password hashed');

        // Check if admin already exists
        const [existing] = await connection.query(
            'SELECT * FROM admin_users WHERE username = ?',
            [username]
        );

        if (existing.length > 0) {
            // Update existing admin
            await connection.query(
                'UPDATE admin_users SET password_hash = ? WHERE username = ?',
                [passwordHash, username]
            );
            console.log('✅ Admin user updated');
        } else {
            // Insert new admin
            await connection.query(
                'INSERT INTO admin_users (username, password_hash) VALUES (?, ?)',
                [username, passwordHash]
            );
            console.log('✅ Admin user created');
        }

        console.log('\n' + '='.repeat(50));
        console.log('✅ Setup completed successfully!');
        console.log('='.repeat(50));
        console.log(`\nAdmin Credentials:`);
        console.log(`  Username: ${username}`);
        console.log(`  Password: ${password}`);
        console.log('\n⚠️  Please change the password in production!\n');

    } catch (error) {
        console.error('\n❌ Setup failed:', error.message);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

setupAdmin();
