CREATE TABLE post
(
    id UUID PRIMARY KEY NOT NULL,
    title VARCHAR(140) NOT NULL,
    slug VARCHAR(255) NOT NULL,
    feature_image VARCHAR(255),
    content TEXT NOT NULL,
    excerpt TEXT,
    status TEXT DEFAULT 'draft'::text,
    user_id UUID,
    meta JSON,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    CONSTRAINT post_user_id_foreign FOREIGN KEY (user_id) REFERENCES "user" (id)
);
CREATE UNIQUE INDEX post_title_unique ON post (title);
CREATE UNIQUE INDEX post_slug_unique ON post (slug);
CREATE INDEX post_slug_index ON post (slug);
CREATE INDEX post_status_index ON post (status);
CREATE INDEX post_created_at_index ON post (created_at);

INSERT INTO public.post (id, title, slug, feature_image, content, excerpt, status, user_id, meta, created_at, updated_at) VALUES ('5c9ed236-79f0-4ff7-93bd-2815f06c74b4', 'Just Another Post', 'just-another-post', 'https://boldr.io/image1.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenLorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book.', 'published', '1b062e26-df71-48ce-b363-4ae9b966e7a0', null, '2016-09-30 21:44:15.411702 -06:00', '2016-09-30 21:44:15.411702 -06:00');
INSERT INTO public.post (id, title, slug, feature_image, content, excerpt, status, user_id, meta, created_at, updated_at) VALUES ('cb61bbae-c91e-4014-b665-3485734b88fb', 'Nother One', 'nother-one', 'https://boldr.io/image3.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenLorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book.', 'published', 'f11d3ebf-4ae6-4578-ba65-0c8f48b7f41f', null, '2016-09-30 21:44:15.429193 -06:00', '2016-09-30 21:44:15.429193 -06:00');
INSERT INTO public.post (id, title, slug, feature_image, content, excerpt, status, user_id, meta, created_at, updated_at) VALUES ('ab33a0ca-b349-4cf8-947f-94f415149492', 'Random Post Title', 'random-post-title', 'https://boldr.io/image2.jpg', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenLorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenLorem Ipsum has been the industrys standard dummy text ever since the 1500s, when', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, whenan unknown printer took a galley of type and scrambled it to make a type specimen book.', 'published', '1b062e26-df71-48ce-b363-4ae9b966e7a0', null, '2016-09-30 21:44:15.443571 -06:00', '2016-09-30 21:44:15.443571 -06:00');
