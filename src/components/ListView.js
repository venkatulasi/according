import React,{useState,useEffect} from 'react'

const ListView = () => {
  const [users,setUsers] = useState([]);

  const url = 'https://reqres.in/api/users/';

  const fetchUsers = async()=>{
      const res = await fetch(url);
      const js = await res.json();
      console.log(js.data)
      setUsers(js.data);
  }
  useEffect(()=>{
      fetchUsers();
  },[])

  return (
    <div className="App">
    <h1>Hello ReqRes users!</h1>
    <div className="flex">
      {users.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
              <img key={user.avatar} src={user.avatar} />
            </div>
          );
        })}
    </div>
  </div>
  )
}

export default ListView