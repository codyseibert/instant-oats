USE YOUR_APP;
DROP DATABASE YOUR_APP;
CREATE DATABASE YOUR_APP;
USE YOUR_APP;

{{#oats}}
CREATE TABLE {{name}}
(
    {{#members}}
    {{name}} {{type}} {{#attributes}}{{.}} {{/attributes}},
    {{/members}}

    PRIMARY KEY (id),

    {{#members}}
        {{#references}}
    FOREIGN KEY ({{name}})
        REFERENCES {{.}}(id)
        ON DELETE CASCADE,

        {{/references}}
    {{/members}}
) ENGINE=InnoDB;

{{/oats}}
