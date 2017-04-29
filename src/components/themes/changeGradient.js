// Changes Gradient color

import gradients from './gradients';
import quotesRealm from '../../realm/quotesRealm';

const changeGradient = (type) => {
    gradients.forEach((gradient) => {       // loop over gradients obj
        if (gradient.name === type) {       // finds the gradient colors
            setGradient(gradient.colors);  
        }
    })
}

const setGradient = (colors) => {           // updates existing realm
    quotesRealm.write(() => {
        quotesRealm.create('Settings', {
            id: 1,
            gradients: {
                color_one: colors[0],
                color_two: colors[1],
            }
        }, true)                            // does not create new Realm object
    });
}

export default changeGradient;
