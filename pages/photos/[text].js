import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Photos = props => {
  const router = useRouter()
  return (
    <Layout>
      Photos [text]
    </Layout>
  );
};

Photos.getInitialProps = async ({ query }) => {
  const resUrl = `https://api.unsplash.com/search/photos?page=1&query=${query.text}`;
  const res = await fetch(resUrl, {
    headers: {
      Authorization: `Client-ID 2032d48644d5da3b3251f6731fd848fa4f0708531c295d20c4d73eb943226ea1`
    }
  });
  const data = await res.json();
  return {
    photos: data
  }
}

export default Photos;