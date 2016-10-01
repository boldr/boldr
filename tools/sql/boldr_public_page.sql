CREATE TABLE page
(
    id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    slug VARCHAR(255),
    layout VARCHAR(255),
    markup TEXT,
    status TEXT DEFAULT 'draft'::text,
    restricted BOOLEAN DEFAULT false,
    seo JSON,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
