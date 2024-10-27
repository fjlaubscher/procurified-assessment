const BASE_URL = import.meta.env.VITE_API_URL || '/api';

export const fetchAsync = async (url, options = {}) => {
  const cleanedUrl = url.startsWith('/') ? url.slice(1) : url;

  const response = await fetch(`${BASE_URL}/${cleanedUrl}`, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': options.body ? 'application/json' : undefined
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const json = await response.json();
  if (response.ok) {
    return json.data;
  } else {
    throw new Error(json.message);
  }
};

export const fetchWithAuthAsync = async (url, options = {}) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Unauthorized');
  }

  return fetchAsync(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  });
};
