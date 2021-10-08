import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react';
import { MovieContext } from '../../context/movieContext/movieContext';
import { deleteMovies, getMovies } from '../../context/movieContext/apiCalls';
const ProductList = () => {
  
    const { movies, dispatch } = useContext(MovieContext)

    useEffect(() => {
      getMovies(dispatch)
    }, [dispatch])

    const handleDelete = (id)=>{
        deleteMovies(id, dispatch);
    }

    const columns = [
          { field: 'id', headerName: 'ID', width: 90 },
          {
            field: 'movies',
            headerName: 'Movies',
            width: 150,
            editable: true,
            renderCell: (params)=>{
                return(
                  <div className="productListItem">
                      <img className="productListImg" src={params.row.img} alt="" />
                      {params.row.title}
                  </div>
                )
            }
          },
          {
            field: 'genre',
            headerName: 'Genre',
            width: 120,
            editable: true,
          },
          {
            field: 'year',
            headerName: 'Year',
            width: 120,
            editable: true,
          },
          {
            field: 'limit',
            headerName: 'Limit',
            width: 120,
            editable: true,
          },
          {
            field: 'isSeries',
            headerName: 'isSeries',
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
                          <Link to={{pathname:"/product/"+ params.row._id, movie: params.row}}>
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
                rows={movies}
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
