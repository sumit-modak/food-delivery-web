import {
    Avatar,
    Backdrop,
    Box,
    Button,
    Card,
    CardHeader,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  
  import React, { useEffect } from "react";
  import { useParams } from "react-router-dom";
  
  import { useDispatch, useSelector } from "react-redux";
  import { getMenuItemsByRestaurantId } from "../../State/Customers/Menu/menu.action";
  
  const RestaurantRequestTable = ({ isDashboard, name }) => {
    const dispatch = useDispatch();
    const { menu } = useSelector((store) => store);
    // const { id } = useParams();
  
    useEffect(() => {
      
    }, []);
  
    const handleDeleteProduct = (productId) => {
      console.log("delete product ", productId);
    };
  
    return (
      <Box width={"100%"}>
        <Card className="mt-1">
          <CardHeader
            title={name}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-action": { mt: 0.6 },
            }}
          />
          <TableContainer>
            <Table  aria-label="table in dashboard">
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Category</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Price</TableCell>
                  <TableCell sx={{ textAlign: "center" }}>Quantity</TableCell>
                  {!isDashboard && <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {menu.menuItems.slice(0,isDashboard?7:menu.menuItems.length).map((item) => (
                  <TableRow
                    hover
                    key={item.name}
                    sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                  >
                    <TableCell>
                      {" "}
                      <Avatar alt={item.name} src={item.imageUrl} />{" "}
                    </TableCell>
  
                    <TableCell
                      sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          sx={{
                            fontWeight: 500,
                            fontSize: "0.875rem !important",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography variant="caption">{item.brand}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.category.name}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      ₹{item.price}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.quantity || 10}
                    </TableCell>
  
                    {!isDashboard && <TableCell sx={{ textAlign: "center" }}>
                      <Button
                        variant="text"
                        onClick={() => handleDeleteProduct(item._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
  
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={menu.loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    );
  };
  
  export default RestaurantRequestTable;
  