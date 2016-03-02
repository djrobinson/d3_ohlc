sl.series.ohlc = function () {

    var xScale = d3.time.scale(),
        yScale = d3.scale.linear();

    var ohlc = function (selection) {
        selection.each(function (data) {
            // Generate ohlc bars here.
        });
    };

    ohlc.xScale = function (value) {
        if (!arguments.length) {
            return xScale;
        }
        xScale = value;
        return ohlc;
    };

    ohlc.yScale = function (value) {
        // Similar to xScale above.
    };

    return ohlc;
};

// Create series and bind x and y scales
var series = sl.series.ohlc()
            .xScale(xScale)
            .yScale(yScale);

// Bind data to a selection and call the series.
d3.select('.series')
    .datum(data)
    .call(series);
