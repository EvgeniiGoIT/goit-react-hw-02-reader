import React from 'react';
import Reader from "../Reader/Reader";
import publications from '../../Data/publications.json';

const App = () => <Reader items={publications} />;

export default App;
