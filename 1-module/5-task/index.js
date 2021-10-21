function truncate(str, maxlength) {
  let ellipsis = '\u2026';
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + ellipsis;
  } else if (str.length < maxlength) {
    return str;
  }
}
