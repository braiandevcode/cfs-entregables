# POO
- **Composición:**
La composición se refiere a una relación “tiene un” (has-a). En tu caso, la clase RegistroAutomotor puede tener una lista de objetos Auto, Moto y Camion. Cada uno de estos objetos es una parte del RegistroAutomotor, pero no necesariamente comparten una relación de herencia directa.

- **Herencia:**
La herencia se refiere a una relación “es un” (is-a). Si Auto, Moto y Camion comparten características comunes, puedes crear una clase base Vehiculo y hacer que las otras clases hereden de ella. Esto es útil si necesitas reutilizar código común entre las clases.



**Luego de clonar** escribir los comandos:
- **tsc:** Para compilar
- **npm run dev:** Para ejecutar
