import { REQUEST_STATUS } from './status';

export const BLOOD_REQUEST_MOCK_DATA = [
    {
        id: "1",
        type: "B+",
        location: "New York, USA",
        date: "13.02.2025",
        urgency: "2 Days",
        bagsNeeded: 3,
        patientName: "John Doe",
        contactNumber: "+1234567890",
        hospitalAddress: "123 Hospital St",
        additionalNotes: "Urgent need for surgery",
        postedBy: "Dr. Smith",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "2",
        type: "O-",
        location: "Los Angeles, USA",
        date: "15.02.2025",
        urgency: "3 Days",
        bagsNeeded: 2,
        patientName: "Jane Smith",
        contactNumber: "+0987654321",
        hospitalAddress: "456 Medical St",
        additionalNotes: "Regular donation needed",
        postedBy: "Dr. Johnson",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "3",
        type: "A+",
        location: "Chicago, USA",
        date: "14.02.2025",
        urgency: "7 Days",
        bagsNeeded: 1,
        patientName: "Michael Brown",
        contactNumber: "+1122334455",
        hospitalAddress: "789 Health St",
        additionalNotes: "Emergency donation required",
        postedBy: "Dr. Davis",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "4",
        type: "AB+",
        location: "Houston, USA",
        date: "16.02.2025",
        urgency: "3 Days",
        bagsNeeded: 4,
        patientName: "Emily Wilson",
        contactNumber: "+5566778899",
        hospitalAddress: "101 Medical St",
        additionalNotes: "Scheduled surgery requirement",
        postedBy: "Dr. Miller",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "5",
        type: "O+",
        location: "Miami, USA",
        date: "18.02.2025",
        urgency: "15 Days",
        bagsNeeded: 2,
        patientName: "James Lee",
        contactNumber: "+9900112233",
        hospitalAddress: "202 Health St",
        additionalNotes: "Planned medical procedure",
        postedBy: "Dr. Harris",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "6",
        type: "B-",
        location: "Seattle, USA",
        date: "17.02.2025",
        urgency: "7 Days",
        bagsNeeded: 3,
        patientName: "Sophia Martinez",
        contactNumber: "+3344556677",
        hospitalAddress: "303 Medical St",
        additionalNotes: "Regular transfusion needed",
        postedBy: "Dr. Clark",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "7",
        type: "AB-",
        location: "Boston, USA",
        date: "19.02.2025",
        urgency: "2 Days",
        bagsNeeded: 2,
        patientName: "William Turner",
        contactNumber: "+4455667788",
        hospitalAddress: "404 Hospital Ave",
        additionalNotes: "Critical requirement",
        postedBy: "Dr. Anderson",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "8",
        type: "A-",
        location: "San Francisco, USA",
        date: "20.02.2025",
        urgency: "3 Days",
        bagsNeeded: 1,
        patientName: "Oliver White",
        contactNumber: "+6677889900",
        hospitalAddress: "505 Care Blvd",
        additionalNotes: "Immediate requirement",
        postedBy: "Dr. Thompson",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "9",
        type: "O+",
        location: "Denver, USA",
        date: "21.02.2025",
        urgency: "7 Days",
        bagsNeeded: 3,
        patientName: "Emma Davis",
        contactNumber: "+7788990011",
        hospitalAddress: "606 Medical Center",
        additionalNotes: "Scheduled procedure",
        postedBy: "Dr. Wilson",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "10",
        type: "B+",
        location: "Atlanta, USA",
        date: "22.02.2025",
        urgency: "15 Days",
        bagsNeeded: 2,
        patientName: "Lucas Garcia",
        contactNumber: "+8899001122",
        hospitalAddress: "707 Health Plaza",
        additionalNotes: "Regular donation needed",
        postedBy: "Dr. Martinez",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "11",
        type: "AB+",
        location: "Phoenix, USA",
        date: "23.02.2025",
        urgency: "3 Days",
        bagsNeeded: 4,
        patientName: "Ava Rodriguez",
        contactNumber: "+9900112233",
        hospitalAddress: "808 Care Street",
        additionalNotes: "Emergency requirement",
        postedBy: "Dr. Brown",
        status: REQUEST_STATUS.ACTIVE,
    },
    {
        id: "12",
        type: "O-",
        location: "Portland, USA",
        date: "24.02.2025",
        urgency: "7 Days",
        bagsNeeded: 2,
        patientName: "Ethan Taylor",
        contactNumber: "+0011223344",
        hospitalAddress: "909 Medical Road",
        additionalNotes: "Planned surgery requirement",
        postedBy: "Dr. Lee",
        status: REQUEST_STATUS.ACTIVE,
    }
] as const;

export const MOCK_USER = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    bloodType: "O+",
    phone: "+1 234 567 8900",
    address: "123 Main St, City, State",
    lastDonation: "2024-01-15",
    totalDonations: 5,
} as const; 