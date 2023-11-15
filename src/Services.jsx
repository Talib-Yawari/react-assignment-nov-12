import React from 'react'
import ServiceItem from './ServiceItem'
import ServiceItem1 from './ServiceItem1'
import ServiceItem2 from './ServiceItem2'
import ServiceItem3 from './ServiceItem3'
import ServiceItem4 from './ServiceItem4'
import ServiceItem5 from './ServiceItem5'

export default function Services() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center my-3'>Services</h1>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <ServiceItem />
                </div>

                <div className='col-md-4'>
                    <ServiceItem1 />
                </div>

                <div className='col-md-4'>
                    <ServiceItem2 />
                </div>
                <div className='col-md-4'>
                    <ServiceItem3 />
                </div>
                <div className='col-md-4'>
                    <ServiceItem4 />
                </div>
                <div className='col-md-4'>
                    <ServiceItem5 />
                </div>
            </div>
        </div>
    )
}
