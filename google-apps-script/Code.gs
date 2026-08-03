const SHEET_NAME = 'Inquiries';
const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const SHARED_TOKEN = SCRIPT_PROPERTIES.getProperty('SHARED_TOKEN');
const NOTIFICATION_EMAIL = SCRIPT_PROPERTIES.getProperty('NOTIFICATION_EMAIL');
const HEADERS = ['Received at', 'Name', 'Email', 'Subject', 'Message', 'Inquiry ID'];

function doPost(event) {
  try {
    const data = JSON.parse(event.postData && event.postData.contents ? event.postData.contents : '{}');

    if (!data.token || data.token !== SHARED_TOKEN) {
      return jsonResponse({ success: false, message: 'Unauthorized request.' });
    }

    const inquiry = data.inquiry || {};
    if (!inquiry.name || !inquiry.email || !inquiry.subject || !inquiry.message) {
      return jsonResponse({ success: false, message: 'Missing inquiry fields.' });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      inquiry.createdAt || new Date().toISOString(),
      safeCell(inquiry.name),
      safeCell(inquiry.email),
      safeCell(inquiry.subject),
      safeCell(inquiry.message),
      safeCell(inquiry.id || ''),
    ]);

    try {
      sendNotificationEmail(inquiry);
    } catch (error) {
      // The spreadsheet row has already been saved. Keep accepting inquiries if email is unavailable.
      console.error('Email notification failed:', error);
    }

    return jsonResponse({ success: true });
  } catch (error) {
    console.error(error);
    return jsonResponse({ success: false, message: 'Unable to save the inquiry.' });
  }
}

function safeCell(value) {
  const text = String(value || '');
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function sendNotificationEmail(inquiry) {
  if (!NOTIFICATION_EMAIL) {
    return;
  }

  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    replyTo: inquiry.email,
    subject: `[Portfolio inquiry] ${inquiry.subject}`,
    body: [
      'New contact-form inquiry received.',
      '',
      `Name: ${inquiry.name}`,
      `Email: ${inquiry.email}`,
      `Subject: ${inquiry.subject}`,
      '',
      'Message:',
      inquiry.message,
    ].join('\n'),
  });
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
