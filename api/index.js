import { google } from 'googleapis'

export default async function handler(req, res) {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // replace the escaped newline characters (https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse)
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes,
    )
    const sheets = google.sheets({ version: 'v4', auth: jwt })

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
    })

    const rows = response.data.values

    res.status(200).json(rows)
  } catch (error) {
    res.status(500).send(error)
  }

}
