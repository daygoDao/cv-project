import React from 'react'

const Preview = ({person}) => {
  const {firstName, lastName, personalDesc, email,phone} = person;
  console.log(firstName)
  return (
    <div className='cvPreview'>
        <section className='cvPersonalDesc'>
            <h4>teset</h4>
            <h5>{firstName} {lastName}</h5>
            <p>email: {email}</p>
            <p>Phone: {phone}</p>
            <p>About me: {personalDesc}</p>
        </section>
    </div>
  )
}

export default Preview