import React from 'react'

const Card = ({humans}) => {
  return (
    <div>
        <h1 className='text-center display-3 text-dark fw-bold'>Human - Card</h1>
        <div className="row">
            {
                humans.map((human,i)=>(
                    <>
                      <div className="card col-3 mx-auto mt-4" style={{width: '18rem'}}>
                        <img src={human.picture.large} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{human.name.first} {human.name.last} <span className='h6'>
                                gender: {human.gender}</span></h5>
                            <p className="card-text">
                                E-Mail : {human.email}
                                <br />
                                Username : {human.login.username}
                                <br />
                                Password : {human.login.password}
                                <br />
                                Registered Age : {human.registered.age}
                                <br />
                                Age : {human.dob.age}
                            </p>
                            <a href={human.phone} className="btn btn-primary">Call me</a>
                        </div>
                        </div>

                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Card
