const BASE_URL = "http://localhost:3001";

export async function request<T>(path: string, init?: RequestInit): Promise<T> {
    let response: Response;
    try {
        response = await fetch(`${BASE_URL}${path}`, {
            headers: { "Content-Type": "appl"}
        }
    }
}