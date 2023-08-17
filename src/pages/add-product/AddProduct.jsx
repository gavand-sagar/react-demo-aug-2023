import React from 'react'
import { useRouteGaurd } from '../../shared/hooks/useRouteGuard'

export default function AddProduct() {
  useRouteGaurd()
  return (
    <div>AddProduct</div>
  )
}
