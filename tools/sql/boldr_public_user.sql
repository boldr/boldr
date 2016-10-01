CREATE TABLE "user"
(
    id UUID PRIMARY KEY NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100),
    display_name VARCHAR(50) NOT NULL,
    avatar_url VARCHAR(255),
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    location VARCHAR(100),
    bio VARCHAR(255),
    website VARCHAR(100),
    account_token VARCHAR(255),
    reset_password_token VARCHAR(255),
    reset_password_expiration TIMESTAMP WITH TIME ZONE,
    verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
CREATE UNIQUE INDEX user_email_unique ON "user" (email);
CREATE INDEX user_email_index ON "user" (email);

INSERT INTO public."user" (id, first_name, last_name, display_name, avatar_url, email, password, location, bio, website, account_token, reset_password_token, reset_password_expiration, verified, created_at, updated_at) VALUES ('1b062e26-df71-48ce-b363-4ae9b966e7a0', 'Joe', 'Gray', 'Joey', 'https://boldr.io/images/unknown-avatar.png', 'admin@boldr.io', '$2a$10$F3/Xx3hWEpTdaP4fE/dIhOb.FtxRiYMuc80nQFPkSrsBH4L6B5.Ka', 'Colorado', 'I am me.', 'https://boldr.io', null, null, null, true, '2016-09-30 21:44:15.297890 -06:00', '2016-09-30 21:44:15.297890 -06:00');
INSERT INTO public."user" (id, first_name, last_name, display_name, avatar_url, email, password, location, bio, website, account_token, reset_password_token, reset_password_expiration, verified, created_at, updated_at) VALUES ('f4d869a6-1a75-469b-a9cc-965c552929e4', 'Sam', 'Hunt', 'Samus', 'https://boldr.io/images/unknown-avatar.png', 'user@boldr.io', '$2a$10$F3/Xx3hWEpTdaP4fE/dIhOb.FtxRiYMuc80nQFPkSrsBH4L6B5.Ka', 'California', 'Someone doing things.', 'https://boldr.io', null, null, null, true, '2016-09-30 21:44:15.313607 -06:00', '2016-09-30 21:44:15.313607 -06:00');
INSERT INTO public."user" (id, first_name, last_name, display_name, avatar_url, email, password, location, bio, website, account_token, reset_password_token, reset_password_expiration, verified, created_at, updated_at) VALUES ('f11d3ebf-4ae6-4578-ba65-0c8f48b7f41f', 'Jessica', 'Smith', 'Jess', 'https://boldr.io/images/unknown-avatar.png', 'demo@boldr.io', '$2a$10$F3/Xx3hWEpTdaP4fE/dIhOb.FtxRiYMuc80nQFPkSrsBH4L6B5.Ka', 'Washington', 'Just a person', 'https://boldr.io', null, null, null, true, '2016-09-30 21:44:15.328662 -06:00', '2016-09-30 21:44:15.328662 -06:00');
