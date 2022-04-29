function round(num, places, replace) {
    if( isNaN(Number(num)) || num === '' ) return replace?replace : '-'
    else return +(Math.round(num + "e+" + places) + "e-" + places);
    }
