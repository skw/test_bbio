this["Templates"] = this["Templates"] || {};

this["Templates"]["CLIENT/TEMPLATES/MESSAGE.HTML"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b(": ");_.b(_.v(_.f("text",c,p,0)));_.b("\n" + i);_.b("<a class=\"delete\" href=\"#\">[x]</a>");return _.fl();;});

this["Templates"]["CLIENT/TEMPLATES/MESSAGES.HTML"] = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<input class=\"message\" type=\"text\">");_.b("\n" + i);_.b("<input class=\"send\" type=\"submit\" value=\"Send\">");_.b("\n" + i);_.b("<ul></ul>");return _.fl();;});