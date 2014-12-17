USE YOUR_APP;
DROP DATABASE settYOUR_APPer;
CREATE DATABASE YOUR_APP;
USE YOUR_APP;

{{#oats}}
CREATE TABLE {{name}}
(
    {{#members}}
    {{name}} {{type}} {{#attributes}},
    {{/members}}

    PRIMARY KEY (id),

    {{#members}}
        {{#references}}
            FOREIGN KEY ({{name}})
                REFERENCES {{.}}(id)
                ON DELETE CASCADE
        {{/references}}
    {{/members}}
) ENGINE=InnoDB;
{{/oats}}
