import request from "supertest";
import express from "express";
import { registerRoutes } from "./routes";
import fs from "fs";
import path from "path";

const app = express();
app.use(express.json());
registerRoutes(app);

describe("POST /api/contact", () => {
  const submissionsPath = path.resolve(
    process.cwd(),
    "server/data/submissions.json",
  );

  beforeEach(() => {
    fs.writeFileSync(submissionsPath, "[]");
  });

  it("should return 200 and save the submission", async () => {
    const submission = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      projectType: "web-development",
      message: "Hello, world!",
    };

    const response = await request(app).post("/api/contact").send(submission);

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      message: "Contact form submitted successfully",
    });

    const submissions = JSON.parse(fs.readFileSync(submissionsPath, "utf-8"));
    expect(submissions).toHaveLength(1);
    expect(submissions[0]).toEqual(submission);
  });

  it("should return 400 for invalid data", async () => {
    const submission = {
      firstName: "",
      lastName: "Doe",
      email: "john.doe@example.com",
      projectType: "web-development",
      message: "Hello, world!",
    };

    const response = await request(app).post("/api/contact").send(submission);

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });
});
