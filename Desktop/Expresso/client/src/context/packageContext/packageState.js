import React, { useReducer } from 'react'
import PackageContext from './packageContext.js'
import PackageReducer from './packageReducer.js'

const PackageState = (props) => {
    const initialState = {
        packages: [
            {
                zone: "1",
                name: "nora-service-aat-integration",
                installed: "1.0.1-osianized",
                available:"true",
                outdated:"false"

            },
            {
                zone: "3",
                name: "robo-portfolio-generator",
                installed: "0.0.87-master",
                available:"true",
                outdated:"false"
            },
            {
                zone: "0",
                name: "oet-service-morningstar-integration",
                installed: "1.0.0-static_final",
                available:"true",
                outdated:"true"
            },
            {
                zone: "0",
                name: "oet-service-morningstar-integration",
                installed: "1.0.0-static_final",
                available:"true",
                outdated:"true"
            },
        ],
        jobs: [
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "processing"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "success"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "processing"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "failed"
            },
            {
                name: "nora-service-aat-integration",
                version: "1.0.15-develop",
                host: "10.158.95.27",
                date_time: "3 Mar 2021 16:33",
                status: "success"
            },

        ],
        hosts : [
            {
                name: "0"
            },
            {
                name: "1"
            },
            {
                name: "2"
            },
            {
                name: "3"
            },
            {
                name: "4"
            },
            {
                name: "5"
            }
        ],
        zones: [
            {
                name: "dev"
            },
            {
                name: "local"
            },
            {
                name: "osia"
            },
            {
                name: "prepod"
            },
            {
                name: "prod"
            },
            {
                name: "tech"
            },
            {
                name: "tech"
            },

        ],
        navstate: {
            whichComponentToShow: 'environments'
        }

    }
    const [state, dispatch] = useReducer(PackageReducer, initialState);

    
    return (
            <PackageContext.Provider value={{
                packages:state.packages,
                jobs:state.jobs,
                hosts:state.hosts,
                zones:state.zones,
                navstate:state.navstate,
            }}>{props.children}</PackageContext.Provider> 
    )
}

export default PackageState