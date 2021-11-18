import React from 'react'

const PeopleList = ({ data }) => {


    return (
        <div>
            {data && data.map((item) => (
                <div className="card" key={item.name}>
                    <div>
                        <p className="card-name" data={data}>{item.name}</p>
                    </div>
                </div>
            )
            )}
        </div>
    )
}

export default PeopleList
