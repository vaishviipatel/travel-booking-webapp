import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '.env') });
console.log('\n========== DIAGNOSTIC MODE ==========');
console.log('1. GMAIL_USER:', process.env.GMAIL_USER || '❌ MISSING');
console.log('2. GMAIL_APP_PASS exists:', !!process.env.GMAIL_APP_PASS ? '✅ YES' : '❌ NO');
console.log('3. GMAIL_APP_PASS length:', process.env.GMAIL_APP_PASS?.length || '❌ 0');
console.log('4. GMAIL_APP_PASS value (hidden):', process.env.GMAIL_APP_PASS ? '***HIDDEN***' : '❌ EMPTY'); // Updated: Hide pass in logs
console.log('5. Has spaces?', process.env.GMAIL_APP_PASS?.includes(' ') ? '⚠️ YES (REMOVE THEM!)' : '✅ NO');
console.log('=====================================\n');
// Validate before attempting connection
if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASS) {
  console.error('❌ ERROR: Missing credentials in .env file!');
  console.error('Make sure backend/.env contains:');
  console.error('GMAIL_USER=your-email@gmail.com');
  console.error('GMAIL_APP_PASS=your16charpassword');
  process.exit(1);
}
if (process.env.GMAIL_APP_PASS.length !== 16) {
  console.error('⚠️ WARNING: App password should be exactly 16 characters!');
  console.error('Current length:', process.env.GMAIL_APP_PASS.length);
  console.error('Make sure you removed all spaces from the app password.');
}
// Try multiple SMTP configurations
const configs = [
  {
    name: 'Config 1: Port 587 with STARTTLS',
    options: {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: 'TLSv1.2'
      }
    }
  },
  {
    name: 'Config 2: Port 465 with SSL',
    options: {
      host: 'smtp.gmail.com',
      port: 465, // ✅ FIXED: Changed to 465
      secure: true, // ✅ FIXED: Changed to true for SSL
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    }
  },
  {
    name: 'Config 3: Using service shortcut',
    options: {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      }
    }
  }
];
async function testConfig(config) {
  console.log(`\n🔧 Testing: ${config.name}`);
  console.log('━'.repeat(50));
  
  const transporter = nodemailer.createTransport(config.options);
  
  try {
    console.log(' ⏳ Verifying SMTP connection...');
    await transporter.verify();
    console.log(' ✅ Connection verified successfully!');
    
    console.log(' 📧 Sending test email...');
    const info = await transporter.sendMail({
      from: `"Tour System Test" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `✅ SUCCESS - ${config.name}`,
      html: `
        <div style="padding: 20px; font-family: Arial;">
          <h2 style="color: green;">🎉 Email Working!</h2>
          <p><strong>Configuration:</strong> ${config.name}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <p><strong>Test successful for:</strong> ${process.env.GMAIL_USER}</p>
          <hr>
          <p style="color: #666;">Your OTP system is now ready to use!</p>
        </div>
      `
    });
    
    console.log(' ✅ EMAIL SENT SUCCESSFULLY!');
    console.log(' Message ID:', info.messageId);
    console.log(' Check your inbox at:', process.env.GMAIL_USER);
    console.log(' (Also check spam folder)');
    return true;
    
  } catch (err) {
    console.log(' ❌ Failed:', err.message);
    console.log(' Error code:', err.code || 'UNKNOWN');
    
    if (err.code === 'EAUTH') {
      console.log('\n 🔍 Authentication Error - This means:');
      console.log(' • Gmail rejected your username/password');
      console.log(' • The app password might be incorrect');
      console.log(' • 2-Step Verification might not be enabled');
      console.log('\n 📋 Steps to fix:');
      console.log(' 1. Go to: https://myaccount.google.com/security');
      console.log(' 2. Enable 2-Step Verification if not already on');
      console.log(' 3. Go to: https://myaccount.google.com/apppasswords');
      console.log(' 4. Delete ALL existing app passwords');
      console.log(' 5. Create NEW app password for "Mail" + "Other device"');
      console.log(' 6. Copy the 16-char code WITHOUT spaces');
      console.log(' 7. Update backend/.env with new password');
      console.log(' 8. Save and try again');
    } else if (err.code === 'ESOCKET' || err.code === 'ETIMEDOUT') {
      console.log('\n 🔍 Connection Error - Possible causes:');
      console.log(' • Firewall/Antivirus blocking Gmail SMTP');
      console.log(' • Corporate network blocking port 587/465');
      console.log(' • Internet connection issues');
      console.log(' • VPN interfering with connection');
    } else if (err.code === 'EENVELOPE') {
      console.log('\n 🔍 Email Format Error');
      console.log(' • Check that GMAIL_USER is a valid email address');
    }
    
    return false;
  }
}
async function runTests() {
  console.log('🚀 Starting Gmail SMTP tests...\n');
  console.log('Testing 3 different configurations...\n');
  
  for (const config of configs) {
    const success = await testConfig(config);
    if (success) {
      console.log('\n✅ ========== TEST PASSED ==========');
      console.log(`Working configuration: ${config.name}`);
      console.log('Use this same setup in your authController.js');
      console.log('====================================\n');
      process.exit(0);
    }
    // Small delay between tests
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('\n❌ ========== ALL TESTS FAILED ==========');
  console.log('All 3 configurations failed.');
  console.log('Most likely cause: Invalid app password');
  console.log('\n🔧 Next steps:');
  console.log('1. Generate a FRESH app password');
  console.log('2. Make absolutely sure 2-Step Verification is ON');
  console.log('3. Try using a different Gmail account as a test');
  console.log('=========================================\n');
  process.exit(1);
}
runTests();