import {React, Component} from "react";
import styled from "styled-components";
import { Animated } from "react-native";
import Icon from 'expo'

class Menu extends Component {
    state = {
        top: new Animated.Value(900)
    }

    componentDidMount() {
        Animated.spring( this.state.top, {
            toValue: 0
        }).start()
    }
    
    render() {
        return (
          <AnimatedContainer style={{ top: this.state.top}}>
            <Cover />
                <CloseView>
                    <Ionicons name="ios-close" size={44} color="#546bfb" />
                </CloseView>
            <Content />
          </AnimatedContainer>
        );
    }
}

export default Menu;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
`

const Cover = styled.View`
  height: 142px;
  background: black;
`;

const Content = styled.View`
  height: 900px;
  background: #f0f3f5;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
