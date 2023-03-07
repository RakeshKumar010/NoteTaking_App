import React, { useEffect, useState } from 'react'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useNavigate,Link } from 'react-router-dom';
const Notes = () => {
    const navigate = useNavigate()
    const [notesmodel, setNotes] = useState()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        let result = await fetch('http://localhost:3000', {
            method: 'get',
            headers: { 'content-type': 'application/json' }

        })
        result = await result.json()
        setNotes(result)
    }
    const clickFun = async (id) => {
        let result = await fetch(`http://localhost:3000/${id}`, {
            method: "delete",
            headers: { 'content-type': 'application/json' }
        })
        result = await result.json()
        if (result) {
            getData()
            console.log('succesfully')
        }
    }
    
    return (
        <div className='mainNotes'>

            {notesmodel && notesmodel.map((val) => {
                return <div className='notesicon' key={val._id}>
                    <div className="innerNotes">
                        <h3>{val.topic}</h3>
                        <p>{val.message}</p>



                    </div>
                    <div className="icon">
                        <HighlightOffOutlinedIcon className='icon1' onClick={() => clickFun(val._id)} />
                        <Link to={`/update/${val._id}`} className='icon2link'>
                        <DriveFileRenameOutlineOutlinedIcon className='icon2'  />
                        </Link>
                    </div>
                </div>
            })}

        </div>
    )
}

export default Notes