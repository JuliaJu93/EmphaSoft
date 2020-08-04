import React, {useState, useEffect} from 'react';

function Home () {
    const [user, setUser] = useState(null);
    const [friends, setFriends] = useState([]);
    const token = localStorage.getItem("authToken");
    
    useEffect(() => {
        fetch(`https://api.vk.com/method/users.get?access_token=${token}&v=5.122`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setUser(data.response[0]);
        });
        fetch(`https://api.vk.com/method/friends.get?count=5&fields=nickname&fields=photo_200&access_token=${token}&v=5.122`, {
            method: 'GET'
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.response.items);
            setFriends(data.response.items);
        }); 
    },[]);
    
    return (
        <div>
            <div>
                {user && <h1>{`Пользователь: ${user.last_name} ${user.first_name}`}</h1>}
            </div>
            <ul>
                <li>
                {friends.length && <p>{friends[0].first_name} {friends[0].last_name}</p>}
                </li>
                <li>
                {friends.length && <p>{friends[1].first_name} {friends[1].last_name}</p>}
                </li>
                <li>
                {friends.length && <p>{friends[2].first_name} {friends[2].last_name}</p>}
                </li>
                <li>
                {friends.length && <p>{friends[3].first_name} {friends[3].last_name}</p>}
                </li>
                <li>
                {friends.length && <p>{friends[4].first_name} {friends[4].last_name}</p>}
                </li>
            </ul>
        </div>
    );
}

export default Home; 