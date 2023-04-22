import * as React from 'react';
import { Button, ScrollView, Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';

class Landing extends React.Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: '#071433' }}>
                <Text style={{ alignSelf: 'center', fontSize: 45, fontWeight: 'bold', marginTop: '20%', color: 'white' }}>CG News Daily</Text>

                <ScrollView style={{ marginLeft: 50, marginTop: 20 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View>
                        <Text style={{fontSize:18, color: 'white', alignSelf:'center', fontWeight:'bold'}}>News from our country!</Text>
                        <Image
                            style={{ width: 300, height: 300, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }}
                            source={require('F:/ReactNativeApps/newsapp/assets/news.png')}
                        />
                    </View>
                    <View style={{marginLeft: 60}}>
                    <Text style={{fontSize:18, color: 'white', alignSelf:'center', fontWeight:'bold'}}>Updated News Everyday!</Text>
                        <Image
                            style={{ width: 300, height: 300, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }}
                            source={require('F:/ReactNativeApps/newsapp/assets/updated.png')}
                        />
                    </View>
                    <View style={{marginLeft: 50, marginRight: 40}}>
                    <Text style={{fontSize:18, color: 'white', alignSelf:'center', fontWeight:'bold'}}>Category of News to Choose!</Text>
                        <Image
                            style={{ width: 300, height: 300, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 }}
                            source={require('F:/ReactNativeApps/newsapp/assets/cate.png')}
                        />
                    </View>
                </ScrollView>

                <TouchableOpacity style={{ alignItems: 'center', marginTop: 50, backgroundColor: '#09666e', width: 150, alignSelf:'center', height: 40, borderRadius: 30, alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}><Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', marginTop: 7 }}>Get Started →</Text></TouchableOpacity>
            </ScrollView>
        );
    }
}
export default Landing;

