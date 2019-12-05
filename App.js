import React, {Component} from 'react';
import Routes from './src/routes/routes';
import store from './src/config/store';
import { Provider } from 'react-redux';

export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = { 
        Loader: false
      };
}

  componentDidMount(){
    
  }

  render() {
    return (
            this.state.Loader == true ? 
            <View style={{ flex:1,alignItems:'center',justifyContent:'center',backgroundColor: '#1b2129' }}>
                <Image source={require('./src/assets/load.gif')} style={{height:60, width:60}}></Image>
            </View>
            : 
            <Provider store={store}>
              <Routes />
            </Provider>
    );
  }
}
