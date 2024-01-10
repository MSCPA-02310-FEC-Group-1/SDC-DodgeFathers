DROP TABLE IF EXISTS club;

CREATE TABLE club (
    id SERIAL PRIMARY KEY,
    image_urls JSON NOT NULL,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    sale_price DECIMAL(10, 2) NOT NULL,
    description VARCHAR NOT NULL,
    left_hand BOOLEAN NOT NULL,
    loft JSON NOT NULL,
    custom_options JSON NOT NULL
)