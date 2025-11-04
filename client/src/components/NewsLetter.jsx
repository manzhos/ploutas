import React, { useState } from "react";
import {
	Box,
	TextField,
	Button,
	Typography,
	// Grid,
	// MenuItem,
	Snackbar,
	Alert,
} from "@mui/material";
import { motion } from "framer-motion";

export default function NewsLetter() {
	const [formData, setFormData] = useState({
		email: "",
	});

	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// 👉 Здесь можно добавить реальную отправку данных:
		// await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(formData) })

		const url = 'https://db32587e.sibforms.com/serve/MUIFABgSdXrppOjiRUv1rZbmQmAUJMW9mOEqDNuoosFu30jT9rxk_Cwe9LY6BbytY7lslOBlJXMyp_zYZw-kr30vZifoDTRppbe5jYx6KdepvJfSRWenfVdOEbK-zy2vfpcYYzOvzRrRCineoKTz1jLCc8bTQVfrvI3itwVIHbd_n43VNNxaof9aaH21cqudH1pPYVhpNBunBBzR';

		// window.location.href = url; // redirect in the same tab
		window.open(url, "_blank"); // to open in a new tab
	};

	const formFieldStyle = {
		// Базовый цвет label
		"& .MuiInputLabel-root": {
			color: "#ffffff",
		},
		// Цвет текста внутри поля
		"& .MuiInputBase-input": {
			color: "#ffffff",
		},
		// Цвет label при фокусе
		"& .MuiInputLabel-root.Mui-focused": {
			color: "#ffffff",
		},
		// Цвет underline (линии) в обычном состоянии
		"& .MuiInput-underline:before": {
			borderBottomColor: "#ffffff",
		},
		// Цвет underline при наведении
		"& .MuiInput-underline:hover:before": {
			borderBottomColor: "#ffffff",
		},
		// Цвет underline при фокусе
		"& .MuiInput-underline:after": {
			borderBottomColor: "#ffffff",
		},
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
		>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					backgroundColor: "#B6915D",
					px: { xs: 3, sm: 8, md: 15 },
					py: { xs: 6, sm: 8 },
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					ml: { xs: "0px", md: "220px" },
				}}
			>
				<Typography
					variant="h4"
					sx={{
						color: "#ffffff",
						fontWeight: 400,
						mb: 2,
						textAlign: "center",
					}}
				>
					Subscribe to the newsletter
				</Typography>

				{/* <TextField
					required
					name="email"
					label="Email"
					fullWidth
					variant="standard"
					value={formData.email}
					onChange={handleChange}
					sx={formFieldStyle}
				/> */}

				<Box textAlign="center" sx={{ mt: 3 }}>
					<Button
						type="submit"
						variant="contained"
						sx={{
							backgroundColor: "#ffffff",
							color: "#B6915D",
							borderRadius: "50px",
							px: 4,
							py: 1,
							fontWeight: 600,
							textTransform: "none",
							border: "0px solid #B6915D",
							"&:hover": {
								backgroundColor: "#fff0f0",
							},
						}}
					>
						Submit
					</Button>
				</Box>

			</Box>

			{/* ✅ Snackbar for feedback */}
			<Snackbar
				open={openSnackbar}
				autoHideDuration={3000}
				onClose={() => setOpenSnackbar(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			>
				<Alert
					onClose={() => setOpenSnackbar(false)}
					severity="success"
					variant="filled"
					sx={{ width: "100%" }}
				>
					Email added successfully!
				</Alert>
			</Snackbar>
		</motion.div>
	);
}