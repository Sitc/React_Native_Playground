import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components'
import Card from './app/src/components/Card';
import { NotificationIcon } from "./app/src/components/Icons";
import Logo from './app/src/components/Logo';
import Course from './app/src/components/Course';
import Menu from "./app/src/components/Menu";

export default function App() {
  return (
    <Container>
      <Menu />
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
          <Avatar source-={require('./assets/avatar.jpg')}/>
            <Title>Welcome back,</Title>
            <Name>Attila</Name>
            <NotificationIcon 
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>
          <ScrollView 
            style={{ flexDirection: "row", padding: 20, paddingLeft: 12 , paddingTop: 30 }} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, index) => (
              <Logo key={index} image={logo.image}  text={logo.text} />
            ))}
          </ScrollView>
          <SubTitle>Continue Learning</SubTitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                subtitle={card.subtitle}
                caption={card.caption}
                logo={card.logo}
              />
            ))}
          </ScrollView>
          <SubTitle>Popular Courses</SubTitle>
          <SubContainer>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </SubContainer>
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

 
const Container = styled.View`
  flex: 1;
  background-color: #F0F3F5;
`

const SubContainer = styled.View`
  flex: 1;
  background-color: #F0F3F5;
  align-items: center;
`


const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`

const Name = styled.Text`
  font-size: 16px;
  color: #3c4560;
  font-weight: bold;
`

const SubTitle = styled.Text`
  font-size: 15px;
  color: #b8bece;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;

`


const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  padding-left: 80px;
`

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
`


const logos = [
  {
    image: require('./assets/logo-framerx.png'),
    text: "Framer X"
  },
  {
    image: require('./assets/logo-figma.png'),
    text: "Figma"
  },
  {
    image: require('./assets/logo-studio.png'),
    text: "Studio"
  },
  {
    image: require('./assets/logo-react.png'),
    text: "React"
  },
  {
    image: require('./assets/logo-swift.png'),
    text: "Swift"
  },
  {
    image: require('./assets/logo-invision.png'),
    text: "InVision"
  },
  {
    image: require('./assets/logo-sketch.png'),
    text: "Sketch"
  }
]

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background11.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Styled Components",
    image: require("./assets/background12.jpg"),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Props and Icons",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require("./assets/logo-react.png")
  },
  {
    title: "Static Data and Loop",
    image: require("./assets/background14.jpg"),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require("./assets/logo-react.png")
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Anonym",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype"
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Anonym",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site"
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Anonym",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app"
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Anonym",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool"
  }
];