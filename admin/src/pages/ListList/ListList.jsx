import './listList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { ListContext } from '../../context/listContext/listContext'
import { deleteList, getLists } from '../../context/listContext/apiCalls';
const ProductList = () => {
  
    const { lists, dispatch } = useContext(ListContext)

    useEffect(() => {
      getLists(dispatch)
    }, [dispatch])

    console.log(lists);
    const handleDelete = (id)=>{
        deleteList(id, dispatch)
    }
    const columns = [
          { field: 'id', headerName: 'ID', width: 90 },
          {
            field: 'title',
            headerName: 'Title',
            width: 200,
            editable: true,
          },
          {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
            editable: true,
          },
          
          {
            field: 'type',
            headerName: 'Type',
            width: 120,
            editable: true,
          },
    
          {
              field: "action",
              headerName: "Action",
              width: 150,
              renderCell: (params)=>{
                  return(
                      <>
                          <Link to={{pathname:"/list/"+ params.row._id, list: params.row}}>
                              <button className="productListEdit">Edit</button>
                          </Link>
                          <DeleteOutline className="productListDelete" 
                            onClick={()=>handleDelete(params.row._id)}/>
                      </>
                  )
              }
          }
       
    ];    
    return (
        <div className="productList">
            <DataGrid
                rows={lists}
                columns={columns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
                getRowId={(r)=> r._id}
            />
        </div>
    )
}

export default ProductList
