function rectanglearea(strarr){
        var points = strArr.map(str => str.match(/\d+/g));
    var minX = points.map(point => point[0]).sort()[0];
    var minY = points.map(point => point[1]).sort()[0];
    var maxX = points.map(point => point[0]).sort().reverse()[0];
    var maxY = points.map(point => point[1]).sort().reverse()[0];
 
    return (maxX - minX) * (maxY - minY);

}