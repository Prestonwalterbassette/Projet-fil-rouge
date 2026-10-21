export interface Equipment {
    id: number;
    name: string;
    type: string;
    site: string;
    status: "online" | "offline" | "maintenance";
}

export type Severity = "low" | "medium" | "high";
export type IncidentStatus = "open" | "in_progress" | "resolved";

export interface Incident {
    id: number;
    title: string;
    severity: Severity;
    status: IncidentStatus;
    equipmentId: number;
}

export type NewIncident = Omit<Incident, "id">;

export interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "operator" | "viewer";
}