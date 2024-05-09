import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = 'https://ikpmlvdvlrikutejcbfj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcG1sdmR2bHJpa3V0ZWpjYmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NzY4NDMsImV4cCI6MjAzMDA1Mjg0M30.Ls99A3i5aFUCAjc_DCXgvgiNKJtOqhRoX7KfdoJoIHw';
const supabase = createClient(supabaseUrl, supabaseKey);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            navigate("/home");
        } else {
            navigate("/login");
        }
    })
   

    return (
        <div className="App">
            <header className="App-header">
              <Auth
              supabaseClient={supabase}
              providers={["email"]}
              />

            </header>
        </div>
    );
}

export default Login;







