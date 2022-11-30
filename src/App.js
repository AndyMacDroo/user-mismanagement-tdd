import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Users from "./components/Users/Users";
import Panel from "./components/Panel/Panel";
import Avatar from "./components/Avatar/Avatar";
import Name from "./components/Name/Avatar";
import Quote from "./components/Quote/Quote";
import Stats from "./components/Stats/Stats";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


const App = () => (
  <>
    <Panel>
      <Name name="Gamey Jamie"></Name>
      <Avatar height="350px" img="https://t2.uc.ltmcdn.com/en/posts/5/1/1/how_to_dress_like_a_gangster_rapper_2115_paso_4_600.jpg"></Avatar>
      <Quote text="The teddy bear drops deep as does my Cake. I never natter, 'cause to natter is the cousin of wake."></Quote>
      <Stats stats={{gender: "male", age: "15", location: "Straight Outta Compton, USA"}}></Stats>
    </Panel>
    <Panel>
      UserLink
    </Panel>
    <Panel>
      Weblink
    </Panel>
    <Panel>
      Header
    </Panel>
    <Panel>
      Blog
    </Panel> 
  </>
);

export default App;