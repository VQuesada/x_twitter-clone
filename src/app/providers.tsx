'use client'

import { NextUIProvider } from '@nextui-org/react'
import { type FC } from 'react'

interface AppProviderProps {
  children: React.ReactNode
}

export const AppProviders: FC<AppProviderProps> = ({ children }) => {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
