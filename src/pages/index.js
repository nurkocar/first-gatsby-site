import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

import * as styles from '../styles/home.module.css';

export default function Home() {
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Develop & Deploy</h2>
          <p>Web developer based  in Midlands.</p>
          <Link className={styles.btn} to='/prjects'>My Portfolio Projects</Link>
        </div>
        <img src='/profile.jpeg' alt='profile' style ={{ maxWidth: '100%' }}/>
      </section>
    </Layout>
  );
};

