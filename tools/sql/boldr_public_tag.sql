CREATE TABLE tag
(
    id INTEGER PRIMARY KEY NOT NULL,
    uuid UUID,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
CREATE UNIQUE INDEX tag_name_unique ON tag (name);
CREATE INDEX tag_name_index ON tag (name);

INSERT INTO public.tag (id, uuid, name, description, created_at, updated_at) VALUES (1, null, 'JavaScript', 'Something something JS', '2016-09-30 21:44:15.387608 -06:00', '2016-09-30 21:44:15.387608 -06:00');
INSERT INTO public.tag (id, uuid, name, description, created_at, updated_at) VALUES (2, null, 'Stuff', 'Stuff about stuff.', '2016-09-30 21:44:15.398442 -06:00', '2016-09-30 21:44:15.398442 -06:00');
