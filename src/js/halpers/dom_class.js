class DOM {
  query(selector) {
    document.querySelector(selector);
  }

  create(type, textContent, ...classNames) {
    const item = document.createElement(type);
  }
}
