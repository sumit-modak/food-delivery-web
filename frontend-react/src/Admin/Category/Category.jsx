import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurantById, getRestaurantsCategory } from '../../State/Customers/Restaurant/restaurant.action';
import { Box, Card, CardHeader, IconButton, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Create } from '@mui/icons-material';
import CreateCategory from './CreateCategory';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    outline:"none",
    p: 4,
  };

const Category = () => {
    const dispatch=useDispatch();
    const {auth,restaurant}=useSelector(store=>store)
    const jwt = localStorage.getItem("jwt")
    const [openCreateCategory, setOpenCreateCategory] = React.useState(false);
    const handleOpenCreateCategory = () => setOpenCreateCategory(true);
    const handleCloseCreateCategory = () => setOpenCreateCategory(false);

    
  return (
    <div>
         <Card className="mt-1">
        <CardHeader
          title={"Categories"}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-action": { mt: 0.6 },
          }}
          action={<IconButton onClick={handleOpenCreateCategory}> <Create/></IconButton> }
        />
        <TableContainer>
          <Table sx={{}} aria-label="table in dashboard">
            <TableHead>
              <TableRow>
              <TableCell>Id</TableCell>
                
             
                <TableCell>Name</TableCell>
             
               
              
              </TableRow>
            </TableHead>
            <TableBody>
              {restaurant.categories.map((item, index) => (
                  <TableRow
                    className="cursor-pointer"
                    hover
                    key={item.id}
                    sx={{
                      "&:last-of-type td, &:last-of-type th": { border: 0 },
                    }}
                  >
                    <TableCell>{item?.id}</TableCell>
                
                    
                    <TableCell className="">
                      {item.name}
                    </TableCell>
          
                    
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal
        open={openCreateCategory}
        onClose={handleCloseCreateCategory}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateCategory handleClose={handleCloseCreateCategory}/>
        </Box>
      </Modal>
    </div>
  )
}

export default Category