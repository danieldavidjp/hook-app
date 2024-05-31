import React from 'react'
import { memo } from 'react';

export const Small = memo(({ value }) => {
   console.log('Small component rendered');
   return (
      <small>{value}</small>
   )
})