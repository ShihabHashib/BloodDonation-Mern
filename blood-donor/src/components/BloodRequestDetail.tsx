import React, { useEffect, useState } from "react";
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
import { IBloodRequest } from "../types";
import { useHttpClient } from "../hooks/useHttpClient";
import LoadingSpinner from "./cards/LoadingSpinner";
import { API_ENDPOINTS } from "../config/apiEndpoints";

const BloodRequestDetail = () => {
  const { requestId } = useParams<{ requestId: string }>();
  const { isLoading, error, sendRequest } = useHttpClient();
  const [request, setRequest] = useState<IBloodRequest | null>(null);
  const [debugInfo, setDebugInfo] = useState<string>("");

  useEffect(() => {
    const fetchRequest = async () => {
      if (!requestId) {
        setDebugInfo("No request ID provided");
        return;
      }

      try {
        const responseData = await sendRequest(
          `${API_ENDPOINTS.BLOOD_REQUESTS}/${requestId}`
        );
        if (responseData) {
          setRequest(responseData);
        }
      } catch (err) {
        setDebugInfo(JSON.stringify(err, null, 2));
      }
    };

    fetchRequest();
  }, [sendRequest, requestId]);

  if (!requestId) {
    return (
      <div className="py-20 text-center">
        <div className="text-red-600 mb-4">Invalid request: No ID provided</div>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="py-20 text-center">
        <div className="text-red-600 mb-4">{error}</div>
        <div className="text-sm text-gray-600">Request ID: {requestId}</div>
        {debugInfo && (
          <pre className="mt-4 text-left bg-gray-100 p-4 rounded">
            {debugInfo}
          </pre>
        )}
      </div>
    );
  }

  if (!request) {
    return (
      <div className="py-20 text-center">
        <div className="text-gray-600 mb-4">Blood request not found.</div>
        <div className="text-sm text-gray-500">Request ID: {requestId}</div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Status Banner */}
          <div className="bg-red-50 border border-red-100 p-4 mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-red-600" />
              <span className="text-red-600 font-medium">
                Need within {request.urgency} days
              </span>
            </div>
            <span className="text-sm text-gray-500">
              Request ID: {request.requestId}
            </span>
          </div>

          {/* Main Content */}
          <div className="bg-white shadow-md p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div>
                <h1 className="text-4xl font-bold text-red-600 mb-2">
                  {request.bloodType}
                </h1>
                <p className="text-gray-600">{request.units} units needed</p>
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
                      <span>{request.hospital}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPinIcon className="w-5 h-5 text-gray-400" />
                      <span>{request.location}</span>
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
                  </div>
                </div>
                {request.additionalNotes && (
                  <div>
                    <h2 className="font-semibold text-gray-900 mb-4">
                      Additional Notes
                    </h2>
                    <p className="text-gray-600 whitespace-pre-wrap">
                      {request.additionalNotes}
                    </p>
                  </div>
                )}
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
                        {request.units} units of {request.bloodType} blood
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <CalendarIcon className="w-5 h-5 text-gray-400" />
                      <span>
                        Posted:{" "}
                        {new Date(request.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">
                    Posted By
                  </h2>
                  <p className="text-gray-600">{request.postedBy}</p>
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900 mb-4">Status</h2>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {request.status}
                  </span>
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
