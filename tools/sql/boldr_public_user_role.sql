CREATE TABLE user_role
(
    id INTEGER PRIMARY KEY NOT NULL,
    user_id UUID NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT user_role_user_id_foreign FOREIGN KEY (user_id) REFERENCES "user" (id),
    CONSTRAINT user_role_role_id_foreign FOREIGN KEY (role_id) REFERENCES role (id)
);
CREATE UNIQUE INDEX user_role_user_id_role_id_unique ON user_role (user_id, role_id);

INSERT INTO public.user_role (id, user_id, role_id) VALUES (1, '1b062e26-df71-48ce-b363-4ae9b966e7a0', 4);
INSERT INTO public.user_role (id, user_id, role_id) VALUES (2, 'f4d869a6-1a75-469b-a9cc-965c552929e4', 2);
INSERT INTO public.user_role (id, user_id, role_id) VALUES (3, 'f11d3ebf-4ae6-4578-ba65-0c8f48b7f41f', 3);
