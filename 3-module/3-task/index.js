function camelize(str) {
  return str
    .replace(/-([a-zA-Z])/g, function (_, index) {
      return index.toUpperCase();
    });
}

