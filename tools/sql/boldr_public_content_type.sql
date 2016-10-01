CREATE TABLE content_type
(
    id INTEGER PRIMARY KEY NOT NULL,
    uuid UUID,
    name VARCHAR(255),
    description VARCHAR(255),
    restricted BOOLEAN DEFAULT false,
    slug VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
