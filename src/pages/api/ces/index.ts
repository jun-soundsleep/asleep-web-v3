export default function handler(req, res) {
  console.log(req.query);
  try {
    if (req.query.test === '1') {
      return res.redirect('https://asleep.ai');
    } else if (req.query.test === '2') {
      return res.redirect('https://www.naver.com');
    }
    return res.status(200).json({ name: 'John Doe' });
  } catch (e) {
    console.error(e);
  }
}
