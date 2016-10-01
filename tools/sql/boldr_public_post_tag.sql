CREATE TABLE post_tag
(
    id INTEGER PRIMARY KEY NOT NULL,
    post_id UUID NOT NULL,
    tag_id INTEGER NOT NULL,
    CONSTRAINT post_tag_post_id_foreign FOREIGN KEY (post_id) REFERENCES post (id),
    CONSTRAINT post_tag_tag_id_foreign FOREIGN KEY (tag_id) REFERENCES tag (id)
);
CREATE UNIQUE INDEX post_tag_post_id_tag_id_unique ON post_tag (post_id, tag_id);

INSERT INTO public.post_tag (id, post_id, tag_id) VALUES (1, '5c9ed236-79f0-4ff7-93bd-2815f06c74b4', 2);
INSERT INTO public.post_tag (id, post_id, tag_id) VALUES (2, 'cb61bbae-c91e-4014-b665-3485734b88fb', 1);
INSERT INTO public.post_tag (id, post_id, tag_id) VALUES (3, 'ab33a0ca-b349-4cf8-947f-94f415149492', 2);
