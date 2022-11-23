import React from 'react'

const AccountLinks = ({ ImageUrl, name }: {ImageUrl: string; name: string}) => {
  return (
    <div className='flex items-center justify-start gap-5 cursor-pointer'>
        <img src={ require(`../../assets/svg/${ImageUrl}.svg`) } alt={ImageUrl} />
        <p>{name}</p>
    </div>
  )
}

export default AccountLinks