function toSeconds(value) {
  if (value === 0) {
    return 0;
  }
  return value / 1000;
}

module.exports = { toSeconds };
