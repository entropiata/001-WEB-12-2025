const { sendContactEmail } = require('../services/emailService');

/**
 * Handle contact form submission
 * POST /api/contact
 */
exports.submitContact = async (req, res) => {
    try {
        const { nama, email, pesan } = req.body;

        // Validate required fields
        if (!nama || !email || !pesan) {
            return res.status(400).json({
                success: false,
                message: 'Semua field harus diisi (nama, email, pesan)'
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Format email tidak valid'
            });
        }

        // Validate name length
        if (nama.trim().length < 2) {
            return res.status(400).json({
                success: false,
                message: 'Nama harus minimal 2 karakter'
            });
        }

        // Validate message length
        if (pesan.trim().length < 10) {
            return res.status(400).json({
                success: false,
                message: 'Pesan harus minimal 10 karakter'
            });
        }

        // Sanitize inputs (basic XSS prevention)
        const sanitizedData = {
            nama: nama.trim().substring(0, 100),
            email: email.trim().toLowerCase().substring(0, 100),
            pesan: pesan.trim().substring(0, 1000)
        };

        // Send email
        const result = await sendContactEmail(sanitizedData);

        if (result.success) {
            // Log successful submission
            console.log(`📧 Contact form submitted by: ${sanitizedData.nama} (${sanitizedData.email})`);

            return res.json({
                success: true,
                message: 'Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.'
            });
        } else {
            // Log error but don't expose details to user
            console.error('Contact form email failed:', result.error);

            return res.status(500).json({
                success: false,
                message: 'Maaf, terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung.'
            });
        }

    } catch (error) {
        console.error('Contact form error:', error);

        return res.status(500).json({
            success: false,
            message: 'Terjadi kesalahan pada server. Silakan coba lagi nanti.'
        });
    }
};
