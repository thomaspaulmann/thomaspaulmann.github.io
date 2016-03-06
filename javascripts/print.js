var json = {"name":"Thomas Paul Mann","description":"I'm an Engineer.","contact": {"mail":"<a href='mailto:hello@thomaspaulmann.com'>hello@thomaspaulmann.com</a>","github":"<a target='_blank' href='https://github.com/thomaspaulmann'>https://github.com/thomaspaulmann</a>","twitter":"<a target='_blank' href='https://twitter.com/thomaspaulmann'>https://twitter.com/thomaspaulmann</a>"}};

document.write(JSON.stringify(json, null, 2));
