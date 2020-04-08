db.people.aggregate([
	{
		$project : {
			bmi : {
				$divide: [{
					$convert: {
						input: "$weight", to: "double" }},
				{
					$pow: [{
						$divide: [{
							$convert: {
								input: "$height", to: "double" }},
							100]},
						2]
				}]},
			nationality: 1}},
	{
		$group: { 
			_id: "$nationality",
			avgBmi: {$avg: "$bmi"},
			minBmi: {$min: "$bmi"},
			maxBmi: {$max: "$bmi"}}}])