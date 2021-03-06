import theme from 'react-native-theme';

theme.add({
    quote_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    quote_text: {
        color: 'white',
        fontSize: 27,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    author_text: {
        fontFamily: 'OpenSans-LightItalic',
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    daily_day: {
        fontFamily: 'Quicksand-Light',
        color: 'white',
        fontSize: 27,
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    swiper_button_styles: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Raleway-Light',
        opacity: 0.3
    },
    top_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_text: {
        fontFamily: 'Quicksand-Light',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
    drawer_menu_container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 18,
        backgroundColor: 'rgba(56,59,83,0.1)',
    },
    drawer_menu_touchable: {
        backgroundColor: 'transparent',
        marginLeft: 25,
        marginRight: 25,
        borderTopWidth: 0.5,
        borderTopColor: 'rgba(255,255,255,0.1)',
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(255,255,255,0.1)',
        padding: 8,
    },
    drawer_menu_text: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Quicksand-Light',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    heart_container: {
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        paddingBottom: 45,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    date_container: {
        margin: 5,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginRight: 105,
        marginLeft: 105,
        height: 35,
        borderRadius: 25,
        elevation: 15
    },
    settings_container: {
        justifyContent: 'center',
        borderBottomColor: 'rgba(255,255,255,0.2)',
        borderBottomWidth: 0.8,
    },
    settings_text: {
        padding: 3,
        fontFamily: 'Quicksand-Light',
        color: 'white',
        fontSize: 20,
        textAlign: 'left',
        paddingBottom: 5,
        paddingLeft: 10
    },
    settings_pagination: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        margin: 0,
        marginLeft: 0,
        width: 15,
        height: 5,
        marginBottom: 40,
        borderRadius: 1
    },
    change_theme_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    change_theme_main_text: {
        fontFamily: 'Code-Light',
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    change_theme_button: {
        margin: 5,
        marginTop: 95,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 150,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
    },
    change_theme_text: {
        fontFamily: 'Futura',
        color: 'white',
        fontSize: 13
    },
});
