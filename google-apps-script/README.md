# Google Sheets setup

1. Open the Google spreadsheet that should receive contact inquiries.
2. Choose **Extensions → Apps Script**, replace the default script with the contents of `Code.gs`, then open **Project Settings → Script properties** and add:
   - `SHARED_TOKEN`: a long random value.
   - `NOTIFICATION_EMAIL`: the inbox that should receive each inquiry notification.
3. Click **Deploy → New deployment → Web app**. Set **Execute as** to yourself and **Who has access** to **Anyone**, then deploy. Authorize the script when Google asks.
4. Copy the web-app URL ending in `/exec` into `GOOGLE_SHEETS_WEB_APP_URL` in your deployment environment (and `.env.local` for local development).
5. Set `GOOGLE_SHEETS_WEB_APP_TOKEN` to exactly the same value as the `SHARED_TOKEN` Script Property.

## Email notifications

To receive an email for every saved inquiry, set the `NOTIFICATION_EMAIL` Script Property to your inbox address. Save the script, then **Deploy → Manage deployments → Edit → New version → Deploy**. Google may request permission to send email the first time you deploy this version.

The script creates an `Inquiries` tab and its column headings on the first successful contact-form submission.
