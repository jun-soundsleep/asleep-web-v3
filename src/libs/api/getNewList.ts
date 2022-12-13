import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NewsListType } from '../../type/news';

export const getNewList = async () => {
  // Config variables
  const keyStart = '-----BEGIN PRIVATE KEY-----\n';
  const keyEnd = '\n-----END PRIVATE KEY-----\n';
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
  const SHEET_ID = process.env.NEWS_SHEET_ID;
  const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
  const PRIVATE_KEY =
    keyStart + process.env.PRIVATE_KEY.replace(/\\n/g, '\n') + keyEnd;
  try {
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY
    });
    await doc.loadInfo();
    const sheet = doc.sheetsById[SHEET_ID];
    const rows = await sheet.getRows();
    return rows.map(
      ({
        title_ko,
        title_en,
        date,
        company_en,
        company_ko,
        externalLink
      }: NewsListType) => {
        return {
          title_ko,
          title_en,
          date,
          company_en,
          company_ko,
          externalLink
        };
      }
    );
  } catch (e) {
    console.log(e);
    return [
      {
        title_ko: '',
        title_en: '',
        date: '',
        company_en: '',
        company_ko: '',
        externalLink: ''
      }
    ];
  }
};
