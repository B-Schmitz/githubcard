import {API} from './types'

interface Api {
    users_get(user: string): Promise<API.User>
}

class ApiImp implements  Api {

    base = "https://api.github.com";

    tratarErro(err: any): string {
        throw new Error(err.error.message);
    }

    async do_fetch(path: string, init: RequestInit): Promise<any> {

        init.headers = {
            "Content-Type": "application/json",
        };

        let res = await fetch(this.base + path, init);
        let text = await res.text();
        let obj = text ? JSON.parse(text) : null;
        if (res.status >= 400)
            this.tratarErro(obj);
        return obj;
    }

    // pegar
    async do_get(path: string): Promise<any> {
        return this.do_fetch(path, {method: "GET"});
    }

    users_get(user: string): Promise<API.User> {
        return this.do_get(`/users/${user}`);
    }
}

export const api: Api = new ApiImp();
