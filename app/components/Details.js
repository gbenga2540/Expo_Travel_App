import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';

import Pin from '../images/pin-icon.png';
import axios from 'axios';

Entypo.loadFont();
const height = Dimensions.get('window').height;

const Details = ({ route, navigation }) => {

    const { item } = route.params;

    const handleLogin = () => {
        // axios.post(`http://localhost:3005/api/v1/auth/signin`, {
        //     email: 'akindejuhmikel@gmail.com',
        //     password: '08145092860Aa'
        // }).then((response) => {
        //     console.log(response)
        //     if (response.data.auth) {
        //         console.log(response.data.data.token);
        //     } else {
        //         console.log('no data');
        //     }
        // });
        axios.get('https://api.flutterwave.com/v3/bill-categories?data_bundle=1', {
            headers: {
                "Authorization": "Bearer FLWSECK-5616b3f9b6051b7eacb48748dc311aed-X",
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).catch((error) => {
            console.log('rn_error');
            console.log(error);
            alert('rn_error');
        }).then((response) => {
            console.log('rn_done');
            console.log(response);
            alert('rn_done');
        })
    }

    return (
        <View style={styles.det_wrapper}>
            <ImageBackground source={item.imagelarge} style={styles.det_image}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Entypo name='chevron-left' size={32} color={Colors.white} />
                </TouchableOpacity>
                <Text style={styles.det_title}>{item.title}</Text>
                <View style={styles.det_loc_wrapper}>
                    <Image source={Pin} style={{ width: 18, height: 20 }} />
                    <Text style={styles.dis_loc_text}>{item.location}</Text>
                </View>
            </ImageBackground>

            <View style={styles.info_wrapper}>
                <View style={styles.liked}>
                    <Entypo name='heart' color={item.liked ? Colors.orange : Colors.grey} size={32} />
                </View>
                <Text style={styles.info_title}>Description</Text>
                <Text style={styles.info_text}>{item.description}</Text>
                <View style={styles.info_container}>
                    <View style={{ flexGrow: 2 }}>
                        <Text style={styles.inf_con_title}>PRICE</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                            <Text style={styles.inf_txt_l}>${item.price}</Text>
                            <Text style={styles.inf_txt_r}>/person</Text>
                        </View>
                    </View>
                    <View style={{ flexGrow: 1 }}>
                        <Text style={styles.inf_con_title}>RATING</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                            <Text style={styles.inf_txt_l}>{item.rating}</Text>
                            <Text style={styles.inf_txt_r}>/5</Text>
                        </View>
                    </View>
                    <View style={{ flexGrow: 1 }}>
                        <View style={{ alignSelf: 'flex-end' }}>
                            <Text style={styles.inf_con_title}>DURATION</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                                <Text style={styles.inf_txt_l}>{item.duration}</Text>
                                <Text style={styles.inf_txt_r}> hours</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* <TouchableOpacity style={styles.button} onPress={() => alert(item.title + ' booked...')}>
                    <Text style={styles.button_text}>Book Now</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.button_text}>Book Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    det_wrapper: {
        flex: 1,
        backgroundColor: Colors.white
    },
    back: {
        marginBottom: 'auto',
        marginTop: 40
    },
    det_image: {
        minHeight: height * 0.6,
        minWidth: '100%',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    det_title: {
        color: Colors.white,
        fontSize: 42,
        fontFamily: 'LatoBold'
    },
    det_loc_wrapper: {
        flexDirection: 'row',
        marginTop: 2
    },
    dis_loc_text: {
        marginLeft: 5,
        color: Colors.white,
        marginBottom: 20,
        fontFamily: 'LatoRegular'
    },
    liked: {
        backgroundColor: Colors.white,
        width: 60,
        height: 60,
        position: 'absolute',
        alignSelf: 'flex-end',
        top: -30,
        right: 30,
        borderRadius: 60,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info_wrapper: {
        backgroundColor: Colors.white,
        minHeight: height * 0.4,
        marginTop: -20,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
    },
    info_title: {
        fontSize: 25,
        marginVertical: 15,
        fontFamily: 'LatoBold'
    },
    info_text: {
        color: Colors.darkgrey,
        marginBottom: 5,
        fontFamily: 'LatoRegular'
    },
    info_container: {
        flexDirection: 'row',
        marginVertical: 6
    },
    inf_con_title: {
        color: Colors.darkgrey,
        fontSize: 13,
        fontFamily: 'LatoBold'
    },
    inf_txt_l: {
        color: Colors.orange,
        fontSize: 25,
        fontFamily: 'LatoBold'
    },
    inf_txt_r: {
        color: Colors.darkgrey,
        fontFamily: 'LatoRegular'
    },
    button: {
        width: '100%',
        backgroundColor: Colors.orange,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 20
    },
    button_text: {
        color: Colors.white,
        fontSize: 17,
        paddingVertical: 15,
        fontFamily: 'LatoRegular'
    }
});

export default Details;
