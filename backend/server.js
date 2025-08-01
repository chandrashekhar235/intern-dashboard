const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Dummy user
const user = {
    id: 1,
    name: "Chandra Shekhar",
    email: "sahiljoshi399@gmail.com",
    referralCode: "cs2025",
    donationsRaised: 12500,
    rewards: [
        { name: "First Donation", unlocked: true, threshold: 100 },
        { name: "Fundraising Pro", unlocked: true, threshold: 1000 },
        { name: "Community Champion", unlocked: true, threshold: 5000 },
        { name: "Super Fundraiser", unlocked: true, threshold: 10000 },
        { name: "Elite Donor", unlocked: false, threshold: 25000 }
    ]
};

const leaderboard = [
    { rank: 1, name: "Sarah Chen", raised: 18750 },
    { rank: 2, name: "Mike Rodriguez", raised: 15200 },
    { rank: 3, name: "Alex Johnson", raised: 12500 },
    { rank: 4, name: "Emma Wilson", raised: 9800 },
    { rank: 5, name: "David Park", raised: 7600 },
    { rank: 6, name: "Lisa Wang", raised: 6200 },
    { rank: 7, name: "James Brown", raised: 5800 },
    { rank: 8, name: "Maria Garcia", raised: 4900 },
    { rank: 9, name: "Tom Wilson", raised: 4100 },
    { rank: 10, name: "Anna Davis", raised: 3600 }
];

// GET intern data
app.get("/api/user", (req, res) => {
    res.json(user);
});

// GET leaderboard
app.get("/api/leaderboard", (req, res) => {
    res.json(leaderboard);
});

app.listen(port, () => {
    console.log(`✅ Mock API server running at http://localhost:${port}`);
});
