CREATE TABLE setting
(
    id INTEGER PRIMARY KEY NOT NULL,
    site_name VARCHAR(255) NOT NULL,
    site_url VARCHAR(255) NOT NULL,
    site_logo VARCHAR(255),
    site_favicon VARCHAR(255),
    site_slogan VARCHAR(255),
    site_description VARCHAR(255),
    google_analytics VARCHAR(255),
    allow_registration BOOLEAN DEFAULT true,
    configuration JSON,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
INSERT INTO public.setting (id, site_name, site_url, site_logo, site_favicon, site_slogan, site_description, google_analytics, allow_registration, configuration, created_at, updated_at) VALUES (1, 'Boldr', 'https://boldr.io', 'https://boldr.io/logo.png', 'https://boldr.io/favicon.ico', 'Why shouldnt your CMS be a little Boldr?', 'Universal JavaScript CMS powered by React, Redux, Express, and Postgres', 'UA-23423', true, '{"mail":{"address":"mail@boldr.io"}}', '2016-09-30 21:44:15.501053 -06:00', '2016-09-30 21:44:15.501053 -06:00');
