USE WILL_BE_REPLACED_WITH_YOUR_APP_NAME;
DROP DATABASE WILL_BE_REPLACED_WITH_YOUR_APP_NAME;
CREATE DATABASE WILL_BE_REPLACED_WITH_YOUR_APP_NAME;
USE WILL_BE_REPLACED_WITH_YOUR_APP_NAME;

{{#oats}}
CREATE TABLE {{name}}
(
    {{#members}}
    {{name}} {{type}} {{#attributes}}{{name}}{{^last}} {{/last}}{{/attributes}},
    {{/members}}

    PRIMARY KEY (id){{#hasReferences}},{{/hasReferences}}

    {{#members}}
        {{#references}}
    FOREIGN KEY ({{name}})
        REFERENCES {{rname}}(id)
        ON DELETE CASCADE{{^last}},{{/last}}

        {{/references}}
    {{/members}}
) ENGINE=InnoDB;

{{/oats}}
