var mapFunction = function()
{
    var credits = this.credit
    for (var credit of credits)
    {
        var key = credit.currency;
        var value = {balance: credit.balance};
        emit(key, value);
    }
};

var reduceFunction = function(key, vals)
{
    reducedVal = {balance: 0};
    for (var val of vals)
    {
        reducedVal.balance += parseFloat(val.balance);
    }
    return reducedVal;
};

db.people.mapReduce( mapFunction, reduceFunction, {
    out: "wynik_12_map_reduce"})

db.wynik_12_map_reduce.find().forEach(printjson)