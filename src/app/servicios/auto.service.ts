import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Autos } from '../interface/autos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AutoService {

    private API_AUTO = 'https://appweb-84711-default-rtdb.firebaseio.com/';

    constructor(private http: HttpClient) { }

    guardarAuto(auto: any): Observable<any> {
        return this.http.post(`${this.API_AUTO}autos.json`, auto);
    }

    // Este método ahora transforma la respuesta de Firebase en un array con las claves
    agregarAutos(): Observable<Autos[]> {
        return this.http.get<{ [key: string]: Autos }>(`${this.API_AUTO}autos.json`).pipe(
            map(response => {
                const autos: Autos[] = [];
                for (const key in response) {
                    if (response.hasOwnProperty(key)) {
                        autos.push({ ...response[key], key });
                    }
                }
                return autos;
            })
        );
    }

    getAutoByKey(key: string): Observable<Autos> {
        return this.http.get<Autos>(`${this.API_AUTO}autos/${key}.json`);
    }

    eliminarAuto(key: string): Observable<any> {
        // Ahora usamos la clave (key) para eliminar el auto específico
        return this.http.delete(`${this.API_AUTO}autos/${key}.json`);
    }

    actualizarAuto(key: string, auto: any): Observable<any> {
        // Corregimos la URL y usamos la clave (key) para actualizar el auto específico
        return this.http.put(`${this.API_AUTO}autos/${key}.json`, auto);
    }
}
