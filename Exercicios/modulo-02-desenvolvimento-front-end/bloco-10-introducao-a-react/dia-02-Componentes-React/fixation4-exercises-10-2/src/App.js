import React from 'react';
import UserProfile from './components/UserProfile';
import Image from './components/Image';

class App extends React.Component {
  render() {
    const users = [
    {
      id: 102,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
      text: 'Não deu'
    },
    {
      id: 77,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png",
      text: 'Não deu'
    },
    {
      id: 75,
      name: "Fábio",
      email: "fabio@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png",
      text: 'Não deu'
    }
  ];

    return (
      <div className="App">
        <hr />
        {
          users.map((user) => 
            <section>
              <UserProfile user={ user.name } />
              <Image source={user.avatar} alt={user.text} />
            </section>
          )
        }
        <hr />
      </div>
    );
  }
}

export default App;
