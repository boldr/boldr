CREATE TABLE activity
(
    id UUID PRIMARY KEY NOT NULL,
    name VARCHAR(100),
    user_id UUID,
    action VARCHAR(255) NOT NULL,
    type INTEGER NOT NULL,
    data JSON NOT NULL,
    entry_id UUID NOT NULL,
    entry_table VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    CONSTRAINT activity_user_id_foreign FOREIGN KEY (user_id) REFERENCES "user" (id)
);
