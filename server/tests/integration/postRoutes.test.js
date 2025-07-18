const request = require("supertest");
const express = require("express");

const app = express();
app.use(express.json());
app.get("/api/posts", (req, res) => {
    res.status(200).json([{ title: "Test Post" }]);
});

describe("GET /api/posts", () => {
    it("returns posts", async () => {
        const res = await request(app).get("/api/posts");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});