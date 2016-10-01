CREATE TABLE link
(
    id INTEGER PRIMARY KEY NOT NULL,
    uuid UUID,
    name VARCHAR(50) NOT NULL,
    position INTEGER,
    href VARCHAR(255) NOT NULL,
    icon VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

INSERT INTO public.link (id, uuid, name, position, href, icon, created_at, updated_at) VALUES (1, null, 'About', 1, '/about', 'info', '2016-09-30 21:44:15.531869 -06:00', '2016-09-30 21:44:15.531869 -06:00');
INSERT INTO public.link (id, uuid, name, position, href, icon, created_at, updated_at) VALUES (2, null, 'Blog', 2, '/blog', 'info', '2016-09-30 21:44:15.548398 -06:00', '2016-09-30 21:44:15.548398 -06:00');
