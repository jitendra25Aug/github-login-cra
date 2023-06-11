export const getUniqueValues = (propName, data) => {
    let values = data.map((item) => item[propName]);
    values = values.filter((val)=>{
        if(val !== null){
            return val;
        }
    });
    const uniqueValues = ['Any', ...new Set(values)];
    return uniqueValues;
}