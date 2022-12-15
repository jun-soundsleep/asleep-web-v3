import { GoogleSpreadsheet } from 'google-spreadsheet';

// Config variables
const keyStart = '-----BEGIN PRIVATE KEY-----\n';
const keyEnd = '\n-----END PRIVATE KEY-----\n';
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const SHEET_ID = process.env.SHEET_ID;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const PRIVATE_KEY =
  keyStart + process.env.PRIVATE_KEY.replace(/\\n/g, '\n') + keyEnd;

export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const result = await sheet.addRow(body);
    console.log(result);
    return res.json({ d: 'result' });
  } catch (e) {
    console.error(e);
    return res.json({ d: 'e' });
  }
}
