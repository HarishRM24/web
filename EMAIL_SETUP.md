# Email Setup Instructions

The contact form is now fully functional and will send emails to `mahalakshmi@ntimes.ai` when properly configured.

## Current Status
✅ Contact form processes submissions  
✅ Form data is stored in database  
✅ Professional HTML email templates created  
⚠️ Email sending requires SMTP credentials  

## To Enable Email Functionality

### Option 1: Gmail SMTP (Recommended)
1. **Prepare Gmail Account:**
   - Use an existing Gmail account or create one specifically for the website
   - Enable 2-factor authentication on the account

2. **Generate App Password:**
   - Go to Google Account settings
   - Navigate to Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Configure Environment:**
   - Create a `.env` file in the project root
   - Add these lines:
   ```
   SMTP_EMAIL=your-gmail@gmail.com
   SMTP_PASSWORD=your-16-character-app-password
   ```

4. **Restart the Application:**
   - The server will automatically detect the credentials
   - Test the contact form - emails will be sent to mahalakshmi@ntimes.ai

### Option 2: Other SMTP Providers
Update the `server/email.ts` configuration to use your preferred provider:
- Outlook: `service: 'outlook'`
- Yahoo: `service: 'yahoo'`
- Custom SMTP: Configure host, port, and security settings

## Email Features
- **Professional Design:** Styled HTML emails with NTimes.AI branding
- **Complete Form Data:** All contact information included in email
- **Reply-To Support:** Recipients can reply directly to the customer
- **Error Handling:** Graceful fallback if email fails
- **Security:** Email address not exposed in frontend code

## Testing
The contact form works immediately after adding SMTP credentials. Test by:
1. Filling out the contact form on the website
2. Checking for email delivery to mahalakshmi@ntimes.ai
3. Verifying the professional email formatting and reply-to functionality