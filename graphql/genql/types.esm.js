export default {
    "scalars": [
        1,
        2,
        5
    ],
    "types": {
        "Card": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Mutation": {
            "createCard": [
                0,
                {
                    "title": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Query": {
            "card": [
                0,
                {
                    "cardID": [
                        2,
                        "String!"
                    ]
                }
            ],
            "cards": [
                0
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}