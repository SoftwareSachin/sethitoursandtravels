import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all tour packages
  app.get("/api/tour-packages", async (req, res) => {
    try {
      const packages = await storage.getTourPackages();
      res.json(packages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tour packages" });
    }
  });

  // Get single tour package
  app.get("/api/tour-packages/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const tourPackage = await storage.getTourPackage(id);
      
      if (!tourPackage) {
        return res.status(404).json({ message: "Tour package not found" });
      }
      
      res.json(tourPackage);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tour package" });
    }
  });

  // Get all taxi services
  app.get("/api/taxi-services", async (req, res) => {
    try {
      const services = await storage.getTaxiServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch taxi services" });
    }
  });

  // Submit contact inquiry
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Invalid input data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ message: "Failed to submit inquiry" });
    }
  });

  // Get all contact inquiries (for admin)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch inquiries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
