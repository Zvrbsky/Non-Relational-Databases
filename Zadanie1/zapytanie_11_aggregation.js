db.people.aggregate({ $group: { 
    _id: "$sex", 
    heightAvg: {$avg: { $convert: { input: "$height", to: "double" }}}, 
    weightAvg: {$avg: { $convert: { input: "$weight", to: "double" }}}}})