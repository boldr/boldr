CREATE TABLE page_helper
(
    id INTEGER PRIMARY KEY NOT NULL,
    uuid UUID,
    page_id UUID NOT NULL,
    name VARCHAR(255),
    scope VARCHAR(255),
    type TEXT,
    value TEXT,
    CONSTRAINT page_helper_page_id_foreign FOREIGN KEY (page_id) REFERENCES page (id)
);
