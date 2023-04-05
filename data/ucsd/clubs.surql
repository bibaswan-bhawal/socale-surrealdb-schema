DEFINE TABLE clubs SCHEMAFULL;

DEFINE FIELD name on TABLE clubs TYPE string;
DEFINE FIELD category on TABLE clubs TYPE string;

DEFINE INDEX name_index on TABLE clubs COLUMNS name UNIQUE;