import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

//hooks
import {useAuthValue} from "../../context/AuthContext"
import {useFetchDocuments} from "../../hooks/useFetchDocuments"

const Dashboard = () => {
    return(
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard