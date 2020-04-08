db.people.find({"birth_date" : {$gte:"2000-01-00T00:00:00Z"}}, {"first_name" : 1, "last_name" : 1, "location.city" : 1, _id : 0})

