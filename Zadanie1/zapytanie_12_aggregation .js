db.people.aggregate({ $unwind : "$credit"},
	{ $group: { 
    _id: "$credit.currency",
    balance: {$sum: { $convert: { input: "$credit.balance", to: "double" }}}}})