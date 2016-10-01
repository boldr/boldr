CREATE TABLE media
(
    id UUID PRIMARY KEY NOT NULL,
    filename VARCHAR(255) NOT NULL,
    file_type VARCHAR(255),
    s3url VARCHAR(255),
    user_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    CONSTRAINT media_user_id_foreign FOREIGN KEY (user_id) REFERENCES "user" (id)
);
CREATE UNIQUE INDEX media_filename_unique ON media (filename);
