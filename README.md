##### 1. Que ventaja técnica tiene crear un molde (función constructora) en lugar de crear un objeto literal estructurado individualmente para cada computador?
###### R//La ventaja tiene que ver con la cantidad de objetos que vas a instanciar, si son muchos sera muy complicado a diferencia de la función constructora que te permite hacer las instancias que requieras y si algo cambia es mucho mas facil de manejar

##### 2. ¿Por qué un método interno puede acceder de manera precisa y aislada a las propiedades especificas de su propio objeto utilizando la palabra clave this?
###### R// porque this hace referencia al mismo objeto con sus propiedades que tambien tienen this, esto hace que permite un acceso mas controlado a los datos, asi cada metodo accede a sus propias propiedades

##### 3. ¿Qué ventajas a nivel de cohesión de software presenta el hecho de que el objeto conozca por sí mismo su estado lógico (si aprobó o no)?
###### R// esto permite que con solo los valores que se ingresen se pueda dar la respuesta con una función creadora, a patir de ahí cada objeto puede identificar su nota ya que estan apuntando al mismo lugar solo cambian los datos de cada objeto

##### 4. ¿Qué ocurriría si el libro ya estaba prestado y alguien intenta prestarlo nuevamente sin controles de estado internos?
###### R// ocurriria un error interno, ya que no se puede prestar algo que ya esta prestado, por eso la importancia de llevar registro de lo que pasa y asi usarlo para siguientes solicitudes

##### 5. ¿Qué ventajas tiene permitir que la información sea ingresada por el usuario en lugar de escribir los datos directamente en el código?
###### R// nos permite agregar lo que queramos y en base a esta información realizar acciones, si la información estuviera harcodeada no habria flexibilidad para trabajar con los datos y cada que quisieramos cambiarlos tendriamos que hacerlo de forma manual o reemplazarlo. Agregarlos de forma dinamica nos permite ser mas flexibles con la información y no trabajar con datos preestablecidos