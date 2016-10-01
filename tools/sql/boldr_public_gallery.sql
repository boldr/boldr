CREATE TABLE gallery
(
    id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(255),
    description VARCHAR(255),
    restricted BOOLEAN DEFAULT false,
    status TEXT DEFAULT 'draft'::text,
    entities JSON,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
CREATE UNIQUE INDEX gallery_name_unique ON gallery (name);
