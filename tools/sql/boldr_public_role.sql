CREATE TABLE role
(
    id INTEGER PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
CREATE INDEX role_name_index ON role (name);

INSERT INTO public.role (id, name, description, created_at, updated_at) VALUES (1, 'Pending', 'The role given to a user before validating their account.', '2016-09-30 21:44:15.242527 -06:00', '2016-09-30 21:44:15.242527 -06:00');
INSERT INTO public.role (id, name, description, created_at, updated_at) VALUES (2, 'Member', 'A verified user without special privileges', '2016-09-30 21:44:15.256306 -06:00', '2016-09-30 21:44:15.256306 -06:00');
INSERT INTO public.role (id, name, description, created_at, updated_at) VALUES (3, 'Staff', 'Allows access to the CMS dashboard.', '2016-09-30 21:44:15.268932 -06:00', '2016-09-30 21:44:15.268932 -06:00');
INSERT INTO public.role (id, name, description, created_at, updated_at) VALUES (4, 'Admin', 'Complete control over the CMS', '2016-09-30 21:44:15.281634 -06:00', '2016-09-30 21:44:15.281634 -06:00');
