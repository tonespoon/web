import { Config } from "./types";

function validateConfig(config: Partial<Config>): asserts config is Config {
  for (const key in config) {
    const value = config[key as keyof Config];

    if (value === undefined || value === null) {
      console.error(`Missing required config value for ${key}`);
      process.exit(1);
    }
  }
}

export function getConfig(): Config {
  const parsedConfig: Partial<Config> = {
    spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  };

  validateConfig(parsedConfig);
  return parsedConfig as Config;
}
