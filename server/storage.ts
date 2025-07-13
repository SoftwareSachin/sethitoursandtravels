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
    // Initialize authentic India & Rajasthan tour packages
    const packages: InsertTourPackage[] = [
      {
        name: "Golden Triangle Tour - Delhi • Agra • Jaipur",
        description: "Classic India tour covering UNESCO World Heritage sites: Red Fort, Taj Mahal, Amber Fort, and Hawa Mahal. Perfect introduction to India's rich Mughal and Rajput heritage.",
        image: "/attached_assets/image_1752355162127.png",
        destination: "Delhi-Agra-Jaipur",
        price: 18000,
        duration: "6 Days / 5 Nights",
        highlights: ["Taj Mahal Sunrise", "Red Fort Delhi", "Amber Fort Jaipur", "Hawa Mahal", "City Palace", "Local Markets"],
        isActive: true
      },
      {
        name: "Royal Rajasthan Heritage Tour",
        description: "Experience the Land of Kings! Explore magnificent palaces of Jaipur & Udaipur, golden dunes of Jaisalmer, and blue city Jodhpur. Includes camel safari and cultural performances.",
        image: "/attached_assets/image_1752355178625.png",
        destination: "Rajasthan Circuit",
        price: 28000,
        duration: "10 Days / 9 Nights",
        highlights: ["Jaipur Pink City", "Udaipur Lake Palace", "Jaisalmer Camel Safari", "Jodhpur Mehrangarh Fort", "Desert Camping", "Folk Performances"],
        isActive: true
      },
      {
        name: "Taj Mahal Same Day Tour by Car",
        description: "Comfortable same-day Agra tour from Delhi. Visit the iconic Taj Mahal, Agra Fort, and Mehtab Bagh. Includes lunch and professional guide. Perfect for time-constrained travelers.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        destination: "Agra from Delhi",
        price: 8500,
        duration: "1 Day (12 Hours)",
        highlights: ["Taj Mahal Visit", "Agra Fort", "Mehtab Bagh Garden", "Local Marble Shopping", "Professional Guide", "AC Car"],
        isActive: true
      },
      {
        name: "Jaisalmer Desert Safari Package",
        description: "Authentic desert experience in the Thar Desert! Camel safari, sand dunes, traditional Rajasthani dinner, folk music & dance under starlit sky. Stay in luxury desert camps.",
        image: "/attached_assets/image_1752355204306.png",
        destination: "Jaisalmer, Rajasthan",
        price: 12000,
        duration: "3 Days / 2 Nights",
        highlights: ["Sam Sand Dunes", "Camel Safari", "Desert Camping", "Jaisalmer Fort", "Cultural Programs", "Traditional Meals"],
        isActive: true
      },
      {
        name: "Udaipur Lake City Romance Tour",
        description: "Experience the Venice of East! Boat rides on Lake Pichola, City Palace complex, Jag Mandir island, sunset at Sajjangarh Palace. Perfect for couples and photographers.",
        image: "/attached_assets/image_1752355235261.png",
        destination: "Udaipur, Rajasthan",
        price: 15000,
        duration: "4 Days / 3 Nights",
        highlights: ["Lake Pichola Boat Ride", "City Palace Museum", "Jag Mandir Island", "Saheliyon Ki Bari", "Bagore Ki Haveli", "Sunset Point"],
        isActive: true
      },
      {
        name: "Jaipur Pink City Exploration",
        description: "Discover the Pink City's royal heritage! Amber Fort elephant ride, Hawa Mahal photography, City Palace museum, local bazaars for textiles, jewelry and handicrafts.",
        image: "/attached_assets/image_1752355253209.png",
        destination: "Jaipur, Rajasthan",
        price: 9500,
        duration: "2 Days / 1 Night",
        highlights: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar", "Local Markets", "Traditional Lunch"],
        isActive: true
      },
      {
        name: "Ranthambore Wildlife Safari",
        description: "Tiger safari in India's famous national park! Morning and evening game drives, wildlife photography, ancient Ranthambore Fort. Best chance to spot Royal Bengal Tigers.",
        image: "/attached_assets/image_1752355272251.png",
        destination: "Ranthambore, Rajasthan",
        price: 14000,
        duration: "3 Days / 2 Nights",
        highlights: ["Tiger Safari", "Wildlife Photography", "Ranthambore Fort", "Nature Walks", "Luxury Resort Stay", "Professional Guide"],
        isActive: true
      },
      {
        name: "Jodhpur Blue City Adventure",
        description: "Explore the Blue City's majestic Mehrangarh Fort, Jaswant Thada memorial, vibrant blue houses, spice markets, and authentic Rajasthani cuisine experiences.",
        image: "/attached_assets/image_1752355302261.png",
        destination: "Jodhpur, Rajasthan",
        price: 11000,
        duration: "3 Days / 2 Nights",
        highlights: ["Mehrangarh Fort", "Jaswant Thada", "Blue City Walk", "Clock Tower Market", "Umaid Bhawan Palace", "Flying Fox Zipline"],
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
