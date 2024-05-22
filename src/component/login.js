import React, { useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabaseUrl = 'https://ikpmlvdvlrikutejcbfj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlrcG1sdmR2bHJpa3V0ZWpjYmZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NzY4NDMsImV4cCI6MjAzMDA1Mjg0M30.Ls99A3i5aFUCAjc_DCXgvgiNKJtOqhRoX7KfdoJoIHw';
const supabase = createClient(supabaseUrl, supabaseKey);

function Login() {
    const navigate = useNavigate();

    // supabase.auth.onAuthStateChange(async (event) => {
    //     if (event !== "SIGNED_OUT") {
    //         navigate("/");
    //     } 
    // })
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                navigate("/home");
            }
        });

        return () => {
            authListener.subscription?.unsubscribe();
        };
    }, [navigate]);

    const rootStyle = {
        backgroundColor: '#3498db', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const authContainerStyle = {
        backgroundColor: '#ffffff', 
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', 
    };
   
    return (
        <div className="App" style={rootStyle}>
           <header className="App-header">
                <div style={authContainerStyle}>
                    <Auth
                        supabaseClient={supabase}
                        providers={['email', 'google']}
                    />
                </div>
            </header>
        </div>
    );
}

export default Login;







