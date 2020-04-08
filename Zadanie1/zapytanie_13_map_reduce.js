var mapFunction = function()
{
    emit(null, {jobs : [this.job]})
};

var reduceFunction = function(key, vals)
{
    var jobs = [];
    vals.forEach((val)=>{
        val.jobs.forEach((job)=>{
            if(!jobs.includes(job))
            {
                jobs.push(job)
            }
    })});
    return {jobs : jobs};
};

db.people.mapReduce( mapFunction, reduceFunction, {
    out: "wynik_13_map_reduce"})

db.wynik_13_map_reduce.find().forEach(printjson)