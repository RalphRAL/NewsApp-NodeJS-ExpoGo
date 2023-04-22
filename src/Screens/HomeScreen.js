import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, Text, View, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import config from '../../config/config';
import Categories from '../Components/Categories';
import TrendingNews from '../Components/TrendingNews';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const Tab = createBottomTabNavigator();


class HomeScreen extends Component {
    componentDidMount() {
        fetch(`https://newsapi.org/v2/top-headlines?country=ph&apiKey=${config.API_KEY}`)

            .then(res => res.json()).then(response => {
                this.setState({
                    news: response.articles
                })
            }).catch(error => {
                console.log(error);
            });
    }

    state = { news: [] }
    render() {
        return (
            

            <View style={{ backgroundColor: '#071433' }}>
                <View><Categories navigation={this.props.navigation} /></View>
                <TrendingNews navigation={this.props.navigation} />
                <View style={{ alignItems: 'center' }}>
                    {
                        this.state.news.length === 0 ?
                            <ActivityIndicator style={{ height: deviceHeight, width: deviceWidth }} size='large' color='white' /> : (
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    {
                                        this.state.news.map((news, index) => (
                                            news.urlToImage ? (
                                                <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('News', {
                                                    url: news.url,
                                                })}>
                                                    <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#09666e', borderRadius: 10, elevation: 4, width: deviceWidth - 30, marginVertical: 7 }} >
                                                        <TouchableOpacity>
                                                        <Feather name="bookmark" size={30} color="white" />
                                                        </TouchableOpacity>
                                                        <Image source={{ uri: `${news.urlToImage}` }} style={{ height: 100, width: 100, borderRadius: 10 }} />

                                                        <Text style={{ width: deviceWidth - 130, paddingLeft: 10, paddingTop: 5, fontWeight: 'bold', color: 'white' }}>{news.title}</Text>
                                                    </View>

                                                </TouchableOpacity>
                                            ) : null
                                        ))
                                    }
                                </ScrollView>
                            )
                    }
                </View>
                
            </View>

        );
    }
}

export default HomeScreen;
