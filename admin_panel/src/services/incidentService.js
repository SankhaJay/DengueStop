import FetchApi from "../utils/apiProviderService";

class IncidentService {
    getPendingIncidentsByOrgId(orgId) {
        var apiUrl = "get_pending_incidents_by_org/" + orgId.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                return null;
            });
    }

    verifyIncident(incident_id, verified_admin_id) {
        var apiUrl =
            "verify_incident/" +
            incident_id.toString() +
            "/" +
            verified_admin_id.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch((err) => {
                console.log("error : ", err);
                return false;
            });
    }

    declineIncident(incident_id, verified_admin_id) {
        var apiUrl =
            "decline_incident/" +
            incident_id.toString() +
            "/" +
            verified_admin_id.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch((err) => {
                console.log("error : ", err);
                return false;
            });
    }

    getTotalIncidentSummary() {
        var apiUrl = "get_total_incident_summary";
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                return null;
            });
    }

    getIncidentMarkers(province) {
        var apiUrl = "get_incident_markers_by_province/" + province.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                return null;
            });
    }

    queryIncidents(patientName, province, status, dateRange) {
        var apiUrl = "query_incidents";
        // get org id from user service
        var orgId = 1;
        var data = {
            orgId: orgId,
            patientName: patientName,
            province: province,
            status: status,
            dateRange: dateRange,
        };
        return FetchApi("POST", apiUrl, data)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                return null;
            });
    }

    updatePatientStatus(incidentId, newStatus) {
        var apiUrl =
            "update_patient_status/" +
            incidentId.toString() +
            "/" +
            newStatus.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch((err) => {
                console.log("error : ", err);
                return false;
            });
    }
}

export default IncidentService;
