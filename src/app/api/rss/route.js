import Parser from 'rss-parser';

const parser = new Parser();

export async function GET() {
  const feedUrl = 'https://zenn.dev/kao126/feed?all=1'; // 取得したいRSSフィードのURL
  try {
    const feed = await parser.parseURL(feedUrl);
    return new Response(JSON.stringify(feed), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch RSS feed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}