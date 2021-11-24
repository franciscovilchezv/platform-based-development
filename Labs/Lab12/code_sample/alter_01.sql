USE my_chess_club;

-- Add the new column for the picture url

ALTER TABLE member
ADD COLUMN picture_url VARCHAR(255) AFTER email;
