import React, { useState } from "react";
import {
	Box,
	TextField,
	Button,
	Typography,
	Grid,
	MenuItem,
	Snackbar,
	Alert,
} from "@mui/material";
import { motion } from "framer-motion";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		phone: "",
		company: "",
		role: "",
		loanAmount: "",
		message: "",
	});

	const [openSnackbar, setOpenSnackbar] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// 👉 Здесь можно добавить реальную отправку данных:
		// await fetch('/api/contact', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(formData) })

		console.log("Form submitted:", formData);
		setOpenSnackbar(true);

		// Очистка формы
		setFormData({
			fullName: "",
			email: "",
			phone: "",
			company: "",
			role: "",
			loanAmount: "",
			message: "",
		});
	};

	const formFieldStyle = {
		// Базовый цвет label
		"& .MuiInputLabel-root": {
			color: "#0A1445",
		},
		// Цвет label при фокусе
		"& .MuiInputLabel-root.Mui-focused": {
			color: "#B6915D",
		},
		// Цвет underline (линии) в обычном состоянии
		"& .MuiInput-underline:before": {
			borderBottomColor: "#dce6f7",
		},
		// Цвет underline при наведении
		"& .MuiInput-underline:hover:before": {
			borderBottomColor: "#B6915D",
		},
		// Цвет underline при фокусе
		"& .MuiInput-underline:after": {
			borderBottomColor: "#B6915D",
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
				sx={{
					backgroundColor: "#f9fbff",
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
						color: "#B6915D",
						fontWeight: 400,
						mb: 4,
						textAlign: "center",
					}}
				>
					Contact us
				</Typography>

				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						// maxWidth: "800px",
						width: "100%",
						backgroundColor: "#f9fbff",
					}}
				>
					<Grid container spacing={2} sx={{ width: "100%" }}>
						<Grid item size={{ xs: 12, md: 4 }}>
							<TextField
								name="fullName"
								label="Full name"
								fullWidth
								variant="standard"
								value={formData.fullName}
								onChange={handleChange}
								sx={formFieldStyle}
							/>
						</Grid>

						<Grid item size={{ xs: 6, md: 4 }}>
							<TextField
								required
								name="email"
								label="Email"
								fullWidth
								variant="standard"
								value={formData.email}
								onChange={handleChange}
								sx={formFieldStyle}
							/>
						</Grid>

						<Grid item size={{ xs: 6, md: 4 }}>
							<TextField
								name="phone"
								label="Phone"
								fullWidth
								variant="standard"
								value={formData.phone}
								onChange={handleChange}
								sx={formFieldStyle}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} sx={{ mt: 6 }}>
						<Grid item size={{ xs: 12, md: 4 }}>
							<TextField
								name="company"
								label="Company"
								fullWidth
								variant="standard"
								value={formData.company}
								onChange={handleChange}
								sx={formFieldStyle}
							/>
						</Grid>

						<Grid item size={{ xs: 12, md: 4 }}>
							<TextField
								select
								required
								name="role"
								label="I am... "
								fullWidth
								variant="standard"
								value={formData.role}
								onChange={handleChange}
								sx={formFieldStyle}
							>
								<MenuItem value="Investor">Investor</MenuItem>
								<MenuItem value="Borrower">Borrower</MenuItem>
								<MenuItem value="Advisor">Advisor</MenuItem>
							</TextField>
						</Grid>

						<Grid item size={{ xs: 12, md: 4 }}>
							<TextField
								name="loanAmount"
								label="Loan amount (£)"
								fullWidth
								variant="standard"
								value={formData.loanAmount}
								onChange={handleChange}
								sx={formFieldStyle}
							/>
						</Grid>
					</Grid>

					<Grid item xs={12} sx={{ mt: 6 }}>
						<TextField
							name="message"
							label="Write a message"
							multiline
							minRows={3}
							fullWidth
							variant="standard"
							value={formData.message}
							onChange={handleChange}
							sx={formFieldStyle}
						/>
					</Grid>

					<Box textAlign="center" sx={{ mt: 5 }}>
						<Button
							type="submit"
							variant="contained"
							sx={{
								backgroundColor: "#B6915D",
								color: "#ffffff",
								borderRadius: "50px",
								px: 4,
								py: 1,
								fontWeight: 600,
								textTransform: "none",
								border: "0px solid #B6915D",
								"&:hover": {
									backgroundColor: "#9e753dff",
								},
							}}
						>
							Submit
						</Button>
					</Box>
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
					Message sent successfully!
				</Alert>
			</Snackbar>
		</motion.div>
	);
}