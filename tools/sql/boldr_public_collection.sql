CREATE TABLE collection
(
    id INTEGER PRIMARY KEY NOT NULL,
    uuid UUID,
    name VARCHAR(255),
    description VARCHAR(255),
    status TEXT DEFAULT 'draft'::text,
    location VARCHAR(255),
    content TEXT,
    type_id INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    CONSTRAINT collection_type_id_foreign FOREIGN KEY (type_id) REFERENCES content_type (id)
);
