var mapFunction = function()
{
    if (this.sex == "Female" && this.nationality == "Poland") {
        var credits = this.credit
        for (var credit of credits)
        {
            var key = credit.currency;
            var value = {balance: parseFloat(credit.balance), count: 1};
            emit(key, value);
        }
    }
};

var reduceFunction = function(key, vals)
{
    reducedVal = {balance: 0, count: 0};
    for (var val of vals)
    {
        reducedVal.balance += val.balance;
        reducedVal.count += val.count;
    }
    return reducedVal;
};

var finalizeFunction = function (key, reducedVal)
{
    finalVal =
    {
        sumBalance: reducedVal.balance,
        avgCredit: reducedVal.balance/reducedVal.count
    }
    return finalVal;
};

db.people.mapReduce( mapFunction, reduceFunction, {
    out: "wynik_15_map_reduce",
    finalize: finalizeFunction})

db.wynik_15_map_reduce.find().forEach(printjson)