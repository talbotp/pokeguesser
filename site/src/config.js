const config = {};

if (process.env.NODE_ENV === 'development') {
  config.api = 'http://localhost:3030/';
} else if (process.env.NODE_ENV === 'production') {
  config.api = 'https://api.pokeguesser.com/';
}

export default config;