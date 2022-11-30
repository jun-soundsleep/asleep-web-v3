export default function handler(req, res) {
  try {
    switch (req.query.redirection) {
      case "0":
        return res.redirect('https://asleep.ai');
      case "1":
        return res.redirect('https://toss.im/');
      case "2":
        return res.redirect('https://baemin.com/');
      case "3":
        return res.redirect('https://line.me/ko/');
      case "4":
        return res.redirect('https://www.kakaocorp.com/page/');
      case "5":
        return res.redirect('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwj45oTxsNX7AhUNmFYBHSEoBzQQPAgI');
      case "6":
        return res.redirect('https://en.dict.naver.com/#/main');
      case "7":
        return res.redirect('https://papago.naver.com/?sk=auto&tk=ko&hn=0&st=Use%20the%20JavaScript%20documentation%20to%20find%20a%20method%20on%20the%20built-in%20Number%20object%20that%20checks%20if%20a%20number%20is%20an%20integer.');
      case "8":
        return res.redirect('https://www.figma.com/file/DvI7vbVrMUQv3oJjYgtJkS/Epic%3A-Report?node-id=1%3A15589');
      case "9":
        return res.redirect('https://www.asleep.ai/business/');
      case "10":
        return res.redirect('https://asleep.ai');
      default:
        return res.redirect('https://www.asleep.ai/');
    }
  } catch (e) {
    console.error(e);
    return res.redirect('https://asleep.ai');
  }
}
