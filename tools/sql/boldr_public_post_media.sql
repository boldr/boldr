CREATE TABLE post_media
(
    post_id UUID NOT NULL,
    media_id UUID NOT NULL,
    CONSTRAINT post_media_pkey PRIMARY KEY (post_id, media_id),
    CONSTRAINT post_media_post_id_foreign FOREIGN KEY (post_id) REFERENCES post (id),
    CONSTRAINT post_media_media_id_foreign FOREIGN KEY (media_id) REFERENCES media (id)
);
