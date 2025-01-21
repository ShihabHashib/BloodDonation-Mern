import React from "react";
import { useParams } from "react-router-dom";
import {
  MapPinIcon,
  CalendarIcon,
  BeakerIcon,
  PhoneIcon,
  ClockIcon,
  UserIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

// This would typically come from an API
const mockRequest = {
  id: "1",
  type: "B+",
  location: "New York Presbyterian Hospital",
  date: "13.02.2025",
  urgency: "2 Days",
  bagsNeeded: 3,
  patientName: "John Doe",
  contactNumber: "+1 (555) 123-4567",
  alternateContact: "+1 (555) 987-6543",
  hospitalAddress: "525 E 68th St, New York, NY 10065",
  additionalNotes:
    "Patient needs blood for scheduled surgery. Critical requirement.",
  postedBy: "Dr. Sarah Wilson",
};

const BloodRequestDetail = () => {
  const { id } = useParams();
  // In a real app, you would fetch the request details using the id
  const request = mockRequest;

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Status Banner */}
          <div className="bg-red-50 border border-red-100 p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">
                Urgent: Need within {request.urgency}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              Posted on {request.date}
            </span>
          </div>

          {/* Main Content */}
          <div className="bg-white shadow-md p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div>
                <h1 className="text-4xl font-bold text-red-600 mb-2">
                  {request.type}
                </h1>
                <p className="text-gray-600">
                  {request.bagsNeeded} units needed
                </p>
              </div>
              <button className="bg-red-600 text-white px-8 py-3 hover:bg-red-700 transition-colors">
                Contact Now
              </button>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Location Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <BuildingOffice2Icon className="w-5 h-5 text-gray-400" />
                      <span>{request.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPinIcon className="w-5 h-5 text-gray-400" />
                      <span>{request.hospitalAddress}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <UserIcon className="w-5 h-5 text-gray-400" />
                      <span>{request.patientName}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <PhoneIcon className="w-5 h-5 text-gray-400" />
                      <span>{request.contactNumber}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <PhoneIcon className="w-5 h-5 text-gray-400" />
                      <span>{request.alternateContact}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Request Details
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <BeakerIcon className="w-5 h-5 text-gray-400" />
                      <span>
                        {request.bagsNeeded} units of {request.type} blood
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <CalendarIcon className="w-5 h-5 text-gray-400" />
                      <span>Need by: {request.urgency}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Additional Notes
                  </h2>
                  <p className="text-gray-600">{request.additionalNotes}</p>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Posted By
                  </h2>
                  <p className="text-gray-600">{request.postedBy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodRequestDetail;
