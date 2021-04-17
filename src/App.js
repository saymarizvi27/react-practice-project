import React ,{ useState } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [enteredUsers, setEnteredUsers] = useState([]);

  const usenameUsersHandler = (userName,userAge) => {
    setEnteredUsers(
      (previousList)=>{
        console.log(previousList,"previousList")
        return [...previousList,{
          name:userName,
          age:userAge,
          id:Math.random().toString()
        }]
      }
    );
  };

  return (
    <div>
    <AddUser usenameUsersHandler={usenameUsersHandler}/>
    <UserList users={enteredUsers}/>
    </div>
  );
}

export default App;
