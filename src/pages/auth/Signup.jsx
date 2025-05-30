import React from 'react';
import Layout from '../../components/layout/Layout';
import Class from './auth.module.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <Layout  >
      <Link > <img src="https://pngimg.com/uploads/amazon/amazon_PNG12.png" alt="logo"
       className={Class.logo} />
      </Link>
       <section className={Class.container}>
        <h3>Sign-in</h3>
         <form action="" method="post">
           <label htmlFor="email">E-mail</label>
           <input type="text" placeholder='E-mail' />
           <label htmlFor="Password">Password</label>
           <input type="text" placeholder='Passeord' width={10}/>
         </form>
         <button type="button" className={Class.signin_button}>Sign In</button>
         <div className={Class.discription}>
          <p>By signing in you agree to the AMAZON FAKE CLONE Condithions of use & Sale. Pleas see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice</p>
         </div>
         <button type="button" className={Class.signup_button}>Create your Amazone Account</button>
       </section>
    </Layout>
  )
}
