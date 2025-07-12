import { users, tourPackages, taxiServices, contactInquiries, type User, type InsertUser, type TourPackage, type InsertTourPackage, type TaxiService, type InsertTaxiService, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getTourPackages(): Promise<TourPackage[]>;
  getTourPackage(id: number): Promise<TourPackage | undefined>;
  createTourPackage(tourPackage: InsertTourPackage): Promise<TourPackage>;
  
  getTaxiServices(): Promise<TaxiService[]>;
  createTaxiService(taxiService: InsertTaxiService): Promise<TaxiService>;
  
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private tourPackages: Map<number, TourPackage>;
  private taxiServices: Map<number, TaxiService>;
  private contactInquiries: Map<number, ContactInquiry>;
  private currentUserId: number;
  private currentTourPackageId: number;
  private currentTaxiServiceId: number;
  private currentInquiryId: number;

  constructor() {
    this.users = new Map();
    this.tourPackages = new Map();
    this.taxiServices = new Map();
    this.contactInquiries = new Map();
    this.currentUserId = 1;
    this.currentTourPackageId = 1;
    this.currentTaxiServiceId = 1;
    this.currentInquiryId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize tour packages
    const packages: InsertTourPackage[] = [
      {
        name: "Rajasthan Tour Package",
        description: "Explore the royal heritage of Rajasthan with comprehensive sightseeing tours",
        image: "https://pixabay.com/get/g1065e640e07046ca90cd5239277ab339cd25ed2b69f0b49cd288eec8c0b43e55df898cfe9cf6f1da2975164d7753bddf3a22bbf3f8e3e9b68f986ce09b80872c_1280.jpg",
        destination: "Rajasthan",
        price: 15000,
        duration: "7-10 Days",
        highlights: ["Jaipur City Palace", "Udaipur Lake Palace", "Jaisalmer Fort", "Desert Safari"],
        isActive: true
      },
      {
        name: "Punjab Tour Package",
        description: "Experience the spiritual heart of Punjab with Golden Temple and cultural sites",
        image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Punjab",
        price: 8000,
        duration: "3-5 Days",
        highlights: ["Golden Temple", "Wagah Border", "Punjabi Culture", "Local Cuisine"],
        isActive: true
      },
      {
        name: "Uttarakhand Tour Package",
        description: "Discover the Dev Bhoomi's natural beauty and spiritual destinations",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Uttarakhand",
        price: 12000,
        duration: "5-7 Days",
        highlights: ["Char Dham", "Valley of Flowers", "Rishikesh", "Haridwar"],
        isActive: true
      },
      {
        name: "Himachal Tour Package",
        description: "Experience the beauty of hill stations and mountain landscapes",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Himachal Pradesh",
        price: 10000,
        duration: "4-6 Days",
        highlights: ["Shimla", "Manali", "Dharamshala", "Adventure Sports"],
        isActive: true
      },
      {
        name: "Agra Tour Package",
        description: "Visit the magnificent Taj Mahal and explore Mughal architecture",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Agra",
        price: 5000,
        duration: "1-2 Days",
        highlights: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Local Markets"],
        isActive: true
      },
      {
        name: "Delhi Tour Package",
        description: "Explore India's vibrant capital city with historical monuments",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Delhi",
        price: 4000,
        duration: "1-3 Days",
        highlights: ["Red Fort", "India Gate", "Qutub Minar", "Lotus Temple"],
        isActive: true
      },
      {
        name: "Thailand Tour Package",
        description: "Exotic international destination with beautiful beaches and culture",
        image: "https://images.unsplash.com/photo-1552550049-db097c9480d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Thailand",
        price: 35000,
        duration: "5-7 Days",
        highlights: ["Bangkok", "Phuket", "Temple Tours", "Beach Activities"],
        isActive: true
      },
      {
        name: "Uttar Pradesh Tour Package",
        description: "Spiritual and cultural journey through UP's heritage sites",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
        destination: "Uttar Pradesh",
        price: 8000,
        duration: "3-5 Days",
        highlights: ["Varanasi", "Ayodhya", "Mathura", "Allahabad"],
        isActive: true
      }
    ];

    packages.forEach(pkg => this.createTourPackage(pkg));

    // Initialize taxi services
    const services: InsertTaxiService[] = [
      {
        name: "Local Car Rentals",
        description: "Looking for reliable Local Car Rentals services in town? Look no further than Sethi Tour and Travels. We provide comfortable and well-maintained vehicles for your local transportation needs with professional drivers.",
        icon: "MapPin",
        isActive: true
      },
      {
        name: "Outstation Taxi",
        description: "Need to travel out of town? Book a comfortable ride with Outstation Taxi Services with Sethi Tour and Travels. We cover all major destinations across Rajasthan and neighboring states with experienced drivers.",
        icon: "Route",
        isActive: true
      },
      {
        name: "One-Way Cabs",
        description: "With a wide selection of vehicles, Sethi Tour and Travels is the perfect choice for One-Way Taxi Services. Perfect for airport transfers, railway station pickups, and intercity travel.",
        icon: "ArrowRight",
        isActive: true
      },
      {
        name: "Corporate Car Rental",
        description: "By booking a car with Sethi Tour and Travels, your clients can come comfortably for meetings. We provide professional chauffeur services for business executives and corporate events.",
        icon: "Briefcase",
        isActive: true
      },
      {
        name: "Airport Taxi",
        description: "Airport taxis are a convenient transportation option for travelers arriving at or departing from an airport. 24/7 availability with flight tracking and timely pickups guaranteed.",
        icon: "Plane",
        isActive: true
      },
      {
        name: "Round Trip Cabs",
        description: "The premium roundtrip service from your doorstep & back will pamper you with absolute comfort. Ideal for business trips, family visits, and special occasions with flexible timing.",
        icon: "RotateCcw",
        isActive: true
      },
      {
        name: "Tempo Traveller",
        description: "The billing system of Sethi Tour and Travels is more transparent than that of taxis or car rentals. Perfect for group travel with 9-17 seater options available for family trips and corporate outings.",
        icon: "Bus",
        isActive: true
      },
      {
        name: "Bus Rental",
        description: "Whether you need a bus rental for a group or family trip, Sethi Tour and Travels has your back. We offer comfortable coaches for large groups, weddings, and corporate events.",
        icon: "Bus",
        isActive: true
      },
      {
        name: "Sightseeing Taxi",
        description: "We ensure you take advantage of all the sightseeing and let you cherish your life in the future. Our experienced guides will take you to all major attractions with detailed historical information.",
        icon: "Camera",
        isActive: true
      }
    ];

    services.forEach(service => this.createTaxiService(service));
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getTourPackages(): Promise<TourPackage[]> {
    return Array.from(this.tourPackages.values()).filter(pkg => pkg.isActive);
  }

  async getTourPackage(id: number): Promise<TourPackage | undefined> {
    return this.tourPackages.get(id);
  }

  async createTourPackage(insertTourPackage: InsertTourPackage): Promise<TourPackage> {
    const id = this.currentTourPackageId++;
    const tourPackage: TourPackage = { 
      ...insertTourPackage, 
      id,
      duration: insertTourPackage.duration || null,
      price: insertTourPackage.price || null,
      highlights: insertTourPackage.highlights || null,
      isActive: insertTourPackage.isActive ?? true
    };
    this.tourPackages.set(id, tourPackage);
    return tourPackage;
  }

  async getTaxiServices(): Promise<TaxiService[]> {
    return Array.from(this.taxiServices.values()).filter(service => service.isActive);
  }

  async createTaxiService(insertTaxiService: InsertTaxiService): Promise<TaxiService> {
    const id = this.currentTaxiServiceId++;
    const taxiService: TaxiService = { 
      ...insertTaxiService, 
      id,
      isActive: insertTaxiService.isActive ?? true
    };
    this.taxiServices.set(id, taxiService);
    return taxiService;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id,
      email: insertInquiry.email || null,
      createdAt: new Date().toISOString()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }
}

export const storage = new MemStorage();
