export default function handler(req, res) {
  console.log(req.query);
  try {
    if (req.query.test === '1') {
      res.redirect('https://asleep.ai');
    } else if (req.query.test === '2') {
      res.redirect('https://www.naver.com');
    }
    res.status(200).json({ name: 'John Doe' });
  } catch (e) {
    console.error(e);
  }
}
