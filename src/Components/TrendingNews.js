import React, { Component } from 'react';
import config from '../../config/config';
import { ActivityIndicator, Text, View, Image, Touchable, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';

class TrendingNews extends Component {
    state = {
        news: []
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/top-headlines?country=ph&apiKey=${config.API_KEY}`).then(res => res.json()).then(response => {
            this.setState({
                news: response.articles
            })
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <View>
                {this.state.news.length === 0 ?
                    <ActivityIndicator color='white' size='large' /> : <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            this.state.news.map((news, index) => (
                                news.urlToImage ? (
                                    <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('News', {
                                        url: news.url, 
                                    })} >
                                    <View style={{ margin: 10,  }}>
                                        <Image source={{ uri: `${news.urlToImage}` }} style={{ height: 200, width: 200, borderRadius: 10 }} />
                                        <Text style={{ width: 200, textAlign: 'justify', color:'white' }}>{news.title}</Text>
                                    </View></TouchableOpacity>
                                    ) : null
                            ))
                        }
                    </ScrollView>
                }
            </View>
        );
    }
}

export default TrendingNews;
