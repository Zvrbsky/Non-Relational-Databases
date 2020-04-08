var mapFunction = function()
{
    var key = this.sex;
    var value = {
        count: 1,
        height: this.height,
        weight: this.weight};
    emit(key, value);
};

var reduceFunction = function(key, vals)
{
    reducedVal = {count: 0, height: 0, weight: 0 };
    for (var val of vals)
    {
        reducedVal.count += val.count;
        reducedVal.height += parseFloat(val.height);
        reducedVal.weight += parseFloat(val.weight);
    }
    return reducedVal;
};

var finalizeFunction = function (key, reducedVal)
{
    finalVal =
    {
        heightAvg: reducedVal.height/reducedVal.count,
        weightAvg: reducedVal.weight/reducedVal.count
    }
    return finalVal;
};

db.people.mapReduce( mapFunction, reduceFunction, {
    out: "wynik_11_map_reduce" ,
    finalize: finalizeFunction})

db.wynik_11_map_reduce.find().forEach(printjson)