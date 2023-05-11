DROP SCHEMA IF EXISTS Zoo;
CREATE SCHEMA Zoo;
USE Zoo;
CREATE TABLE Zoo.managers(
    manager_id INT PRIMARY KEY AUTO_INCREMENT,
    manager_name VARCHAR(70) NOT NULL
) engine = InnoDB;
CREATE TABLE Zoo.caregivers(
    caregiver_id INT PRIMARY KEY AUTO_INCREMENT,
    caregiver_name VARCHAR(70) NOT NULL,
    manager_id INT NOT NULL
    FOREIGN KEY (manager_id) REFERENCES managers (manager_id)
) engine = InnoDB;
CREATE TABLE Zoo.animals(
    animal_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    species VARCHAR(70) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    location VARCHAR(50) NOT NULL,
    caregiver_id INT NOT NULL
    FOREIGN KEY (caregiver_id) REFERENCES caregivers (caregiver_id)
) engine = InnoDB;
CREATE TABLE Zoo.animals_caregivers(
    animal_id INT NOT NULL,
    caregiver_id INT NOT NULL,
    FOREIGN KEY (animal_id) REFERENCES animals (animal_id),
    FOREIGN KEY (caregiver_id) REFERENCES caregivers (caregiver_id),
    PRIMARY KEY (animal_id, caregiver_id)
) engine = InnoDB;
-- INSERT INTO Zoo.subscriptions (subscription_type, subscription_value)
-- VALUES
--   ('gratuito', 0),
--   ('universitário', 5.99),
--   ('pessoal', 6.99),
--   ('familiar', 7.99);
-- INSERT INTO Zoo.bands (band_name)
-- VALUES
--   ('Baco Exu do Blues'),
--   ('Beyoncé'),
--   ('Blind Guardian'),
--   ('Elis Regina'),
--   ('Queen'),
--   ('Nina Simone');
-- INSERT INTO Zoo.users (user_name, age, subscription_id, subscription_date)
-- VALUES
--   ('Barbara Liskov', 82, 1, '2019-10-20'),
--   ('Robert Cecil Martin', 58, 1, '2017-01-06'),
--   ('Ada Lovelace', 37, 4, '2017-12-30'),
--   ('Martin Fowler', 46, 4, '2017-01-17'),
--   ('Sandi Metz', 58, 4, '2018-04-29'),
--   ('Paulo Freire', 19, 2, '2018-02-14'),
--   ('Bell Hooks', 26, 2, '2018-01-05'),
--   ('Christopher Alexander', 85, 3, '2019-06-05'),
--   ('Judith Butler', 45, 3, '2020-05-13'),
--   ('Jorge Amado', 58, 3, '2017-02-17');
-- INSERT INTO Zoo.following (user_id, band_id)
-- VALUES
--   (1, 2),
--   (1, 5),
--   (1, 4),
--   (2, 2),
--   (2, 4),
--   (3, 5),
--   (4, 1),
--   (5, 3),
--   (5, 6),
--   (6, 6),
--   (6, 2),
--   (7, 6),
--   (9, 4),
--   (10, 5);