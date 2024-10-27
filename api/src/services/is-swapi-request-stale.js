const CACHED_TIME = process.env.CACHED_TIME || 15; // this value is in minutes

const isSWAPIRequestStale = (lastRequestTime) => {
  const now = new Date();
  const diff = Math.abs(now - lastRequestTime);
  const diffMinutes = Math.floor(diff / 60000);

  return diffMinutes >= CACHED_TIME;
};

module.exports = isSWAPIRequestStale;
