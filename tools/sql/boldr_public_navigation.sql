CREATE TABLE navigation
(
    id INTEGER PRIMARY KEY NOT NULL,
    uuid UUID,
    name VARCHAR(255) NOT NULL,
    "primary" BOOLEAN DEFAULT false,
    restricted BOOLEAN DEFAULT false,
    location TEXT DEFAULT 'header'::text,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

INSERT INTO public.navigation (id, uuid, name, "primary", restricted, location, created_at, updated_at) VALUES (1, null, 'Main', true, false, 'header', '2016-09-30 21:44:15.518009 -06:00', '2016-09-30 21:44:15.518009 -06:00');
