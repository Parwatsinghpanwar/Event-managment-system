import React from 'react'
import { Helmet } from 'react-helmet-async'
import Carousels from '../components/Carousels'
import Contactus from '../components/Contactus'
import Callus from '../components/Callus'
import Services from '../layouts/Services'
import Categories from '../components/Categories'
import Newsletter from '../layouts/Newsletter'


export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Event-management-system</title>
      </Helmet>
      <Carousels/>
      <Categories/>
      <Callus/>
      <Services/>
      <Newsletter/>
      <Contactus/>
    </div>
  )
}
