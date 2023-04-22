import { WebView } from 'react-native-webview';
import React, { Component } from 'react';
import { Platform } from 'react-native';

class WebViewComponent extends Component {
    render(){
        return(
            <WebView source={{uri:`${this.props.route.params.url}`}} />
        );
    }
}

export default WebViewComponent;