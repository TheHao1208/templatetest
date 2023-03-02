import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Hinh01 from "../assets/images/hinh01re.PNG"
import Hinh02 from "../assets/images/hinh02re.PNG"
import Hinh03 from "../assets/images/hinh03re.PNG"
import Hinh04 from "../assets/images/hinh04re.PNG"

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Collapse,
  Toolbar,
  Button,
  AppBar,
  Avatar,
  IconButton,
  Breadcrumbs,
  Link,
  Badge,
  Card,
  CardMedia,
  Table,TableHead,TableRow,TableCell,TableBody,Pagination,
  
  

} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  SentimentDissatisfiedOutlined,
  SentimentNeutralOutlined,
  SickOutlined,
  Home,Notifications,
  ExploreOutlined,
  CoronavirusOutlined,
  ExpandLess,
  ExpandMore,
  MenuOutlined,
  ManageSearchOutlined,
  BeachAccessOutlined,
  EqualizerOutlined,
  AccessibilityOutlined,
  RemoveRedEyeOutlined,
  NotificationsNone,
  BorderColor,CalendarMonth,Download,

} from "@mui/icons-material";
import { Stack } from '@mui/system';

const theme01 = createTheme({
  palette: {
    primary01: "#FF0000",
  },
});

const commonStyles = {
  m: 1,
  border: 1,
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor:'#FC3D39',
  
  
};
const commonStyles01 = {
  m: 1,
  border: 1,
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor:'#FECB2F',
  
  
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function createData(phuong, khuVuc, nguyCo, caBenh, dangTheoDoi,tuVong) {
  return { phuong, khuVuc, nguyCo, caBenh, dangTheoDoi,tuVong };
}

const rows = [
  createData('Thắng Nhất', 'Khu nhà PTSC', 'Không nguy cơ', 2, 0, 0),
  createData(1, 'Kênh đồng sắt 3', 'Nguy cơ cao', 200, 0,25),
  createData('Chí Linh', 'Chí Linh', 'Nguy cơ thấp', 10, 0 ,0),
  createData('Rạch Dừa', 'Rạch Dừa', 'Nguy cơ vừa', 65, 0 ,0),
  
];




export default function BasicGrid() {

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>

          <List>
        <Typography variant="h5" textAlign="center"sx={{ fontWeight: 'bold' }}>Hệ thống quản </Typography>
        <Typography variant="h5" textAlign="center"sx={{ fontWeight: 'bold' }}>lý bệnh truyền </Typography>
        <Typography variant="h5" textAlign="center"sx={{ fontWeight: 'bold' }}>nhiễm</Typography>

          <ListItem disablePadding>

            <ListItemButton component="a" href="#home">

              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Trang chủ" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ExploreOutlined />
              </ListItemIcon>
              <ListItemText primary="Bản đồ dự báo" />
            </ListItemButton>
          </ListItem>



          <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CoronavirusOutlined />
        </ListItemIcon>
        <ListItemText primary="Bệnh nhân" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Danh sách bệnh nhân" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Đang theo dõi" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Ca tử vong" />
          </ListItemButton>
        </List>
      </Collapse>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ManageSearchOutlined />
              </ListItemIcon>
              <ListItemText primary="Từ khóa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <BeachAccessOutlined />
              </ListItemIcon>
              <ListItemText primary="Thời tiết" />
            </ListItemButton>
          </ListItem>
        

          <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <EqualizerOutlined />
        </ListItemIcon>
        <ListItemText primary="Kiểm soát Vector" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Chính sách kiểm soát & thực hiện" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Chỉ số giám sát vector" />
          </ListItemButton>
          
        </List>
      </Collapse>


      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AccessibilityOutlined />
        </ListItemIcon>
        <ListItemText primary="Xã hội học" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Kích cỡ & phân bố quần thể" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Cơ sở hạ tầng" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Hành vi" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Yếu tố nguy cơ nhà ở" />
          </ListItemButton>
        </List>
      </Collapse>





          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <RemoveRedEyeOutlined />
              </ListItemIcon>
              <ListItemText primary="Điểm nguy cơ" />
            </ListItemButton>
          </ListItem>

          <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <CoronavirusOutlined />
        </ListItemIcon>
        <ListItemText primary="Quản lý tài khoản" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Danh mục quyền" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Danh mục nhóm tài khoản" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Quyền tài khoản / nhóm tài khoản" />
          </ListItemButton>
        </List>
      </Collapse>

          
        </List>
          </Item>
        </Grid>
        <Grid item xs={10}>

        <Box
        sx={{
          width: 1600,
          height: 90,
          bgcolor: 'white',
          borderRadius:4,
          mt:10,
          
        }}>
          <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ height: 95, width: 1600 ,bgcolor:'white',borderRadius:3}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <Stack direction="row" spacing={2} sx={{mt:2}}>

          <IconButton>
            <MenuOutlined/>            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 1 ,color:'black'}} fontWeight="bold">
            Bảng quản lý
          </Typography>        
          </Stack>
          <Breadcrumbs aria-label="breadcrumb" sx={{ml:7}}>
        <Link underline="hover" color="inherit" href="/" fontWeight="bold">
          Trang chủ
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          
        </Link>
      </Breadcrumbs>
        
        </div>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack direction="row" spacing={2}>

          
          <ThemeProvider theme={theme01}>

          <Badge badgeContent={12} color='error'>
            <NotificationsNone color="primary"/>
          </Badge>
          </ThemeProvider>

          <Typography variant="subtitle1" component="div" sx={{ mr: 1 ,color:'black'}}>
            Xin chào Eli 
            
          </Typography>
          <Avatar />
          </Stack>
        </div>
      </Toolbar>
    </AppBar>
    </Box>
        </Box>
        {/* this is a statitic  */}
        <Box
        sx={{
          width: 1600,
          height: 150,
          bgcolor: 'white',
          borderRadius:4,
          mt:5,
          
        }}>
        <Box sx={{ height: 160, width: 1600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant="h4" component="div" sx={{ ml: 2 ,fontWeight:'bold',color:'#595AD3'}}>
        Tình hình dịch bệnh ở Vũng Tàu
      </Typography>
      <Box  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 840}}>
        <Box sx={{ height: 120, width: 280, display: 'flex', alignItems: 'center ', justifyContent: 'left-start', bgcolor: 'orange', borderRadius: 2 }}>
          <div >
          <Stack direction="row" spacing={2} sx={{mt:2}}>

            <SickOutlined sx={{ fontSize: 60,color:'white' }}/>
            <div sx={{display:'block'}}>

            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 1 ,color:'white'}}>
              245
              <Typography variant="subtitle1" component="div" sx={{fontWeight:'bold',color:'white'}}>
              BỆNH NHÂN
            </Typography>  
            </Typography>
            </div>          
                      
            </Stack>
            
          </div>
        </Box>
        <Box sx={{ height: 120, width: 280,ml:3, display: 'flex', alignItems: 'center ', justifyContent: 'left-start', bgcolor: '#595AD3', borderRadius: 2 }}>
          <div >
          <Stack direction="row" spacing={2} sx={{mt:2}}>

            < SentimentNeutralOutlined sx={{ fontSize: 60 ,color:'white'}}/>
            <div sx={{display:'block'}}>

            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 1,color:'white' }}>
              566
              <Typography variant="subtitle1" component="div" sx={{fontWeight:'bold',color:'white'}}>
              Ca đang theo dõi
            </Typography>  
            </Typography>
            </div>          
                      
            </Stack>
            
          </div>
        </Box>
        <Box sx={{ height: 120, width: 280,ml:3,mr:3, display: 'flex', alignItems: 'center ', justifyContent: 'left-start', bgcolor: '#FC3D39', borderRadius: 2 }}>
          <div >
          <Stack direction="row" spacing={2} sx={{mt:2}}>

            <SentimentDissatisfiedOutlined sx={{ fontSize: 60,color:'white' }}/>
            <div sx={{display:'block'}}>

            <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mt: 1,color:'white' }}>
              10
              <Typography variant="subtitle1" component="div" sx={{fontWeight:'bold',color:'white'}}>
              Ca tử vong
            </Typography>  
            </Typography>
            </div>          
                      
            </Stack>
            
          </div>
        </Box>
        

        
      </Box>
      </Box>
        </Box>

        {/* this is an 3 table analyst */}


        <Box
          
          sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 460,
          borderRadius:3,
          mt:3,
          
        },
      }}
    >
      <Paper elevation={3}>

        <Typography variant="h5"  sx={{ fontWeight: 'bold', m: 2,color:'#595AD3' }}>
          Biểu đồ số lượng ca bệnh
        </Typography>
        <Stack direction="row" spacing={2} sx={{m:2}}>
        <Box >
        <Box sx={{ ...commonStyles, borderRadius: '50%' ,BorderColor:'white'}} />
        </Box>
        <Typography variant="h6"  >
          Năm 2023
        </Typography>
        <Box >
        <Box sx={{ ...commonStyles01, borderRadius: '50%' ,BorderColor:'white'}} />
        </Box>
        <Typography variant="h6"  >
        Năm 2022
        </Typography>
        </Stack>
      
        <Box sx={{
          m:2,
          backgroundImage:`url(${Hinh01})`,
          backgroundRepeat:'no-repeat',
          backgroundColor:"black",
          backgroundPosition:"center",
          backgroundSize:"cover",
          height:283,
          width:464,
        }}>
          
        </Box>
       
    
      </Paper>
      
      <Paper elevation={3}>
      <Typography variant="h5"  sx={{ fontWeight: 'bold', m: 2,color:"#595AD3" }}>
          Biểu đồ từ khóa tìm kiếm
        </Typography>
        
      
        <Box sx={{
          m:2,
          backgroundImage:`url(${Hinh02})`,
          backgroundRepeat:'no-repeat',
          backgroundColor:"black",
          backgroundPosition:"center",
          backgroundSize:"cover",
          height:283,
          width:464,
        }}>
          
        </Box>
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h5"  sx={{ fontWeight: 'bold', m: 2,color:"#595AD3" }}>
          Biểu đồ các loại bệnh trong năm 2023
        </Typography>
        
      
        <Box sx={{
          m:2,
          backgroundImage:`url(${Hinh03})`,
          backgroundRepeat:'no-repeat',
          backgroundColor:"black",
          backgroundPosition:"center",
          backgroundSize:"cover",
          height:283,
          width:464,
        }}>
          
        </Box>


      </Paper>
    </Box>

    {/* fawfawfaw */}

    <Box
        sx={{
          width: 1600,
          height: 1060,
          bgcolor: 'white',
          borderRadius:4,
          mt:5,
          
        }}>
        <Box paddingTop={3} sx={{
          m:2,
          
          backgroundImage:`url(${Hinh04})`,
          backgroundColor:"black",
          backgroundSize:"cover",
          height:600,
          width:1560,
        }}>
          
        </Box>

        <Box
        sx={{
          width: 1600,
          height: 80,
          bgcolor: 'white',
          borderRadius:4,
          mt:5, 
        }}>
          <Box direction="row" sx={{ height: 60, width: 1600, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Typography variant='h6'>
              Loại số liệu
              
            </Typography>
            <Box sx={{width:120,height:40,backgroundColor:'#F2F2F2',borderRadius:2,justifyContent:'center',ml:2}}>
              <Box direction="row" sx={{display:'flex',textAlign:'center',justifyContent:'center'}}>

              <Typography sx={{pl:1.25,pb:0.5,pt:1,color:'#595AD3'}}> Đầu vào
              
              </Typography>
              <ExpandMore sx={{pt:1,pl:2}}/>
              </Box>
            </Box>

            <Box direction="row" sx={{display:'flex',textAlign:'center',justifyContent:'center'}}>

            <Typography variant='h6' sx={{marginLeft:5}}>
              Phường
              
            </Typography>
            <Box sx={{width:200,height:40,backgroundColor:'#F2F2F2',borderRadius:2,justifyContent:'center',ml:2}}>
            <Box direction="row" sx={{display:'flex',textAlign:'center',justifyContent:'center'}}>

              <Typography sx={{pb:2,pt:1,color:'#595AD3'}}> Thắng nhất +3 khác
              </Typography>
              <ExpandMore sx={{pt:1,pl:2}}/>
              </Box>
            </Box>
            </Box>
            <Typography variant='h6' sx={{marginLeft:5}}>
              Ngày xem
              
            </Typography>
            <Box sx={{width:140,height:40,backgroundColor:'#F2F2F2',borderRadius:2,justifyContent:'center',ml:2}}>
            <Box direction="row" sx={{display:'flex',textAlign:'center',justifyContent:'center'}}>

              <Typography sx={{pl:1.25,pt:1,pb:0.5,color:'#595AD3'}}> 10/02/2023
              </Typography>
              <CalendarMonth sx={{pt:1,pl:2}}/>
              </Box>
            </Box>
            <Button variant="contained"sx={{marginLeft:5,marginRight:3,borderRadius:2,width:155,backgroundColor:'#595AD3'}} startIcon={<Download/>}>
              Excel
            </Button>
          </Box>

          {/* fawfwa */}
          <Table sx={{ minWidth: 650,marginLeft:2 }} aria-label="simple table">
        <TableHead>
          <TableRow >
          

            <TableCell  sx={{fontWeight:'bold',fontSize:'16px'}}> Phường </TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'16px'}}>Khu vực</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'16px'}}>Nguy cơ</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'16px'}}>Ca bệnh</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'16px'}}>Đang theo dõi</TableCell>
            <TableCell sx={{fontWeight:'bold',fontSize:'16px'}}>Tử vong</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.phuong}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                  {row.phuong}
                
              </TableCell>
              <TableCell >{row.khuVuc}</TableCell>
              <TableCell  >
              {index % 4 === 0 && <Box style={{width:160,backgroundColor: '#C9C9C9',borderRadius:10,textAlign:'center',color:'black' }}>{row.nguyCo}</Box>}
              {index % 4 === 1 && <Box style={{ width:160,backgroundColor: '#FC3D39' ,color:'white',borderRadius:10,textAlign:'center'}}>{row.nguyCo}</Box>}
              {index % 4 === 2 && <Box style={{ width:160,backgroundColor: '#3DC55D' ,color:'white',borderRadius:10,textAlign:'center'}}>{row.nguyCo}</Box>}
              {index % 4 === 3 && <Box style={{ width:160,backgroundColor: '#FD9426' ,color:'white',borderRadius:10,textAlign:'center'}}>{row.nguyCo}</Box>}
              
              </TableCell>
              <TableCell >{row.caBenh}</TableCell>
              <TableCell >{row.dangTheoDoi}</TableCell>
              <TableCell >{row.tuVong}</TableCell>
            </TableRow>
            
          ))}

          
            
        </TableBody>
        
        
      </Table>
      <Stack spacing={2} sx={{alignItems:'center',justifyContent:'center'}}>
      <Pagination count={7} showFirstButton showLastButton />
    </Stack>


      

        </Box>
        



     </Box>     
      
        </Grid>
        
       
      </Grid>
    </Box>
  );
}
