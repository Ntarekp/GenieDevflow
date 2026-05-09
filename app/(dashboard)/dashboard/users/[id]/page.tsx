import React from 'react'

const Page = async({params, }: {params:Promise<{id:string}>}) => {

  const {id} =  await params;
  return (
    <div>
      <h1 className='text-3xl' >
        Users Profile: {id}
      </h1>
    </div>
  )
}

export default Page