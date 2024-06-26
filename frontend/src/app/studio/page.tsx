"use client";
import { useState } from "react";
import ProjectList from "@/app/ui/ProjectList";
import { ProjectForm } from "@/app/ui/ProjectForm";
import Header from "@/app/ui/Header";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  TextField,
} from "@mui/material";

export default function StudioHome() {
  const [openForm, setOpenForm] = useState(false);
  const handleCloseFrom = () => {
    setOpenForm(false);
  };

  const handleOpenFrom = (_e: any) => {
    setOpenForm(true);
  };

  return (
    <>
      <Header
        title="Soverant"
        right={() => (
          <Box>
            <Button variant="text" onClick={handleOpenFrom}>
              New Project
            </Button>
          </Box>
        )}
      ></Header>
      <Dialog open={openForm} onClose={handleCloseFrom}>
        <DialogContent>
          <ProjectForm onSubmit={handleCloseFrom} />
        </DialogContent>
      </Dialog>
      <ProjectList />
    </>
  );
}
