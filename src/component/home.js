import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = 'https://ikpmlvdvlrikutejcbfj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcG1sdmR2bHJpa3V0ZWpjYmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NzY4NDMsImV4cCI6MjAzMDA1Mjg0M30.Ls99A3i5aFUCAjc_DCXgvgiNKJtOqhRoX7KfdoJoIHw';
const supabase = createClient(supabaseUrl, supabaseKey);

function Home() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      })
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     {Object.keys(user).length !== 0 ?
    //     <>
    //          <h1> "WELCOME" "Logged In Successfully" </h1>
    //          <button onClick={() => signOutUser()}> LogOut </button>
    //     </>
    //     :
    //     <>
    //          <h1> User is not logged in </h1>
    //          <button onClick={() => { navigate("/") }}> Go back home ! </button>
    //     </>
    //     }
    //   </header>
    // </div>
    <div className="App">
            <header className="App-header">
                {Object.keys(user).length !== 0 ? (
                    <div className="welcome-container">
                        <h1 className="welcome-message">WELCOME<br />Logged In Successfully</h1>
                        <button className="logout-button" onClick={signOutUser}>Log Out</button>
                    </div>
                ) : (
                    <div className="logged-out-container">
                        <h1 className="logout-message">User is not logged in</h1>
                        <button className="home-button" onClick={() => { navigate("/") }}>Go back Login!</button>
                    </div>
                )}
            </header>
        </div>
  );
}

export default Home;