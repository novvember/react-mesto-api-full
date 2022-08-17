const jwt = require('jsonwebtoken');

// вставьте сюда JWT, который вернул публичный сервер
const YOUR_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmZjMDRlNGY0Y2RmY2Y0ZDUwM2E3NWEiLCJpYXQiOjE2NjA3MzYyNTMsImV4cCI6MTY2MTM0MTA1M30.RYaWBlPsrfVHbI_I-_N0Wl39q5IrsrNNnOLjzkkjGyc';

// вставьте сюда секретный ключ для разработки из кода
const SECRET_KEY_DEV = 'secret';

try {
  jwt.verify(YOUR_JWT, SECRET_KEY_DEV);
  console.log(
    '\x1b[31m%s\x1b[0m',
    `
Надо исправить. В продакшне используется тот же
секретный ключ, что и в режиме разработки.
`,
  );
} catch (err) {
  if (err.name === 'JsonWebTokenError' && err.message === 'invalid signature') {
    console.log(
      '\x1b[32m%s\x1b[0m',
      'Всё в порядке. Секретные ключи отличаются',
    );
  } else {
    console.log('\x1b[33m%s\x1b[0m', 'Что-то не так', err);
  }
}
