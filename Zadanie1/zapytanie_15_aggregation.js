db.people.aggregate([
	{
		$match : {
			sex : "Female",
			nationality: "Poland"}},
	{
		$unwind : "$credit"
	},
	{
		$group: { 
			_id: "$credit.currency",
			sumBalance: {$sum: { $convert: { input: "$credit.balance", to: "double" }}},
			avgCredit: {$avg: { $convert: { input: "$credit.balance", to: "double" }}}
		}
	}])