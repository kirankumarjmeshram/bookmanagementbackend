const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'error',
});

exports.searchBooks = async (req, res) => {
  try {
    const { q } = req.query;
    const result = await client.search({
      index: 'books',
      body: {
        query: {
          multi_match: {
            query: q,
            fields: ['title'], //, 'author', 'description'
          },
        },
      },
    });
    const books = result.hits.hits.map((hit) => hit._source);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
