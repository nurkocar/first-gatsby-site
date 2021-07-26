import React from "react";
import Layout from "../components/Layout";
import { Link, graphql} from "gatsby";

import * as styles from '../styles/home.module.css';

export default function Home({data}) {

  console.log(data)
  const { title, description } = data?.site.siteMetadata

  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Develop & Deploy</h2>
          <p>Web developer based  in Midlands.</p>
          <Link className={styles.btn} to='/prjects'>My Portfolio Projects</Link>
        </div>
        <img src='/profile.jpeg' alt='profile' style ={{ maxWidth: '100%' }}/>
        <p>{ title } - { description }</p>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`
