import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Touchable } from 'react-native-web';


const categories = ['Entertainment', 'Business','Health', 'Technology', 'Sports']

class Categories extends Component {
    state = {}
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    categories.map((category, index) => (
                        <TouchableOpacity 
                        key={index}
                        onPress={() =>
                            this.props.navigation.navigate('GetNews', {category
                        })
                        }>
                        <View>
                            <Text style={{ padding: 10, borderWidth: 1, borderColor: 'black', fontSize: 19, margin: 10, borderRadius: 10, backgroundColor:'#09666e', color:'white' }}>{category}</Text>
                        </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        );
    }
}

export default Categories;
