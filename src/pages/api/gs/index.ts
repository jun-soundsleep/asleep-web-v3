import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
const SPREADSHEET_ID = '';
const SHEET_ID = '';
const CLIENT_EMAIL = '';
const PRIVATE_KEY = '';

export default async function handler(req, res) {
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow({ Name: 'jun-test', Value: 'jun-test' });
    console.log(result);
    return res.json({ d: result });
  } catch (e) {
    console.error(e);
    return res.json({ d: 'e' });
  }
}
