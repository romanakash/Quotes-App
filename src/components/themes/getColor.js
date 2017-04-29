import quotesRealm from '../../realm/quotesRealm';

const getColor = () => {
    let setting = quotesRealm.objects('Settings').filtered('id = 1');
    let colors = [ setting[0].gradients.color_one, setting[0].gradients.color_two ];
    return colors;
}

export default getColor;
