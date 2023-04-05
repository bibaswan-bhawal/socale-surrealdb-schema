DEFINE TABLE interests SCHEMAFULL;

DEFINE FIELD name on TABLE interests TYPE string;
DEFINE FIELD category on TABLE interests TYPE string;

DEFINE INDEX name_index on TABLE interests COLUMNS name UNIQUE;