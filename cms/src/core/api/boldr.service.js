import request from 'superagent';
import fetch from 'isomorphic-fetch';
import { API_PREFIX, API_SETTINGS, TOKEN_KEY } from 'core';

export function doUpdateSettings(data, id) {
  const payload = {
    site_url: data.siteUrl,
    site_favicon: data.favicon,
    site_name: data.siteName,
    site_logo: data.siteLogo,
    google_analytics: data.googleAnalytics,
    configuration: data.configuration
  };
  return request.put(`${API_SETTINGS}/1`)
    .set('Authorization', `${localStorage.getItem(TOKEN_KEY)}`)
    .send(payload);
}

export function doLoadSettings() {
  return request.get(`${API_SETTINGS}`);
}
