/* const getRandomNum = () => {
    let i = Math.random().toString();
    i = i.split(".").splice(1);
    i = i[0];
    let l = i.length;
    i = i.substring(l-3, l);
    i = parseInt(i, 10);
    //return i;
    return Math.round(i / 100)
}
*/
const getRandomNum = (min = 0, max = 30) => {
    return Math.floor(Math.random() * ((max - min) + 1) + min);
}

export default getRandomNum;
