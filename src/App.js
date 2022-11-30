import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
//import Users from "./components/Users/Users";
import Panel from "./components/Panel/Panel";
import Avatar from "./components/Avatar/Avatar";
import Name from "./components/Name/Avatar";
import Quote from "./components/Quote/Quote";
import Stats from "./components/Stats/Stats";
import Status from "./components/Status/Status";
import Media from "./components/Media/Media";
import Blog from "./components/Blog/Blog";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
  <>
    <Panel>
      <Name name="Gamey Jamie"></Name>
      <Avatar height="350px" img="https://t2.uc.ltmcdn.com/en/posts/5/1/1/how_to_dress_like_a_gangster_rapper_2115_paso_4_600.jpg"></Avatar>
      <Quote text="The teddy bear drops deep as does my Cake. I never natter, 'cause to natter is the cousin of wake."></Quote>
      <Stats stats={{gender: "male", age: "15", location: "Straight Outta Compton, USA"}}></Stats>
      <Status llogin="20/04/2002" online={true}></Status>
      <Media pics="http://www.google.com" videos="http://www.yahoo.com"></Media>
    </Panel>
    <Panel>
      send me a message
      add me to friends
      instant message
      add me to group
      forward to friends
      add to favourites
      block me
      rate me
    </Panel>
    <Panel>
      Myspace URL: http://www.myspace.com/gameyj
    </Panel>
    <Panel>
      <img alt="a very silly car" height="300px" src="https://scontent-lhr8-2.xx.fbcdn.net/v/t39.30808-6/300378558_437921015024910_8260333265736780627_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=J0l3naQk_loAX9w7Cdm&_nc_ht=scontent-lhr8-2.xx&oh=00_AfCw7K3WFh-AQNnISTY00kyNr34kICqmbZRXVIciD8oWeQ&oe=638D6819"></img>
    </Panel>
    <Panel>
      <Blog entries={
        [
          { title: "How I met your mother", link: "http://www.yourmum.com" },
          { title: "That one time at bandcamp", link: "http:///www.americanpie.com"}
        ]
      }></Blog>
    </Panel> 
  </>
);

export default App;