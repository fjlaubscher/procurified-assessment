const { Router } = require('express');

// data
const {
  createSWAPIRequestAsync,
  getSWAPIRequestByQueryAsync,
  updateSWAPIRequestAsync
} = require('../data/swapi-request');

// middleware
const authMiddleware = require('../middleware/auth');

// services
const isSWAPIRequestStale = require('../services/is-swapi-request-stale');
const { searchPeopleListAsync } = require('../services/swapi');

const router = Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const { term } = req.query;

    if (!term) {
      return res.status(400).json({ status: 'error', message: 'Missing search term' });
    }

    const cachedRequest = await getSWAPIRequestByQueryAsync(term);

    if (cachedRequest) {
      if (isSWAPIRequestStale(cachedRequest.lastUpdated)) {
        const response = await searchPeopleListAsync(term);
        const updatedRequest = await updateSWAPIRequestAsync({ query: term, response });

        return res.status(200).json({ status: 'success', data: updatedRequest.response });
      } else {
        return res.status(200).json({ status: 'success', data: cachedRequest.response });
      }
    } else {
      const response = await searchPeopleListAsync(term);

      if (response && response.count) {
        const newRequest = await createSWAPIRequestAsync({
          query: term,
          response: response.results
        });
        return res.status(200).json({ status: 'success', data: newRequest.response });
      } else {
        return res.status(200).json({ status: 'success', data: [] });
      }
    }
  } catch (ex) {
    return res.status(500).json({ status: 'error', message: ex.message });
  }
});

module.exports = router;
