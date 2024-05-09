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
        if(value.data?.user) {
          console.log(value.data.user);
          setUser(value.data.user);
        }
      })
    }
    getUserData();
  }, []);

 async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  navigate("/login");
 }

  return (
    <div className="App">
    <header className="App-header">
      <h1> "WELCOME" "Logged In Successfully" </h1>
      <button onClick={() => signOutUser()}> LogOut </button>
    </header>
</div>
  );
}

export default Home;