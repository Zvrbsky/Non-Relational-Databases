db.people.aggregate(
	{ $group: { 
    _id: null,
    jobs: {$addToSet: "$job"}}})