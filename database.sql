CREATE TABLE "allKoalas" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (30) NOT NULL,
	"age" VARCHAR (100) NOT NULL,
	"gender" VARCHAR (10) NOT NULL,
    "ready-for-transfer" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (100),
);
 INSERT INTO "allKoalas"
 ("name", "gender", "age", "ready-for-transfer", "notes")
 VALUES
 ('Scotty', 'M', '4', 'Y', 'Birn in Guatemala'),
 ('Jean', 'F', '5','Y', 'Allergic to lots of lava'),
 ('Ororo', 'F', '7', 'N', 'Loves listening to Paula (Abdul)'),
 ('Logan', 'M', '15', 'N', 'Loves the sauna'),
 ('Charlie', 'M', '9', 'Y', 'Favorite band is Nirvana'),
 ('Betsy', 'F', '4','Y', 'Has a pet iguana')