var mapFunction = function()
{
    var bmi = this.weight / (this.height/100) ** 2
    emit(this.nationality, {bmi : bmi, count: 1, minBmi: bmi, maxBmi: bmi})
};

var reduceFunction = function(key, vals)
{
    var bmi = 0
    var count = 0
    var minBmi = vals[0].minBmi
    var maxBmi = vals[0].maxBmi
    vals.forEach((val)=>{
        bmi += val.bmi
        count += val.count
        if (val.minBmi < minBmi){
        	minBmi = val.minBmi
        }
        if (val.maxBmi > maxBmi){
        	maxBmi = val.maxBmi
        }
	});
    return {bmi : bmi, count: count, minBmi: minBmi, maxBmi: maxBmi};
};

var finalizeFunction = function (key, reducedVal)
{
    finalVal =
    {
        bmiAvg: reducedVal.bmi/reducedVal.count,
        minBmi: reducedVal.minBmi,
        maxBmi: reducedVal.maxBmi
    }
    return finalVal;
};

db.people.mapReduce( mapFunction, reduceFunction, {
    out: "wynik_14_map_reduce",
    finalize: finalizeFunction})

db.wynik_14_map_reduce.find().forEach(printjson)