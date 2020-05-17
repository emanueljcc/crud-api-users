const seeder = require("mongoose-seed");

seeder.connect("mongodb://localhost/usersDB", function() {
    seeder.loadModels([
        "src/models/TypeModel.js"
    ]);

    seeder.clearModels(["types"], function() {
        seeder.populateModels(data, function() {
            seeder.disconnect();
        });
    });
});

const data = [
    {
        "model": "types",
        "documents": [
            {
                "name": "home",
                "value": 1
            },
            {
                "name": "cel",
                "value": 2
            },
            {
                "name": "work",
                "value": 3
            },
            {
                "name": "others",
                "value": 4
            }
        ]
    }
];