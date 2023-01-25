import './App.css';
import Image from './Image';
import cat from './cat.jpg'
import UserProfile from './UserProfile';

function App() {

  const users = [
    {
    id: 102,
    name: 'João',
    email: 'joao@gmail.com',
    avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
  },
  {
    id: 77,
    name: 'Amélia',
    email: 'amelia@gmail.com',
    avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
  }
];

  return (
    <>
      <Image source={cat} alternativeText='Cute cat staring' />
      <section>
      {users.map((user) => <UserProfile key={user.id} user={ user } />)}
      </section>
    </>
  );
}

export default App;
