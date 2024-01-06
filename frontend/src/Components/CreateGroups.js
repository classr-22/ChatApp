import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import './myStyles.css'
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";


function CreateGroups() {
  const lightTheme = useSelector((state)=>state.themeKey)
  const userData = JSON.parse(localStorage.getItem("userData"));
  // console.log("Data from LocalStorage : ", userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  const user = userData.data;
  const [groupName, setGroupName] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("User Data from CreateGroups : ", userData);

  const createGroup = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    axios.post(
      "http://localhost:5000/chat/createGroup",
      {
        name: groupName,
        users: '["647d94aea97e40a17278c7e5","647d999e4c3dd7ca9a2e6543"]',
      },
      config
    );
    nav("/app/groups");
  };

  return (
    <AnimatePresence>
    <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Do you want to create a Group Named " + groupName}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This will create a create group in which you will be the admin and
              other will be able to join this group.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button
              onClick={() => {
                createGroup();
                handleClose();
              }}
              autoFocus
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    <motion.div 
      initial={{ opacity: 0 , scale:0}}
      animate={{ opacity: 1 , scale:1}}
      exit={{ opacity: 0, scale:0}}
      transition={{
          ease: "anticipate",
          duration: "0.3"
      }}
      style={{flex:"0.7", display:"flex",alignItems:"center",minWidth:"0px"}} className='CreateGroupsClass'
    >
      <div style={{
          backgroundColor:"white",display:"flex",justifyContent:"space-between",alignSelf:"center",
          borderRadius:"20px",padding:"20px 10px",margin:"10px",flex:"1"
          }} className={'CreateGroups-container'+((lightTheme)?"":" dark")}>
          <input 
            type='text' 
            placeholder='Enter Group Name' 
            className={'search-box'+((lightTheme)?"":" dark")}
            onChange={(e) => {
              setGroupName(e.target.value);
            }}
          >
          </input>
          <IconButton  onClick={() => {
            handleClickOpen();
            // createGroup();
          }}>
              <DoneOutlineOutlinedIcon className={((lightTheme)?"":" dark")}></DoneOutlineOutlinedIcon>
          </IconButton>
      </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default CreateGroups