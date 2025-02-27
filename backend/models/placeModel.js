const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, // Hashed
    role: { type: String, enum: ['tourist', 'admin'], default: 'tourist' },
    createdAt: { type: Date, default: Date.now }
});

const destinationSchema = new mongoose.Schema({
    name: String,
    location: String,
    description: String,
    bestTimeToVisit: String,
    images: [String],
    rating: Number
});

const tourSchema = new mongoose.Schema({
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    tourName: String,
    tourGuideId: { type: mongoose.Schema.Types.ObjectId, ref: 'TourGuide' },
    price: Number,
    duration: String,
    availableDates: [Date]
});

const tourGuideSchema = new mongoose.Schema({
    name: String,
    contact: String,
    languagesSpoken: [String],
    experience: Number,
    rating: Number
});

const hotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    stars: Number,
    amenities: [String],
    contact: String,
    roomTypes: [{ type: String, price: Number }]
});

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    tourId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' },
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    bookingDate: { type: Date, default: Date.now },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Canceled'], default: 'Pending' }
});

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    rating: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now }
});

const transportServiceSchema = new mongoose.Schema({
    type: { type: String, enum: ['Car', 'Bus', 'Boat', 'Bike'] },
    price: Number,
    availability: Boolean,
    contact: String
});

const eventSchema = new mongoose.Schema({
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    eventName: String,
    date: Date,
    description: String,
    price: Number,
    capacity: Number
});

const travelPackageSchema = new mongoose.Schema({
    name: String,
    destinations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Destination' }],
    price: Number,
    includedServices: [String],
    discount: Number
});

module.exports = {
    User: mongoose.model('User', userSchema),
    Destination: mongoose.model('Destination', destinationSchema),
    Tour: mongoose.model('Tour', tourSchema),
    TourGuide: mongoose.model('TourGuide', tourGuideSchema),
    Hotel: mongoose.model('Hotel', hotelSchema),
    Booking: mongoose.model('Booking', bookingSchema),
    Review: mongoose.model('Review', reviewSchema),
    TransportService: mongoose.model('TransportService', transportServiceSchema),
    Event: mongoose.model('Event', eventSchema),
    TravelPackage: mongoose.model('TravelPackage', travelPackageSchema)
};
