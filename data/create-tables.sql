DROP TABLE IF EXISTS "user" CASCADE;
CREATE TABLE IF NOT EXISTS "user" (
    id INT PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT,
    username TEXT,
    password TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS travel CASCADE;
CREATE TABLE IF NOT EXISTS travel (
    id INT PRIMARY KEY,
    image TEXT,
    destination TEXT,
    short_description TEXT,
    long_description TEXT,
    duration TEXT,
    Price TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- TABLE 3: activity
DROP TABLE IF EXISTS activity CASCADE;
CREATE TABLE IF NOT EXISTS activity (
    id INT PRIMARY KEY,
    name TEXT,
    description TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS wishlist CASCADE;
CREATE TABLE IF NOT EXISTS wishlist (
    id SERIAL PRIMARY KEY,
    travel_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (travel_id) REFERENCES travel(id)
);


-- TABLE 4: travel_has_activity
DROP TABLE IF EXISTS travel_has_activity CASCADE;
CREATE TABLE IF NOT EXISTS travel_has_activity (
    travel_id INT,
    activity_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (travel_id) REFERENCES travel(id),
    FOREIGN KEY (activity_id) REFERENCES activity(id)
);

-- TABLE 5: user_has_travel
DROP TABLE IF EXISTS user_has_travel CASCADE;
CREATE TABLE IF NOT EXISTS user_has_travel (
    travel_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (travel_id) REFERENCES travel(id),
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

