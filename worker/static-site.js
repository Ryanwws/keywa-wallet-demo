const HTML_HEADERS = {
  "content-type": "text/html; charset=utf-8",
  "x-content-type-options": "nosniff",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/") {
      url.pathname = "/index.html";
    }

    const response = await env.ASSETS.fetch(new Request(url, request));

    if (url.pathname === "/index.html" && response.ok) {
      const headers = new Headers(response.headers);
      Object.entries(HTML_HEADERS).forEach(([key, value]) => headers.set(key, value));
      return new Response(response.body, { status: response.status, headers });
    }

    return response;
  },
};
