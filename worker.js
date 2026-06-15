export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = "https://api.pexels.com" + url.pathname + url.search;
    const modified = new Request(target, {
      method: request.method,
      headers: request.headers,
    });
    return fetch(modified);
  },
};
