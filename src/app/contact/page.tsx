'use client'
import MainSection from '@/components/MainSection'
import React from 'react'
import { useData } from '@/components/MainAppContext';

function Page() {
    const {getContact} = useData()
  return (
    <MainSection data={getContact()}>
        contact
    </MainSection>
  )
}


export default Page