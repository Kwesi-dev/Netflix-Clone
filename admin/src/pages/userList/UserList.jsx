import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { deleteUser, getUsers } from '../../context/userContext/apiCalls';
import { UsersContext } from '../../context/userContext/usersContext';

const UserList = () => {
    
    const { users, dispatch } = useContext(UsersContext)
    useEffect(() => {
        getUsers(dispatch)
    }, [dispatch])
    
    const handleDelete = (id)=>{
      deleteUser(id, dispatch)
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'username',
          headerName: 'Username',
          width: 150,
          editable: true,
          renderCell: (params)=>{
              return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.profilePic} alt="" />
                    {params.row.username}
                </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params)=>{
                return(
                    <>
                        <Link to={{pathname: "/user/"+ params.row._id, user: params.row }}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
     
      ];
      
    return (
        <div className="userList">
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(r)=> r._id}
            />
        </div>
    )
}

export default UserList
