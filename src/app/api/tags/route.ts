export async function GET(req: Request) {
  const OLLAMA_URL = 'http://localhost:11434';
  const res = await fetch(OLLAMA_URL + "/api/tags");
  return new Response(res.body, res);
}
