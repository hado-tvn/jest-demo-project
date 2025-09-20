const convertNumToString = require('./solution');

test('-123 should be read as "âm một trăm hai mươi ba"', () => {
  expect(convertNumToString(-123)).toBe("âm một trăm hai mươi ba");
});