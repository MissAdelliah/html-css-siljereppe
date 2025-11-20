async function fetchProducts() {
  const res = await fetch(ENDPOINT, {
    headers: { Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  const json = await res.json();
  const data = Array.isArray(json) ? json : json?.data;

  if (!Array.isArray(data)) throw new Error("Unexpected API response shape");

  return data.map(normalizeProduct);
}
