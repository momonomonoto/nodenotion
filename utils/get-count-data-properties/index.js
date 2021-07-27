const getCountDataProperties = realizedData => realizedData.reduce((acc, curr, index, array)=>{
    if (acc[curr]) {
        return  ({...acc, [curr]:acc[curr]+1})
    }
    else {
        return  ({...acc, [curr]:1})
    }
},{})

module.exports = getCountDataProperties;
