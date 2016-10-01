CREATE TABLE navigation_link
(
    navigation_id INTEGER NOT NULL,
    link_id INTEGER NOT NULL,
    CONSTRAINT navigation_link_pkey PRIMARY KEY (navigation_id, link_id),
    CONSTRAINT navigation_link_navigation_id_foreign FOREIGN KEY (navigation_id) REFERENCES navigation (id),
    CONSTRAINT navigation_link_link_id_foreign FOREIGN KEY (link_id) REFERENCES link (id)
);

INSERT INTO public.navigation_link (navigation_id, link_id) VALUES (1, 1);
INSERT INTO public.navigation_link (navigation_id, link_id) VALUES (1, 2);
