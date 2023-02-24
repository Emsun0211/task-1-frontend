const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const email = document.getElementById("email").value;
	const fname = document.getElementById("fname").value;
	const lname = document.getElementById("lname").value;
	const track = document.getElementById("track").value;
	const portfolio = document.getElementById("portfolio").value;
	const github = document.getElementById("github").value;
	try {
		const res = await fetch("/send-message", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, fname, lname, track, portfolio, github }),
		});

		const result = await res.json();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
});
