import React, { useState } from "react";
import Layout from '../components/Layout';
import Link from 'next/link';



export default function Index() {
  return (
    <Layout>
    <Link href="/about">
    <a>About Page</a>
  </Link>
    </Layout>
  );
}
